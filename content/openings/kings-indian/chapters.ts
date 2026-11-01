import type { Chapter } from '../../types'

const range = (ch: number, n: number) => Array.from({ length: n }, (_, i) => `${ch}.${i + 1}`)

export const chapters: Chapter[] = [
  {
    id: 'c1', n: 1, title: 'Foundations', side: 'both',
    blurb: 'The set-up, the two pawn breaks, and a map of what White can play.',
    tags: 'basics principles notation beginner start fianchetto hypermodern setup move order london',
    ideas: [
      'Let White build a big center, then strike at it with ...e5 or ...c5.',
      'The g7-bishop guards your king and aims at the center along the long diagonal.',
      'Castle early: the real fight starts once your king is safe.'
    ],
    modules: range(1, 9)
  },
  {
    id: 'c2', n: 2, title: 'The Classical set-up to 8...Ne7', side: 'both',
    blurb: 'White develops calmly with Nf3 and Be2, Black strikes with ...e5, and the center locks.',
    tags: 'classical orthodox nf3 be2 e5 exchange dxe5 nxe5 nc6 d5 ne7 pawn chain',
    ideas: [
      "After 6...e5 the e5-pawn isn't really hanging: Black wins it back with ...Nxe4.",
      'After 8.d5 the center is locked, so each side attacks on its own wing.',
      'Attack where your pawns point: White on the queenside, Black on the kingside.'
    ],
    modules: range(2, 8)
  },
  {
    id: 'c3', n: 3, title: 'The Mar del Plata', side: 'black',
    blurb: "Black's kingside storm: ...Nd7, ...f5, ...f4, ...g5 and ...g4.",
    tags: 'mar del plata ne1 nd7 f5 f4 g5 g4 kingside attack storm najdorf gligoric taimanov piket kasparov gelfand nakamura sacrifice',
    ideas: [
      'Move the f6-knight out of the way, then play ...f5.',
      "...f4 and ...g5 gain space; ...g4 opens lines at White's king.",
      'Every move counts: White is attacking on the other wing at the same time.'
    ],
    modules: range(3, 8)
  },
  {
    id: 'c4', n: 4, title: "White's queenside attack", side: 'white',
    blurb: 'How White wins the race: c4–c5, the c-file, the c7 square and the Bayonet 9.b4.',
    tags: 'queenside attack c5 cxd6 c7 nb5 nd3 rc1 bayonet b4 nh5 nf4 a5 nd2 bd2 a4 kramnik kasparov shirov radjabov petrosian gligoric race',
    ideas: [
      'White attacks where the pawns point: on the queenside, with c4–c5.',
      'Opening the c-file and landing a knight on c7 are the main goals.',
      "The Bayonet 9.b4 starts the attack before Black's ...f5 arrives."
    ],
    modules: range(4, 8)
  },
  {
    id: 'c5', n: 5, title: "Petrosian, Gligorić and Black's 7th moves", side: 'both',
    blurb: "White's other 7th moves, Black's alternatives to 7...Nc6, and 6...c5.",
    tags: 'petrosian d5 bg5 gligoric taimanov be3 ng4 exd4 na6 glek nbd7 c6 h3 larsen c5 benoni maroczy pin h6 g5',
    ideas: [
      'Against 7.Be3 and Bg5, ...Ng4 and ...h6 are the typical answers.',
      'A pin on the f6-knight is broken with ...h6 and ...g5, or by moving the queen.',
      'After ...exd4, the long diagonal and the e-file come alive for Black.'
    ],
    modules: range(5, 9)
  },
  {
    id: 'c6', n: 6, title: 'The Sämisch 5.f3', side: 'both',
    blurb: "White guards e4 with f3 and often castles queenside to storm Black's king.",
    tags: 'samisch saemisch f3 be3 qd2 bh6 h4 h5 gambit c5 panno nc6 a6 rb8 b5 bronstein queen sacrifice mona lisa gufeld karpov kasparov opposite castling',
    ideas: [
      "White's plan: Be3, Qd2, Bh6 to trade the g7-bishop, and h4–h5.",
      'Black hits back in the center with ...e5 or ...c5, or on the queenside with ...b5.',
      'With the kings on opposite sides, speed matters more than material.'
    ],
    modules: range(6, 9)
  },
  {
    id: 'c7', n: 7, title: 'Four Pawns Attack and Averbakh', side: 'both',
    blurb: 'The biggest center (5.f4) and the pinning Bg5 systems, with their tactics.',
    tags: 'four pawns f4 benoni c5 e6 re8 florentine letelier fischer christiansen averbakh bg5 be2 h6 na6 trap nd5',
    ideas: [
      'Against a huge center, strike at once with ...c5 before White finishes developing.',
      'In the Four Pawns, the e4-pawn is a target for ...Re8 and ...Nxe4 tricks.',
      'Against the Averbakh, ...e5 must wait: ...c5 or ...h6 comes first.'
    ],
    modules: range(7, 9)
  },
  {
    id: 'c8', n: 8, title: 'The Fianchetto and other systems', side: 'both',
    blurb: 'Calmer set-ups with g3, h3, Bd3, Bg5, e3 and the London.',
    tags: 'fianchetto g3 bg2 panno yugoslav c5 c6 nbd7 makogonov h3 bd3 nge2 kramer bg5 e3 london quiet zita bronstein ivanchuk yusupov',
    ideas: [
      'Against g3 a kingside attack is harder, so Black plays in the center or on the queenside.',
      'Moves like h3 and Bg5 try to stop ...Ng4 and ...e5; Black adjusts with ...c5 or ...h6.',
      'Against quiet set-ups the same plan works: fianchetto, castle, then ...e5 or ...c5.'
    ],
    modules: range(8, 9)
  }
]
