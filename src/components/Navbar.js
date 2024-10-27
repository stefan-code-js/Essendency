"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import X for closing icon
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVariants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:p-6 bg-[#FFFFF0] bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <Link href="/" style={{ fontFamily: 'Asset, serif' }}
                  className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                IntelliSynaps
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
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            <Link href="/" className="text-lg font-semibold">
                                Home
                            </Link>
                            <Link href="/about" className="text-lg font-semibold">
                                About
                            </Link>
                            <Link href="/services" className="text-lg font-semibold">
                                Services
                            </Link>
                            <Link href="/contact" className="text-lg font-semibold">
                                Contact
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;