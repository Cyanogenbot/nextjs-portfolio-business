import Container from '@mui/material/Container';
import styles from '../styles/welcome.module.css'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Image from 'next/image';
import { useSpring, animated,config } from 'react-spring'

import React, { useState, useRef, useEffect} from 'react';

import { Box } from '@mui/material';


const Welcome = () => {
  const [videoQueue, setVideoQueue] = useState([
    '/videos/sphere.mp4',
    '/videos/polaris.mp4',
    '/videos/rideswipe.mp4',
    '/videos/sjef.mp4',
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Move to the next video in the queue
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoQueue.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);
      videoRef.current.src = videoQueue[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        // If there's an error playing the video, move to the next one
        handleVideoEnded();
      });
    }

    return () => {
      // Clean up event listener when component unmounts
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, [currentVideoIndex]);

  return (
    <Paper elevation={3} sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, justifyContent: "center", width: "100vw", height: "120vh", maxHeight: "112vh", display: 'flex', justifyContent: 'flex-start' }}>
      <video className={styles.video} autoPlay muted preload="auto" sx={{ objectFit: "cover" }} ref={videoRef}>
        <source src={videoQueue[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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