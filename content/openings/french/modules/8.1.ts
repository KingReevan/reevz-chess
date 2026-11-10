import { defineModule } from '../../../types'
import { CLASSICAL_MAIN } from '../lines'

/** 7...O-O 8.Nf3 c5 9.Bd3: White's bishop aims at h7 */
const BD3 = `${CLASSICAL_MAIN} O-O Nf3 c5 Bd3`
/** 9...cxd4?: the key position, White to move */
const CXD4 = `${BD3} cxd4`
/** cla-greek: 10.Bxh7+ Kxh7 11.Ng5+ Qxg5 12.fxg5 dxc3 13.Qh5+ Kg8 14.O-O */
const GREEK = `${CXD4} Bxh7+ Kxh7 Ng5+ Qxg5 fxg5 dxc3 Qh5+ Kg8 O-O`
/** cla-greek-kh8: 10...Kh8 11.Ng5 g6 12.Qxd4 */
const KH8 = `${CXD4} Bxh7+ Kh8 Ng5 g6 Qxd4`
/** cla-greek-f6: 9...f6 10.exf6 Qxf6 11.g3 cxd4 12.Nxd4 Nc6 */
const F6 = `${BD3} f6 exf6 Qxf6 g3 cxd4 Nxd4 Nc6`

export default defineModule({
  id: '8.1',
  title: 'The Greek Gift: when Bxh7+ works',
  minutes: 12,
  level: 3,
  goals: [
    'Learn the checklist for the bishop sacrifice Bxh7+',
    'See why 9...cxd4? allows 10.Bxh7+! in the Classical, and how 11...Qxg5! limits the damage',
    'As Black, stop the sacrifice in time with 9...f6!'
  ],
  intro:
    "In the French, White's e4–e5 push drives Black's knight from f6 to d7. That knight was the best defender of h7. So White often has a bishop sacrifice on h7, the Greek Gift. Sometimes it wins, sometimes it only gives a strong attack, and sometimes it simply loses a piece. This module gives you the checklist, and shows a line where it works.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Classical: 9...cxd4? 10.Bxh7+!',
      intro: 'The Classical main line, 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4. Watch the f4-pawn: it is what makes the knight jump to g5 work.',
      moves: GREEK,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Black hits d4',
          text: "8...c5. Black attacks the base of White's chain, as usual. Black's king has castled, and the knight that used to guard h7 now stands on d7.",
          arrows: [['c5', 'd4', 'red']],
          marks: ['h7']
        },
        17: {
          title: 'The bishop aims at h7',
          text: '9.Bd3. The diagonal from d3 to h7 is empty. White now threatens 10.Bxh7+, followed by a knight check on g5.',
          arrows: [['d3', 'h7', 'red'], ['f3', 'g5', 'blue']],
          marks: ['h7']
        },
        18: {
          title: 'Ignoring the threat',
          text: '9...cxd4. Black takes a pawn and attacks the c3-knight, but does nothing about h7. Slower moves like 9...Nc6 are even worse here.',
          arrows: [['d4', 'c3', 'red']],
          ann: '?'
        },
        19: {
          title: 'The sacrifice',
          text: '10.Bxh7+. The bishop takes the h7-pawn with check. It pulls Black\'s king forward, toward White\'s knight and queen.',
          arrows: [['h7', 'g8', 'red']],
          ann: '!'
        },
        20: {
          title: 'The king takes',
          text: '10...Kxh7. Black accepts. Declining with 10...Kh8 is no better (see the last walkthrough).',
          marks: ['h7']
        },
        21: {
          title: 'Knight check',
          text: "11.Ng5+. The knight checks from g5. Black's queen attacks it, but the f4-pawn defends it. The knight's jump also clears the d1–h5 diagonal for White's queen.",
          arrows: [['g5', 'h7', 'red'], ['f4', 'g5', 'green'], ['d1', 'h5', 'blue']]
        },
        22: {
          title: 'Give up the queen',
          text: '11...Qxg5. The best defense. King moves are worse: after 11...Kg8 12.Qh5, Qh7 mate is threatened and Black has to give the queen anyway, and 11...Kg6 12.Qd3+ or 11...Kh8 12.Qh5+ is even worse.',
          arrows: [['f4', 'g5', 'red']],
          ann: '!'
        },
        23: {
          title: 'Queen won',
          text: '12.fxg5. White takes the queen with the pawn. The f-file is now half-open for White: Black still has the f7-pawn.',
          marks: ['g5']
        },
        24: {
          title: 'Black takes a knight',
          text: "12...dxc3. This is what 9...cxd4 was good for: the pawn takes the c3-knight. Black now has two rooks, a bishop and two knights against White's queen and two rooks.",
          arrows: [['c3', 'b2', 'red']]
        },
        25: {
          title: 'Queen check',
          text: '13.Qh5+. The queen arrives with check. 13...Kg8 is the only legal move.',
          arrows: [['h5', 'h7', 'red']]
        },
        26: {
          title: 'Back to g8',
          text: '13...Kg8. Black\'s king has lost its h-pawn, and White\'s queen and the g5-pawn are close to it.',
          marks: ['h7']
        },
        27: {
          title: 'The rook joins in',
          text: "14.O-O. The rook comes to the half-open f-file. White has a queen against three minor pieces and a lasting attack. The engine says White is clearly better, but not winning. Black's best is to bring the knights back to defend, starting with 14...Nxe5, not to grab a pawn with 14...cxb2?.",
          arrows: [['f1', 'f7', 'red']],
          marks: ['f7']
        }
      }
    },
    {
      kind: 'text',
      title: 'The Greek Gift checklist',
      body:
        "Before you play Bxh7+, check every line of this list. If one is missing, the sacrifice usually fails.\n\n**1. The bishop reaches h7 with check.** The diagonal from d3 to h7 must be empty.\n\n**2. A knight can jump to g5 with check.** Usually the f3-knight.\n\n**3. The queen can join fast,** usually on h5 (sometimes g4 or d3). Often the knight's jump opens its path.\n\n**4. Black can't defend with ...Nf6.** In the French, the e5-pawn takes f6 away: a knight there is simply captured.\n\n**5. Nothing takes the knight on g5 for free.** A bishop on e7, or a pawn on f6 or h6, would take it. Black's queen can take it too, unless a White pawn on f4 or h4 takes back.\n\n**6. The king can't run safely to g6.**\n\nIn the line above, every point is true. Black's dark-squared bishop was traded on move 6, and the f4-pawn guards g5. In the Exchange Variation (Module 3.3), the same sacrifice wins a pawn in a different way: 7...Bg4? 8.Bxh7+! Kxh7 9.Ng5+ uncovers White's queen against the loose g4-bishop."
    },
    {
      kind: 'walkthrough',
      title: 'Black stops it in time: 9...f6!',
      intro: 'Same position after 9.Bd3. This time Black deals with the threat at once.',
      moves: F6,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'The threat',
          text: '9.Bd3. White threatens 10.Bxh7+ and 11.Ng5+. Black has to stop it now.',
          arrows: [['d3', 'h7', 'red'], ['f3', 'g5', 'red']]
        },
        18: {
          title: 'Hit the head',
          text: '9...f6. The pawn attacks e5, and it also guards g5. Now 10.Bxh7+? Kxh7 just loses the bishop, because 11.Ng5+ would be met by 11...fxg5.',
          arrows: [['f6', 'e5', 'red'], ['f6', 'g5', 'green']],
          ann: '!'
        },
        19: {
          title: 'White trades',
          text: '10.exf6. White trades the head of the chain. Castling first is about as good.',
          marks: ['f6']
        },
        20: {
          title: 'The queen takes back',
          text: '10...Qxf6. The queen recaptures and hits two pawns: f4 and d4. Taking back with the rook is just as good.',
          arrows: [['f6', 'f4', 'red'], ['f6', 'd4', 'red']]
        },
        21: {
          title: 'Guard f4',
          text: '11.g3. The g-pawn defends f4. Nothing else did.',
          arrows: [['g3', 'f4', 'green']]
        },
        22: {
          title: 'Trade on d4',
          text: '11...cxd4. Black trades pawns. The c-file is now half-open for Black.',
          marks: ['d4']
        },
        23: {
          title: 'The knight takes back',
          text: "12.Nxd4. The knight recaptures. Black must not grab it: 12...Qxd4?? 13.Bxh7+ gives check and uncovers White's queen, which then takes the queen on d4.",
          arrows: [['d3', 'h7', 'yellow'], ['d1', 'd4', 'blue']]
        },
        24: {
          title: 'Level',
          text: '12...Nc6. The knight develops and attacks the d4-knight, which has no defender. Black has freed the game, and the position is level.',
          arrows: [['c6', 'd4', 'red'], ['f6', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Declining with 10...Kh8 is no better',
      intro: "Some players think it is safer not to take the bishop. In this line it isn't.",
      moves: KH8,
      start: 19,
      orientation: 'white',
      steps: {
        19: {
          title: 'The sacrifice',
          text: '10.Bxh7+. The same sacrifice as before.',
          arrows: [['h7', 'g8', 'red']]
        },
        20: {
          title: 'Into the corner',
          text: '10...Kh8. Black leaves the bishop alone and steps into the corner.',
          arrows: [['g8', 'h8', 'blue']]
        },
        21: {
          title: 'The knight comes anyway',
          text: '11.Ng5. Now the knight guards the h7-bishop, and the queen is ready for h5. Black has to stop Qh5.',
          arrows: [['g5', 'h7', 'green'], ['d1', 'h5', 'blue']]
        },
        22: {
          title: 'Block the bishop',
          text: "11...g6. The pawn covers h5, so the queen can't land there. The price: the dark squares f6 and h6 near Black's king are now weak.",
          marks: ['f6', 'h6']
        },
        23: {
          title: 'The pawn comes back',
          text: '12.Qxd4. The queen takes the d4-pawn. White is a pawn up, the h7-bishop is still alive, and the attack goes on. The engine says this is no better for Black than 10...Kxh7.',
          arrows: [['g5', 'h7', 'green']],
          marks: ['h7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'How to read the threat',
      body:
        "When a White bishop lands on d3 with Black's king castled and the f6-knight driven away, stop and run the checklist from White's side. If every point is true, the sacrifice is a real threat, and you must deal with it now. In this line 9...f6 does the job: it guards g5 and prepares to bring a piece back to f6."
    }
  ],
  takeaway:
    "Bxh7+ needs a bishop that reaches h7, a knight that reaches g5, a queen that joins fast, no ...Nf6 defense and no free ...Bxg5 (or ...fxg5). In the Classical, 9...cxd4? 10.Bxh7+! gives White a strong attack; 11...Qxg5! limits the damage, and 9...f6! avoids it.",
  lookAhead:
    "The checklist matters most when it fails. Module 8.2 shows two positions where Bxh7+ looks just as tempting and loses.",
  drills: [
    {
      title: 'Play the Greek Gift',
      prompt: "You're White. Black has just played 9...cxd4?, ignoring your threat. Sacrifice on h7, check with the knight, and take Black's queen.",
      moves: `${CXD4} Bxh7+ Kxh7 Ng5+ Qxg5 fxg5`,
      start: 18,
      side: 'white',
      hints: [
        'Start with a bishop capture that gives check.',
        '10.Bxh7+ Kxh7 11.Ng5+. When the queen takes on g5, the f4-pawn takes back.'
      ],
      success: '10.Bxh7+ Kxh7 11.Ng5+ Qxg5 12.fxg5. White has won the queen for a bishop and a knight. Black will take a second knight with 12...dxc3, but White keeps a strong attack.'
    },
    {
      title: 'Stop the sacrifice',
      prompt: "You're Black. White has just played 9.Bd3, threatening Bxh7+. Stop it with a pawn move that also hits e5, and take back with your queen when White trades.",
      moves: `${BD3} f6 exf6 Qxf6`,
      start: 17,
      side: 'black',
      hints: [
        'Which pawn can guard g5 and attack e5 at the same time?',
        '9...f6, and after 10.exf6 the queen takes back.'
      ],
      success: '9...f6 10.exf6 Qxf6. A knight on g5 can now be taken, and Black has a free game.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: "White to move. Black has just played 9...cxd4. What is White's best move?",
      moves: CXD4,
      orientation: 'white',
      choices: [
        { text: '10.Bxh7+', correct: true, why: 'Right. After 10...Kxh7 11.Ng5+ Black has to give up the queen, and White is clearly better.' },
        { text: '10.Nxd4', why: 'It wins the pawn back, but the position is level. Every point on the checklist is true, so the sacrifice is stronger.' },
        { text: '10.Nb5', why: 'A decent move that keeps a small edge, but it lets Black off the hook. 10.Bxh7+ is much stronger.' }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move. White has played 10.Bxh7+ Kxh7 11.Ng5+. What is Black's best defense?",
      moves: `${CXD4} Bxh7+ Kxh7 Ng5+`,
      orientation: 'black',
      choices: [
        { text: '11...Qxg5', correct: true, why: 'Right. Black gives up the queen for a knight, then wins a second knight with ...dxc3. White is clearly better, but not winning.' },
        { text: '11...Kh8', why: 'This allows mate: 12.Qh5+ Kg8 13.Qh7#.' },
        { text: '11...Kg6', why: 'The king walks into the open. 12.Qd3+ starts an attack that wins for White.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...f6, why does 10.Bxh7+ no longer work?',
      moves: `${BD3} f6`,
      orientation: 'black',
      choices: [
        { text: 'After 10...Kxh7 11.Ng5+, the f6-pawn takes the knight', correct: true, why: 'Right. A pawn on f6 guards g5. Point 5 of the checklist is missing, so the sacrifice just loses material.' },
        { text: "Black's queen now guards h7", why: 'The queen on e7 does not reach h7. The f6-pawn guards g5, and that is what breaks the sacrifice.' },
        { text: 'The d3-bishop is pinned', why: 'Nothing pins the bishop. Bxh7+ is legal, it just loses material after ...Kxh7 and ...fxg5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which of these is part of the Greek Gift checklist?',
      choices: [
        { text: 'No Black piece or pawn can take a knight on g5 for free', correct: true, why: 'Yes. A bishop on e7 or a pawn on f6 or h6 would take it, and the attack would be over.' },
        { text: 'White must have castled first', why: 'Not needed. In the Classical line White castled only on move 14, after the sacrifice.' },
        { text: "Black's queen must still be on d8", why: "In the Classical line Black's queen was on e7. What matters is whether it can take on g5 for free." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "In the Classical line, Black's queen on e7 attacks g5. Why can White still play 11.Ng5+?",
      moves: `${CXD4} Bxh7+ Kxh7`,
      orientation: 'white',
      choices: [
        { text: 'The f4-pawn defends g5, so ...Qxg5 costs Black the queen', correct: true, why: 'Right. 11...Qxg5 12.fxg5 gives White the queen. The f4-pawn is what makes the sacrifice work here.' },
        { text: 'The queen on e7 is pinned', why: 'Nothing pins it. Black can play ...Qxg5, but then fxg5 takes the queen.' },
        { text: 'The knight is defended by the queen on d1', why: 'The queen on d1 does not reach g5. The defender is the f4-pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black to move. White has just played 9.Bd3. What does White threaten?',
      moves: BD3,
      orientation: 'black',
      choices: [
        { text: '10.Bxh7+ followed by 11.Ng5+', correct: true, why: 'Yes. Every point of the checklist is true, so Black must stop it now. 9...f6! does.' },
        { text: '10.dxc5, winning a pawn', why: 'Black would just take back with the knight. The real threat is on h7.' },
        { text: '10.Nb5, winning the c7-pawn', why: 'Black has no c7-pawn any more: it went to c5. The threat is the bishop sacrifice on h7.' }
      ]
    }
  ],
  key: { name: 'Classical: 9...cxd4? allows 10.Bxh7+', moves: CXD4, orientation: 'white' },
  terms: [
    { term: 'Greek Gift', meaning: "The bishop sacrifice Bxh7+ against a castled king, usually followed by Ng5+ and the queen to h5. It is a 'gift' that may hide a trap." },
    { term: 'Minor piece', meaning: 'A bishop or a knight. Each is worth about three pawns, so three minor pieces are worth about a queen.' },
    { term: 'Checklist', meaning: 'A short list of conditions you check before a sacrifice. If one is missing, the sacrifice usually fails.' }
  ]
})
