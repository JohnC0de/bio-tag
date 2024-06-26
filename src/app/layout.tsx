import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";

export const metadata = {
  title: "Bio Tag",
  description: "Etiquetas para Biólogos!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn('flex min-h-screen flex-col bg-background font-sans antialiased', GeistSans.variable)}>
     <div className="flex min-h-screen flex-col">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
