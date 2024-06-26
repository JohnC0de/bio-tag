import { ThemeToggler } from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { TagIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 border-b p-2">
      <Button asChild variant="ghost">
        <Link href="/" className="flex items-center justify-center gap-2">
          <TagIcon size={18} className="mt-0.5" />
          <p className="text-x">Bio Tag</p>
        </Link>
      </Button>
      <Button className="ml-2" variant="outline">
        Etiquetas
      </Button>
      <div className="ml-auto">
        <ThemeToggler />
      </div>
    </nav>
  );
}
