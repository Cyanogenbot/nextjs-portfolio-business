import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { styled } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "../styles/welcome.module.css";

const OverlayButton = styled(IconButton)({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

const Welcome = () => {
  const [videoQueue, setVideoQueue] = useState([
    "/videos/Ringringremakeh264.mp4",
    "/videos/rideswipe.mp4",
    "/videos/Duietfinalvideo.mp4",
    "/videos/polaris.mp4",
    "/videos/sjef.mp4",
    "/videos/sphere.mp4",
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoQueue.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
      videoRef.current.src = videoQueue[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        handleVideoEnded();
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, [currentVideoIndex]);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <video
          className={styles.video}
          autoPlay
          muted={isMuted}
          preload="auto"
          ref={videoRef}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={videoQueue[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <OverlayButton onClick={toggleMute}>
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </OverlayButton>
      </Box>
    </Paper>
  );
};

export default Welcome;

//   import React, { useEffect, useRef } from 'react';

// export default () => {
//     const videoRef = useRef();

//     useEffect(() => {
//         setTimeout(()=>{
//             videoRef.current.play()
//         },5000)
//     }, []);

//     return (
//         <video
//             ref={videoRef}
//             controls
//             width="250"
//             loop
//             muted
//             style={{...}}>
//                <source {...{C:\Users\20192899\nextjs-blog\public\videos\demoday video.mp4"}}>
//        </video>
//       )
