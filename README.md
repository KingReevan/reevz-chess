# Reevz Chess

A desktop app for learning chess openings deeply, one bite-sized module at a time.

Three courses so far, each taught from both sides and shown as cards on the home screen, sorted by ECO code:

- **The Sicilian Defense**: 75 modules in 9 chapters, from why 1...c5 works to the Najdorf, the Dragon, the
  Sveshnikov and the ...e6 systems, plus the anti-Sicilians beginners meet most (the Alapin, the Smith–Morra,
  2.Bc4 and 2.Qh5) and the Rossolimo and Moscow.
- **The Ruy Lopez** (Spanish Game): 68 modules in 8 chapters, from opening principles for beginners to the
  Marshall Attack, the Berlin endgame and the Closed main lines.
- **The King's Indian Defense**: 69 modules in 8 chapters, from the fianchetto set-up to the Mar del Plata,
  the Bayonet, the Sämisch, the Four Pawns Attack and the Fianchetto Variation.

- **Coursera-style modules.** Each one teaches a single idea in about 10 minutes, with step-by-step
  boards, arrows, practice drills and a short quiz. Progress is tracked per module and chapter.
- **Practice against bots.** Four bots play the course's opening lines first, then switch to Stockfish
  at a level from beginner (600) to master (2200). The app tells you which variation you're in.
- **Revision.** Finished modules become spaced-repetition flashcards. There is also a line trainer,
  a cheat sheet and a 50-question final exam that unlocks once every module is done.
- **Daily habit.** Streaks, a daily goal and achievements.
- **Light and dark mode.** Works fully offline. No account, nothing to configure.

## For learners

Download `Reevz-Chess-Setup-x.y.z.exe` from the [Releases](../../releases) page and run it.
Windows may show "Windows protected your PC" because the installer isn't code-signed:
click **More info → Run anyway**. The app updates itself when a new release is published.

Your progress is stored on your own PC, in `%APPDATA%\Reevz Chess`.

## For developers

Requires Node.js 20 or newer.

```bash
npm install          # also copies the Stockfish engine into the app
npm run dev          # run the app with hot reload
npm test             # content validator + logic tests
npm run build        # type-check and build into out/
npm run e2e          # click through the built app with Playwright (run build first)
npm run dist         # build the Windows installer into release/<version>/
```

### Project layout

```
content/                    learning content (one TypeScript file per module)
  types.ts                  the content schema
  AUTHORING.md              how to write a module
  openings/<opening>/       index.ts (board, map, badges, bots), chapters.ts, OUTLINE.md, book.json, modules/
docs/research/              verified theory each course is built from
scripts/engine.mjs          asks Stockfish about a position, for checking tactical claims
src/main/                   Electron main process (window, auto-update)
src/preload/                the small API the app can call
src/renderer/src/           the React app: views/, components/, lib/
tests/                      content validator, logic tests, end-to-end test
```

### Adding or changing content

Read `content/AUTHORING.md`, edit or add a file in `content/openings/<opening>/modules/`, list it in that
opening's `chapters.ts`, then run `npm run test:content`. The validator replays every move with chess.js,
so an illegal or mistyped move can't ship. To add a new opening, create a folder next to `ruy-lopez/`
with the same shape and add it to `content/index.ts`. It appears as a card on the home grid, sorted by ECO code,
with its White/Black badge and completion. Check tactical claims with `node scripts/engine.mjs "<SAN moves>"`.

### Publishing a release

1. Bump `version` in `package.json`.
2. Create a GitHub personal access token with `repo` scope and set it for this terminal only:
   `set GH_TOKEN=your_token` (PowerShell: `$env:GH_TOKEN="your_token"`).
3. Run `npm run release`. It builds the installer and uploads it to a GitHub release.

Installed copies of the app check GitHub Releases on startup and update themselves.
The repository is set in `electron-builder.yml` (`owner: KingReevan`, `repo: reevz-chess`); change it
there if the GitHub repo lives somewhere else. The repo must be public for updates to work without a token.

## Licence

GPL-3.0-or-later. Reevz Chess includes [Stockfish](https://stockfishchess.org) and
[chessground](https://github.com/lichess-org/chessground), both GPL-3.0.
