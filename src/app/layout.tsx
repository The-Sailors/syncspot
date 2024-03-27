import './globals.css'

import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:30px_30px]">
          <body
            className={cn(
              fontSans.className,
              'relative h-full w-full bg-slate-950 antialiased',
            )}
          >
            {children}
          </body>
        </div>
      </div>
    </html>
  )
}
