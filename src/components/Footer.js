"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react"; // Assuming you're using lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-[#DBF4AD] text-center py-8 px-4 mt-16 text-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Instagram */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Link href="https://instagram.com/yourusername" passHref>
            <Instagram className="h-6 w-6 text-gray-700 hover:text-red-500 transition duration-300" />
          </Link>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Link href="https://linkedin.com/in/yourusername" passHref>
            <Linkedin className="h-6 w-6 text-gray-700 hover:text-blue-600 transition duration-300" />
          </Link>
        </motion.div>

        {/* GitHub */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Link href="https://github.com/yourusername" passHref>
            <Github className="h-6 w-6 text-gray-700 hover:text-black transition duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Trademark or Copyright */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} IntelliSynaps. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
