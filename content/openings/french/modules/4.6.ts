import { defineModule } from '../../../types'
import { TARRASCH_CLOSED } from '../lines'

/** tar-3nf6 + 7...cxd4: the position before 8.cxd4 */
const BEFORE_CXD4 = TARRASCH_CLOSED.split(' ').slice(0, -1).join(' ')
/** tar-closed-f6: 8...f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6 */
const F6 = `${TARRASCH_CLOSED} f6 exf6 Nxf6 Nf3 Bd6 O-O Qc7 Nc3 a6`
/** tar-closed-qb6: 8...Qb6 9.Nf3 f6 10.exf6 Nxf6 11.O-O Bd6 12.Nc3 O-O */
const QB6 = `${TARRASCH_CLOSED} Qb6 Nf3 f6 exf6 Nxf6 O-O Bd6 Nc3 O-O`
/** tar-closed-nb6: 8...Nb6 9.Nf3 Bd7 10.O-O a5 */
const NB6 = `${TARRASCH_CLOSED} Nb6 Nf3 Bd7 O-O a5`
/** tar-closed-f6 up to 10...Bd6 (Black drill) */
const F6_BLACK = `${TARRASCH_CLOSED} f6 exf6 Nxf6 Nf3 Bd6`
/** tar-closed-f6 up to 11.O-O (White drill) */
const F6_WHITE = `${F6_BLACK} O-O`

