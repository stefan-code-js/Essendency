"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:p-6 bg-[#FFFFF0] bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <Link href="/" style={{ fontFamily: 'Asset, serif' }} 
          className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          NEXORA
        </Link>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-700">
              {item}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>
)}