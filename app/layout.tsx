import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
        url: '/kaely_pitstoplogo_rbg.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/kaely_pitstoplogo_rbg.png',
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
      <head>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '878093127831449');
            fbq('track', 'PageView');
          `,
        }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
