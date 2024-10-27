import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata = {
  title: {
    default: 'IntelliSynapse',
    template: '%s | IntelliSynapse',
  },
  description: 'Unleash your productivity with AI',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}