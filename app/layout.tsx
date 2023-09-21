import StateContext from '@/context/StateContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristóbal Tavera',
  description: 'My Web Development portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StateContext>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StateContext>
  )
}
