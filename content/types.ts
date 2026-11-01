/**
 * Content schema for Reevz Chess courses.
 *
 * Every move sequence is a space-separated string of SAN moves played from the
 * standard starting position, e.g. "e4 e5 Nf3 Nc6 Bb5 a6". Write SAN exactly as
 * chess.js prints it, including "+" and "#". Annotation marks such as "!" or "?"
 * never go inside the SAN; put them in a step's `ann` field instead.
 *
 * `tests/content.test.ts` replays every line with chess.js and checks the rules
 * described here, so an illegal or mistyped move can't ship.
 */

/** Whose repertoire a chapter or opening belongs to. */
export type Side = 'white' | 'black' | 'both'
export type Color = 'white' | 'black'

/**
 * Arrow colours carry meaning across the whole app:
 * - green:  a good move, a defence, or a plan to follow
 * - red:    an attack, a threat, or a check
 * - yellow: the key idea or target of the position
 * - blue:   an open line, a piece route, or an alternative
 */
export type ArrowColor = 'green' | 'red' | 'yellow' | 'blue'
export type Arrow = [from: string, to: string, color: ArrowColor]
export type Annotation = '!' | '?' | '!!' | '??' | '!?' | '?!'

/** Narration for one position in a walkthrough. */
export interface Step {
  /** Short heading, 2–6 words. */
  title: string
  /** 1–3 short sentences explaining the move and why it matters. */
  text: string
  arrows?: Arrow[]
  /** Squares to circle (yellow ring), e.g. ['e5']. */
  marks?: string[]
  /** Annotation for the move that led to this position. */
  ann?: Annotation
}

/** A move-by-move example on a board the learner steps through. */
export interface Walkthrough {
  kind: 'walkthrough'
  title: string
  /** Optional sentence shown above the board. */
  intro?: string
  /** SAN moves from the starting position. */
  moves: string
  /** Number of moves already played when the walkthrough starts (0 = initial position). */
  start: number
  orientation: Color
  /**
   * One step for EVERY position from `start` to the end of `moves`, keyed by the
   * number of moves played. steps[start] describes the starting position;
   * steps[n] describes the position after the n-th move.
   */
  steps: Record<number, Step>
}

/** Plain explanatory prose. Supports paragraphs (blank line) and **bold**. */
export interface TextBlock {
  kind: 'text'
  title?: string
  body: string
}

/** A highlighted box: a tip, a warning about a common mistake, or a bit of history. */
export interface Callout {
  kind: 'tip' | 'warning' | 'history'
  title: string
  body: string
}

export type Section = Walkthrough | TextBlock | Callout

/** An interactive practice board. The learner plays `side`; the app plays the other side. */
export interface Drill {
  title?: string
  prompt: string
  /** SAN moves from the starting position, including the moves the learner must find. */
  moves: string
  /** Number of moves already on the board when the drill starts. */
  start: number
  side: Color
  /** Progressive hints, gentlest first. */
  hints?: string[]
  /** Shown when the learner finishes the line. */
  success: string
}

export interface Choice {
  text: string
  correct?: boolean
  /** Feedback shown when this choice is picked. Explain why it's right or wrong. */
  why: string
}

export type QuestionType = 'name' | 'move' | 'plan' | 'trap' | 'order' | 'concept'

export interface Question {
  type: QuestionType
  prompt: string
  /** Optional position to show: SAN moves from the start. */
  moves?: string
  orientation?: Color
  /** 2–4 choices, exactly one correct. */
  choices: Choice[]
}

export interface Term {
  term: string
  meaning: string
}

export interface Module {
  /** "<chapter>.<n>", e.g. "2.2". Must match the file name and the chapter list. */
  id: string
  title: string
  /** Estimated time, 6–15 minutes. */
  minutes: number
  /** 1 Beginner, 2 Intermediate, 3 Advanced, 4 Expert. */
  level: 1 | 2 | 3 | 4
  /** 2–4 learning goals, each one short line. */
  goals: string[]
  /** One short paragraph that sets up the question this module answers. */
  intro: string
  /** The lesson body, in order. Must contain at least two walkthroughs. */
  sections: Section[]
  /** The one sentence to remember. */
  takeaway: string
  /** Optional bridge to what comes next. */
  lookAhead?: string
  /** At least one practice board. */
  drills: Drill[]
  /** 3+ questions at the end of the module. */
  quiz: Question[]
  /** 2+ extra questions saved for the final exam. */
  exam: Question[]
  /** The module's key position. Used for flashcards, the line trainer and naming positions. */
  key: { name: string; moves: string; orientation: Color }
  terms?: Term[]
}

export interface Chapter {
  id: string
  n: number
  title: string
  side: Side
  blurb: string
  /** Extra search keywords. */
  tags: string
  /** Three key ideas shown in the Coach panel. */
  ideas: string[]
  /** Module ids in learning order. */
  modules: string[]
}

export interface MapNode {
  move: string
  name: string
  /** Chapter id this node opens, or a specific module id. */
  chapter: string
  module?: string
  children?: MapNode[]
}

export interface BookLine {
  id: string
  name: string
  eco: string
  side: Side
  moves: string[]
  status: 'popular' | 'respectable' | 'rare' | 'dubious' | 'trap' | 'historical'
}

/** The four practice bots. Their strength is fixed by the app; each course gives them a personality. */
export type BotLevel = 'easy' | 'club' | 'sharp' | 'master'

export interface BotPersona {
  name: string
  /** Chess piece symbol for the avatar, e.g. '♞'. */
  glyph: string
  /** One line under the name in the bot picker. */
  blurb: string
  /** What the bot says when a game starts. */
  hi: string
  /** Said when the bot checkmates the learner. */
  botWins?: string
  /** Said when the learner checkmates the bot. */
  youWin?: string
  /** Book lines this bot steers into, matched against BookLine names. */
  likes?: RegExp
}

/** An achievement that belongs to one course. */
export interface Badge {
  /** Unique across all courses, because earned badges are saved by id. */
  id: string
  title: string
  desc: string
  /** Chess piece symbol for the medal. */
  glyph: string
  /** Earned by finishing a chapter, solving a drill ("<module>#<drill index>"), or passing the final exam. */
  for: { chapter: string } | { drill: string } | { exam: true }
}

export interface Opening {
  id: string
  name: string
  alias: string
  side: Side
  /** ECO range, e.g. "C60–C99". The home grid is sorted by it. */
  eco: string
  /** SAN moves that define the opening. */
  moves: string
  about: string
  /** The board on the course overview and the home card. */
  hero: { orientation: Color; arrows?: Arrow[]; caption: string }
  chapters: Chapter[]
  modules: Record<string, Module>
  map: MapNode
  book: BookLine[]
  badges: Badge[]
  bots: Record<BotLevel, BotPersona>
}

/** Helper that gives module files type checking without extra imports. */
export const defineModule = (m: Module): Module => m
