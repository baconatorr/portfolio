import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

export default function FloatingSymbols({ symb, ...props }) {
  const symbols = symb;
  const symbolCount = props.count;

  return (
    <>
      {Array.from({ length: symbolCount }).map((_, index) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 0.5;
        const rotation = Math.random() * 180 - 90;
        const scale = Math.random() * 0.5 + 0.8;
        const duration = Math.random() * 4 + 6;
        const xDrift = Math.random() * 60 - 30;

        return (
          <motion.span
            className="font-pppangaia"
            key={index}
            initial={{
              y: 0,
              x: 0,
              opacity: 1,
              rotate: rotation,
              scale: scale,
            }}
            animate={{
              delay: 1.5,
              y: [0, -150, 0],
              x: [0, xDrift, -xDrift, 0],
              opacity: [0, 1, 0],
              rotate: [rotation, rotation + Math.random() * 90 - 45, rotation],
              scale: [scale, scale * 1.2, scale],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}rem`,
              color: `#EEEEEE`,
              zIndex: 30,
              textShadow: "0 0 10px rgba(41, 204, 87, 0.7)",
            }}
          >
            {symbol}
          </motion.span>
        );
      })}
    </>
  );
}
