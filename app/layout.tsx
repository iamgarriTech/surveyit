import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'

const vietnam = Be_Vietnam_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Surveyit',
  description: 'Create amazing forms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vietnam.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
