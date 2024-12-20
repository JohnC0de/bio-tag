'use client'

import pdf from 'html2pdf.js'
import { TagIcon } from 'lucide-react'
import { useSnapshot } from 'valtio'

import { Button } from '@/components/ui/button'
import { store } from '@/lib/store'

export default function GerarEtiquetas() {
  const snap = useSnapshot(store)
  if (snap.etiquetas.length === 0) return null

  function handlePrint() {
    const element = document.getElementById('print')
    if (!element) return
    pdf()
      .from(element)
      .set({
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compression: false,
          pagesplit: false,
        },
        html2canvas: {
          scale: 4,
          dpi: 600,
          letterRendering: true,
          useCORS: true,
          windowWidth: 210,
          windowHeight: 297,
        },
      })
      .save()
  }
  return (
    <div className="ml-auto">
      <Button className="w-fit" onClick={handlePrint}>
        <p>Gerar Etiquetas</p>
        <TagIcon size={16} className="ml-2" />
      </Button>
    </div>
  )
}
