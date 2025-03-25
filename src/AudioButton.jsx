import React, { useState } from "react";
import YouTube from "react-youtube";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";

export default function AudioButton() {
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
    },
  };

  const togglePlay = () => {
    if (playing) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      {/* Hidden YouTube Player */}
      <YouTube 
        videoId="MYPVQccHhAQ" // Replace with YouTube video ID
        opts={opts}
        onReady={(event) => setPlayer(event.target)}
      />

      {/* Play/Pause Button */}
      <div 
        onClick={togglePlay} 
        className="bg-gray-800 opacity-20 rounded-full p-4 text-white text-3xl fixed bottom-4 left-4 cursor-pointer z-30"
      >
        {playing ? <FaVolumeUp color="white" /> : <FaVolumeXmark color="white" />}
      </div>
    </div>
  );
}
