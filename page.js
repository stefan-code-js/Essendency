import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export const metadata = {
  title: {
    default: 'Nexora',
    template: '%s | Nexora',
  },
  description: 'Unleash your productivity with AI',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-start to-background-end text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
      </main>

      {/* Footer */}
    </div>
  )
}
