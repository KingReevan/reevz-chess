# Writing modules for Reevz Chess

This guide is for anyone writing course content. Read it once, then use
`content/openings/ruy-lopez/modules/2.2.ts` as the quality reference: every module should feel like that one.

## Who we're teaching

A beginner (under 1000 rating) who wants to learn openings **deeply**, a little every day.
They know how the pieces move and basic tactics like forks and pins. They do not know theory.

- **One idea per module.** If you're teaching two ideas, it's two modules.
- **Always explain why.** "6.Re1 defends e4" is not enough; say why that matters.
- **Plain words, short sentences.** No jargon without a definition (add it to `terms`).
- **Lots of examples.** Every module has at least 2 walkthroughs: the main idea, plus an example,
  an alternative, a typical mistake, or a trap.
- Friendly and direct. No hype, no emoji. Avoid em dashes; split the sentence instead.

## File layout

One file per module: `content/openings/<opening>/modules/<id>.ts`, default-exporting `defineModule({...})`.
The schema with comments is in `content/types.ts`. Common move prefixes are in `content/lines.ts`
(`RUY`, `MORPHY`, `CLOSED7`, `CLOSED`, `CLOSED_OO`, `OPEN`, `BERLIN`, `EXCHANGE`).
The plan for every module is in `content/openings/ruy-lopez/OUTLINE.md`.

## Module shape

| field | what to write |
|---|---|
| `title` | ≤ 70 chars. Use the outline title. |
| `minutes` / `level` | 8–12 minutes. Level 1 Beginner … 4 Expert. |
| `goals` | 2–3 short lines starting with a verb or a noun phrase. |
| `intro` | 2–3 sentences that pose the question the module answers. |
| `sections` | 2–3 walkthroughs, plus 1–2 `text` blocks and/or callouts (`tip`, `warning`, `history`). |
| `takeaway` | The one or two sentences to remember. |
| `lookAhead` | Optional bridge to the next module or chapter. |
| `drills` | 1–2 practice boards. |
| `quiz` | 3–4 questions with feedback on every choice. |
| `exam` | 2 more questions, held back for the final exam. Different from the quiz. |
| `key` | The module's key position with a name, e.g. "Marshall Attack: 8...d5". Used in flashcards. |
| `terms` | 2–4 chess words used in the module, with plain definitions. |

### Walkthroughs

- `moves` is SAN from the starting position. Write SAN exactly as chess.js does (`Qxe4+`, `O-O`, `exd5`).
  Put `!`/`?` in the step's `ann`, never in the SAN.
- `start` is how many moves are already played. Start near the action: usually the position just
  before the idea, not move 1 (except in Chapter 1).
- Write a step for **every** position from `start` to the end. 5–12 steps is ideal; the validator caps it at 24.
- Step `title`: 2–6 words. Step `text`: 1–3 short sentences. Begin with the move in notation
  ("9...Na5.") and then explain it.
- Arrows mean the same thing everywhere:
  - **green**: a good move, a defence, or the plan to follow
  - **red**: an attack, a threat or a check
  - **yellow**: the key idea or target
  - **blue**: an open line, a piece route, or an alternative
  Use 0–3 arrows per step. `marks` circles squares (use for targets and weak squares).

### Drills

- The learner plays `side`; the app plays the other side's moves from `moves`.
- The line must **end with the learner's move**.
- Start at the moment the learner has to find something. Give 1–2 hints, gentlest first.
- A "play the main line from memory" drill is good for main-line modules; a "find the tactic" drill
  is good for trap modules.

### Questions

- 2–4 choices, exactly one `correct: true`. Every choice gets a `why` that teaches something.
- Mix `type`s: `name` (name the variation shown), `move` (find the move), `plan`, `trap`, `order`
  (move-order question), `concept`.
- Use `moves` + `orientation` to show a board when it helps.
- Wrong answers should be plausible, not silly.

## Accuracy rules (important)

1. **Use the research.** Lines come from `docs/research/ruy-lopez-lines.json` and the explanations in
   `docs/research/ruy-lopez-theory.md`. Prefer the exact research move orders.
2. **Check every tactical claim.** If a step says "this is mate", "the queen is pinned", "this forks e5 and e4"
   or "the knight is trapped", confirm it. When unsure, write a small chess.js script in your scratch folder
   to check attacks, checks or mates. Never guess.
3. **Model games:** only mention games the research doc lists as confirmed, and never state a result
   the doc marks as unconfirmed.
4. No engine evaluations or statistics. Describe positions in words ("White is better", "roughly equal").
5. Names follow the research doc. Where sources disagree, mention the other name once.

## Checking your work

```
npx vitest run tests/content.test.ts -t "module 3.4"
```

The validator replays every line, checks every step exists, every arrow is a real square, drills end
with the learner's move, and every question has exactly one right answer. Fix everything it reports.
