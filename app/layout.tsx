import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { HashScrollHandler } from '@/components/hash-scroll-handler'
import { GoogleConsentMode } from '@/components/google-consent-mode'
import { GoogleAnalytics } from '@/components/google-analytics'
import { ConditionalVercelAnalytics } from '@/components/conditional-vercel-analytics'
import { CookieConsentProvider } from '@/lib/cookie-consent-context'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'

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
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      {
        url: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/favicon-16x16-dark.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicons/favicon-32x32-dark.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
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
        <GoogleConsentMode />
        <LanguageProvider>
          <CookieConsentProvider>
            <HashScrollHandler />
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </LanguageProvider>
        <GoogleAnalytics />
        <ConditionalVercelAnalytics />
      </body>
    </html>
  )
}
