import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSprings, animated, interpolate } from "react-spring";
import styles from "../components/layout.module.css";
import { useDrag } from "react-use-gesture";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { useMediaQuery } from "@mui/material";
const mobileDeck = (cards) => cards.flatMap((card) => [
  { type: "picture", title: card.title, URL: card.URL },
  { type: "description", title: card.title, description: card.description },
]);

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: -55, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(0) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Description({ cards, count }) {
  const isMobile = useMediaQuery("(max-width:767px)");
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = 0;
    }
  }, [count]);

  if (isMobile) return null;
  return (
    <Grid container>
      <Grid item>
        <Typography
          component="h1"
          variant="h3"
          color="black"
          paddingTop="4vw"
          paddingLeft="5vw"
          gutterBottom
        >
          {cards[count].title}
        </Typography>
      </Grid>
      <Grid item>
        <Box
          ref={containerRef}
          sx={{
            maxHeight: "380px",
            overflowY: "auto",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            paddingBottom: "5vw",
          }}
        >
          <Typography
            component="h3"
            variant="h7"
            color="black"
            gutterBottom
            paragraph
          >
            {cards[count].description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default function Showcase({ cards }) {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [gone, addItem] = useState(new Set());
  const deck = isMobile ? mobileDeck(cards) : cards;
  const [likes, setLikes] = useState(deck.length - 1);

  function handleClick() {
    setLikes(likes - 1);
  }

  function clearDescription() {
    const currentDeck = isMobile ? mobileDeck(cards) : cards;
    setLikes(currentDeck.length - 1);
  }

  const [props, set] = useSprings(deck.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index) && handleClick();

      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      const currentDeckLen = isMobile ? mobileDeck.length : cards.length;
      if (!down && gone.size === currentDeckLen) clearDescription();
      if (!down && gone.size === currentDeckLen)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    },
    { preventDefault: true }
  );

  return (
    <Paper elevation={3} sx={{ bgcolor: "background.cards", margin: "2vw" }}>
      <Grid item xs={12} md={7}>
        <Box sx={{ minHeight: "575px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Description cards={cards} count={likes} key={likes} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Container
                sx={{
                  backgroundColor: "background.dark",
                  width: "100%",
                  maxWidth: "100%",
                  height: "575px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
{props.map(({ x, y, rot, scale }, i) => (
                   <animated.div key={i} style={{ x, y }} className={styles.no}>
                     <animated.div
                       {...bind(i)}
                       className={styles.yes}
                       style={{
                         transform: interpolate([rot, scale], trans),
                         backgroundImage:
                           deck[i].URL ? `url(${deck[i].URL})` : undefined,
                       }}
                     >
                       {deck[i].type === "description" && (
                         <Box
                           sx={{
                             padding: "0.5rem 0.6rem",
                             height: "100%",
                             display: "flex",
                             flexDirection: "column",
                             boxSizing: "border-box",
                             bgcolor: "#181818",
                             color: "#F8F0E3",
                             overflow: "hidden",
                           }}
                         >
                           <Typography
                             component="h4"
                             sx={{
                               fontWeight: "700",
                               marginBottom: "0.3rem",
                               color: "#64ffda",
                               fontSize: "0.75rem",
                               lineHeight: 1.1,
                             }}
                           >
                             {deck[i].title}
                           </Typography>
                           <Typography
                             component="div"
                             sx={{
                               lineHeight: 1.5,
                               fontSize: "0.65rem",
                               letterSpacing: "0.02em",
                               "& p": {
                                 marginBottom: "0.4rem",
                               },
                             }}
                           >
                             {deck[i].description}
                           </Typography>
                         </Box>
                       )}
                       {deck[i].type === "picture" && (
                         <Box
                           sx={{
                             height: "100%",
                             display: "flex",
                             alignItems: "flex-end",
                             justifyContent: "center",
                             borderRadius: "15px",
                             padding: "0.8rem",
                             boxSizing: "border-box",
                           }}
                         >
                           <Typography
                             variant="caption"
                             sx={{
                               color: "rgba(255,255,255,0.7)",
                               fontWeight: "500",
                               textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                               fontSize: "0.75rem",
                             }}
                           >
                             {deck[i].title}
                           </Typography>
                         </Box>
                       )}
                     </animated.div>
                   </animated.div>
                 ))}
                 <Box
                   sx={{
                     position: "absolute",
                     bottom: 0,
                     left: 0,
                     right: 0,
                     height: "40px",
                     background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
                     pointerEvents: "none",
                   }}
                 />
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Paper>
  );
}
