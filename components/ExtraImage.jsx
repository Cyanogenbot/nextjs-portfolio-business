import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const EnlargedCardMedia = styled(CardMedia)(({ enlarge }) => ({
  transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out',
  transform: enlarge ? 'scale(1.5)' : 'scale(1)',
  cursor: 'pointer',
  zIndex: enlarge ? 1001 : 1,
  position: enlarge ? 'fixed' : 'initial',
  top: enlarge ? '50%' : 'auto',
  left: enlarge ? '50%' : 'auto',
  width: enlarge ? '80vw' : 'initial',
  height: enlarge ? '80vh' : 'initial',
  transform: enlarge ? 'translate(-50%, -50%)' : 'none',
}));

const BackgroundOverlay = styled(Box)(({ show }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  transition: 'opacity 0.3s ease-in-out',
  opacity: show ? 1 : 0,
  zIndex: 1000,
  pointerEvents: show ? 'auto' : 'none',
}));

export default function ExtraImage(props) {
  const [enlarged, setEnlarged] = useState(false);

  const handleClick = () => {
    setEnlarged(!enlarged);
  };

  const handleBackgroundClick = (event) => {
    if (enlarged && event.target === event.currentTarget) {
      setEnlarged(false);
    }
  };

  return (
    <>
      <BackgroundOverlay show={enlarged} onClick={handleBackgroundClick} />
      <Card elevation={3} sx={{ margin: "2vw", display: 'flex', alignItems: 'center' }}>
        <EnlargedCardMedia
          component="img"
          image={props.image}
          alt="green iguana"
          enlarge={enlarged ? 1 : 0}
          onClick={handleClick}
        />
      </Card>
      <Typography
        component="h1"
        variant="h6"
        color="white"
        gutterBottom
        paddingLeft="3vw"
        marginTop="-3vh"
      >
        {props.caption}
      </Typography>
    </>
  );
}
