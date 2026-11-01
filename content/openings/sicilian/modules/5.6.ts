import { defineModule } from '../../../types'
import { OPEN_NC6 } from '../lines'

/** svesh-5e5 */
const E5 = `${OPEN_NC6} Nf6 Nc3 e5`
/** svesh-6nf5: 6.Nf5 d5! 7.exd5 Bxf5 8.dxc6 bxc6 */
const NF5 = `${E5} Nf5 d5 exd5 Bxf5 dxc6 bxc6`
/** svesh-6nb3: 6.Nb3 Bb4 7.Bd3 d5 */
const NB3 = `${E5} Nb3 Bb4 Bd3 d5`
/** svesh-6nxc6: 6.Nxc6 bxc6 7.Bc4 Be7 8.O-O O-O */
const NXC6 = `${E5} Nxc6 bxc6 Bc4 Be7 O-O O-O`

export default defineModule({
  id: '5.6',
  title: "White's sixth-move sidelines",
  minutes: 10,
  level: 3,
  goals: [
    'Meet 6.Nf5 with 6...d5!, and 6.Nb3 or 6.Nf3 with ...Bb4',
    'See why 6.Nxc6 bxc6 makes the d5 hole disappear',
    'Understand why only 6.Ndb5 really tests the Sveshnikov'
  ],
  intro:
    "After 5...e5, White's knight must leave d4. Module 5.1 showed the best square, b5, where the knight threatens Nd6+. But players who don't know the theory often pick another square. What should Black do against 6.Nf5, 6.Nb3, 6.Nf3 or 6.Nxc6? In each case Black gets a comfortable, level game, and it helps to know how.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6.Nf5 d5!',
      intro: 'The most aggressive-looking sideline. Watch the c8-bishop: one pawn move opens its path to f5.',
      moves: NF5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The knight must move',
          text: "5...e5. White's knight is attacked. Its best square is b5, but let's see the others.",
          arrows: [['e5', 'd4', 'red']]
        },
        11: {
          title: 'Forward to f5',
          text: '6.Nf5. The knight jumps forward and eyes d6 and g7. It looks active, but the d7-pawn is all that stands between it and the c8-bishop.',
          arrows: [['f5', 'd6', 'red'], ['f5', 'g7', 'red']],
          marks: ['d7']
        },
        12: {
          title: 'Strike in the center',
          text: '6...d5. The pawn attacks e4, and it opens the c8-bishop\'s diagonal, so the f5-knight is now attacked.',
          arrows: [['d5', 'e4', 'red'], ['c8', 'f5', 'red']],
          ann: '!'
        },
        13: {
          title: 'White takes',
          text: '7.exd5. White grabs the pawn, and now the d5-pawn attacks the c6-knight.',
          arrows: [['d5', 'c6', 'red']]
        },
        14: {
          title: 'Bishop takes knight',
          text: '7...Bxf5. Black removes the knight first. Taking on d5 with the knight would be worse, because White answers 8.Nxg7+.',
          ann: '!'
        },
        15: {
          title: 'White takes the knight',
          text: '8.dxc6. White takes on c6. For a moment White is a pawn up.'
        },
        16: {
          title: 'Level and easy',
          text: "8...bxc6. Material is level. Black has an active bishop on f5, pawns on c6 and e5, and no weak d5 square: the c6-pawn guards it. White has got nothing from the opening.",
          arrows: [['c6', 'd5', 'green']],
          marks: ['f5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Nb3: pin, then ...d5',
      intro: 'A quiet retreat. Black uses the time to pin a knight and then break in the center.',
      moves: NB3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Same position',
          text: '5...e5. This time White steps back.',
          arrows: [['e5', 'd4', 'red']]
        },
        11: {
          title: 'A quiet retreat',
          text: '6.Nb3. The knight is safe, but it no longer threatens anything.',
          marks: ['b3']
        },
        12: {
          title: 'The pin',
          text: "6...Bb4. The bishop pins the c3-knight to White's king, so the knight can't take on e4 any more. Black threatens ...Nxe4.",
          arrows: [['b4', 'e1', 'red'], ['f6', 'e4', 'red']]
        },
        13: {
          title: 'Guarding e4',
          text: '7.Bd3. The bishop defends the e4-pawn.',
          arrows: [['d3', 'e4', 'green']]
        },
        14: {
          title: 'The freeing break',
          text: "7...d5. Black's d-pawn reaches d5 in one move. No backward d-pawn, no hole on d5: Black's problems are gone, and the game is roughly level.",
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Nxc6: helping Black\'s center',
      intro: "From White's side: trading on c6 looks simple, but it hands Black a useful pawn.",
      moves: NXC6,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Same position',
          text: '5...e5. White decides to trade knights.',
          arrows: [['d4', 'c6', 'blue']]
        },
        11: {
          title: 'The trade',
          text: "6.Nxc6. White swaps its centralized knight for Black's. The knight on c6 attacks the queen, so Black takes back at once.",
          arrows: [['c6', 'd8', 'red']]
        },
        12: {
          title: 'Toward the center',
          text: '6...bxc6. Black takes toward the center. The c6-pawn now guards d5, so d5 is no longer a hole, and the b-file is half-open for Black\'s rook. 6...dxc6 is also fine.',
          arrows: [['c6', 'd5', 'green'], ['b8', 'b2', 'blue']]
        },
        13: {
          title: 'Bishop to c4',
          text: '7.Bc4. White develops the bishop to an active square.',
          arrows: [['c4', 'f7', 'blue']]
        },
        14: {
          title: 'Calm development',
          text: '7...Be7. Black develops and gets ready to castle.'
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe.'
        },
        16: {
          title: 'A level game',
          text: "8...O-O. Both sides are developed and the game is level. Black's pawns on c6 and e5 keep White's pieces out of d5 and d4.",
          arrows: [['c6', 'd5', 'green'], ['e5', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: '6.Nf3, and why 6.Ndb5 is the test',
      body:
        "**6.Nf3** brings the knight back to attack e5. Black answers as against 6.Nb3: 6...Bb4 pins the c3-knight, and after 7.Bc4 O-O the game is level.\n\nWhy are all these moves harmless? The retreats threaten nothing. 6.Nf5 does eye d6, but 6...d5 hits the knight first. Only **6.Ndb5** forces Black's hand: it threatens Nd6+, so Black must play ...d6. That pawn move fixes the hole on d5 and the backward d6-pawn, the two weaknesses White plays against for the rest of the game. Against the sidelines, Black is not forced into ...d6 at once. There is time to pin with ...Bb4, break with ...d5, or get a pawn to c6 that guards d5."
    },
    {
      kind: 'tip',
      title: 'Ask what the knight threatens',
      body:
        "When your opponent's knight retreats, ask what it threatens from its new square. If the answer is \"nothing\", you have time for your best plan. In these sidelines that plan is ...d5, or a pin with ...Bb4 first."
    }
  ],
  takeaway:
    "Only 6.Ndb5 forces ...d6 and fixes Black's weaknesses. Against 6.Nf5, 6...d5! equalizes at once. Against 6.Nb3 and 6.Nf3, ...Bb4 and then ...d5 or castling gives a level game, and 6.Nxc6 bxc6 makes the d5 hole disappear.",
  lookAhead:
    "Next, a close cousin of the Sveshnikov: Module 5.7 shows what happens when Black plays ...e5 one move earlier, before ...Nf6.",
  drills: [
    {
      title: 'Answer 6.Nf5',
      prompt: "You're Black. White is about to play 6.Nf5. Hit back in the center and finish the sequence.",
      moves: NF5,
      start: 10,
      side: 'black',
      hints: ['One pawn move hits e4 and opens a diagonal toward f5.', 'After 7.exd5, take the knight with the bishop first. After 8.dxc6, take back with the b-pawn.'],
      success: "6...d5! 7.exd5 Bxf5 8.dxc6 bxc6. Material is level, your bishop is active, and d5 is no longer a hole."
    },
    {
      title: 'Answer 6.Nb3',
      prompt: "You're Black. White is about to retreat 6.Nb3. Pin a knight, and after White guards e4, break in the center.",
      moves: NB3,
      start: 10,
      side: 'black',
      hints: ['Pin the c3-knight to the king with your dark-squared bishop.', 'After 7.Bd3, push your d-pawn two squares.'],
      success: '6...Bb4 7.Bd3 d5. The pin made White spend a move on e4, and ...d5 solved Black\'s problems.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White has just played 6.Nf5. What is Black\'s best move?',
      moves: `${E5} Nf5`,
      orientation: 'black',
      choices: [
        { text: '6...d5', correct: true, why: 'Right. It hits e4 and opens the c8-bishop\'s diagonal to the f5-knight. After 7.exd5 Bxf5 8.dxc6 bxc6 the game is level.' },
        { text: '6...d6', why: 'Playable, but passive: it gives Black the backward pawn for nothing, and White gets an edge. 6...d5 is much stronger.' },
        { text: '6...Qa5', why: 'The queen comes out too early and achieves little. White is clearly better after 7.Bd2.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 6.Ndb5 cause Black more problems than the other sixth moves?',
      choices: [
        { text: 'It threatens Nd6+, so Black must play ...d6, which fixes the hole on d5 and the backward pawn', correct: true, why: 'Exactly. Against the other moves Black has time for ...d5 or ...Bb4, and never gets those weaknesses.' },
        { text: 'It wins the a7-pawn by force', why: 'The a7-pawn is guarded by the a8-rook and the c6-knight. The real point of 6.Ndb5 is the threat on d6.' },
        { text: 'It attacks Black\'s queen', why: 'A knight on b5 does not attack d8. It threatens Nd6+.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 6.Nb3, why does Black play 6...Bb4?',
      moves: `${E5} Nb3 Bb4`,
      orientation: 'black',
      choices: [
        { text: 'It pins the c3-knight, the defender of e4, so ...Nxe4 becomes a threat', correct: true, why: "Right. White must spend a move guarding e4 (7.Bd3), and then Black frees the game with 7...d5." },
        { text: 'It attacks the b3-knight', why: "A bishop on b4 doesn't attack b3. Its target is the c3-knight, pinned to the king." },
        { text: 'It prepares to castle queenside', why: '...Bb4 clears the way for kingside castling, not queenside. Its main job is the pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Nxc6 bxc6, what happened to the d5 square?',
      moves: `${E5} Nxc6 bxc6`,
      orientation: 'white',
      choices: [
        { text: 'The c6-pawn now guards it, so it is no longer a hole', correct: true, why: 'Yes. A hole is a square that no enemy pawn can attack. With a pawn on c6, Black controls d5 again.' },
        { text: 'It became an even better square for White\'s knight', why: 'The opposite: the c6-pawn now attacks d5, so a White knight there could be chased away.' },
        { text: 'Nothing changed', why: 'Something big changed: before the trade no Black pawn could attack d5. Now the c6-pawn does.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'After 6.Nf5 d5 7.exd5, how should Black take back?',
      moves: `${E5} Nf5 d5 exd5`,
      orientation: 'black',
      choices: [
        { text: '7...Bxf5', correct: true, why: 'Right. The bishop removes the knight first. After 8.dxc6 bxc6 material is level and the game is equal.' },
        { text: '7...Nxd5', why: 'This leaves the f5-knight alive, and 8.Nxg7+! Bxg7 9.Qxd5 leaves White a bit better, with Black\'s kingside weakened.' }
      ]
    },
    {
      type: 'name',
      prompt: "After 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5, which of these knight moves is White's main line?",
      choices: [
        { text: '6.Ndb5', correct: true, why: 'Yes. It threatens Nd6+ and forces 6...d6, which leads to the main Sveshnikov positions.' },
        { text: '6.Nf5', why: '6.Nf5 is a sideline: 6...d5! equalizes at once.' },
        { text: '6.Nb3', why: '6.Nb3 is a quiet sideline: 6...Bb4 and ...d5 give Black a level game.' },
        { text: '6.Nxc6', why: '6.Nxc6 bxc6 gives Black a pawn that guards d5. The game is level.' }
      ]
    }
  ],
  key: { name: 'Sveshnikov sideline: 6.Nf5 d5!', moves: `${E5} Nf5 d5`, orientation: 'black' },
  terms: [
    { term: 'Sideline', meaning: 'A less common move or variation, away from the main line. Some are harmless, some are tricky.' },
    { term: 'Equalize', meaning: 'To reach a position where neither side is better. For Black in the opening, that counts as a success.' },
    { term: 'Freeing move', meaning: 'A move that gets rid of a cramp or a weakness, like ...d5 when the d-pawn was stuck behind.' }
  ]
})
