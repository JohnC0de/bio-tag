'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { DatePicker } from '@/components/date-picker'
import { FormInput } from '@/components/form-input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { type Etiqueta } from '@/server/db/schema'

import { updateEtiqueta } from '../actions/etiquetas'
import { type EtiquetaForm } from './form'

interface EditDialogProps {
  etiqueta: Etiqueta
  trigger: React.ReactNode
}

export function EditDialog({ etiqueta, trigger }: EditDialogProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<EtiquetaForm>({
    defaultValues: {
      npm: etiqueta.npm?.toString() ?? '',
      especie: etiqueta.especie ?? '',
      data: etiqueta.data ?? undefined,
      localizacao: etiqueta.localizacao ?? '',
      txd: etiqueta.txd ?? '',
      c_asa: etiqueta.c_asa ?? '',
      c_tarso: etiqueta.c_tarso ?? '',
      c_total: etiqueta.c_total ?? '',
      muda: etiqueta.muda ?? '',
      massa: etiqueta.massa ?? '',
      sexo: etiqueta.sexo ?? '',
      coletor: etiqueta.coletor ?? '',
    },
  })

  async function onSubmit(values: EtiquetaForm) {
    try {
      await updateEtiqueta(etiqueta.id, values)
      toast.success('Etiqueta atualizada com sucesso!')
      setOpen(false)
    } catch (error) {
      console.error('Error updating etiqueta:', error)
      toast.error('Erro ao atualizar etiqueta')
    }
  }

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={handleTriggerClick}>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-screen-md" onClick={e => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>Editar Etiqueta</DialogTitle>
          <DialogDescription>Faça as alterações necessárias nos campos abaixo.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-2">
            <FormInput form={form} name="especie" label="Espécie" placeholder="Ex: Sula leucogaster" />
            <DatePicker form={form} name="data" label="Data" />
            <FormInput
              form={form}
              name="localizacao"
              label="Localização"
              placeholder="Arquipélago de Santana, Macaé, RJ"
            />
            <FormInput form={form} name="txd" label="TXD" placeholder="Ex: 127" type="number" />
            <FormInput form={form} name="c_asa" label="Comprimento da  Asa" type="number" placeholder="Ex: 132" />
            <FormInput form={form} name="c_tarso" label="Comprimento Tarso" type="number" placeholder="Ex: 45" />
            <FormInput form={form} name="c_total" label="Comprimento Total" type="number" placeholder="Ex: 81" />
            <FormInput form={form} name="massa" label="Massa" type="number" placeholder="Ex: 1375" />
            <FormInput form={form} name="muda" label="Muda" placeholder="Ex: completa" />
            <FormInput form={form} name="sexo" label="Sexo" placeholder="Ex: femea" />
            <FormInput form={form} name="coletor" label="Coletor(a) do espécime" placeholder="Ex: Patricia Mancini" />
            <FormInput form={form} name="npm" label="NPM" placeholder="Ex: 12345" type="number" />
            <Button type="submit" className="col-start-3 mt-auto">
              Salvar alterações
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
