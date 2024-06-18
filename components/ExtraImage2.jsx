import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const EnlargedCardMedia = styled(CardMedia)(({ enlarge, aspectRatio }) => ({
  transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, top 0.3s ease-in-out, right 0.3s ease-in-out',
  transform: enlarge ? 'scale(1.5)' : 'scale(1)',
  cursor: 'pointer',
  zIndex: enlarge ? 1001 : 1,
  position: enlarge ? 'fixed' : 'initial',
  top: enlarge ? '50%' : 'auto',
  left: enlarge ? '50%' : 'auto',
  width: enlarge ? `calc(80vh * ${aspectRatio})` : 'initial',
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
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [aspectRatios, setAspectRatios] = useState({});

  useEffect(() => {
    const calculateAspectRatio = (image, key) => {
      const img = new window.Image();
      img.src = image;
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        setAspectRatios((prev) => ({ ...prev, [key]: aspectRatio }));
      };
    };

    calculateAspectRatio(props.image, 'image');
    calculateAspectRatio(props.image2, 'image2');
    calculateAspectRatio(props.image3, 'image3');
  }, [props.image, props.image2, props.image3]);

  const handleClick = (image) => {
    setEnlargedImage(enlargedImage === image ? null : image);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setEnlargedImage(null);
    }
  };

  return (
    <>
      <BackgroundOverlay show={!!enlargedImage} onClick={handleBackgroundClick} />
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Card elevation={3} sx={{ margin: "2vw", marginBottom: "1vw", bgcolor: "background.cards", display: 'flex', alignItems: 'center' }}>
            <EnlargedCardMedia
              component="img"
              image={props.image}
              alt="green iguana"
              enlarge={enlargedImage === 'image' ? 1 : 0}
              aspectRatio={aspectRatios['image'] || 1}
              onClick={() => handleClick('image')}
            />
          </Card>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Card elevation={3} sx={{ margin: "2vw", marginRight: "1vw", marginTop: ".7vh", bgcolor: "background.cards", display: 'flex', alignItems: 'center' }}>
                <EnlargedCardMedia
                  component="img"
                  image={props.image2}
                  alt="green iguana"
                  enlarge={enlargedImage === 'image2' ? 1 : 0}
                  aspectRatio={aspectRatios['image2'] || 1}
                  onClick={() => handleClick('image2')}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card elevation={3} sx={{ margin: "2vw", marginLeft: "1vw", marginTop: "1vh", bgcolor: "background.cards", display: 'flex', alignItems: 'center' }}>
                <EnlargedCardMedia
                  component="img"
                  image={props.image3}
                  alt="green iguana"
                  enlarge={enlargedImage === 'image3' ? 1 : 0}
                  aspectRatio={aspectRatios['image3'] || 1}
                  onClick={() => handleClick('image3')}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
