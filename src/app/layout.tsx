import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'sonner'

import { Navbar } from '@/components/layout/navbar'
import { ThemeProvider } from '@/components/theme/provider'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Bio Tag - 🏷️',
  description: 'Etiquetas para Biólogos!',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={cn('flex min-h-screen flex-col bg-background font-sans antialiased', GeistSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