export default defineModule({
  id: '4.6',
  title: 'The closed Tarrasch: 3...Nf6 and ...f6',
  minutes: 12,
  level: 2,
  goals: [
    'Count the attackers and defenders on d4 and e5 before you break',
    'Play the ...f6 break, and know the ...Qb6 alternative',
    'See why 8...Nb6?! is too slow, and how White answers each plan'
  ],
  intro:
    "Module 4.1 built the closed Tarrasch: 3...Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2. White's chain d4–e5 is solid, and Black has to break it. Black trades on d4 first, then chooses: hit the head with ...f6, add pressure on d4 with ...Qb6, or regroup with ...Nb6. Only the first two are good.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The ...f6 break',
      intro: 'Count the pieces on e5 at every move. That count decides what White can do.',
      moves: F6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The closed Tarrasch',
          text: '7.Ne2. The set-up from Module 4.1. d4 is attacked twice (the c5-pawn and the c6-knight) and defended twice (the c3-pawn and the e2-knight).',
          arrows: [['c5', 'd4', 'red'], ['c6', 'd4', 'red'], ['c3', 'd4', 'green'], ['e2', 'd4', 'green']]
        },
        14: {
          title: 'Trade first',
          text: '7...cxd4. Black trades on d4. This opens the c-file and asks White how to take back.',
          marks: ['d4']
        },
        15: {
          title: 'Take back with the pawn',
          text: '8.cxd4. The pawn recaptures, so d4 still supports e5. After 8.Nxd4? Ndxe5 the e5-pawn would fall.',
          arrows: [['d4', 'e5', 'green']]
        },
        16: {
          title: 'Hit the head',
          text: '8...f6. Now e5 is attacked three times (the f6-pawn and both knights) and defended once, by the d4-pawn.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['d7', 'e5', 'red']],
          ann: '!'
        },
        17: {
          title: 'White trades',
          text: "9.exf6. White can't hold e5, so it trades. Quiet moves like 9.Nf3 or 9.O-O are met by 9...fxe5, and White's center falls apart.",
          marks: ['f6']
        },
        18: {
          title: 'Freedom, and a weakness',
          text: "9...Nxf6. The knight is back on f6, and the f-file is half-open for Black's rook. The price: no pawn can ever defend e6 again, and e5 in front of it is a fine square for White's pieces.",
          marks: ['e6', 'e5']
        },
        19: {
          title: 'The d2-knight moves at last',
          text: '10.Nf3. The knight watches e5 and guards d4. With d2 empty, the c1-bishop is free.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'green']],
          marks: ['c1']
        },
        20: {
          title: 'Watching e5',
          text: '10...Bd6. The bishop also controls e5, and it aims at h2.',
          arrows: [['d6', 'e5', 'green'], ['d6', 'h2', 'blue']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. White\'s king is safe on the kingside.',
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'A battery',
          text: '11...Qc7. The queen lines up behind the bishop on the diagonal toward h2.',
          arrows: [['c7', 'h2', 'blue']]
        },
        23: {
          title: 'The e2-knight moves on',
          text: '12.Nc3. The knight leaves e2 for c3, where it hits d5 and could jump to b5 to attack the queen and bishop.',
          arrows: [['c3', 'd5', 'red'], ['c3', 'b5', 'blue']]
        },
        24: {
          title: 'No b5',
          text: '12...a6. Black takes b5 away. Black\'s pieces are active, but the e6-pawn is a weakness, and White is slightly better.',
          arrows: [['a6', 'b5', 'green']],
          marks: ['e6']
        }
      }
    },
    {
      kind: 'text',
      title: 'After the break: plans for both sides',
      body:
        "**Black** has active pieces, a half-open f-file for a rook after castling, and a target on d4. The e6-pawn is backward: no Black pawn can defend it, and White's d4-pawn controls e5 in front of it. Black's dream is the push ...e6–e5. It would get rid of the weak pawn and open the c8-bishop's diagonal.\n\n**White** plays against e6 and for the e5-square. A knight or bishop on e5 is strong there, the c1-bishop often goes to g5 or f4 to trade off one of Black's defenders, and the rooks come to the e-file, which is half-open for White now that its e-pawn is gone. The engine calls the position slightly better for White."
    },
    {
      kind: 'walkthrough',
      title: '8...Qb6: pressure on d4',
      intro: 'The other good plan. Count the pieces on d4 first, then on e5.',
      moves: QB6,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The same position',
          text: '8.cxd4. This time Black adds an attacker on d4 before breaking with ...f6.',
          marks: ['d4']
        },
        16: {
          title: 'The queen joins in',
          text: '8...Qb6. d4 is now attacked twice (the queen and the c6-knight) and defended only once, by the e2-knight. The queen also hits b2, which the c1-bishop guards.',
          arrows: [['b6', 'd4', 'red'], ['c6', 'd4', 'red'], ['e2', 'd4', 'green']]
        },
        17: {
          title: 'Two against two',
          text: '9.Nf3. The d2-knight defends d4 a second time. From f3 it also guards e5, and the c1-bishop is free.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        18: {
          title: 'Now the second break',
          text: '9...f6. e5 is attacked three times (the pawn and both knights) and defended twice (the d4-pawn and the f3-knight). White trades before Black can take.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['d7', 'e5', 'red']]
        },
        19: {
          title: 'White trades',
          text: '10.exf6. The head of the chain is gone.',
          marks: ['f6']
        },
        20: {
          title: 'The knight returns',
          text: '10...Nxf6. The same structure as before, with one difference: Black\'s queen is on b6, still eyeing d4 and b2.',
          arrows: [['b6', 'd4', 'blue'], ['b6', 'b2', 'blue']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. The king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'The bishop develops',
          text: '11...Bd6. The bishop controls e5 and aims at h2.',
          arrows: [['d6', 'h2', 'blue']]
        },
        23: {
          title: 'The knight goes to c3',
          text: '12.Nc3. The e2-knight heads for c3, where it hits d5 and b5.',
          arrows: [['c3', 'd5', 'red']]
        },
        24: {
          title: 'Black castles',
          text: '12...O-O. The f8-rook stands on the half-open f-file: the only pawn on it is White\'s f2-pawn. White is slightly better, and Black has active pieces.',
          marks: ['f2']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8...Nb6?!: too slow',
      intro: 'A third idea that looks natural, but sends a knight away from the action.',
      moves: NB6,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'Black chooses again',
          text: '8.cxd4. Black has a third option: regroup on the queenside.',
          marks: ['d4', 'e5']
        },
        16: {
          title: 'A queenside knight',
          text: '8...Nb6. The knight leaves d7. It no longer attacks e5 or supports ...f6, and it is far from Black\'s kingside. lichess calls this the Leningrad Variation.',
          arrows: [['d7', 'b6', 'blue']],
          marks: ['e5'],
          ann: '?!'
        },
        17: {
          title: 'Calm development',
          text: '9.Nf3. The d2-knight guards d4 and e5, and the c1-bishop is free.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'green']]
        },
        18: {
          title: 'The bishop uses d7',
          text: '9...Bd7. The c8-bishop develops to the square the knight left.',
          arrows: [['c8', 'd7', 'green']]
        },
        19: {
          title: 'White castles',
          text: '10.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        20: {
          title: 'Slow queenside play',
          text: '10...a5. Black plans ...a4 and play on the queenside. It is slow: White is clearly better and can build up on the kingside, for example with Nf4 and h4.',
          arrows: [['a5', 'a4', 'blue'], ['e2', 'f4', 'green'], ['h2', 'h4', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'A sacrifice to avoid',
      body:
        "In a similar closed Tarrasch, with 7.Ngf3 instead of 7.Ne2 and Black's bishop on e7, the Greek Gift 9.Bxh7+? fails to 9...Kxh7 10.Ng5+ Bxg5 (Module 8.2)."
    }
  ],
  takeaway:
    "In the closed Tarrasch, Black trades on d4 and then breaks with ...f6 (or first adds ...Qb6 against d4). Count before you choose. White trades with exf6, then plays against the backward e6-pawn and for the e5-square. 8...Nb6?! is too slow.",
  lookAhead:
    "Next: a waiting move that keeps all of Black's options open. Module 4.7 shows Morozevich's 3...Be7.",
  drills: [
    {
      title: 'Black: trade, break, develop',
      prompt: "You're Black in the closed Tarrasch. Trade on d4, hit the head of White's chain with a pawn, take back with your knight, and develop your bishop to a square that controls e5.",
      moves: F6_BLACK,
      start: 13,
      side: 'black',
      hints: [
        'First 7...cxd4. After 8.cxd4, strike at e5 with the f-pawn.',
        'After 9.exf6, take back with the d7-knight. The f8-bishop goes to d6.'
      ],
      success: '7...cxd4, 8...f6, 9...Nxf6 and 10...Bd6. Active pieces and a half-open f-file.'
    },
    {
      title: 'White: answer the break',
      prompt: "You're White. Black has traded on d4. Take back the right way, answer ...f6 by trading, bring the d2-knight to a square that watches e5, and castle.",
      moves: F6_WHITE,
      start: 14,
      side: 'white',
      hints: [
        'Take back on d4 with the pawn, so that e5 keeps its support.',
        'After 8...f6, play 9.exf6. After 9...Nxf6, the d2-knight goes to f3.'
      ],
      success: '8.cxd4, 9.exf6, 10.Nf3 and 11.O-O. White has the e5-square and a target on e6.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black has just played 8...f6. Count the pieces on e5. How many attackers and defenders?',
      moves: `${TARRASCH_CLOSED} f6`,
      orientation: 'black',
      choices: [
        { text: 'Three attackers, one defender', correct: true, why: 'Right. The f6-pawn, the c6-knight and the d7-knight attack e5. Only the d4-pawn defends it, because the d2-knight has not reached f3 yet.' },
        { text: 'Two attackers, two defenders', why: 'Look again: the f6-pawn and both knights attack e5. White\'s knights on d2 and e2 do not reach e5.' },
        { text: 'Three attackers, two defenders', why: 'Only the d4-pawn defends e5 right now. The d2-knight would need to be on f3.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're White. Black has just played 8...f6. What is your best move?",
      moves: `${TARRASCH_CLOSED} f6`,
      orientation: 'white',
      choices: [
        { text: '9.exf6', correct: true, why: 'Right. White cannot hold e5, so it trades. Then White plays against the e6-pawn and for the e5-square.' },
        { text: '9.Nf3', why: "It adds a defender, but too late: after 9...fxe5 White's center breaks up, and Black is clearly better." },
        { text: '9.O-O', why: 'Castling ignores the threat. After 9...fxe5 White\'s center falls apart, and Black is better.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're White. Black has just traded with 7...cxd4. How do you take back?",
      moves: BEFORE_CXD4,
      orientation: 'white',
      choices: [
        { text: '8.cxd4', correct: true, why: 'Yes. The pawn keeps supporting e5, so the chain d4–e5 stays together.' },
        { text: '8.Nxd4', why: 'The e5-pawn loses its support: 8...Ndxe5 wins it, and Black is clearly better.' },
        { text: '8.f4', why: 'This leaves the d4-pawn alive. After 8...dxc3 9.bxc3 Black is simply a pawn up.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 8...Nb6 considered too slow?',
      moves: `${TARRASCH_CLOSED} Nb6`,
      orientation: 'black',
      choices: [
        { text: 'The knight leaves the kingside and no longer supports ...f6, so White builds up freely', correct: true, why: 'Right. The engine gives White a clear advantage. The knight was one of the attackers of e5.' },
        { text: 'It loses a piece to a tactic', why: 'Nothing is lost by force. The move is just slow, and White gets a clear edge.' },
        { text: 'It allows checkmate on h7', why: 'There is no mate. The problem is that Black has no play against e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 9.exf6 Nxf6, which Black pawn has become a long-term weakness?',
      moves: `${TARRASCH_CLOSED} f6 exf6 Nxf6`,
      orientation: 'white',
      choices: [
        { text: 'The e6-pawn', correct: true, why: 'Yes. No Black pawn can defend it any more, and White controls e5 in front of it.' },
        { text: 'The d5-pawn', why: 'The e6-pawn still defends d5. The pawn that has lost all pawn support is e6.' },
        { text: 'The b7-pawn', why: 'The b7-pawn has the a7-pawn next to it and is not under attack. The weak one is e6.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is the idea of 8...Qb6?",
      moves: `${TARRASCH_CLOSED} Qb6`,
      orientation: 'black',
      choices: [
        { text: 'Attack d4 a second time and hit b2, then break with ...f6', correct: true, why: 'Right. White usually brings the d2-knight to f3 to hold d4. Black then plays ...f6 anyway.' },
        { text: "Trap White's queen", why: "White's queen is safe on d1. The black queen goes after d4 and b2." },
        { text: 'Prepare to castle queenside', why: 'In the main line Black castles kingside (12...O-O). The queen move is about d4.' }
      ]
    }
  ],
  key: { name: 'Closed Tarrasch: 8.cxd4, Black to choose', moves: TARRASCH_CLOSED, orientation: 'black' },
  terms: [
    { term: 'Closed Tarrasch', meaning: 'The Tarrasch with 3...Nf6 4.e5, where White locks the center with a pawn chain on d4 and e5.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks the enemy pawn chain, like ...c5 or ...f6 in the French.' },
    { term: 'Backward pawn', meaning: 'A pawn that no friendly pawn can defend, with the square in front of it controlled by the enemy. Here, e6 after ...f6 and exf6.' }
  ]
})
