import type { Opening } from './types'
import { kingsIndian } from './openings/kings-indian'
import { ruyLopez } from './openings/ruy-lopez'

/** Every course in the app. Add a new opening here and it appears as a card on the home grid. */
export const openings: Opening[] = [ruyLopez, kingsIndian]

export * from './types'
