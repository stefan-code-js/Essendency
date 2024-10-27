"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import heroimage from "../public/media/heroimage.png";
import signature from "../public/media/signature.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import leftimage from "../public/media/vecteezy_a-robot-head-with-a-face-and-a-mechanical-body-on_44803922.png";
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

  // Animation settings for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-[#FFFFF0]"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Navbar />

      {/* Hero Content */}
      <motion.div
        className="hero relative z-10 flex min-h-screen items-center justify-center px-5 lg:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className={`text-left transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 style={{ fontFamily: "Asset, serif" }} className="font-asset text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 text-gray-700">
              IntelliSynaps
            </h1>
            <Image className="heroimage" src={heroimage} alt="Hero Image" width={700} height={700} quality={100} />
            <p className="heroph text-lg sm:text-xl mb-6 lg:mb-8 text-gray-500">Discover what your brain can do</p>
            <Link href="/about" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-300">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features Text */}
      <motion.p
        className="font-asset text-lg sm:text-xl mb--2 mt--2 lg:mb-6 items-center flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Key features of the app
      </motion.p>

      {/* Glass Card Grid */}
      <motion.div
        className="pt-8 px-4 page-padding flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className={`glass-card p-6 shadow-lg rounded-lg overflow-hidden ${item.className}`}>
              <ImageHeader src={item.image} />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="ml-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
                {item.action && (
                  <div className="mt-4">
                    {item.action}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Question Section */}
      <motion.div
        className="flex flex-col items-center text-center mt-20 py-12 bg-[#FFFFF0]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4">Do you have an unanswered question?</h2>
          <div className="bg-black text-white py-2 px-4 rounded-full mb-4 text-sm sm:text-base">
            <a
              href="mailto:badea.adrian.stefan1@gmail.com"
              className="text-white hover:underline"
            >
              Ask us a question at intelli@email.com
            </a>
          </div>
        <div className="relative overflow-hidden w-full max-w-md mx-auto mt-4">
          <div className="flex space-x-4 animate-scroll">
            {["Explore", "Discover", "Connect", "Learn", "Connect", "Learn", "Explore"].map((word, index) => (
              <button
                key={index}
                disabled
                className="bg-black text-white py-2 px-4 rounded-full opacity-80 cursor-not-allowed whitespace-nowrap"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Thank You Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mt-20 text-right py-16 px-8 bg-[#FFFFF0] text-black-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="hidden md:flex w-full md:w-1/3 justify-center md:justify-start mb-8 md:mb-0">
          <Image src={leftimage} alt="Left Image" width={500} height={500} className="rounded-full" />
        </div>
        <div className="md:w-1/2 flex flex-col items-end text-right">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Thank you for scrolling
          </h2>
          <p className="mb-4 text-lg">
            In conclusion, this project has been a journey of innovation and creativity, where every design decision was carefully crafted to enhance the user experience.
          </p>
          <p className="text-lg">
            Let's embrace the future of design, where possibilities are limitless and creativity knows no bounds. Thank you.
          </p>
          <div className="mt-8">
            <Image src={signature} alt="Signature" width={200} height={100} />
          </div>
        </div>
      </motion.div>
      <Footer />
    </motion.section>
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
