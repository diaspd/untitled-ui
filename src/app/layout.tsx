import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Untitled UI',
  description: 'Mastering knowledge in tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/logomark.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <div className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-app">
          <Sidebar />
          <main className="px-8 pb-12 pt-8 dark:bg-zinc-900">{children}</main>
        </div>
      </body>
    </html>
  )
}
