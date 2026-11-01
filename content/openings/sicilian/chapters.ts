import type { Chapter } from '../../types'

const range = (ch: number, n: number) => Array.from({ length: n }, (_, i) => `${ch}.${i + 1}`)

export const chapters: Chapter[] = [
  {
    id: 'c1', n: 1, title: 'Foundations', side: 'both',
    blurb: 'Why 1...c5, what the big trade on d4 gives each side, and a map of the Sicilian.',
    tags: 'basics principles notation beginner start open sicilian nf3 d4 cxd4 nxd4 half-open c-file d5 square hyperaccelerated okelly chekhover qxd4 prins venice',
    ideas: [
      'Black fights for d4 with the c-pawn, so the game is unbalanced from move one.',
      'After 3.d4 cxd4 4.Nxd4, Black has two center pawns to one and a half-open c-file. White has more space and develops faster.',
      'Watch the d5 square: once Black plays ...e5, d5 becomes a hole that White wants for a knight.'
    ],
    modules: range(1, 9)
  },
  {
    id: 'c2', n: 2, title: 'The Najdorf', side: 'both',
    blurb: "Black's most famous Sicilian: 5...a6, then ...e5 or ...e6 against White's many sixth moves.",
    tags: 'najdorf a6 english attack be3 f3 qd2 g4 ng4 bg5 f4 poisoned pawn goteborg opocensky be2 bc4 fischer sozin adams h3',
    ideas: [
      '5...a6 keeps White\'s knight and bishop off b5 and prepares ...e5 or ...b5.',
      'In the English Attack the kings castle on opposite sides, and both players race with their pawns.',
      'After ...e5 the fight is about the d5 square.'
    ],
    modules: range(2, 9)
  },
  {
    id: 'c3', n: 3, title: 'The Dragon and Accelerated Dragon', side: 'both',
    blurb: 'The bishop on g7, the Yugoslav Attack race, and the Accelerated Dragon with ...g6 before ...d6.',
    tags: 'dragon g6 bg7 yugoslav attack f3 qd2 bc4 o-o-o h4 h5 bh6 rxc3 exchange sacrifice soltis levenfish accelerated maroczy bind c4 reshevsky karpov korchnoi',
    ideas: [
      "The g7-bishop is the Dragon's best piece. Once the f6-knight moves, it aims down the long diagonal at White's queenside.",
      "In the Yugoslav, White plays h4–h5 and Bh6 against Black's king, while Black uses the c-file against White's.",
      'The Accelerated Dragon saves the move ...d6, so Black can sometimes play ...d5 in one go.'
    ],
    modules: range(3, 9)
  },
  {
    id: 'c4', n: 4, title: 'Classical, Rauzer and Scheveningen', side: 'both',
    blurb: 'Black develops with ...Nc6 or builds a small center with ...e6, and White answers with Bg5, Bc4 or g4.',
    tags: 'classical nc6 richter rauzer bg5 sozin bc4 velimirovic magnus smith trap boleslavsky scheveningen e6 keres attack g4 tal larsen',
    ideas: [
      'In the Richter–Rauzer, Bg5 threatens Bxf6, which doubles Black\'s f-pawns but gives Black the two bishops.',
      'The Sozin bishop on c4 aims at e6 and f7. Black often trades it off with ...Na5.',
      'The Scheveningen pawns on d6 and e6 make a small but solid center. White\'s sharpest try against it is g4–g5.'
    ],
    modules: range(4, 8)
  },
  {
    id: 'c5', n: 5, title: 'The Sveshnikov and Kalashnikov', side: 'both',
    blurb: 'Black kicks the d4-knight with ...e5 at once and accepts a hole on d5 in return for active play.',
    tags: 'sveshnikov lasker pelikan e5 ndb5 d6 bg5 a6 na3 b5 bxf6 nd5 kalashnikov lowenthal anti-sveshnikov',
    ideas: [
      '...e5 gains time on the knight but leaves a hole on d5 and a backward pawn on d6.',
      'After ...b5 the knight on a3 is stuck on the edge, and White needs moves to bring it back.',
      "White's knight on d5 against Black's two bishops is the main fight."
    ],
    modules: range(5, 8)
  },
  {
    id: 'c6', n: 6, title: 'The ...e6 Sicilians', side: 'both',
    blurb: 'Flexible set-ups with ...e6: the Taimanov, the Kan, the Four Knights and the Pin Variation.',
    tags: 'e6 taimanov nc6 qc7 kan a6 paulsen hedgehog four knights pin variation bb4 kasparov gambit d5',
    ideas: [
      "...e6 keeps Black's d-pawn flexible: it can stay home, go to d6, or jump to d5 in one move.",
      '...a6 stops a White knight or bishop from landing on b5.',
      'Against a c4 clamp, Black can wait behind pawns on a6, b6, d6 and e6 (the Hedgehog), then break with ...b5 or ...d5.'
    ],
    modules: range(6, 8)
  },
  {
    id: 'c7', n: 7, title: 'The Alapin and the Smith–Morra', side: 'both',
    blurb: 'Two ways White avoids the Open Sicilian: 2.c3 for a big center, and the Smith–Morra pawn sacrifice.',
    tags: 'alapin c3 d5 qxd5 nf6 isolated pawn iqp smith morra gambit siberian trap declined',
    ideas: [
      '2.c3 prepares d4, so that White can take back on d4 with a pawn.',
      'Against 2.c3, Black hits e4 at once with ...d5 or ...Nf6.',
      'In the Morra, White gives a pawn for quick development. Black must develop carefully and watch for traps.'
    ],
    modules: range(7, 8)
  },
  {
    id: 'c8', n: 8, title: 'Closed, Grand Prix and early sidelines', side: 'both',
    blurb: 'Closed set-ups with g3, attacks with f4, and the early bishop and queen moves that beginners love.',
    tags: 'closed nc3 g3 bg2 grand prix f4 tal gambit bowdler bc4 qh5 scholars mate wing gambit b4 botvinnik',
    ideas: [
      'In the Closed Sicilian, White aims for a kingside attack with f4–f5 while Black expands on the queenside.',
      'Against early Bc4 and Qh5 tricks, check that f7 is safe, then develop with gain of time.',
      'Against 2.b4, Black can take the pawn and hit back in the center.'
    ],
    modules: range(8, 8)
  },
  {
    id: 'c9', n: 9, title: 'Rossolimo, Moscow and the KIA', side: 'both',
    blurb: "Bishop moves to b5, the quiet King's Indian Attack, classic games, and choosing your own Sicilian.",
    tags: 'rossolimo bb5 bxc6 doubled pawns moscow bb5+ bd7 kia kings indian attack d3 g3 repertoire model games fischer tal karpov kasparov',
    ideas: [
      'Bb5 or Bb5+ develops quickly and avoids the long Open Sicilian theory.',
      'Bxc6 gives Black doubled c-pawns, but Black gets the two bishops.',
      'Pick a system that suits your style, and learn its plans before its moves.'
    ],
    modules: range(9, 8)
  }
]
