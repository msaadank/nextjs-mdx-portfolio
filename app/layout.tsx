import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'M. Saadan Khalid',
  description: 'Saadan mdx Portfolio website',
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/Images/icons/favicon-light.png',
      href: '/Images/icons/favicon-light.png',
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/Images/icons/favicon-dark.png',
      href: '/Images/icons/favicon-dark.png',
    },
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}