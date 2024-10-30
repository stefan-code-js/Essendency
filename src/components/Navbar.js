"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:p-6 bg-white bg-opacity-20 border-b border-white/20 shadow-lg backdrop-filter backdrop-blur-lg rounded-md">
      <Link
        href="/"
        style={{ fontFamily: "Asset, serif" }}
        className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600"
      >
        IntelliSynapse
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {["Home", "About"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-gray-700"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-0"
        style={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Transparent Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white bg-opacity-20 border-t border-white/20 backdrop-blur-lg flex flex-col items-center space-y-4 py-4 md:hidden rounded-b-md shadow-lg">
          {["Home", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-700"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
