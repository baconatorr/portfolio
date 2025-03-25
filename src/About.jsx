import React from "react";
import VinylSpinning from "./Vinyl";
import { motion } from "framer-motion";

// Variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-bl from-black via-zinc-900 to-black overflow-hidden px-4 py-8"
    >
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none z-0" />

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Vinyl Animation */}
        <motion.div
          className="relative flex items-center justify-center [transform-style:preserve-3d]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{
            rotateX: -5,
            rotateY: 5,
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{
            scale: 0.95,
            rotateX: 0,
            rotateY: 0,
            transition: { type: "spring", stiffness: 400 },
          }}
        >
          <VinylSpinning imageSrc="https://images.unsplash.com/photo-1612838320303-4b3b3b3b3b3b" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-8 space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            id="about-heading"
            className="text-4xl md:text-6xl font-pppangaia text-white leading-tight"
            variants={textVariants}
          >
            I’m a <span className="text-emerald-400">software engineer</span> &
            student.
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl font-pppangaia text-zinc-300"
            variants={textVariants}
          >
            Based in <span className="text-white">Louisville, KY</span>.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl font-pppangaia text-zinc-400"
            variants={textVariants}
          >
            I specialize in building{" "}
            <span className="text-white">modern, web-based applications</span>{" "}
            with clean design & solid code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
