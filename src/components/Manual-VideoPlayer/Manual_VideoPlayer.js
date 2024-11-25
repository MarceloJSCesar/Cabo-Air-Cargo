import React, { useRef, useState } from 'react';
import './manual-videoplayer.css';

const ManualVideoPlayer = ({ videoSrc, videoType = "video/mp4", className = "" }) => {
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
    <div className={`manual-video-player relative w-full max-w-3xl mx-auto ${className}`}>
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        autoPlay
        onEnded={handleVideoEnd}
        controls
      >
        <source src={videoSrc} type={videoType} />
          Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ManualVideoPlayer;