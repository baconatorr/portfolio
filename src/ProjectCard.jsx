import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import matharooImg from "./assets/matharoo.png";
import wordpyraImg from "./assets/wordpyra.png";
import { FaPlayCircle, FaPauseCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BsFillSkipEndBtnFill, BsFillSkipStartBtnFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";

const projects = [
  {
    title: "Matharoo",
    description: "Math education platform with skill trees.",
    image: matharooImg,
    github: "https://github.com/your-matharoo",
    live: "https://learnwithmatharoo.com",
    duration: "3:46",
    tags: ["Next", "Firebase", "Education"],
  },
  {
    title: "WordPyra",
    description: "A creative word pyramid puzzle game.",
    image: wordpyraImg,
    github: "https://github.com/your-wordpyra",
    live: "https://wordpyra.com",
    duration: "2:15",
    tags: ["Firebase", "Game Design", "Puzzles"],
  },
];

const Card = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextProject = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
    resetPlayback();
    setShowTooltip(false);
  };

  const prevProject = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetPlayback();
  };

  const togglePlay = () => { 
    setPlaying((prev) => !prev); 
  };

  const resetPlayback = () => {
    setProgress(0);
    setPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (playing && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.5, 100));
      }, 1000);
    } else if (progress >= 100) {
      nextProject();
    }
    return () => clearInterval(interval);
  }, [playing, progress]);

  // Glow effect based on play state
  const glowVariants = {
    playing: {
      boxShadow: "0 0 20px 5px rgba(16, 185, 129, 0.6)",
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
    },
    paused: {
      boxShadow: "0 0 0px 0px rgba(16, 185, 129, 0)",
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-[600px] bg-[#121212] rounded-3xl p-6 flex flex-col items-center gap-6 border border-[#2a2a2a]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      variants={glowVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-10"></div>
      
      {/* Project Image with 3D tilt effect */}
      <motion.div
        className="relative w-full h-[300px] rounded-2xl  group perspective-1000"
        whileHover="hover"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative w-full h-full"
          variants={{
            hover: {
              rotateY: 5,
              rotateX: -5,
              transition: { duration: 0.5 }
            }
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={index}
              src={projects[index].image}
              alt={projects[index].title}
              className="absolute w-full h-full object-cover"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Floating tags */}
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            {projects[index].tags.map((tag, i) => (
              <motion.span
                key={i}
                className="bg-[#121212] text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-400/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Overlay Buttons */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-8 transition-opacity duration-300 backdrop-blur-sm"
          >
            <motion.a
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 text-3xl bg-black bg-opacity-70 p-4 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={projects[index].live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 text-3xl bg-black bg-opacity-70 p-4 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text Info with animated underline */}
      <div className="text-center relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-white text-3xl font-bold mb-1 tracking-tighter">
              {projects[index].title.toLowerCase()}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
            <p className="text-gray-300 text-md mt-3">{projects[index].description.toLowerCase()}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls with animated background */}
      <div className="relative w-full">
        <motion.div 
          className="absolute inset-0 bg-emerald-400/10 rounded-xl"
          animate={{
            opacity: playing ? [0.1, 0.2, 0.1] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="flex items-center justify-center gap-6 text-emerald-400 text-4xl relative z-10 py-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsFillSkipStartBtnFill
              onClick={prevProject}
              className="cursor-pointer"
            />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {playing ? (
              <FaPauseCircle
                onClick={togglePlay}
                className="cursor-pointer"
              />
            ) : (
              <FaPlayCircle
                onClick={togglePlay}
                className="cursor-pointer"
              />
            )}
          </motion.div>
          
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsFillSkipEndBtnFill
                onClick={nextProject}
                className="cursor-pointer"
              />
            </motion.div>
            {showTooltip && (
              <motion.div
                className="absolute flex transform left-10 -top-0 items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <FiArrowLeft className="text-emerald-400 text-xl" />
                <div className="bg-[#121212] border font-pppangaia border-emerald-400 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  press here to view the next project.
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar with animated dots */}
      <div className="w-full flex items-center gap-3 px-2">
        <span className="text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded-md">
          {formatTime(progress, projects[index].duration)}
        </span>
        <div className="flex-1 h-2 bg-gray-600 rounded-full relative">
          <motion.div
            className="h-full bg-emerald-400 rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          >
            {playing && (
              <motion.div
                className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              />
            )}
          </motion.div>
          
          {/* Progress dots */}
          <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>
        <span className="text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded-md">
          {projects[index].duration}
        </span>
      </div>

      {/* Soundwave visualization */}
      {playing && (
        <div className="w-full h-8 flex items-end justify-center gap-1 mt-2">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-emerald-400 rounded-t-sm"
              initial={{ height: "10%" }}
              animate={{
                height: `${Math.random() * 60 + 10}%`
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

function formatTime(progressPercent, totalTime) {
  const [min, sec] = totalTime.split(":").map(Number);
  const totalSeconds = min * 60 + sec;
  const currentSeconds = Math.floor((progressPercent / 100) * totalSeconds);
  const displayMin = Math.floor(currentSeconds / 60);
  const displaySec = currentSeconds % 60;
  return `${displayMin}:${displaySec.toString().padStart(2, "0")}`;
}

export default Card;