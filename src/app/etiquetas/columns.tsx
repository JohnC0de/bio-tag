'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { type ColumnDef } from '@tanstack/react-table'
import { eq } from 'drizzle-orm'
import { CopyIcon, PenIcon, Trash2Icon } from 'lucide-react'
import { flushSync } from 'react-dom'
import { toast } from 'sonner'

import { deleteEtiqueta } from '@/app/actions/etiquetas'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { store } from '@/lib/store'
import type { Etiqueta } from '@/server/db/schema'

export const columns: ColumnDef<Etiqueta>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={value => {
          table.toggleAllPageRowsSelected(!!value)
          store.etiquetas = table.getRowModel().rows.map(row => row.original)
          console.log(store.etiquetas) // Log store state directly
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row, table }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => {
            flushSync(() => {
              row.toggleSelected(!!value)
            })
            // Update store.etiquetas with all currently selected rows
            store.etiquetas = table.getSelectedRowModel().rows.map(row => row.original)
          }}
          aria-label="Select row"
        />
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'npm',
    header: 'NPM',
  },
  {
    accessorKey: 'especie',
    header: 'Espécie',
  },
  {
    accessorKey: 'data',
    header: 'Data',
    accessorFn: ({ data }) => (data ? new Date(data).toLocaleDateString() : ''),
  },
  {
    accessorKey: 'localizacao',
    header: 'Local',
  },
  {
    accessorKey: 'txd',
    header: 'TXD',
  },
  {
    accessorKey: 'c_asa',
    header: 'ASA',
  },
  {
    accessorKey: 'c_tarso',
    header: 'Tarso',
  },
  {
    accessorKey: 'c_total',
    header: 'Total',
  },
  {
    accessorKey: 'muda',
    header: 'Muda',
  },
  {
    accessorKey: 'massa',
    header: 'Massa',
  },
  {
    accessorKey: 'sexo',
    header: 'Sexo',
  },
  {
    accessorKey: 'coletor',
    header: 'Coletor',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const etiqueta = row.original

      async function handleDelete() {
        try {
          await deleteEtiqueta(etiqueta.id)
          toast.success('Etiqueta excluída com sucesso!')
        } catch (error) {
          console.error('Error deleting etiqueta:', error)
          toast.error('Erro ao excluir etiqueta')
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem className="flex justify-between gap-4 leading-3" onClick={handleDelete}>
              <p className="font-semibold">Excluir</p>
              <Trash2Icon size={16} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between gap-4 leading-3">
              <p className="font-semibold">Editar</p>
              <PenIcon size={16} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between gap-4 leading-3">
              <p className="font-semibold">Copiar</p>
              <CopyIcon size={16} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
