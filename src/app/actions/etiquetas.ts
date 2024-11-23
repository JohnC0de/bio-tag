'use server'

import { type EtiquetaForm } from '@/app/etiquetas/form'
import { db } from '@/server/db'
import { etiquetasTable } from '@/server/db/schema'
import { revalidatePath } from 'next/cache'

export async function createEtiqueta(data: EtiquetaForm) {
  console.log('Creating etiqueta', data)
  await db.insert(etiquetasTable).values({
    npm: parseInt(data.npm),
    especie: data.especie,
    data: data.data,
    localizacao: data.localizacao,
    txd: data.txd,
    c_asa: data.c_asa,
    c_tarso: data.c_tarso,
    c_total: data.c_total,
    muda: data.muda,
    massa: data.massa,
    sexo: data.sexo,
    coletor: data.coletor,
  })
  revalidatePath('/etiquetas')
}

export async function getEtiquetas() {
  return await db.select().from(etiquetasTable)
}
