import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";
import Box from "@mui/material/Box";
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
  Figma,
} from "styled-icons/simple-icons";

const Illust = styled(Adobeillustrator)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const Indesign = styled(Adobeindesign)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const Photoshop = styled(Adobephotoshop)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const BlenderI = styled(Blender)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const Arduino = styled(Cplusplus)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const PythonI = styled(Python)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const Processing = styled(Processingfoundation)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const NextjsI = styled(Nextdotjs)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const Lightroom = styled(Adobelightroom)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;
const FigmaI = styled(Figma)`
  color: #212121;
  height: clamp(36px, 6vw, 120px);
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #cfe8fc;
  }
`;

export default function Buffertext(props) {
  return (
    <section className={utilStyles.headingMd}>
      <Container sx={{ direction: "column", width: "100%", maxWidth: "100%" }}>
        <Typography
          marginTop={{ xs: "2rem", md: "5vh" }}
          variant="h4"
          component="h3"
          color="white"
        >
          {"Some of my software hard-skills:"}
        </Typography>

        <Box
          sx={{
            marginTop: { xs: "1rem", md: "2vh" },
            marginBottom: { xs: "2rem", md: "4vh" },
            display: "flex",
            flexWrap: "nowrap",
            gap: "clamp(4px, 1.2vw, 18px)",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Illust />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Illustrator
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Indesign />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              InDesign
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Photoshop />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Photoshop
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Lightroom />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Lightroom
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <BlenderI />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Blender
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Arduino />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Arduino
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <PythonI />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Python
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <Processing />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Processing
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <NextjsI />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Next.js
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px", "&:hover .pill": { opacity: 1 } }}>
            <FigmaI />
            <Typography variant="caption" className="pill" sx={{ opacity: 0, transition: "opacity 0.2s", fontSize: "clamp(0.5rem, 1.2vw, 0.85rem)", color: "#cfe8fc", mt: "clamp(0.25rem, 1vw, 0.75rem)" }}>
              Figma
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
