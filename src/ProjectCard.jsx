import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  },
  {
    title: "WordPyra",
    description: "A creative word pyramid puzzle game.",
    image: wordpyraImg,
    github: "https://github.com/your-wordpyra",
    live: "https://wordpyra.com",
    duration: "2:15",
  },
];

const Card = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    resetPlayback();
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetPlayback();
  };

  const togglePlay = () => {setPlaying((prev) => !prev); setShowTooltip(false)};

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
    }
    return () => clearInterval(interval);
  }, [playing, progress]);

  return (
    <motion.div
      className="relative w-full max-w-[600px] bg-[#121212] rounded-3xl p-6 flex flex-col items-center gap-6 shadow-2xl border border-[#2a2a2a]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image */}
      <motion.div
        className="relative w-full h-[300px] bg-gray-800 rounded-2xl overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={projects[index].image}
          alt={projects[index].title}
          className="w-full h-full object-cover"
        />

        {/* Overlay Buttons */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-opacity duration-300"
        >
          <a
            href={projects[index].github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 text-3xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={projects[index].live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 text-3xl"
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        </motion.div>
      </motion.div>

      {/* Text Info */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-1">{projects[index].title.toLowerCase()}</h2>
        <p className="text-gray-300 text-md font-pppangaia">{projects[index].description.toLowerCase()}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 text-emerald-400 text-4xl relative">
        <BsFillSkipStartBtnFill
          onClick={prevProject}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
        {playing ? (
          <FaPauseCircle
            onClick={togglePlay}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        ) : (
          <FaPlayCircle
            onClick={togglePlay}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        )}
        <div className="relative">
          <BsFillSkipEndBtnFill
            onClick={nextProject}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
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

      {/* Progress Bar */}
      <div className="w-full flex items-center gap-3 px-2">
        <span className="text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded-md">
          {formatTime(progress, projects[index].duration)}
        </span>
        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <span className="text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded-md">
          {projects[index].duration}
        </span>
      </div>
    </motion.div>
  );
};

// Utility: Convert percent progress to time string
function formatTime(progressPercent, totalTime) {
  const [min, sec] = totalTime.split(":").map(Number);
  const totalSeconds = min * 60 + sec;
  const currentSeconds = Math.floor((progressPercent / 100) * totalSeconds);
  const displayMin = Math.floor(currentSeconds / 60);
  const displaySec = currentSeconds % 60;
  return `${displayMin}:${displaySec.toString().padStart(2, "0")}`;
}

export default Card;
