import { proxy } from 'valtio'

import { EtiquetaForm } from '@/app/etiquetas/form'
import type { Etiqueta } from '@/server/db/schema'

export interface Store {
  etiquetas: Etiqueta[]
  formData: EtiquetaForm | null
}

export const store = proxy<Store>({
  etiquetas: [],
  formData: null,
})
