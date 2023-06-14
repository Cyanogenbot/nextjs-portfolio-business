import Container from '@mui/material/Container';
import styles from '../styles/welcome.module.css'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
// import wood from '../public/images/profile.jpg'
import Image from 'next/image';
import { useSpring, animated,config } from 'react-spring'
import React, { useState } from 'react'
import { Box } from '@mui/material';


const Welcome = () => {
    return (
            <Paper elevation={3} sx={{ borderTopLeftRadius:0, borderTopRightRadius:0, justifyContent:"center",width:"100vw",height: "120vh", maxHeight:"112vh",  display:'flex', justifyContent:'flex-start'}}>
                {/* <Image
    src="/images/frontpage.jpg" // Route of the image file
    height={1080} // Desired size with correct aspect ratio
    width={1920} // Desired size with correct aspect ratio
    alt="Your Name"
    filter= "blur(10px)"
  
  /> */}
  {/* <Box className={styles.blur} > */}
  
      <video className={styles.video} loop autoPlay muted preload sx={{objectFit: "cover"}}>
        <source
          src="/videos/Demoday Video-1.mp4"
          type="video/mp4"

          
        
        />
        Your browser does not support the video tag.
      </video>

  {/* </Box> */}
{/* 
                <Container maxWidth="xl" filter= "blur(10px)" sx={{marginTop:120, position: "absolute",display:'flex', alignItems:'center'}}>
                    <Typography 
                    component="h1"
                    variant="h3"
                    // color="white"
                    gutterBottom
                   
                    
                    >
                
                    </Typography>
                </Container> */}
               
            </Paper>
            

  
    )
  }
  
  export default Welcome

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