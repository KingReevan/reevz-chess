import type { BookLine, MapNode, Module, Opening } from '../../types'
import { chapters } from './chapters'
import book from './book.json'

const files = import.meta.glob<{ default: Module }>('./modules/*.ts', { eager: true })

const modules: Record<string, Module> = {}
for (const f of Object.values(files)) modules[f.default.id] = f.default

const map: MapNode = {
  move: '3.Bb5', name: 'Ruy Lopez', chapter: 'c1', children: [
    {
      move: '3...a6', name: 'Morphy Defense', chapter: 'c2', children: [
        { move: '4.Bxc6', name: 'Exchange', chapter: 'c3' },
        {
          move: '4.Ba4', name: 'Main line', chapter: 'c2', children: [
            {
              move: '4...Nf6', name: 'Main line', chapter: 'c2', children: [
                { move: '5...Be7', name: 'Closed', chapter: 'c4', children: [{ move: '8...d5', name: 'Marshall', chapter: 'c5' }] },
                { move: '5...Nxe4', name: 'Open', chapter: 'c6' },
                { move: '5...b5', name: 'Arkhangelsk', chapter: 'c8', module: '8.11' }
              ]
            },
            { move: '4...d6', name: 'Modern Steinitz', chapter: 'c8', module: '8.7' }
          ]
        }
      ]
    },
    { move: '3...Nf6', name: 'Berlin', chapter: 'c7' },
    { move: '3...f5', name: 'Schliemann', chapter: 'c8', module: '8.1' },
    { move: '3...Bc5', name: 'Classical', chapter: 'c8', module: '8.3' },
    { move: '3...Nd4', name: 'Bird', chapter: 'c8', module: '8.4' },
    { move: '3...d6', name: 'Old Steinitz', chapter: 'c8', module: '8.5' }
  ]
}

export const ruyLopez: Opening = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez',
  alias: 'The Spanish Game',
  side: 'both',
  eco: 'C60–C99',
  moves: 'e4 e5 Nf3 Nc6 Bb5',
  about:
    'Named after Ruy López de Segura, a Spanish priest who analysed it in his 1561 book on chess. Four and a half centuries later it is still one of the most played openings at every level, from club games to world championship matches.',
  chapters,
  modules,
  map,
  book: book as BookLine[]
}
