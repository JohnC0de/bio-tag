import { LeafIcon } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggler } from '@/components/theme/toggler'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 border-b bg-secondary p-4 drop-shadow">
      <Button asChild variant="ghost" className="bg-white text-primary shadow">
        <Link href="/" className="flex items-center justify-center gap-2">
          <LeafIcon size={18} className="mt-0.5" />
          <p className="text-lg">Bio Tag</p>
        </Link>
      </Button>
      <Button asChild className="bg-white shadow" variant="ghost">
        <Link href="/etiquetas">Etiquetas</Link>
      </Button>
      <div className="ml-auto bg-white">
        <ThemeToggler />
      </div>
    </nav>
  )
}
