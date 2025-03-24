import React from "react";
import { motion } from "framer-motion";
import FloatingSymbols from "./FloatingSymbols.jsx";

const helloContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

const rest = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.2, duration: 1 },
  },
};

export default function Hero() {
  const hello = "hello,".split("");
  return (
    <>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none z-0" />

      <FloatingSymbols
        symb={["student", "developer", "designer", "creator"]}
        count={7}
      />

      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="text-4xl md:text-6xl font-pppangaia text-center text-white">
          <motion.div
            className="inline-block"
            variants={helloContainer}
            initial="hidden"
            animate="visible"
          >
            {hello.map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="inline-block ml-3"
            variants={rest}
          >
            my name is{" "}
            <span className="font-bold text-emerald-400">Mason Williams</span>.
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="py-4 px-10 bg-white text-[#050505] rounded-full font-pppangaia text-2xl">
            learn more 👇
          </button>
        </motion.div>
      </div>
    </>
  );
}
