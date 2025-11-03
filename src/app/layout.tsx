// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // Importa a fonte
import './globals.css'

// Configura a fonte com os pesos que vamos usar
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Ítalo Garcia | Desenvolvedor Front-End',
  description: 'Construindo experiências com código e design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Começamos com 'dark' como padrão no HTML
    <html lang="pt-br" className="dark">
      <body
        className={`${inter.className} 
        bg-dark-bg bg-dark-gradient text-brand-light antialiased`}
      >
        {children}
      </body>
    </html>
  )
}