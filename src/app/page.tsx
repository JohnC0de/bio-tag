import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 bg-primary">
      <section className="w-full py-8 drop-shadow-2xl sm:py-16 md:py-28 lg:py-32">
        <div className="container px-8">
          <div className="flex flex-col items-center gap-16 text-balance text-center text-primary-foreground">
            <h1 className="max-w-[700px] text-3xl font-bold tracking-tighter drop-shadow-xl sm:text-5xl xl:text-6xl/none">
              Simplifique sua rotulagem de taxidermia
            </h1>
            <p className="max-w-[700px] text-primary-foreground/90 drop-shadow-lg md:text-xl">
              Bio-Tag é uma ferramenta poderosa que ajuda biólogos que trabalham
              com taxidermia para gerar etiquetas PDF com aparência profissional
              em A4 formatar.
            </p>
            <Button
              asChild
              className="h-10 w-64 text-lg text-primary drop-shadow-xl"
              variant="outline"
            >
              <Link href="#">Começar</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-secondary drop-shadow-2xl">
        <section className="container mx-auto max-w-3xl space-y-6 py-32">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
            Recursos
          </h2>
          <p className="text-muted-foreground">
            Acesse os recursos abaixo para gerar etiquetas em PDF no formato A4
            para seus projetos de taxidermia.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Button asChild className="h-10 drop-shadow-xl">
              <Link href="#" prefetch={false}>
                Gerar Etiquetas
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 text-primary drop-shadow-xl"
              variant="outline"
            >
              <Link href="#" prefetch={false}>
                Modelo de Etiqueta
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 text-primary drop-shadow-xl"
              variant="outline"
            >
              <Link href="#" prefetch={false}>
                Tutorial
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
