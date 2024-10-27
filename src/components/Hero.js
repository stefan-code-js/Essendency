"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";
import Image from "next/image";
import heroimage from "../public/media/heroimage.png";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconClipboardCopy,
} from "@tabler/icons-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFFF0]">
      {/* Navbar */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#FFFFF0] bg-opacity-90 backdrop-filter backdrop-blur-lg z-40 md:hidden">
          {['Home', 'About'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="block py-2 px-4 text-gray-700">
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="hero relative z-10 flex min-h-screen items-center justify-center px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className={`text-left transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 style={{ fontFamily: 'Asset, serif' }} className="font-asset text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 text-gray-700">
              NEXORA
            </h1>
            <Image className="heroimage" src={heroimage} alt="Hero Image" width={700} height={700} quality={100} />
            <p className="heroph text-lg sm:text-xl mb-6 lg:mb-8 text-gray-500">Discover what your brain can do</p>
            <Link href="/about" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-300">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <p className="font-asset text-lg sm:text-xl mb--2 mt--2 lg:mb-6 items-center flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">Key features of the app </p>
      {/* Glass Card Grid */}
      <div className="pt-8 px-4 page-padding flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className={`glass-card p-6 shadow-lg rounded-lg overflow-hidden ${item.className}`}>
              <ImageHeader src={item.image} />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="ml-2 text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
                {item.action && <div className="mt-4">{item.action}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Section */}
      <div className="flex flex-col items-center text-center mt-20 py-12 bg-[#FFFFF0]">
        <h2 className="text-3xl font-bold mb-4">Do you have an unanswered question?</h2>
        <div className="bg-black text-white py-3 px-6 rounded-full mb-6">
          <span>Ask us a question at lorem@ipsum.com</span>
        </div>
        <div className="flex space-x-4">
          {["Explore", "Discover", "Connect", "Learn","Connect", "Learn","Connect", "Learn","Learn","Connect", "Learn", "Discover", "Discover"].map((word, index) => (
            <button
              key={index}
              disabled
              className="bg-black text-white py-2 px-4 rounded-full opacity-80 cursor-not-allowed"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
       {/* Thank You Section */}
       <div className="flex flex-col md:flex-row items-center justify-between mt-20 text-right py-16 px-8 bg-[#FFFFF0] text-black-600">
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/path-to-your-left-image.jpg" // Replace this with your actual path to the left-side image
            alt="Left Image"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-end text-right">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Thank you for scrolling</h2>
          <p className="mb-4 text-lg">
            In conclusion, this project has been a journey of innovation and creativity, where every design decision was carefully crafted to enhance the user experience.
          </p>
          <p className="text-lg">
            Let's embrace the future of design, where possibilities are limitless and creativity knows no bounds. Thank you.
          </p>

          {/* Signature Image */}
          <div className="mt-8">
            <Image
              src="/path-to-your-signature-image.jpg" // Replace this with your actual path to the signature image
              alt="Signature"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ImageHeader = ({ src }) => (
  <div className="relative w-full h-32 rounded-t-lg overflow-hidden">
    <Image src={src} alt="Header Image" layout="fill" objectFit="cover" />
  </div>
);

const items = [
  {
    title: "Follow Me on Twitter",
    description: "Connect with me on Twitter.",
    image: "/path-to-your-image1.jpg",
    icon: <IconArrowWaveRightUp className="h-6 w-6 text-blue-500" />,
    action: (
      <Link href="https://twitter.com" passHref>
        <span className="text-blue-500 hover:underline cursor-pointer">Go to Twitter</span>
      </Link>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Design Portfolio",
    description: "Showcasing my design skills.",
    image: "/path-to-your-image5.jpg",
    icon: <IconSignature className="h-6 w-6 text-pink-500" />,
    action: <p>Explore my portfolio to see my design work.</p>,
    className: "md:col-span-1",
  },
  {
    title: "Achievements",
    description: "See what I've accomplished over the years.",
    image: "/path-to-your-image6.jpg",
    icon: <IconTableColumn className="h-6 w-6 text-yellow-500" />,
    action: <p>Winner of several hackathons and awards.</p>,
    className: "md:col-span-1",
  },
  {
    title: "Get in Touch",
    description: "Contact me for collaborations or inquiries.",
    image: "/path-to-your-image7.jpg",
    icon: <IconClipboardCopy className="h-6 w-6 text-purple-500" />,
    action: (
      <Link href="/contact" passHref>
        <span className="text-purple-500 hover:underline cursor-pointer">Contact Me</span>
      </Link>
    ),
    className: "md:col-span-2",
  },
];
