import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#FFFFF0]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-display">
              NEXORA
            </Link>
            <p className="mt-2 text-sm">Unleash your productivity with AI</p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-indigo-600 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="hover:text-indigo-600 transition duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t bg-[#FFFFF0] border-gray-200 text-center text-sm">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
