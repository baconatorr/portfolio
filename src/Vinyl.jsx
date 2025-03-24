import { motion } from "framer-motion";
import vinyl from "./assets/vinyl.png";

const VinylSpinning = () => {
  return (
    <motion.div
      className="relative w-64 h-64"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity, // Make the animation repeat infinitely
        duration: 2, // Set the duration of one full rotation
        ease: "linear", // Use a smooth linear easing for consistent rotation
      }}
    >
      <img src={vinyl} alt="Vinyl record" />
    </motion.div>
  );
};

export default VinylSpinning;
