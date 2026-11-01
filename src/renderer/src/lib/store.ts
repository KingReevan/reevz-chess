import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { dayKey } from './dates'
import { newCard, grade, type Card, type Grade } from './srs'

export type View =
  | { type: 'home' }
  | { type: 'overview' }
  | { type: 'module'; id: string }
  | { type: 'review' }
  | { type: 'exam' }
  | { type: 'play' }
  /** `from: 'home'` keeps the library layout (no course sidebars) when Settings is opened from the home grid. */
  | { type: 'settings'; from?: 'home' }
export type ThemePref = 'system' | 'light' | 'dark'
export type BoardTheme = 'felt' | 'walnut' | 'ice' | 'slate'
export type RightTab = 'coach' | 'play' | 'progress'

interface Persisted {
  /** The opening the learner last entered. */
  openingId: string
  /** "<opening>/<module>" → time finished */
  done: Record<string, number>
  /** YYYY-MM-DD → modules finished that day */
  activity: Record<string, number>
  /** "<opening>/<module>#<drill>" → time solved */
  drills: Record<string, number>
  notes: Record<string, string>
  /** flashcards, keyed like `done` */
  cards: Record<string, Card>
  achievements: Record<string, number>
  /** opening id → best final-exam score (0–100) */
  examBest: Record<string, number>
  theme: ThemePref
  board: BoardTheme
  dailyGoal: number
  sound: boolean
  leftOpen: boolean
  rightOpen: boolean
  rightTab: RightTab
  view: View
  /** Expanded chapters in the course sidebar, as "<opening>/<chapter>". */
  openChapters: string[]
  /** Bot level: easy, club, sharp or master. */
  bot: string
  playAs: 'white' | 'black' | 'random'
  /** 'opening' starts practice games from the course's defining moves. */
  startFrom: 'start' | 'opening'
}

interface Actions {
  go: (v: View) => void
  /** Opens a course: switches to that opening and shows `view` (its overview by default). */
  enter: (openingId: string, view?: View) => void
  set: (p: Partial<Persisted>) => void
  toggleChapter: (id: string, open?: boolean) => void
  complete: (key: string) => void
  solveDrill: (key: string) => void
  gradeCard: (key: string, g: Grade) => void
  award: (id: string) => boolean
  setNote: (key: string, text: string) => void
  recordExam: (openingId: string, score: number) => void
  reset: () => void
}

const initial: Persisted = {
  openingId: 'ruy-lopez',
  done: {}, activity: {}, drills: {}, notes: {}, cards: {}, achievements: {}, examBest: {},
  theme: 'system', board: 'felt', dailyGoal: 2, sound: true,
  leftOpen: true, rightOpen: true, rightTab: 'coach',
  view: { type: 'home' }, openChapters: ['ruy-lopez/c1'],
  bot: 'club', playAs: 'white', startFrom: 'start'
}

export const useStore = create<Persisted & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      go: (view) => set({ view }),
      enter: (openingId, view = { type: 'overview' }) => set({ openingId, view }),
      set: (p) => set(p),
      toggleChapter: (id, open) => {
        const s = new Set(get().openChapters)
        const willOpen = open ?? !s.has(id)
        if (willOpen) s.add(id); else s.delete(id)
        set({ openChapters: [...s] })
      },
      complete: (key) => {
        if (get().done[key]) return
        const day = dayKey()
        set((s) => ({
          done: { ...s.done, [key]: Date.now() },
          activity: { ...s.activity, [day]: (s.activity[day] ?? 0) + 1 },
          cards: s.cards[key] ? s.cards : { ...s.cards, [key]: newCard() }
        }))
      },
      solveDrill: (key) => { if (!get().drills[key]) set((s) => ({ drills: { ...s.drills, [key]: Date.now() } })) },
      gradeCard: (key, g) => set((s) => ({ cards: { ...s.cards, [key]: grade(s.cards[key] ?? newCard(), g) } })),
      award: (id) => {
        if (get().achievements[id]) return false
        set((s) => ({ achievements: { ...s.achievements, [id]: Date.now() } }))
        return true
      },
      setNote: (key, text) => set((s) => ({ notes: { ...s.notes, [key]: text } })),
      recordExam: (openingId, score) => set((s) => ({ examBest: { ...s.examBest, [openingId]: Math.max(s.examBest[openingId] ?? 0, score) } })),
      reset: () => set({ done: {}, activity: {}, drills: {}, notes: {}, cards: {}, achievements: {}, examBest: {}, view: { type: 'home' } })
    }),
    {
      name: 'reevz-chess',
      version: 3,
      // v1 had one opening accordion in the sidebar and chapter ids without an opening prefix.
      migrate: (old, version) => {
        const s = old as Partial<Persisted> & { courseOpen?: boolean }
        if (version < 2) {
          s.openChapters = (s.openChapters ?? []).map((c) => (c.includes('/') ? c : `ruy-lopez/${c}`))
          delete s.courseOpen
        }
        if (version < 3) {
          // v3: bots are named per course, so they are saved by level; 'spanish' became 'opening'.
          const level: Record<string, string> = { pepe: 'easy', lucia: 'club', toro: 'sharp', ruy: 'master' }
          s.bot = level[s.bot ?? ''] ?? 'club'
          if ((s.startFrom as string) === 'spanish') s.startFrom = 'opening'
        }
        return s as Persisted & Actions
      },
      // The app always opens on the home grid; "Continue" there resumes the last course.
      merge: (saved, current) => ({ ...current, ...(saved as Partial<Persisted>), view: { type: 'home' } })
    }
  )
)

/* ---------- transient UI state (not saved) ---------- */
export interface Toast { id: number; html: string; kind?: 'medal' | 'plain'; glyph?: string; action?: { label: string; run: () => void } }
export type Coach =
  | { kind: 'line'; moves: string[]; ply: number; start: number; jump: (ply: number) => void }
  | { kind: 'play'; history: string[]; myTurn: boolean; play: (san: string) => void }
  | null

interface Live {
  toasts: Toast[]
  coach: Coach
  confetti: { x: number; y: number; n: number } | null
  query: string
  toast: (t: Omit<Toast, 'id'>) => void
  dismiss: (id: number) => void
  setCoach: (c: Coach) => void
  burst: (x: number, y: number) => void
  setQuery: (q: string) => void
}

let toastId = 0
export const useLive = create<Live>()((set) => ({
  toasts: [], coach: null, confetti: null, query: '',
  toast: (t) => {
    const id = ++toastId
    set((s) => ({ toasts: [...s.toasts, { ...t, id }] }))
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })), t.action ? 9000 : 3600)
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
  setCoach: (coach) => set({ coach }),
  burst: (x, y) => set((s) => ({ confetti: { x, y, n: (s.confetti?.n ?? 0) + 1 } })),
  setQuery: (query) => set({ query })
}))
