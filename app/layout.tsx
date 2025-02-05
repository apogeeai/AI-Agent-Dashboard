import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'