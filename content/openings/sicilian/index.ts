import type { BookLine, MapNode, Module, Opening } from '../../types'
import { chapters } from './chapters'
import book from './book.json'

const files = import.meta.glob<{ default: Module }>('./modules/*.ts', { eager: true })

const modules: Record<string, Module> = {}
for (const f of Object.values(files)) modules[f.default.id] = f.default

const map: MapNode = {
  move: '1...c5', name: 'Sicilian', chapter: 'c1', module: '1.1', children: [
    {
      move: '2.Nf3, 3.d4', name: 'Open Sicilian', chapter: 'c1', module: '1.3', children: [
        {
          move: '2...d6', name: 'After 2...d6', chapter: 'c1', module: '1.7', children: [
            { move: '5...a6', name: 'Najdorf', chapter: 'c2' },
            { move: '5...g6', name: 'Dragon', chapter: 'c3' },
            { move: '5...Nc6', name: 'Classical', chapter: 'c4', module: '4.1' },
            { move: '5...e6', name: 'Scheveningen', chapter: 'c4', module: '4.7' }
          ]
        },
        {
          move: '2...Nc6', name: 'After 2...Nc6', chapter: 'c1', module: '1.7', children: [
            { move: '4...g6', name: 'Accelerated Dragon', chapter: 'c3', module: '3.8' },
            { move: '5...e5', name: 'Sveshnikov', chapter: 'c5' },
            { move: '4...e5', name: 'Kalashnikov', chapter: 'c5', module: '5.7' }
          ]
        },
        {
          move: '2...e6', name: 'After 2...e6', chapter: 'c1', module: '1.7', children: [
            { move: '4...Nc6', name: 'Taimanov', chapter: 'c6' },
            { move: '4...a6', name: 'Kan', chapter: 'c6', module: '6.5' },
            { move: '4...Nf6', name: 'Four Knights', chapter: 'c6', module: '6.7' }
          ]
        }
      ]
    },
    { move: '2.c3', name: 'Alapin', chapter: 'c7' },
    { move: '2.d4 cxd4 3.c3', name: 'Smith–Morra', chapter: 'c7', module: '7.5' },
    { move: '2.Nc3', name: 'Closed', chapter: 'c8' },
    { move: 'f4', name: 'Grand Prix', chapter: 'c8', module: '8.4' },
    { move: '3.Bb5', name: 'Rossolimo', chapter: 'c9' },
    { move: '3.Bb5+', name: 'Moscow', chapter: 'c9', module: '9.4' }
  ]
}

export const sicilian: Opening = {
  id: 'sicilian',
  name: 'Sicilian Defense',
  alias: 'The fighting answer to 1.e4',
  side: 'both',
  eco: 'B20–B99',
  moves: 'e4 c5',
  about:
    'Giulio Polerio analyzed 1...c5 in 1594, and the English name "Sicilian" was settled in 1813. For a long time it had a doubtful reputation: Morphy criticized it, and Steinitz preferred 1...e5. In the 20th century Najdorf, Fischer, Tal and Kasparov made it the most played answer to 1.e4. Black gives up symmetry on move one and plays for a win.',
  hero: {
    orientation: 'black',
    arrows: [['c5', 'd4', 'yellow'], ['d2', 'd4', 'blue']],
    caption: 'Black hits d4 from the side with the c-pawn. White usually answers with Nf3 and d4, and the game is unbalanced from move one.'
  },
  chapters,
  modules,
  map,
  book: book as BookLine[],
  badges: [
    { id: 'sic-ch1', title: 'Half-Open File', desc: 'Finish Chapter 1 of the Sicilian', glyph: '♟', for: { chapter: 'c1' } },
    { id: 'sic-najdorf', title: 'Najdorf Scholar', desc: 'Finish the Najdorf', glyph: '♞', for: { chapter: 'c2' } },
    { id: 'sic-dragon', title: 'Dragon Tamer', desc: 'Finish the Dragon chapter', glyph: '♝', for: { chapter: 'c3' } },
    { id: 'sic-trick', title: 'Trap Spotter', desc: 'Solve the Magnus Smith Trap drill in Module 4.5', glyph: '♗', for: { drill: '4.5#0' } },
    { id: 'sic-gambit', title: 'Gambit Proof', desc: 'Finish the Alapin and Smith–Morra chapter', glyph: '♖', for: { chapter: 'c7' } },
    { id: 'sic-exam', title: 'Sicilian Master', desc: 'Pass the Sicilian final exam', glyph: '♚', for: { exam: true } }
  ],
  bots: {
    easy: { name: 'Nino', glyph: '♟', blurb: 'Plays fast and falls for traps. Good for practicing tricks.', hi: "1...c5 is my favorite move. That's about all I know. Let's play!" },
    club: { name: 'Rosa', glyph: '♞', blurb: 'Follows the main lines from the course, then plays sensibly.', hi: "Let's see if you remember your Sicilian." },
    sharp: { name: 'Etna', glyph: '♜', blurb: 'Loves sharp lines: the Najdorf, the Dragon, the Sveshnikov and the Smith–Morra.', hi: 'Opposite-side castling? Even better. Ready?', likes: /najdorf|dragon|yugoslav|sveshnikov|morra|gambit|english attack/i },
    master: { name: 'Palermo', glyph: '♚', blurb: 'Knows every line in the course, then plays like a master.', hi: 'Asymmetry from move one. Shall we?' }
  }
}
