import type { Opening } from './types'
import { ruyLopez } from './openings/ruy-lopez'

/** Every course in the app. Add a new opening here and it appears as a card on the home grid. */
export const openings: Opening[] = [ruyLopez]

export * from './types'
