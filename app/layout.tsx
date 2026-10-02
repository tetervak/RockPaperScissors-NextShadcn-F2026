import { Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameProvider } from "@/context/game-context"

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <Header title="Rock Paper Scissors" />
              <main className="container mx-auto max-w-4xl px-4">
                <GameProvider>
                  {children}
                </GameProvider>
              </main>
            </div>
            <Footer name="Alex Tetervak" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
