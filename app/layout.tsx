import type { Metadata } from 'next'
import { lato } from './_ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nominagames App',
  description: 'Test interview',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>{children}</body>
    </html>
  )
}
