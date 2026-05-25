import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextGen Learning Dashboard',
  description: 'A futuristic, highly animated education platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#09090b] text-white antialiased`}>
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
