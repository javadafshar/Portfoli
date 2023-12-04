import React, { useEffect, useRef } from "react";
import music from "../../Asesist/Build a Portfolio Website With Next JS Tailwind CSS Framer Motion [TubeRipper.com].m4a";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio when the "mousedown" event occurs (user interaction)
    const handleMouseDown = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          // Auto-play was prevented, possibly due to browser autoplay policies
          console.error("Audio playback prevented:", error);
        });
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={music} autoPlay loop muted={false} />
    </div>
  );
};

export default AudioPlayer;
