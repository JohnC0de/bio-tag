'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, PlusIcon } from 'lucide-react'
import { useForm, type UseFormReturn } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createEtiqueta } from '@/app/actions/etiquetas'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

setDefaultOptions({ locale: ptBR })

const etiquetaSchema = z.object({
  npm: z.string().max(10, { message: 'NPM muito longo' }),
  especie: z.string().min(3, 'Nome da espécie muito curto').max(50, 'Nome da espécie muito longo'),
  data: z.date(),
  localizacao: z.string(),
  txd: z.string(),
  c_asa: z.string(),
  c_tarso: z.string(),
  c_total: z.string(),
  muda: z.string(),
  massa: z.string(),
  sexo: z.string(),
  // coletor is null or string with at least 3 character
  coletor: z.string().max(50, { message: 'Nome do coletor muito longo' }),
})

export type EtiquetaForm = z.infer<typeof etiquetaSchema>

export function CreateEtiquetaForm() {
  const form = useForm<EtiquetaForm>({
    resolver: zodResolver(etiquetaSchema),
    defaultValues: {
      especie: '',
      data: new Date(),
      localizacao: '',
      txd: '',
      c_asa: '',
      c_tarso: '',
      c_total: '',
      muda: '',
      massa: '',
      sexo: '',
      coletor: '',
      npm: '',
    },
  })

  async function onSubmit(values: EtiquetaForm) {
    console.log(values)
    await createEtiqueta(values)
    toast.success(`Etiqueta do espécime ${values.especie} criada com sucesso!`)
    // toast.error("Erro ao criar etiqueta, tente novamente mais tarde.");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <FormInput
          form={form}
          name="especie"
          label="Espécie"
          // required
          placeholder="Ex: Sula leucogaster"
        />
        <FormField
          control={form.control}
          name="data"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                    >
                      {field.value ? format(field.value, 'PPP') : <span>Selecione uma data</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    locale={ptBR}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date > new Date() || date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormInput form={form} name="localizacao" label="Localização" placeholder="Arquipélago de Santana, Macaé, RJ" />
        <FormInput form={form} name="txd" label="TXD" placeholder="Ex: 127" type="number" />
        <FormInput form={form} name="c_asa" label="Comprimento da  Asa" type="number" placeholder="Ex: 132" />
        <FormInput form={form} name="c_tarso" label="Comprimento Tarso" type="number" placeholder="Ex: 45" />
        <FormInput form={form} name="c_total" label="Comprimento Total" type="number" placeholder="Ex: 81" />
        <FormInput form={form} name="massa" label="Massa" type="number" placeholder="Ex: 1375" />
        <FormField
          control={form.control}
          name="muda"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Muda</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="completa">Completa</SelectItem>
                  <SelectItem value="parcial">Parcial</SelectItem>
                  <SelectItem value="nenhuma">Não</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sexo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sexo</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="femea">Fêmea</SelectItem>
                    <SelectItem value="macho">Macho</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormInput form={form} name="coletor" label="Coletor(a) do espécime" placeholder="Ex: Patricia Mancini" />
        <div className="flex gap-2">
          <FormInput form={form} name="npm" label="NPM" type="number" placeholder="Ex: 178" />
          <Button className="mt-auto" type="submit">
            <p className="select-none">Criar Etiqueta</p>
            <PlusIcon size={18} className="ml-2" />
            {/* <Loader2Icon size={18} className="ml-2 animate-spin" /> */}
          </Button>
        </div>
      </form>
    </Form>
  )
}

interface FormInputProps {
  form: UseFormReturn<EtiquetaForm>
  name: keyof EtiquetaForm
  label?: string
  placeholder?: string
  type?: string
  required?: boolean
}

const FormInput = ({ form, name, label, placeholder, type, required = false }: FormInputProps) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Input
            {...field}
            required={required}
            type={type}
            placeholder={placeholder}
            value={
              typeof field.value === 'string' || typeof field.value === 'number' ? field.value : field.value.toString()
            }
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
