import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSprings, animated, to } from "react-spring";
import styles from "../styles/layout.module.css";
import { useDrag } from "react-use-gesture";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";


const mobileDeck = (cards) =>
  cards.flatMap((card) => {
    const picture = { type: "picture", title: card.title, URL: card.URL };
    const description = {
      type: "description",
      title: card.title,
      description: card.description,
    };
    if (card.title === "Project Cards") return [picture];
    return [picture, description];
  });

const springTo = (i) => ({
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

function Description({ cards, count, onOverflowChange }) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const containerRef = React.useRef(null);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const [showPill, setShowPill] = React.useState(true);

  React.useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = 0;
      setShowPill(true);
      const lastChild = el.lastElementChild;
      const hasOverflow = lastChild ? lastChild.getBoundingClientRect().bottom > el.getBoundingClientRect().bottom + 2 : false;
      setIsOverflowing(hasOverflow);
      if (onOverflowChange) {
        onOverflowChange(hasOverflow);
      }

      const handleScroll = () => {
        setShowPill(false);
      };

      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [count, onOverflowChange]);

  if (isMobile) return null;
  return (
    <Grid container sx={{ height: "575px", display: "flex", flexDirection: "column" }}>
      <Grid item>
        <Box
          component="h1"
          sx={{
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "black",
            paddingTop: "1rem",
            paddingLeft: "5vw",
            display: "flex",
            alignItems: "baseline",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "quincy-cf" }}>{cards[count].title}</span>
          {cards[count].year && (
            <span style={{ fontSize: "1rem", fontWeight: 400, color: "grey" }}>{cards[count].year}</span>
          )}
        </Box>
      </Grid>
      <Grid item sx={{ position: "relative", flex: 1, minHeight: 0 }}>
        <Box
          ref={containerRef}
          sx={{
            height: "100%",
            overflowY: "auto",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            paddingBottom: "5vw",
          }}
        >
          {cards[count].description.split(/\n\n+/).map((paragraph, idx) => (
            <Typography
              key={idx}
              component="p"
              variant="body1"
              color="black"
              paragraph
            >
              {paragraph.trim()}
            </Typography>
          ))}
        </Box>
        {isOverflowing && showPill && (
          <Box
            sx={{
              position: "absolute",
              bottom: "1vw",
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "black",
              color: "white",
              borderRadius: "12px",
              padding: "2px 8px",
              fontSize: "0.65rem",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            Scroll for more
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default function Showcase({ cards }) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [gone, addItem] = useState(new Set());
  const deck = isMobile ? mobileDeck(cards) : cards;
  const [likes, setLikes] = useState(deck.length - 1);
  const [hasOverflow, setHasOverflow] = useState(false);

  function handleClick() {
    setLikes(likes - 1);
  }

  function clearDescription() {
    setLikes(deck.length - 1);
  }

  function resetDeck() {
    gone.clear();
    setLikes(deck.length - 1);
    set((i) => springTo(i));
  }

  const [props, set] = useSprings(deck.length, (i) => ({
    ...springTo(i),
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

      const currentDeckLen = isMobile ? mobileDeck(cards).length : cards.length;
      if (!down && gone.size === currentDeckLen) clearDescription();
      if (!down && gone.size === currentDeckLen)
        setTimeout(() => gone.clear() || set((i) => springTo(i)), 600);
    },
    { preventDefault: true }
  );

  return (
    <Box sx={{ margin: "2vw 2vw 6vw 2vw" }}>
        <Paper elevation={3} sx={{ bgcolor: "background.cards", position: "relative" }}>
        {hasOverflow && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40px",
              background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        )}
      <Grid item xs={12} md={7}>
        <Box sx={{ minHeight: "575px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Description cards={cards} count={likes} key={likes} onOverflowChange={setHasOverflow} />
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
                  <animated.div key={i} style={{ x, y, zIndex: 2 }} className={styles.no}>
                    <animated.div
                      {...bind(i)}
                      className={styles.yes}
                      style={{
                        transform: to([rot, scale], trans),
                        backgroundImage: deck[i].URL
                          ? `url(${deck[i].URL})`
                          : undefined,
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
                          {deck[i].description.split(/\n\n+/).map((paragraph, idx) => (
                              <Typography
                                key={idx}
                                component="p"
                                sx={{
                                  lineHeight: 1.5,
                                  fontSize: "0.65rem",
                                  letterSpacing: "0.02em",
                                  marginBottom: "0.4rem",
                                }}
                              >
                                {paragraph.trim()}
                              </Typography>
                            ))}
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
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Grid>
        <IconButton
          onClick={resetDeck}
          sx={{
            position: "absolute",
            bottom: "8px",
            left: "8px",
            color: "rgba(255,255,255,0.7)",
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
        >
          <RestartAltIcon />
        </IconButton>
        </Paper>
      </Box>
  );
}
