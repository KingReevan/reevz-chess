import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-bh6: White trades the g7-bishop */
const BH6 = `${SAMISCH} a6 Qd2 c6 Bh6 e5 Bxg7 Kxg7`
/** Bagirov–Gufeld, Kirovabad 1973 (model-bagirov-gufeld-1973), up to 21...Rxf4 */
const MONA_LISA =
  'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6 b5 h4 e5 Bxg7 Kxg7 h5 Kh8 Nd5 bxc4 hxg6 fxg6 Qh6 Nh5 g4 Rxb2 gxh5 g5 Rg1 g4 O-O-O Rxa2 Nef4 exf4 Nxf4 Rxf4'

export default defineModule({
  id: '6.2',
  title: 'The Bh6 idea and the h-file',
  minutes: 12,
  level: 3,
  goals: [
    'Understand why White wants to trade bishops with Bh6',
    'See how h4–h5 and the open h-file make the trade dangerous',
    "Learn Black's two answers: stop the h-pawn, or counterattack fast"
  ],
  intro:
    "The g7-bishop is the best defender of Black's king. In the Sämisch, White lines up the queen and bishop with Qd2 and then plays Bh6 to trade it off. Is that trade enough to win? This module shows when the Bh6 plan is harmless, when it becomes a real attack, and how Gufeld beat it in a famous game.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trade on its own',
      intro: 'White goes straight for the bishop trade. Watch what Black does with the extra move.',
      moves: BH6,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The Sämisch set-up',
          text: '6.Be3. The bishop is on the c1–h6 diagonal. Once the queen comes to d2, the two will aim at h6 together.',
          arrows: [['e3', 'h6', 'yellow']]
        },
        12: {
          title: 'Black prepares ...b5',
          text: '6...a6. A quiet move with a clear goal: ...b5, to open lines on the queenside.',
          arrows: [['b7', 'b5', 'blue']]
        },
        13: {
          title: 'The battery',
          text: '7.Qd2. Queen and bishop now stand on one diagonal, a battery pointing at h6. Bh6 is coming.',
          arrows: [['d2', 'h6', 'yellow']]
        },
        14: {
          title: 'Another quiet move',
          text: '7...c6. This also supports ...b5, and it keeps a white piece off d5.',
          arrows: [['c6', 'd5', 'green']]
        },
        15: {
          title: 'The bishop offer',
          text: "8.Bh6. White offers to trade bishops. If Black takes with 8...Bxh6, then 9.Qxh6 brings White's queen close to Black's king.",
          arrows: [['h6', 'g7', 'yellow']],
          marks: ['g7']
        },
        16: {
          title: 'Center first',
          text: "8...e5. Black doesn't try to dodge the trade. Instead, Black uses the move to strike at the center.",
          arrows: [['e5', 'd4', 'red']]
        },
        17: {
          title: 'The trade',
          text: "9.Bxg7. White removes the bishop that guarded Black's king."
        },
        18: {
          title: 'Not enough on its own',
          text: '9...Kxg7. The king takes back and now guards the dark squares f6 and h6 itself. Black\'s center is solid and White has no quick way to open lines, so the engine calls this roughly equal.',
          marks: ['f6', 'h6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Adding the h-pawn',
      body:
        "Bh6 becomes dangerous when White can also open the h-file. The plan is h4–h5 and hxg6: then the rook on h1 looks straight up the file at Black's king, and the queen can land on h6.\n\nBlack has two answers. The first is to stop the pawn early. In the line 6...a6 7.Qd2 c6 8.h4, the reply **8...h5** is a good move: the h-pawn is blocked and can't reach h5.\n\nThe second is to **counterattack**: open lines against White's king before the h-file opens. That is what Gufeld did."
    },
    {
      kind: 'walkthrough',
      title: "Gufeld's \"Mona Lisa\": the race",
      intro:
        'Bagirov–Gufeld, Kirovabad 1973, continued from Module 6.1. White attacks on the h-file, Black on the b-file. Count the material as you go.',
      moves: MONA_LISA,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Black ignores the offer',
          text: "9.Bh6 b5. White offered the bishop trade. Black answers with ...b5 at once: the plan is ...bxc4, which half-opens the b-file toward the queenside, where White's king is likely to go.",
          arrows: [['b5', 'c4', 'red'], ['h6', 'g7', 'yellow']]
        },
        19: {
          title: 'The h-pawn starts',
          text: '10.h4. White adds the second part of the plan: h5 and hxg6 to open up the h-file for the rook.',
          arrows: [['h4', 'h5', 'green']],
          marks: ['g6']
        },
        20: {
          title: 'A central strike',
          text: '10...e5. Black strikes at d4 in the center.',
          arrows: [['e5', 'd4', 'red']]
        },
        21: {
          title: 'The bishop trade',
          text: "11.Bxg7. White removes Black's best defender."
        },
        22: {
          title: 'King takes back',
          text: '11...Kxg7. Now the king itself has to guard the dark squares around it.'
        },
        23: {
          title: 'The pawn arrives',
          text: '12.h5. White is ready for hxg6, which would take White\'s h-pawn off the h-file and half-open it for the rook on h1.',
          arrows: [['h5', 'g6', 'red'], ['h1', 'h7', 'blue']]
        },
        24: {
          title: 'Into the corner',
          text: '12...Kh8. The king steps into the corner. From here it is a pure race: White on the h-file, Black on the b-file.'
        },
        25: {
          title: 'The knight jumps in',
          text: '13.Nd5. The knight attacks the f6-knight, the piece that guards h7 and keeps White out.',
          arrows: [['d5', 'f6', 'red']],
          marks: ['h7']
        },
        26: {
          title: 'The b-file half-opens',
          text: '13...bxc4. Black wins a pawn. Black\'s b-pawn has left the b-file, so it is half-open, and the rook on b8 looks down it at the b2-pawn.',
          arrows: [['b8', 'b2', 'blue']]
        },
        27: {
          title: 'Lines open',
          text: "14.hxg6. White's h-pawn has left the h-file, so it is now half-open: only Black's h7-pawn stands on it. Black can't take back with that pawn: it is pinned to the king by the rook on h1.",
          arrows: [['h1', 'h8', 'red']]
        },
        28: {
          title: 'The f-pawn takes',
          text: '14...fxg6. Black takes with the f-pawn. That half-opens the f-file for Black, but for now the f6-knight stands in front of the rook on f8.'
        },
        29: {
          title: 'The queen lands on h6',
          text: '15.Qh6. A big threat: 16.Nxf6 removes the knight that guards h7, and then White mates on h7 with the queen and rook.',
          arrows: [['d5', 'f6', 'red'], ['h6', 'h7', 'red']],
          marks: ['h7']
        },
        30: {
          title: 'Blocking the file',
          text: '15...Nh5. The only defense. The knight cuts the rook on h1 off from the queen. White is clearly better at this moment.',
          arrows: [['h1', 'h5', 'blue']],
          ann: '!'
        },
        31: {
          title: 'Attacking the blocker',
          text: '16.g4. The pawn attacks the knight. It looks natural, but the engine prefers castling first. This move lets Black back into the game.',
          arrows: [['g4', 'h5', 'red']],
          ann: '?'
        },
        32: {
          title: 'Counterattack, not defense',
          text: "16...Rxb2. Black leaves the knight and grabs the b2-pawn. The rook is now deep in White's camp. The engine says this bold choice keeps the game roughly level.",
          arrows: [['b2', 'e2', 'red']],
          ann: '!'
        },
        33: {
          title: 'A piece for two pawns',
          text: "17.gxh5. White takes the knight. Count: Black has given a knight for two pawns (c4 and b2).",
          marks: ['h5']
        },
        34: {
          title: 'The queen is boxed in',
          text: "17...g5. The pawn shuts the queen's road back along the h6–c1 diagonal. Every square the queen can go to is now covered by Black, so it can't help defend White's king.",
          arrows: [['g5', 'h6', 'yellow']]
        },
        35: {
          title: 'The rook joins in',
          text: '18.Rg1. The rook takes the half-open g-file and attacks the pawn on g5.',
          arrows: [['g1', 'g5', 'red']]
        },
        36: {
          title: 'A new diagonal',
          text: "18...g4. The pawn moves on, and the d8–h4 diagonal opens for Black's queen. Black now threatens ...Qh4+.",
          arrows: [['d8', 'h4', 'red'], ['h4', 'e1', 'red']]
        },
        37: {
          title: 'The king leaves e1',
          text: '19.O-O-O. White castles, but on the side where Black is attacking. The a2-pawn is unguarded.',
          marks: ['a2']
        },
        38: {
          title: 'Material is level',
          text: '19...Rxa2. Another pawn. Black now has three pawns for the knight, and the rook is close to White\'s king, ready to check on a1.',
          arrows: [['a2', 'a1', 'red']]
        },
        39: {
          title: 'White brings a knight',
          text: "20.Nef4. White sends the e2-knight toward Black's king, even though the e5-pawn can take it. The game is still roughly level."
        },
        40: {
          title: 'Black takes',
          text: '20...exf4. Black takes the knight. The knights are traded, and Black is three pawns up.'
        },
        41: {
          title: 'The losing mistake',
          text: '21.Nxf4. The other knight takes back and threatens Ng6+, a check that would rip open Black\'s king. But this was the decisive error. 21.Bxc4 would have kept the game roughly level.',
          arrows: [['f4', 'g6', 'red']],
          ann: '?'
        },
        42: {
          title: 'Rook for the attacker',
          text: "21...Rxf4. Black gives the rook for the knight to kill the attack. After 22.Qxf4 material is level, but White's king is wide open and the engine says Black is now winning.",
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: 'How the Mona Lisa ended',
      body:
        "The game went 22.Qxf4 c3 23.Bc4 Ra3 24.fxg4 Nb4 25.Kb1 Be6 26.Bxe6 Nd3 27.Qf7 Qb8+ 28.Bb3 Rxb3+ 29.Kc2 Nb4+ 30.Kxb3 Nd5+ 31.Kc2 Qb2+ 32.Kd3 Qb5+, and White resigned because checkmate is coming. Gufeld gave away his bishop and his last rook, and in the final position White has far more material. It doesn't matter: the king can't escape. This is the game known as Gufeld's \"Mona Lisa\"."
    }
  ],
  takeaway:
    "Bh6 trades Black's best defender, but on its own it only equalizes. It becomes dangerous together with h4–h5 and the open h-file. Black answers by stopping the h-pawn with ...h5, or by counterattacking fast, as Gufeld did.",
  lookAhead:
    'Module 6.3 turns to 6...e5 7.d5, the main way to fight the Sämisch in the center. The kings again end up on opposite sides.',
  drills: [
    {
      title: 'Attack on the h-file',
      prompt: "You're White in Bagirov–Gufeld. Black has just taken on c4. Half-open the h-file and bring the queen to the attack.",
      moves: 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6 b5 h4 e5 Bxg7 Kxg7 h5 Kh8 Nd5 bxc4 hxg6 fxg6 Qh6',
      start: 26,
      side: 'white',
      hints: ['Your h-pawn can take something.', 'Which square next to the black king can your queen reach along the c1–h6 diagonal?'],
      success: '14.hxg6 fxg6 15.Qh6! threatens Nxf6 and mate on h7. Black has only one defense.'
    },
    {
      title: "Find Gufeld's defense",
      prompt: "You're Black. White threatens 16.Nxf6 and mate on h7. Stop it, then answer White's next move with a counterattack.",
      moves: 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6 b5 h4 e5 Bxg7 Kxg7 h5 Kh8 Nd5 bxc4 hxg6 fxg6 Qh6 Nh5 g4 Rxb2',
      start: 29,
      side: 'black',
      hints: [
        "The queen needs the rook on h1 behind it to mate on h7. Can you cut the h-file?",
        "After 16.g4, don't save the knight. Look down the half-open b-file."
      ],
      success: "15...Nh5! blocks the h-file, and 16...Rxb2! counterattacks instead of saving the knight. Both were Black's only good moves."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White want to trade bishops with Bh6?',
      choices: [
        { text: "The g7-bishop is the best defender of Black's king and the dark squares around it", correct: true, why: 'Right. Without it, squares like f6 and h6 are hard to guard, and an attack on the h-file gets much stronger.' },
        { text: 'To win a pawn', why: 'Bh6 wins no material. It trades one bishop for another.' },
        { text: 'To open the c-file for the rooks', why: "The trade happens on the kingside. It's about Black's king, not the c-file." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...a6 7.Qd2 c6 8.Bh6 e5 9.Bxg7 Kxg7, why is White not better?',
      moves: BH6,
      orientation: 'white',
      choices: [
        { text: "Black's center is solid and White has no quick way to open lines at Black's king", correct: true, why: "Exactly. Bh6 alone doesn't win. It needs the h-file opening too." },
        { text: 'Black has won a pawn', why: 'Material is level: bishop for bishop.' },
        { text: "White's king is already under attack", why: "Not yet. Black's ...b5 is still to come. The point is that White's attack has nothing to bite on." }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move after 14.hxg6. Why can't Black take back with the h-pawn?",
      moves: 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6 b5 h4 e5 Bxg7 Kxg7 h5 Kh8 Nd5 bxc4 hxg6',
      orientation: 'black',
      choices: [
        { text: 'The h7-pawn is pinned to the king by the rook on h1', correct: true, why: "Right. The h-file is open, so ...hxg6 would leave the king in check. It's an illegal move." },
        { text: 'It would lose the queen to Nxf6', why: "There's no such trick. The pawn simply can't move: it's pinned." },
        { text: "It's legal, but it hangs the rook on f8", why: "...hxg6 is not even legal here. The rook on h1 pins the pawn to the king." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White threatens 16.Nxf6 and mate on h7. What did Gufeld play?',
      moves: 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6 b5 h4 e5 Bxg7 Kxg7 h5 Kh8 Nd5 bxc4 hxg6 fxg6 Qh6',
      orientation: 'black',
      choices: [
        { text: '15...Nh5', correct: true, why: 'Right. The knight blocks the h-file, so the queen has no rook behind it. It was the only defense.' },
        { text: '15...Ng8', why: "It attacks the queen, but it no longer guards h7: 16.Qxh7 is checkmate." },
        { text: '15...Rf7', why: 'The rook guards h7 along the seventh rank, but White wins material, for example with 16.Qxg6. Only ...Nh5 holds.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'What is the main purpose of h4–h5 in the Sämisch?',
      choices: [
        { text: "To open the h-file with hxg6, so the rook and queen can attack Black's king", correct: true, why: 'Right. Together with Bh6, this is the heart of White\'s kingside attack.' },
        { text: 'To win the g6-pawn', why: "White isn't after material. hxg6 is played to open lines." },
        { text: "To make room for White's king on h2", why: "White's king usually goes to the queenside. The h-pawn is an attacker." }
      ]
    },
    {
      type: 'concept',
      prompt: 'At the end of the "Mona Lisa", White had much more material. Why did Black still win?',
      choices: [
        { text: "White's king was caught in the open and checkmate could not be stopped", correct: true, why: 'Yes. Checkmate ends the game, whatever the material count, so White resigned.' },
        { text: 'Black was about to promote a pawn', why: "Black's c-pawn helped, but the game ended because of an unstoppable mate, not a promotion." },
        { text: 'White ran out of time', why: 'White resigned because mate was coming, not because of the clock.' }
      ]
    }
  ],
  key: { name: 'Sämisch Bh6 plan: 8.Bh6 e5 9.Bxg7 Kxg7', moves: BH6, orientation: 'white' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks and queens use open files to attack.' },
    { term: 'Pin', meaning: 'A piece or pawn cannot move off a line without exposing a more valuable piece behind it. If that piece is the king, the move is illegal.' },
    { term: 'Counterattack', meaning: 'Answering an attack by attacking somewhere else, instead of only defending.' }
  ]
})
