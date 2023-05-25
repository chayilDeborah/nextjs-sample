import Header from './components/Header';
import './globals.css'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn NextJs',
  description: 'a repo for practicing Nextjs',
}
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div>THIS IS A GLOBAL LAYOUT</div>
        {children}
        </body>
    </html>
  )
}
