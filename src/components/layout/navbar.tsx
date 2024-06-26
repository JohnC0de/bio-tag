import { ThemeToggler } from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { LeafIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 border-b bg-secondary p-4 drop-shadow-2xl">
      <Button asChild variant="ghost" className="text-primary shadow">
        <Link href="/" className="flex items-center justify-center gap-2">
          <LeafIcon size={18} className="mt-0.5" />
          <p className="text-lg">Bio Tag</p>
        </Link>
      </Button>
      <Button asChild className="ml-auto shadow" variant="ghost">
        <Link href="/etiquetas">Etiquetas</Link>
      </Button>
      <div>
        <ThemeToggler />
      </div>
    </nav>
  );
}
