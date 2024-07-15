"use client";

import type { Etiqueta } from "@/app/etiquetas/page";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Etiqueta>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "npm",
    header: "NPM",
  },
  {
    accessorKey: "especie",
    header: "Espécie",
  },
  {
    accessorKey: "data",
    header: "Data",
    accessorFn: ({ data }) => new Date(data).toLocaleDateString(),
  },
  {
    accessorKey: "location",
    header: "Local",
  },
  {
    accessorKey: "txd",
    header: "TXD",
  },
  {
    accessorKey: "c_asa",
    header: "ASA",
  },
  {
    accessorKey: "c_tarso",
    header: "Tarso",
  },
  {
    accessorKey: "c_total",
    header: "Total",
  },
  {
    accessorKey: "muda",
    header: "Muda",
  },
  {
    accessorKey: "massa",
    header: "Massa",
  },
  {
    accessorKey: "sexo",
    header: "Sexo",
  },
  {
    accessorKey: "coletor",
    header: "Coletor",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const original = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Duplicar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
