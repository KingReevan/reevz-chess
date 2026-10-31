import type { Chapter } from '../../types'

const range = (ch: number, n: number) => Array.from({ length: n }, (_, i) => `${ch}.${i + 1}`)

export const chapters: Chapter[] = [
  {
    id: 'c1', n: 1, title: 'Foundations', side: 'both',
    blurb: 'Opening principles, notation, and why the bishop goes to b5.',
    tags: 'basics principles notation beginner start',
    ideas: [
      'Control the center with pawns and pieces.',
      'Develop knights and bishops before the queen, then castle.',
      'In the Ruy Lopez, White builds pressure on e5 slowly instead of attacking at once.'
    ],
    modules: range(1, 6)
  },
  {
    id: 'c2', n: 2, title: 'The Morphy Defense: 3...a6', side: 'both',
    blurb: "Black's most popular reply, and the road to every main line.",
    tags: 'morphy a6 main line ba4 castling mackenzie wormald anderssen tarrasch',
    ideas: [
      '3...a6 makes White decide about the bishop right away.',
      "4.Bxc6 doesn't win a pawn yet, because ...Qd4 forks e5 and e4.",
      'Once White has castled and played Re1, the threat to e5 is real.'
    ],
    modules: range(2, 9)
  },
  {
    id: 'c3', n: 3, title: 'The Exchange Variation: 4.Bxc6', side: 'white',
    blurb: 'White gives up the bishop for a healthier pawn structure.',
    tags: 'exchange bxc6 fischer gligoric bronstein endgame majority',
    ideas: [
      'White trades the bishop for a better pawn structure.',
      'Black gets the two bishops in return.',
      "Many games reach an endgame where White's 4-against-3 kingside majority decides."
    ],
    modules: range(3, 6)
  },
  {
    id: 'c4', n: 4, title: 'The Closed Ruy Lopez', side: 'both',
    blurb: 'The heart of the opening: slow plans and deep maneuvers.',
    tags: 'closed chigorin breyer zaitsev smyslov karpov kholmov d3 worrall spanish torture h3',
    ideas: [
      'White builds a big center with c3 and d4, and plays h3 to stop ...Bg4.',
      'The b1-knight travels Nbd2–f1–g3 to help on the kingside.',
      'Black picks a regrouping plan: ...Na5 (Chigorin), ...Nb8 (Breyer) or ...Bb7 (Zaitsev).'
    ],
    modules: range(4, 12)
  },
  {
    id: 'c5', n: 5, title: 'The Marshall Attack', side: 'black',
    blurb: 'Black sacrifices a pawn for a fast attack on the king.',
    tags: 'marshall gambit d5 anti-marshall a4 h3 attack',
    ideas: [
      "Black gives a pawn to attack White's king quickly.",
      'The queen often lands on h3, and the bishops aim at the kingside.',
      'Many White players avoid it with 8.a4 or 8.h3.'
    ],
    modules: range(5, 7)
  },
  {
    id: 'c6', n: 6, title: 'The Open Defense: 5...Nxe4', side: 'black',
    blurb: 'Black grabs the e4-pawn and plays for active pieces.',
    tags: 'open nxe4 tarrasch dilworth riga howell karpov',
    ideas: [
      'Black takes on e4 and supports the knight with ...b5 and ...d5.',
      "White's e5-pawn is a wedge; Black's pieces get active squares.",
      'Watch the tactics on the e-file and around the e6-bishop.'
    ],
    modules: range(6, 8)
  },
  {
    id: 'c7', n: 7, title: 'The Berlin Defense: 3...Nf6', side: 'black',
    blurb: 'The rock-solid defense that took over top-level chess.',
    tags: 'berlin wall endgame rio anti-berlin d3 mortimer fishing pole beverwijk',
    ideas: [
      'Black hits e4 at once instead of playing ...a6 first.',
      'The main line trades queens early: the Berlin endgame.',
      "White's main way around it is the slower 4.d3."
    ],
    modules: range(7, 9)
  },
  {
    id: 'c8', n: 8, title: 'Other Black defenses', side: 'black',
    blurb: 'Sidelines with one big idea each, and the traps to know.',
    tags: 'schliemann jaenisch classical cordel steinitz siesta noah ark arkhangelsk moller norwegian bird cozio smyslov fianchetto',
    ideas: [
      'Each sideline has one big idea. Learn the idea, not every move.',
      "Know the traps: Noah's Ark, Tarrasch and Mortimer.",
      'As White, simple development usually gives an edge.'
    ],
    modules: range(8, 11)
  }
]
