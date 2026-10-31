// End-to-end smoke test: launches the built app (npm run build first) and clicks through
// every major feature like a learner would. Screenshots go to test-results/.
// Run with: npm run e2e
import { _electron as electron } from 'playwright'
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const shots = process.env.SHOTS || join(process.cwd(), 'test-results')
mkdirSync(shots, { recursive: true })
const profile = mkdtempSync(join(tmpdir(), 'reevz-e2e-'))
const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`)
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function launch() {
  // E2E_EXE runs the test against a packaged build instead, e.g. release/1.0.0/win-unpacked/Reevz Chess.exe
  const target = process.env.E2E_EXE ? { executablePath: process.env.E2E_EXE, args: [] } : { args: ['.'] }
  const app = await electron.launch({ ...target, env: { ...process.env, REEVZ_USER_DATA: profile } })
  const win = await app.firstWindow()
  await win.setViewportSize({ width: 1440, height: 900 }).catch(() => {})
  await win.waitForSelector('.app', { timeout: 20000 })
  return { app, win }
}

/** Clicks a square on a chessground board, respecting its orientation. */
async function clickSq(win, board, sq) {
  const box = await board.boundingBox()
  const black = await board.evaluate((el) => el.classList.contains('orientation-black'))
  const f = sq.charCodeAt(0) - 97, r = +sq[1] - 1
  const x = black ? 7 - f : f, y = black ? r : 7 - r
  await win.mouse.click(box.x + ((x + 0.5) * box.width) / 8, box.y + ((y + 0.5) * box.height) / 8)
  await sleep(120)
}
const move = async (win, board, from, to) => { await clickSq(win, board, from); await clickSq(win, board, to) }

const errors = []
let { app, win } = await launch()
win.on('pageerror', (e) => errors.push(e.message))
win.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })

try {
  // 1. Home: a grid of opening courses, no course sidebar
  await win.waitForSelector('.course-grid')
  const card = win.locator('.course-card[data-opening="ruy-lopez"]')
  check('app opens on the grid of openings', (await card.count()) === 1)
  check('no course sidebar on the grid', (await win.locator('.left').count()) === 0)
  check('card shows course completion', /^0\/\d+$/.test(await card.locator('.count').textContent()) && (await card.locator('.cc-ring').textContent()) === '0%')
  check('card badge says White · Black', (await card.locator('.side').textContent()).includes('White · Black'))
  check('card board renders pieces', (await card.locator('piece').count()) >= 32)
  await win.fill('#search', 'sicilian')
  check('home search hides non-matching openings', (await win.locator('.course-card[data-opening]').count()) === 0)
  await win.fill('#search', 'spanish')
  check('home search finds the Ruy Lopez by its alias', (await win.locator('.course-card[data-opening]').count()) === 1)
  await win.fill('#search', '')
  await win.screenshot({ path: join(shots, '00-home-light.png') })

  // 2. Enter the course: overview plus a sidebar with only its chapters
  await card.locator('.cc-open').click()
  await win.waitForSelector('.hero h1')
  check('card opens the course overview', (await win.textContent('.hero h1')).includes('Ruy Lopez'))
  check('hero board renders pieces', (await win.locator('.hero-board piece').count()) >= 32)
  check('opening map renders', (await win.locator('.map .nd').count()) >= 10)
  check('sidebar shows this course and its chapters', (await win.textContent('.course-name')) === 'Ruy Lopez' && (await win.locator('.left .ch').count()) >= 9)
  check('sidebar badge says White · Black', (await win.textContent('.course-head .side')).includes('White · Black'))
  await win.screenshot({ path: join(shots, '01-overview-light.png') })

  // 3. Open module 2.2 from the sidebar
  await win.locator('.ch-head', { hasText: 'Morphy' }).click()
  await win.locator('[data-row="2.2"]').click()
  await win.waitForSelector('.l-title')
  check('module 2.2 opens', (await win.textContent('.l-title')).includes('4.Bxc6'))

  // 4. Walkthrough stepping
  const wt = win.locator('.wt').first()
  for (let i = 0; i < 7; i++) await wt.locator('button', { hasText: 'Next' }).click()
  check('walkthrough reaches the last step', (await wt.locator('.wt-title').textContent()).includes('Pawn back, with check'))
  check('walkthrough draws arrows', (await wt.locator('.cg-shapes line, .cg-shapes path').count()) > 0)
  check('coach panel follows the line', (await win.locator('.rline .cur').textContent()) === 'Qxe4+')
  await wt.press('ArrowLeft')
  check('arrow keys step back', (await wt.locator('.wt-title').textContent()).includes('The knight escapes'))
  await win.screenshot({ path: join(shots, '02-module-light.png') })

  // 5. Drill: find 5...Qd4! then 6...Qxe4+
  const drill = win.locator('.drill').first()
  const db = drill.locator('.cg-wrap')
  await drill.scrollIntoViewIfNeeded()
  await move(win, db, 'd8', 'd4')
  await sleep(1500)
  await move(win, db, 'd4', 'e4')
  await sleep(600)
  const drillStatus = await drill.locator('.status').textContent()
  check('drill accepts the correct moves', drillStatus.includes("That's it"), drillStatus)
  await drill.locator('button', { hasText: 'Restart' }).click()
  await sleep(300)
  await move(win, db, 'd8', 'e7')
  await sleep(200)
  check('drill rejects a wrong move', (await drill.locator('.status').textContent()).includes('isn\'t the move'))

  // 6. Quiz
  const q1 = win.locator('.quiz .qz').first()
  await q1.locator('button', { hasText: 'Only the knight' }).click()
  check('quiz explains a wrong answer', (await q1.locator('.qz-fb').textContent()).includes('Not quite'))
  await q1.locator('button', { hasText: 'The knight on e5 and the pawn on e4' }).click()
  check('quiz confirms the right answer', (await q1.locator('.qz-fb').textContent()).includes('Correct'))

  // 7. Complete the module
  await win.locator('button', { hasText: 'Mark as complete' }).click()
  await sleep(400)
  const toasts = await win.locator('.toast').allTextContents()
  check('completion toast shows', toasts.some((t) => t.includes('Module 2.2 complete')), toasts.join(' | '))
  check('sidebar ticks the module', await win.locator('[data-row="2.2"].done').count() === 1)
  await sleep(1200)
  check('achievements awarded', (await win.locator('.toast', { hasText: 'Achievement unlocked' }).count()) >= 1)

  // 8. Progress tab
  await win.locator('.tabs button', { hasText: 'Progress' }).click()
  check('streak starts at 1 day', (await win.textContent('.streak b')).includes('1 day'))
  check('badges show as earned', (await win.locator('.badge.got').count()) >= 2)
  await win.screenshot({ path: join(shots, '03-progress-light.png') })

  // 9. Dark mode
  await win.locator('.titlebar button[aria-label*="dark"]').click()
  check('dark mode switches', (await win.evaluate(() => document.documentElement.dataset.theme)) === 'dark')
  check('dark mode uses ChatGPT greys', (await win.evaluate(() => getComputedStyle(document.body).backgroundColor)) === 'rgb(33, 33, 33)')
  await win.locator('.tabs button', { hasText: 'Coach' }).click()
  await win.locator('.stage').evaluate((el) => el.scrollTo({ top: 0 }))
  await win.screenshot({ path: join(shots, '04-module-dark.png') })

  // 10. Play against a bot (book first, then Stockfish)
  await win.locator('.tabs button', { hasText: 'Play' }).click()
  await win.locator('.bot', { hasText: 'Lucía' }).click()
  await win.locator('button', { hasText: 'Play Lucía' }).click()
  await win.waitForSelector('.pl-board .cg-wrap')
  const pb = win.locator('.pl-board .cg-wrap')
  // Plies are the non-empty move cells in the move table.
  const plies = () => win.evaluate(() => [...document.querySelectorAll('.movetable span:not(.n)')].filter((s) => s.textContent.trim() && !s.children.length).length)
  const waitPlies = (n) => win.waitForFunction((n) => [...document.querySelectorAll('.movetable span:not(.n)')].filter((s) => s.textContent.trim() && !s.children.length).length >= n, n, { timeout: 30000 }).then(() => true, () => false)
  await move(win, pb, 'e2', 'e4')
  const bookReply = await waitPlies(2)
  check('bot answers from the book', bookReply, (await win.textContent('.movetable')).replace(/\s+/g, ' '))
  await move(win, pb, 'h2', 'h4')
  check('learner move is played', (await plies()) >= 3)
  const engineReady = await win.waitForFunction(() => { const v = document.querySelector('.pl-panel')?.getAttribute('data-engine'); return v && v !== 'loading' ? v : null }, null, { timeout: 30000 }).then((h) => h.jsonValue(), () => 'timeout')
  check('Stockfish engine loads', engineReady === 'ready', String(engineReady))
  const answered = await waitPlies(4)
  check('bot answers out of book', answered, (await win.textContent('.movetable')).replace(/\s+/g, ' '))
  await win.screenshot({ path: join(shots, '05-play-dark.png') })

  // 11. Revision hub
  await win.locator('.row.tool', { hasText: 'Revision hub' }).click()
  await win.waitForSelector('.flash-a')
  check('flashcards say nothing is due yet', (await win.textContent('.flash-a')).includes('All caught up'))
  await win.locator('button', { hasText: 'Practise all' }).click()
  await win.locator('button', { hasText: 'Reveal answer' }).click()
  check('flashcard reveals the answer', (await win.textContent('.flash-name')).includes('Qd4'))
  await win.locator('.seg button', { hasText: 'Cheat sheet' }).click()
  check('cheat sheet lists modules', (await win.locator('.tbl tbody tr').count()) >= 1)
  await win.locator('.seg button', { hasText: 'Line trainer' }).click()
  check('line trainer shows a board', (await win.locator('.drill .cg-wrap').count()) === 1)

  // 12. Final exam
  await win.locator('.row.tool', { hasText: 'Final exam' }).click()
  const examText = await win.textContent('.exam-top')
  check('final exam shows its lock state', examText.includes('Unlocks after the last module') || examText.includes('Ready when you are'), examText.slice(0, 60))
  await win.locator('button', { hasText: 'Try 5 practice questions' }).click()
  check('practice questions start', (await win.locator('.qz').count()) === 1)

  // 13. Search, shortcuts, settings
  await win.fill('#search', 'fork')
  await sleep(200)
  const rows = await win.locator('.row:not(.tool)').count()
  check('search filters modules', rows >= 1 && rows < 10, `${rows} rows`)
  await win.fill('#search', '')
  await win.keyboard.press('Control+b')
  check('Ctrl+B collapses the course sidebar', (await win.locator('.ws.l-off').count()) === 1)
  await win.keyboard.press('Control+b')
  await win.locator('.titlebar button[aria-label="Settings"]').click()
  check('settings shows the version', /version \d/.test(await win.textContent('.l-head .eyebrow')))
  await win.screenshot({ path: join(shots, '06-settings-dark.png') })

  // 14. Back to the grid, which now shows the progress
  await win.locator('.crumb', { hasText: 'Openings' }).click()
  await win.waitForSelector('.course-grid')
  check('the Openings crumb goes back to the grid', (await win.locator('.left').count()) === 0)
  check('card counts the finished module', /^1\/\d+$/.test(await card.locator('.count').textContent()))
  check('card says the course is in progress', (await card.locator('.cc-status').textContent()).includes('In progress'))
  await win.screenshot({ path: join(shots, '07-home-dark.png') })
  await win.locator('.titlebar button[aria-label="Settings"]').click()
  check('settings from the grid keeps the sidebars hidden', (await win.locator('.l-title').textContent()) === 'Settings' && (await win.locator('.left').count()) === 0)
  await win.locator('.brand').click()
  await win.waitForSelector('.course-grid')
  await card.locator('button', { hasText: 'Continue' }).click()
  await win.waitForSelector('.l-title')
  check('Continue opens the first unfinished module', (await win.locator('.row.on').getAttribute('data-row')) === '1.1')
  await win.locator('.left .back').click()
  check('All openings goes back to the grid', (await win.locator('.course-grid').count()) === 1)

  // 15. Progress survives a restart, and the app opens on the grid again
  await app.close()
  ;({ app, win } = await launch())
  await win.waitForSelector('.course-grid')
  check('app reopens on the grid', /^1\/\d+$/.test(await win.locator('.course-card[data-opening="ruy-lopez"] .count').textContent()))
  await win.locator('.course-card[data-opening="ruy-lopez"] .cc-open').click()
  await win.waitForSelector('.left')
  check('progress is saved between launches', (await win.locator('[data-row="2.2"].done').count()) === 1)
  check('theme is saved between launches', (await win.evaluate(() => document.documentElement.dataset.theme)) === 'dark')
} catch (e) {
  check('test run finished without crashing', false, e.message.split('\n')[0])
  await win.screenshot({ path: join(shots, 'failure.png') }).catch(() => {})
} finally {
  const real = errors.filter((e) => !/Autofill|DevTools/i.test(e))
  check('no errors in the console', real.length === 0, real.slice(0, 3).join(' | '))
  await app.close().catch(() => {})
  rmSync(profile, { recursive: true, force: true })
  const failed = results.filter((r) => !r.ok).length
  console.log(`\n${results.length - failed} passed, ${failed} failed`)
  process.exit(failed ? 1 : 0)
}
