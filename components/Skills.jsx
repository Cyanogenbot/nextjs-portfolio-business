import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import {
  Adobeillustrator,
  Adobelightroom,
  Adobeindesign,
  Adobephotoshop,
  Blender,
  Cplusplus,
  Nextdotjs,
  Processingfoundation,
  Python,
} from "styled-icons/simple-icons";

const Illust = styled(Adobeillustrator)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const Indesign = styled(Adobeindesign)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const Photoshop = styled(Adobephotoshop)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const BlenderI = styled(Blender)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const Arduino = styled(Cplusplus)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const PythonI = styled(Python)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const Processing = styled(Processingfoundation)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const NextjsI = styled(Nextdotjs)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;
const Lightroom = styled(Adobelightroom)`
  color: #212121;
  height: 8vw;
  margin: 1vw;
  &:hover {
    color: #cfe8fc;
  }
`;

export default function Buffertext(props) {
  return (
    <section className={utilStyles.headingMd}>
      <Container sx={{ direction: "column", minWidth:"100vw", minHeight:"15em" }}>
        <Typography marginTop ="15vh"variant="h4" component="h3" color="white">
          {"Including the following hardskills"}
        </Typography>

        <Grid
          marginTop="1vh"s
          marginBottom="10vh"
          container
          direction="row"
          spacing={1}
          justifyContent="center"
        >
          <Grid item xs={1} md={1}>
            <Illust />
          </Grid>
          <Grid item xs={1} md={1}>
            <Indesign />
          </Grid>
          <Grid item xs={1} md={1}>
            <Photoshop />
          </Grid>
          <Grid item xs={1} md={1}>
            <Lightroom />
          </Grid>
          <Grid item xs={1} md={1}>
            <BlenderI />
          </Grid>
          <Grid item xs={1} md={1}>
            <Arduino />
          </Grid>
          <Grid item xs={1} md={1}>
            <PythonI />
          </Grid>
          <Grid item xs={1} md={1}>
            <Processing />
          </Grid>
          <Grid item xs={1} md={1}>
            <NextjsI />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
