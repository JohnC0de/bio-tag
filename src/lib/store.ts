import { proxy } from 'valtio'

import type { Etiqueta } from '@/server/db/schema'

export interface Store {
  etiquetas: Etiqueta[]
}

export const store = proxy<Store>({
  etiquetas: [],
})
