import React, { useRef, useState } from 'react';
import video from '../../assets/video-how-it-works.mp4'

const ManualVideoPlayer = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleVideoEnd = () => {
    setHasPlayed(true);
    videoRef.current.pause();
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-8">
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        autoPlay
        onEnded={handleVideoEnd}
        controls
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {hasPlayed && (
        <button
          onClick={handleReplay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-md
                     transition-all duration-300 ease-in-out"
        >
          Replay
        </button>
      )}
    </div>
  );
};

export default ManualVideoPlayer;