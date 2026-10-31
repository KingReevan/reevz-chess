import { openings } from '@content'
import type { Chapter, Module, Opening } from '@content'

export { openings }
export const opening = (id: string): Opening => openings.find((o) => o.id === id) ?? openings[0]

/** Modules in learning order, with their chapter. Missing module files are skipped. */
export function ordered(op: Opening): { m: Module; ch: Chapter }[] {
  return op.chapters.flatMap((ch) => ch.modules.filter((id) => op.modules[id]).map((id) => ({ m: op.modules[id], ch })))
}

export const moduleKey = (op: Opening, id: string) => `${op.id}/${id}`
export const chapterOf = (op: Opening, id: string) => op.chapters.find((c) => c.modules.includes(id))!
