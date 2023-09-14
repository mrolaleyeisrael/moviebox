"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ trailer }) => {
  const [isClient, setIsClient] = useState(false);

  let trailerUrl;

  if (trailer.site === "YouTube") {
    trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
  } else {
    trailerUrl = `https://vimeo.com/${trailer.key}`;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex w-full h-[500px] items-center justify-center mx-auto">
      {isClient && (
        <ReactPlayer
          url={trailerUrl}
          controls={true}
          width="100%"
          height="100%"
          playing
        />
      )}
    </div>
  );
};

export default VideoPlayer;
