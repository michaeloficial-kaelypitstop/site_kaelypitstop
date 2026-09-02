import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lora, Montserrat } from 'next/font/google'
import './globals.css'

const _montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const _lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif', 
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaély Películas | Películas Automotivas, Nano Cerâmica e PPF em Curitiba',
  description:
    'A Kaély Pitstop é especialista em películas automotivas e arquitetônicas de alta performance em Curitiba - PR. Bloqueio UV de até 100%, altíssima rejeição térmica (IR), PPF, estética e centro de formação técnica. Agende seu atendimento pelo WhatsApp.',
  generator: 'LeoGomes.dev',
  keywords: [
    'Películas automotivas Curitiba',
    'Insulfilm Nano Cerâmica Curitiba',
    'Nano Carbon',
    'PPF Paint Protection Film',
    'Insulfilm residencial e comercial',
    'Curso de aplicação de películas Curitiba',
    'Kaély Pitstop',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/kaely_pitstoplogo_rbg.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark bg-background ${_montserrat.variable} ${_lora.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}