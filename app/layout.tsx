import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navigation/navbar'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nexfiy.app'),
  title: {
    default: 'Nexfiy — Premium Apps Crafted by One Developer',
    template: '%s | Nexfiy',
  },
  description: 'Discover Nexfiy: premium health, productivity, and focus apps created by an independent developer. Experience quality over growth.',
  generator: 'v0.app',
  keywords: ['health app', 'productivity', 'focus', 'wellness', 'independent developer', 'quality apps'],
  authors: [{ name: 'Nexfiy', url: 'https://nexfiy.app' }],
  creator: 'Nexfiy',
  publisher: 'Nexfiy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon.ico' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Nexfiy — Premium Apps Crafted by One Developer',
    description: 'Premium health, productivity, and focus apps created with care by an independent developer.',
    url: 'https://nexfiy.app',
    siteName: 'Nexfiy',
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nexfiy Premium Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexfiy — Premium Apps Crafted by One Developer',
    description: 'Premium health, productivity, and focus apps created with care by an independent developer.',
    creator: '@nexfiy',
    images: ['/brand/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased relative min-h-screen">
        {/* Subtle Background Lighting */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-foreground/[0.03] via-background to-background pointer-events-none" />
        <Navbar />
        <Breadcrumbs />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
