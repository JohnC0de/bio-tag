import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { type UseFormReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

interface DatePickerProps {
  form: UseFormReturn<any>
  name: string
  label: string
}

export function DatePicker({ form, name, label }: DatePickerProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-0.5">
          <FormLabel className="mt-1">{label}</FormLabel>
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
                disabled={(date: Date) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
