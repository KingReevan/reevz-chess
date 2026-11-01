import type { BookLine, MapNode, Module, Opening } from '../../types'
import { chapters } from './chapters'
import book from './book.json'

const files = import.meta.glob<{ default: Module }>('./modules/*.ts', { eager: true })

const modules: Record<string, Module> = {}
for (const f of Object.values(files)) modules[f.default.id] = f.default

const map: MapNode = {
  move: '2...g6', name: "King's Indian", chapter: 'c1', children: [
    {
      move: '4...d6', name: 'Main set-up', chapter: 'c1', module: '1.9', children: [
        {
          move: '5.Nf3', name: 'Classical', chapter: 'c2', module: '2.1', children: [
            {
              move: '8.d5 Ne7', name: 'Main line', chapter: 'c2', module: '2.7', children: [
                { move: '9.Ne1', name: 'Mar del Plata', chapter: 'c3' },
                { move: '9.b4', name: 'Bayonet', chapter: 'c4', module: '4.5' }
              ]
            },
            { move: '7.dxe5', name: 'Exchange', chapter: 'c2', module: '2.3' },
            { move: '7.d5', name: 'Petrosian', chapter: 'c5', module: '5.1' },
            { move: '7.Be3', name: 'Gligorić', chapter: 'c5', module: '5.3' }
          ]
        },
        { move: '5.f3', name: 'Sämisch', chapter: 'c6' },
        { move: '5.f4', name: 'Four Pawns', chapter: 'c7', module: '7.1' },
        { move: '6.Bg5', name: 'Averbakh', chapter: 'c7', module: '7.8' },
        { move: '5.h3', name: 'Makogonov', chapter: 'c8', module: '8.6' }
      ]
    },
    { move: 'g3', name: 'Fianchetto', chapter: 'c8', module: '8.1' }
  ]
}

export const kingsIndian: Opening = {
  id: 'kings-indian',
  name: "King's Indian Defense",
  alias: "Black's counterpunch to 1.d4",
  side: 'both',
  eco: 'E60–E99',
  moves: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6',
  about:
    'The "Indian" in its name honors Moheschunder Bannerjee, a Bengali master who played fianchetto set-ups in the 1850s. Long thought suspect, it was revived after 1945 by Soviet players such as Bronstein and Boleslavsky, and became a favorite weapon of Fischer, Tal and Kasparov. Black gives White the center on purpose, then attacks it.',
  hero: {
    orientation: 'black',
    arrows: [['e7', 'e5', 'green'], ['c7', 'c5', 'blue']],
    caption: 'Black lets White build a big center, then strikes at d4 with ...e5 or ...c5.'
  },
  chapters,
  modules,
  map,
  book: book as BookLine[],
  badges: [
    { id: 'kid-ch1', title: 'Fianchetto Fan', desc: "Finish Chapter 1 of the King's Indian", glyph: '♗', for: { chapter: 'c1' } },
    { id: 'kid-trick', title: 'Counterpunch', desc: 'Solve the ...Nxc3! drill in Module 2.4', glyph: '♞', for: { drill: '2.4#0' } },
    { id: 'kid-storm', title: 'Kingside Storm', desc: 'Finish the Mar del Plata', glyph: '♜', for: { chapter: 'c3' } },
    { id: 'kid-bayonet', title: 'Queenside Breaker', desc: "Finish White's queenside attack", glyph: '♘', for: { chapter: 'c4' } },
    { id: 'kid-samisch', title: 'Sämisch Survivor', desc: 'Finish the Sämisch', glyph: '♖', for: { chapter: 'c6' } },
    { id: 'kid-exam', title: 'Indian King', desc: "Pass the King's Indian final exam", glyph: '♚', for: { exam: true } }
  ],
  bots: {
    easy: { name: 'Kiddo', glyph: '♟', blurb: 'Plays fast and falls for traps. Good for practising tricks.', hi: "Bishop on g7, king on g8. That's all I know. Let's play!" },
    club: { name: 'Asha', glyph: '♞', blurb: 'Follows the main lines from the course, then plays sensibly.', hi: "Let's see if you remember your lines." },
    sharp: { name: 'Typhoon', glyph: '♜', blurb: 'Loves sharp lines: the Mar del Plata, the Bayonet and the Sämisch.', hi: 'Pawns forward, straight at the king. Ready?', likes: /mar del plata|bayonet|s[aä]misch|four pawns|gambit/i },
    master: { name: 'Sir Kingsley', glyph: '♚', blurb: 'Knows every line in the course, then plays like a master.', hi: 'Fianchetto, castle, then strike. Shall we?' }
  }
}
