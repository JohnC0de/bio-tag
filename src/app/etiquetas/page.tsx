import { TagIcon } from 'lucide-react'

import { getEtiquetas } from '@/app/actions/etiquetas'
import { columns } from '@/app/etiquetas/columns'
import { CreateEtiquetaForm } from '@/app/etiquetas/form'
import GerarEtiquetas from '@/app/etiquetas/gerar-etiquetas'
import PreviewEtiquetas from '@/app/etiquetas/preview-etiquetas'
import { DataTable } from '@/components/data-table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const dynamic = 'force-dynamic'

export default async function EtiquetasPage() {
  const etiquetas = await getEtiquetas()
  return (
    <div className="container my-4 grid gap-4 rounded-lg border py-4 shadow-lg">
      <h1 className="text-2xl font-semibold">Etiquetas</h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-start text-lg/3">
            <p>Cadastrar Etiqueta</p>
            <TagIcon size={16} className="ml-2 mr-auto" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="rounded border p-4 shadow-sm">
              <CreateEtiquetaForm />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <hr className="mt-4" /> */}
      <div className="overflow-auto">
        <DataTable data={etiquetas} columns={columns} />
      </div>
      <GerarEtiquetas />
      <PreviewEtiquetas />
    </div>
  )
}
