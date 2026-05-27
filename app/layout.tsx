import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { HashScrollHandler } from '@/components/hash-scroll-handler'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DolceStay | Alojamento Local em Sesimbra',
  description: 'Descubra estadias únicas junto ao mar em Sesimbra, Portugal. Gestão de alojamento local com conforto para hóspedes e resultados para proprietários.',
  keywords: [
    'Alojamento Local em Sesimbra',
    'Gestão de Alojamento Local',
    'Alojamento Sesimbra',
    'Casas de férias Sesimbra',
    'Rentabilizar imóvel Sesimbra',
    'Férias em Sesimbra',
    'Alojamento com piscina Sesimbra',
    'Alojamento vista mar Sesimbra',
  ],
  authors: [{ name: 'DolceStay' }],
  openGraph: {
    title: 'DolceStay | Alojamento Local em Sesimbra',
    description: 'Descubra estadias únicas junto ao mar em Sesimbra, Portugal.',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'DolceStay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DolceStay | Alojamento Local em Sesimbra',
    description: 'Descubra estadias únicas junto ao mar em Sesimbra, Portugal.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#8DBE91',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <HashScrollHandler />
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
