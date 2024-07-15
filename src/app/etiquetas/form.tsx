"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { z } from "zod";

const etiquetaSchema = z.object({
  especie: z.string(),
  data: z.string(),
  localizacao: z.string(),
  txd: z.string(),
  c_asa: z.string(),
  c_tarso: z.string(),
  c_total: z.string(),
  muda: z.string(),
  massa: z.string(),
  sexo: z.string(),
  coletor: z.string(),
});

type EtiquetaForm = z.infer<typeof etiquetaSchema>;

export function CreateEtiquetaForm() {
  const form = useForm<EtiquetaForm>({
    resolver: zodResolver(etiquetaSchema),
    defaultValues: {
      especie: "",
      data: "",
      localizacao: "",
      txd: "",
      c_asa: "",
      c_tarso: "",
      c_total: "",
      muda: "",
      massa: "",
      sexo: "",
      coletor: "",
    },
  });

  function onSubmit(values: EtiquetaForm) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-4"
      >
        <FormInput
          form={form}
          name="especie"
          label="Espécie"
          placeholder="Ex: Sula leucogaster"
        />
        <FormInput
          form={form}
          name="data"
          label="Data"
          placeholder="Ex: 15/07/2024"
        />
        <FormInput
          form={form}
          name="localizacao"
          label="Localização"
          placeholder="Arquipélago de Santana, Macaé, RJ"
        />
        <FormInput
          form={form}
          name="txd"
          label="TXD"
          placeholder="Ex: 127"
          type="number"
        />
        <FormInput
          form={form}
          name="c_asa"
          label="Comprimento da  Asa"
          type="number"
          placeholder="Ex: 132"
        />
        <FormInput
          form={form}
          name="c_tarso"
          label="Comprimento Tarso"
          type="number"
          placeholder="Ex: 45"
        />
        <FormInput
          form={form}
          name="c_total"
          label="Comprimento Total"
          type="number"
          placeholder="Ex: 81"
        />
        <FormField
          control={form.control}
          name="muda"
          render={() => (
            <FormItem>
              <FormLabel>Muda</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="completa">Completa</SelectItem>
                    <SelectItem value="parcial">Parcial</SelectItem>
                    <SelectItem value="nenhuma">Não</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormInput
          form={form}
          name="massa"
          label="Massa"
          type="number"
          placeholder="Ex: 1375"
        />
        <FormField
          control={form.control}
          name="sexo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sexo</FormLabel>
              <FormControl>
                <Select>
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
        <FormInput
          form={form}
          name="coletor"
          label="Coletor(a) do espécime"
          placeholder="Ex: Patricia Mancini"
        />
        <Button className="mt-auto" type="submit">
          Criar Etiqueta
        </Button>
      </form>
    </Form>
  );
}

type FormInputProps = {
  form: UseFormReturn<EtiquetaForm>;
  name: keyof EtiquetaForm;
  label?: string;
  placeholder?: string;
  type?: string;
};

const FormInput = ({
  form,
  name,
  label,
  placeholder,
  type,
}: FormInputProps) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Input type={type} {...field} placeholder={placeholder} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
