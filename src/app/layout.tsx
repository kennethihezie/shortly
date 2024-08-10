import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar/NavBar'

const poppins = Poppins({subsets: ['latin'], weight: '400'})

export const metadata: Metadata = {
  title: 'Shortly App',
  description: 'Developed by collins ihezie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <Navbar />

       { children }
      </body>
    </html>
  )
}
