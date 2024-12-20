'use client'

import { useSnapshot } from 'valtio'

import { store } from '@/lib/store'
import type { Etiqueta } from '@/server/db/schema'

export default function PreviewEtiquetas() {
  const snap = useSnapshot(store)
  if (snap.etiquetas.length === 0) return null

  return (
    <div className="bg-zinc-200">
      <div
        className="mx-auto grid h-[297mm] w-[210mm] grid-cols-3 bg-white p-[12mm]"
        id="print"
        style={{
          gridTemplateRows: 'repeat(auto-fill, 40mm)',
          gridAutoFlow: 'row',
          rowGap: '3mm',
          columnGap: '0',
        }}
      >
        {snap.etiquetas.map((d, i) => (
          <Label key={i} data={d} />
        ))}
      </div>
    </div>
  )
}

const Label = ({ data }: { data: Etiqueta }) => (
  <div className="box-border h-[40mm] w-[60mm] overflow-hidden">
    <div className="box-border flex h-[20mm] w-full items-center justify-between overflow-hidden text-nowrap border border-dashed border-gray-400 pl-1 text-[10px]">
      <div className="rotate-[270deg] transform text-center leading-3">
        <p className="font-bold">O O</p>
        <p className="truncate text-[10px] tracking-tighter">NPM: {String(data.npm).padStart(3, '0')}</p>
      </div>
      <div className="flex h-full w-full flex-col justify-center gap-0.5 p-2 pl-1">
        <div className="flex items-end justify-between tracking-tighter">
          <p className="text-[12px] italic">{data.especie}</p>
          <p className="truncate text-[10px] tracking-tighter">
            {data.data ? new Date(data.data).toLocaleDateString() : ''}
          </p>
        </div>
        <p className="text-[9px] tracking-tighter">Loc: {data.localizacao}</p>
        <div className="flex items-center justify-center">
          <p className="mx-auto">{data.txd}</p>
        </div>
      </div>
    </div>
    <div className="box-border flex h-[20mm] w-full overflow-hidden border border-dashed border-gray-400 pl-1 text-[10px] tracking-tighter">
      <div className="flex rotate-[270deg] transform text-nowrap text-center leading-3">
        <p className="ml-1 self-center font-bold">O O</p>
      </div>
      <div className="ml-2 flex w-full flex-col justify-center gap-0.5 p-2 pl-1">
        <div className="grid grid-cols-3">
          <p>C.asa: {data.c_asa}</p>
          <p>Muda: {data.muda}</p>
          <p>Sexo: {data.sexo}</p>
        </div>
        <div className="grid grid-cols-3">
          <p>C.total: {data.c_total}</p>
          <p>C.tarso: {data.c_tarso}</p>
          <p>Massa: {data.massa}</p>
        </div>
        <div>
          <p>Coletor: {data.coletor}</p>
        </div>
      </div>
    </div>
  </div>
)
