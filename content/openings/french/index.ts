import type { BookLine, MapNode, Module, Opening } from '../../types'
import { chapters } from './chapters'
import book from './book.json'

const files = import.meta.glob<{ default: Module }>('./modules/*.ts', { eager: true })

const modules: Record<string, Module> = {}
for (const f of Object.values(files)) modules[f.default.id] = f.default

const map: MapNode = {
  move: '2...d5', name: 'French', chapter: 'c1', module: '1.1', children: [
    { move: '3.e5', name: 'Advance', chapter: 'c2' },
    { move: '3.exd5', name: 'Exchange', chapter: 'c3' },
    { move: '2.d3, 2.Qe2…', name: 'Early sidelines', chapter: 'c3', module: '3.4' },
    { move: '3.Nd2', name: 'Tarrasch', chapter: 'c4' },
    {
      move: '3.Nc3', name: 'Main line', chapter: 'c1', module: '1.9', children: [
        { move: '3...dxe4', name: 'Rubinstein', chapter: 'c5' },
        { move: '3...Nf6', name: 'Classical', chapter: 'c6' },
        { move: '3...Bb4', name: 'Winawer', chapter: 'c7' }
      ]
    }
  ]
}

export const french: Opening = {
  id: 'french',
  name: 'French Defense',
  alias: 'The solid answer to 1.e4',
  side: 'both',
  eco: 'C00–C19',
  moves: 'e4 e6 d4 d5',
  about:
    'The name comes from a correspondence match between London and Paris in 1834, in which the Paris team chose 1...e6. It got little attention until the 20th century, when players such as Nimzowitsch, Botvinnik, Korchnoi and Uhlmann made it a main weapon. Black builds a wall of pawns on e6 and d5, lets White take space, then attacks the base of White\'s pawn chain.',
  hero: {
    orientation: 'black',
    arrows: [['d5', 'e4', 'red'], ['c7', 'c5', 'green']],
    caption: "Black's d5-pawn hits e4 at once. If White pushes e5, Black attacks the pawn chain with ...c5 and later ...f6."
  },
  chapters,
  modules,
  map,
  book: book as BookLine[],
  badges: [
    { id: 'fr-ch1', title: 'Pawn Chain', desc: 'Finish Chapter 1 of the French', glyph: '♟', for: { chapter: 'c1' } },
    { id: 'fr-advance', title: 'Chain Breaker', desc: 'Finish the Advance Variation', glyph: '♞', for: { chapter: 'c2' } },
    { id: 'fr-trap', title: 'Queen Hunter', desc: 'Solve the Bb5+ queen-trap drill in Module 2.7', glyph: '♗', for: { drill: '2.7#0' } },
    { id: 'fr-fortress', title: 'Fort Knox', desc: 'Finish the Rubinstein and Fort Knox', glyph: '♜', for: { chapter: 'c5' } },
    { id: 'fr-winawer', title: 'Winawer Warrior', desc: 'Finish the Winawer', glyph: '♝', for: { chapter: 'c7' } },
    { id: 'fr-exam', title: 'French Master', desc: 'Pass the French final exam', glyph: '♚', for: { exam: true } }
  ],
  bots: {
    easy: { name: 'Pierre', glyph: '♟', blurb: 'Plays fast and falls for traps. Good for practicing tricks.', hi: "e6 and d5, voilà! That's all I know. Let's play!", botWins: 'Merci! Want a rematch?', youWin: 'Bien joué! Well played.' },
    club: { name: 'Camille', glyph: '♞', blurb: 'Follows the main lines from the course, then plays sensibly.', hi: "Let's see if you remember your French." },
    sharp: { name: 'Mistral', glyph: '♜', blurb: 'Loves sharp lines: the Winawer, the Milner-Barry and the Alekhine–Chatard.', hi: 'Pawn chains are made to be broken. Ready?', likes: /winawer|poisoned|milner|alekhine|chatard|gambit|mccutcheon|steinitz/i },
    master: { name: 'Marseille', glyph: '♚', blurb: 'Knows every line in the course, then plays like a master.', hi: 'Solid first, then strike. Shall we?' }
  }
}
