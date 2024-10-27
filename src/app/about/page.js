"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { motion } from "framer-motion";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconClipboardCopy,
} from "@tabler/icons-react";

const socialLinks = {
  twitter: "https://twitter.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername"
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-8 px-4 page-padding flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`glass-card p-6 shadow-lg rounded-lg overflow-hidden ${item.className}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <ImageHeader src={item.image} />
              <div className="p-4 relative">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="ml-2 text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
                {item.action && (
                  <div className="mt-4">
                    {item.action}
                  </div>
                )}
                {/* Diagonal Light Hover Effect */}
                <div className="diagonal-light"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

// Reusable Image Header Component for each card
const ImageHeader = ({ src }) => (
  <div className="relative w-full h-32 rounded-t-lg overflow-hidden">
    <Image src={src} alt="Header Image" layout="fill" objectFit="cover" />
  </div>
);

// Array of grid items with specific classes to define their layout in the grid
const items = [
  {
    title: "Follow Me on Twitter",
    description: "Connect with me on Twitter.",
    image: "/path-to-your-image1.jpg",
    icon: <IconArrowWaveRightUp className="h-6 w-6 text-blue-500" />,
    action: (
      <Link href={socialLinks.twitter} passHref>
        <span className="text-blue-500 hover:underline cursor-pointer">Go to Twitter</span>
      </Link>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Explore My GitHub",
    description: "See my projects on GitHub.",
    image: "/path-to-your-image3.jpg",
    icon: <IconBoxAlignTopLeft className="h-6 w-6 text-gray-800" />,
    action: (
      <Link href={socialLinks.github} passHref>
        <span className="text-gray-800 hover:underline cursor-pointer">Go to GitHub</span>
      </Link>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Current Projects",
    description: "Learn more about my ongoing projects.",
    image: "/path-to-your-image4.jpg",
    icon: <IconFileBroken className="h-6 w-6 text-green-500" />,
    action: <p>Currently working on AI and ML projects.</p>,
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
    
      title: "Submit Feedback",
      description: "We value your feedback. Let us know your thoughts!",
      image: "/path-to-your-image7.jpg",
      icon: <IconClipboardCopy className="h-6 w-6 text-purple-500" />,
      action: (
        <form className="flex flex-col space-y-3 mt-4">
          <input
            type="text"
            placeholder="Your feedback..."
            className="py-3 px-3 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-3 py-3 text-sm font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      ),
      className: "md:col-span-2",
    
  },
];

export default AboutPage;
