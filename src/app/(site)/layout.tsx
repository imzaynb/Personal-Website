import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '../components/header'
import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zayn Baig | @zaynb06',
  description: 'Personal Site + CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-10 md:mx-auto pt-5`}>
        <Header />
        <main className='mt-[3rem]'>
          {children}
        </main>

      </body>
    </html>
  )
}
