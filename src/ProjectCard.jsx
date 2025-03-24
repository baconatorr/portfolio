import React, { useState } from "react";
import matharooImg from "./assets/matharoo.png";
import wordpyraImg from "./assets/wordpyra.png";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillSkipEndBtnFill } from "react-icons/bs";
import { BsFillSkipStartBtnFill } from "react-icons/bs";

const Card = ({ image }) => {
  const projects = {
    0: {
      title: "Matharoo",
      description: "math education software",
      image: matharooImg,
    },
    1: {
      title: "WordPyra",
      description: "word pyramid game",
      image: wordpyraImg,
    },
  };

  const [index, setIndex] = useState(0);

  function updateIndex() {
    setIndex((index) => (index === 0 ? 1 : 0));
  }

  return (
    <div className="relative min-w-[600px] min-h-[350px] bg-[#191414] rounded-xl p-8 flex flex-col justify-center items-center gap-6 shadow-lg">
      <div className="w-[500px] h-[375px] bg-gray-700 rounded-lg overflow-hidden">
        <img
          src={projects[index].image}
          alt="Album cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full flex items-center gap-6 mb-6">
        <div className="flex flex-col pl-4">
          <p className="text-white text-3xl font-extrabold">
            {projects[index].title}
          </p>
          <p className="text-white text-lg opacity-80">
            {projects[index].description}
          </p>
        </div>
      </div>

      <div className="flex text-emerald-400 text-4xl gap-8">
        <BsFillSkipStartBtnFill />
        <FaPauseCircle />
        <FaPlayCircle />
        <BsFillSkipEndBtnFill onClick={updateIndex} />
      </div>

      <div className="w-full flex items-center gap-4">
        <p className="text-white text-lg bg-black bg-opacity-60 py-1 px-4 rounded-lg">
          1:31
        </p>
        <div className="w-[90%] bg-[#5e5e5e] h-[0.5rem] rounded-[4px]">
          <div className="w-[42%] bg-emerald-400 h-full rounded-[4px]" />
        </div>
        <p className="text-white text-lg bg-black bg-opacity-60 py-1 px-4 rounded-lg">
          3:46
        </p>
      </div>
    </div>
  );
};

export default Card;
