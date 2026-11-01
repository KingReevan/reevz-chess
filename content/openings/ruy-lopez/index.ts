import type { BookLine, MapNode, Module, Opening } from '../../types'
import { chapters } from './chapters'
import book from './book.json'

const files = import.meta.glob<{ default: Module }>('./modules/*.ts', { eager: true })

const modules: Record<string, Module> = {}
for (const f of Object.values(files)) modules[f.default.id] = f.default

const map: MapNode = {
  move: '3.Bb5', name: 'Ruy Lopez', chapter: 'c1', children: [
    {
      move: '3...a6', name: 'Morphy Defense', chapter: 'c2', children: [
        { move: '4.Bxc6', name: 'Exchange', chapter: 'c3' },
        {
          move: '4.Ba4', name: 'Main line', chapter: 'c2', children: [
            {
              move: '4...Nf6', name: 'Main line', chapter: 'c2', children: [
                { move: '5...Be7', name: 'Closed', chapter: 'c4', children: [{ move: '8...d5', name: 'Marshall', chapter: 'c5' }] },
                { move: '5...Nxe4', name: 'Open', chapter: 'c6' },
                { move: '5...b5', name: 'Arkhangelsk', chapter: 'c8', module: '8.11' }
              ]
            },
            { move: '4...d6', name: 'Modern Steinitz', chapter: 'c8', module: '8.7' }
          ]
        }
      ]
    },
    { move: '3...Nf6', name: 'Berlin', chapter: 'c7' },
    { move: '3...f5', name: 'Schliemann', chapter: 'c8', module: '8.1' },
    { move: '3...Bc5', name: 'Classical', chapter: 'c8', module: '8.3' },
    { move: '3...Nd4', name: 'Bird', chapter: 'c8', module: '8.4' },
    { move: '3...d6', name: 'Old Steinitz', chapter: 'c8', module: '8.5' }
  ]
}

export const ruyLopez: Opening = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez',
  alias: 'The Spanish Game',
  side: 'both',
  eco: 'C60–C99',
  moves: 'e4 e5 Nf3 Nc6 Bb5',
  about:
    'Named after Ruy López de Segura, a Spanish priest who analysed it in his 1561 book on chess. Four and a half centuries later it is still one of the most played openings at every level, from club games to world championship matches.',
  hero: {
    orientation: 'white',
    arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green'], ['f3', 'e5', 'red']],
    caption: 'The Spanish bishop attacks the knight that guards e5.'
  },
  chapters,
  modules,
  map,
  book: book as BookLine[],
  badges: [
    { id: 'fork', title: 'Fork Finder', desc: 'Solve the fork drill in Module 2.2', glyph: '♛', for: { drill: '2.2#0' } },
    { id: 'ch1', title: 'Solid Ground', desc: 'Finish Chapter 1 of the Ruy Lopez', glyph: '♘', for: { chapter: 'c1' } },
    { id: 'torture', title: 'Spanish Torture', desc: 'Finish the Closed Ruy Lopez', glyph: '♗', for: { chapter: 'c4' } },
    { id: 'marshall', title: 'Marshall Law', desc: 'Finish the Marshall Attack', glyph: '♜', for: { chapter: 'c5' } },
    { id: 'wall', title: 'Wall Builder', desc: 'Finish the Berlin Defense', glyph: '♖', for: { chapter: 'c7' } },
    { id: 'maestro', title: 'Maestro', desc: 'Pass the Ruy Lopez final exam', glyph: '♚', for: { exam: true } }
  ],
  bots: {
    easy: { name: 'Pepe', glyph: '♟', blurb: 'Plays fast and falls for traps. Good for practicing tricks.', hi: "¡Hola! I learned the Ruy Lopez yesterday. Let's go!", botWins: '¡Gracias! Want a rematch?', youWin: '¡Bien jugado! Well played.' },
    club: { name: 'Lucía', glyph: '♞', blurb: 'Follows the main lines from the course, then plays sensibly.', hi: "Let's see if you remember your lines.", botWins: '¡Gracias! Want a rematch?', youWin: '¡Bien jugado! Well played.' },
    sharp: { name: 'El Toro', glyph: '♜', blurb: 'Loves sharp lines: the Marshall Attack and the Schliemann.', hi: 'I charge at kings. Ready?', botWins: '¡Gracias! Want a rematch?', youWin: '¡Bien jugado! Well played.', likes: /marshall|schliemann|gambit|dilworth|riga/i },
    master: { name: 'Don Ruy', glyph: '♚', blurb: 'Knows every line in the course, then plays like a master.', hi: 'I wrote the book on this. Literally, in 1561.', botWins: '¡Gracias! Want a rematch?', youWin: '¡Bien jugado! Well played.' }
  }
}
