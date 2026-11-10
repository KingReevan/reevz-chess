import type { Chapter } from '../../types'

const range = (ch: number, n: number) => Array.from({ length: n }, (_, i) => `${ch}.${i + 1}`)

export const chapters: Chapter[] = [
  {
    id: 'c1', n: 1, title: 'Foundations', side: 'both',
    blurb: "Why 1...e6 and 2...d5, the pawn chain and its two breaks, the problem bishop, and a map of White's choices.",
    tags: 'basics principles notation beginner start e6 d5 pawn chain base head c5 f6 break bad bishop c8 counting attackers defenders',
    ideas: [
      '1...e6 and 2...d5 challenge e4 at once. White must defend it, push it to e5 or trade it.',
      "Once the center locks, attack the base of White's pawn chain with ...c5, or its head with ...f6.",
      "Black's c8-bishop is shut in by the e6-pawn. Have a plan to free it or trade it."
    ],
    modules: range(1, 9)
  },
  {
    id: 'c2', n: 2, title: 'The Advance Variation', side: 'both',
    blurb: 'White pushes 3.e5 for space. Black hits d4 with ...c5, ...Nc6 and ...Qb6.',
    tags: 'advance e5 c5 c3 nc6 nf3 qb6 a3 c4 lputian nh6 nf5 be2 milner-barry gambit bd3 bb5 trap euwe wade nimzowitsch qg4 dxc5',
    ideas: [
      'Count attackers and defenders on d4 before you take there.',
      '...Nh6–f5 brings another attacker to d4.',
      "With White's bishop on d3, don't take on d4 twice before ...Bd7: Bb5+ can win your queen."
    ],
    modules: range(2, 9)
  },
  {
    id: 'c3', n: 3, title: 'The Exchange and early sidelines', side: 'both',
    blurb: "The symmetrical Exchange, the King's Indian Attack, and the early sidelines and gambits beginners meet most.",
    tags: 'exchange exd5 symmetry e-file greek gift bxh7 kings indian attack kia d3 qe2 chigorin nf3 two knights c4 f4 b3 nc3 bd3 alapin gambit be3 diemer duhm',
    ideas: [
      'After 3.exd5 exd5 the c8-bishop is free. To play for a win, unbalance the position.',
      'Against early sidelines, ...d5 and ...c5 give Black a good share of the center.',
      'Against gambits like 3.Be3 and 3.c4, take the pawn, develop quickly and castle.'
    ],
    modules: range(3, 8)
  },
  {
    id: 'c4', n: 4, title: 'The Tarrasch', side: 'both',
    blurb: "White's knight goes to d2 to avoid the ...Bb4 pin. Black answers with ...c5, ...Nf6 or ...Be7.",
    tags: 'tarrasch nd2 c5 qxd5 isolated pawn iqp exd5 bb5 karpov korchnoi nepomniachtchi ding closed nf6 f6 qb6 morozevich be7 guimard nc6 a6',
    ideas: [
      '3.Nd2 keeps the c-pawn free to go to c3, but the knight blocks the c1-bishop for a while.',
      'Against an isolated pawn, put a piece on the square in front of it.',
      'In the closed Tarrasch, Black breaks with ...f6 or hits d4 with ...Qb6.'
    ],
    modules: range(4, 8)
  },
  {
    id: 'c5', n: 5, title: 'The Rubinstein and Fort Knox', side: 'both',
    blurb: 'Black trades on e4 for a solid, compact position, then frees it with ...c5 or by putting the bishop on c6.',
    tags: 'rubinstein dxe4 nd7 ngf6 c5 fort knox bd7 bc6 neg5 nxe6 burn capablanca ne5',
    ideas: [
      '3...dxe4 gives up the center, but Black keeps a position with no weak pawns.',
      'Prepare ...Ngf6 with ...Nd7, so you can take back on f6 with a knight.',
      'In Fort Knox the problem bishop goes to c6, where it is often traded for a knight.'
    ],
    modules: range(5, 7)
  },
  {
    id: 'c6', n: 6, title: 'The Classical', side: 'both',
    blurb: '3...Nf6 hits e4 again. White pushes with 4.e5 (the Steinitz) or pins with 4.Bg5.',
    tags: 'classical nf6 steinitz e5 nfd7 f4 c5 be3 bg5 be7 stahlberg alekhine chatard h4 mccutcheon bb4 burn dxe4 delayed exchange gukesh ding',
    ideas: [
      'After 4.e5 Nfd7, Black hits the pawn chain at once with ...c5.',
      'Against 4.Bg5, ...Be7 breaks the pin. ...Bb4 (the McCutcheon) is sharper and ...dxe4 (the Burn) more solid.',
      "In the Alekhine–Chatard, think twice before castling into White's attack."
    ],
    modules: range(6, 9)
  },
  {
    id: 'c7', n: 7, title: 'The Winawer', side: 'both',
    blurb: '3...Bb4 pins the c3-knight. White gets the two bishops and doubled pawns, and the game turns sharp.',
    tags: 'winawer bb4 e5 c5 a3 bxc3 ne7 qg4 poisoned pawn qc7 rg8 nf3 a4 h4 b6 ba6 armenian ba5 petrosian qd7 bd2 alekhine nimzowitsch gun ne2 gambit fingerslip uhlmann bronstein',
    ideas: [
      'After ...Bxc3+ bxc3, White has the two bishops and doubled c-pawns. Black aims at c3 and the queenside.',
      "Without Black's dark-squared bishop, g7 is weak: decide whether to guard it, castle or give it up.",
      "...b6 and ...Ba6 trade Black's problem bishop for White's light-squared bishop."
    ],
    modules: range(7, 8)
  },
  {
    id: 'c8', n: 8, title: 'Plans, sacrifices and classics', side: 'both',
    blurb: 'The Greek Gift, the ...f6 break, blockades, the f4–f5 lever, the bad bishop in endgames, and choosing your French.',
    tags: 'plans greek gift bxh7 sacrifice f6 break e5 strongpoint blockade d4 nimzowitsch f5 lever bad bishop endgame model games alekhine uhlmann korchnoi ding repertoire',
    ideas: [
      'Before Bxh7+, check that a knight can reach g5 and the queen h5, and that Black has no ...Nf6 or ...Bxg5 defense.',
      'Blockade a pawn by putting a piece on the square in front of it.',
      'Pick the French set-up that suits your style, and learn its plans before its moves.'
    ],
    modules: range(8, 8)
  }
]
