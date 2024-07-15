import { columns } from "@/app/etiquetas/columns";
import { CreateEtiquetaForm } from "@/app/etiquetas/form";
import { DataTable } from "@/components/data-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fakerPT_BR as faker } from "@faker-js/faker";

export type Etiqueta = {
  id: number;
  npm: number;
  especie: string;
  data: number;
  localizacao: string;
  txd: string;
  c_asa: string;
  c_tarso: string;
  c_total: string;
  muda: string;
  massa: string;
  sexo: string;
  coletor: string;
};

const etiquetas: Etiqueta[] = Array.from({ length: 50 }, (_, i) => i).map(
  (i) => ({
    id: i,
    npm: i + 101,
    especie: faker.animal.bird(),
    data: faker.date.recent().getTime(),
    localizacao: `${faker.location.country()}, ${faker.location.street()} - ${faker.location.buildingNumber()}`,
    txd: `${i + 1}`,
    c_asa: `${Math.round(Math.random() * 100)} mm`,
    c_tarso: `${Math.round(Math.random() * 100)} mm`,
    c_total: `${Math.round(Math.random() * 100)} mm`,
    muda: `${i % 2 === 0 ? "✅" : "❌"}`,
    massa: `${Math.round(Math.random() * 100)} g`,
    sexo: `${i % 2 === 0 ? "Fêmea" : "Macho"}`,
    coletor: faker.person.fullName(),
  }),
);

export default function EtiquetasPage() {
  return (
    <div className="container my-8 grid gap-4 rounded-lg py-2 shadow-lg">
      <h1 className="text-2xl font-semibold">Etiquetas</h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Criar etiqueta</AccordionTrigger>
          <AccordionContent>
            <div className="rounded border p-4 shadow-sm">
              <CreateEtiquetaForm />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <hr className="mt-4" /> */}
      <DataTable data={etiquetas} columns={columns} />
    </div>
  );
}
