import React, { useRef, useState } from 'react';
import video from '../../assets/how-it-works.mp4';
import './manual-videoplayer.css';

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
    <div className="manual-video-player relative w-full max-w-3xl mx-auto my-8">
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
    </div>
  );
};

export default ManualVideoPlayer;