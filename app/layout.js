import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn NextJs',
  description: 'a repo for practicing Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>THIS IS A GLOBAL LAYOUT</div>
        {children}
        </body>
    </html>
  )
}
