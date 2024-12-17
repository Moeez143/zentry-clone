import React, { useRef, useState } from "react";

function Hero() {
  const [currentIdex, setCurrentIndex] = useState(1);
  const [hasClick, setHasClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  function handleMiniVdClick() {}

  return (
    <div className="relative h-dvh overflow-x-hidden w-screen">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div>Mini Video Player</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
