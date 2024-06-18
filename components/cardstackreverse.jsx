import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useSprings, animated, interpolate } from "react-spring";
import styles from "../components/layout.module.css";
import { useDrag } from "react-use-gesture";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
// import { Description } from "@mui/icons-material";
import Skills from "../components/Skills";

const cards = [
  {
    title: "Creativity & Aesthetics",
    URL: "/images/claudesketch2.jpg",
    description: (
      <>
        {" "}
        <p>
          {
            "I feel like Creativity and Aesthetics is the expertise area in which I have developed sideways. My creative process is mainly based on intuition, and that has stayed that way throughout the master. During the bachelors I would often force myself to work through more structured methods, trying to enforce taking notes and keeping track of metrics. However I have learnt this structured approach just does not work for me, as I would often have trouble expressing myself through words and had trouble turning these acts into routines. Therefore started to embrace my chaotic approach to design, by letting this structure go and put more emphasis on expression and reflection. I have learnt to adapt my process by spending more time on communicating and explaining my intuition. Especially during my M1.1 project Polaris, I have grown a lot in communication by learning how to explain my process. Sometimes this would take shape of mood boards whereas other times it would require me to do lo-fidelity prototyping. Enabling my expression through my maker skills. By making more mood boards, such as the one used to shape Claude, and small drawings during the design process I could visualize my thoughts and express myself through my hands. Especially during the later stages of my Final Master Projects I put more emphasis on communication as I would already exercise my Demoday pitch during the expert interviews, additionally I spent much more time on creating visuals and analogies for my concept to make it easier to talk about the abstract topic of data."
          }{" "}
        </p>
      </>
    ),
  },

  {
    title: "Business & Entrepreneurship",
    URL: "/images/data.jpg",
    description: (
      <>
        <p>
          {
            "During my bachelors I would argue Business & Entrepreneurship was about finding a target group, and being able to design a product that caters to them, while figuring out a way of monetisation. "
          }{" "}
        </p>

        <p>
          {
            "I have gotten more aware that monetisation can deeply impact the quality and values of a service. Societal values and profitability often do not go hand-in-hand. When designing for privacy and sustainability, conventional business models such as selling data to advertisers or planned obsolescence are not possible. In the Claude project this meant I had to think of a more creative approach to funding that would not clash with the product values, namely providing external back-ups as main source of income."
          }{" "}
        </p>

        <p>
          {
            "Especially in the second half of my masters, during my final master project and my project at TSG, I tried to involve experts and stakeholders throughout the entire process. At TSG I would talk to stakeholders within the company about their views on the internal structure of TSG. This input was then used to get a better view of the internal way of working and potential points of friction. Within my FMP I would involve external experts to validate my thoughts or ask for their guidance, something I did not dare to do during my bachelors. This stakeholder and expert involvement would help me with backing up my decisions and formulate stronger design decisions"
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "User & Society",
    URL: "/images/claudesociety.jpg",
    description: (
      <>
        <p>
          {
            "In my bachelors, I would often forget the society aspect of this expertise area. But this during the master this was a major area of development for me. Especially through the course Interactional Morality I started to realise the importance of positioning a design within a societal context. As a person I am quite opinionated, but often these would be kept to myself. This course helped me discover how I could express these opinions in a non verbal way through design, similarly to the bachelors course, perspectives on aesthetics."
          }{" "}
        </p>

        <p>
          {
            "Whereas I have always had the urge to tackle societal problems such as sustainability, This would often come as an additional value. In my bachelors this meant that I would design something first, and then make it sustainable. This would lead to paradoxical designs that were inherently unsustainable but executed Sustainably, essentially commodifying sustainability. I learnt that to tackle societal problems, you have to address these problems throughout the entire development cycle. This way sustainable values will not only be embedded in the design but also reflected by the concept. This approach aligns with the idea of privacy by design, which tries to embed privacy throughout the entire process instead of making a concept private."
          }{" "}
        </p>

        <p>
          {
            "Not only did I discuss the societal relevance of privacy in the Claude project, as my project also looked into further ethical explorations caused by private file-sharing and communication. Namely the complex topic of CASM, and the distribution of illegal files. As I have talked with two experts on this topic to figure out how I could take a stance on the matter"
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Technology & Realisation",
    URL: "/images/claudeframe.jpg",
    description: (
      <>
        <p>
          {
            "Technology and realisation is one of my two main expertise area's. I see technology and realisation as the expertise area that defines the skill-set of turning a design from a concept into reality including all the exploration steps in-between. As an exploration driven designer this is the skill-set I am most comfortable designing with and so I am constantly developing myself by keeping myself up-to-date with all the new trends in the maker community. But during my masters there was a noticeable shift from how I tackled the realisation process during design projects. Where before I put all my effort in this expertise area, I have learnt to apply it more effectively and involve more help. Allowing me to become a more a versatile designer."
          }{" "}
        </p>

        <p>
          {
            "In my bachelor I wanted my final designs to be fully functional devices, I had realised that I was spending lots of time and effort figuring out how I was going to implement the technology, All of which could have been spend on other aspects of my projects. During the master I learnt that getting the right message across is more important than whether the design actually works or not. communicating the design properly allows me to validate and get valuable input on my designs instead. This input can then be used to refine the concept, allowing me to iterate on the concept more rather than just the final design. Hence I started to pivot my realisation skills towards creating immersive mock-ups that simulated the experience of using the product. Claude is a prime example of this as it would showcase the entire self-hosting experience, without the need of complex coding. This was possible because during the course 'Designing User Interfaces using Emerging Technologies' I figured out how emulate a Bluetooth keyboard with a microcontroller, which made making connected prototypes easier and more reliable. Allowing me to spend more time on the UI and other expertise area's."
          }{" "}
        </p>

        <p>
          {
            "Additionally I have been taking more advantage of my network. Instead of doing everything myself and limiting my design by my existing skill-sets, by finding the right people to help with complex projects. An example of which is Claude's sheet steel casing. I was not comfortable and familiar with the sheet steel bending process. By reaching out to experts, I was given the idea to laser a flat piece of steel and then bend the steel through a mould. These experts gave me advice on how to create this mould, and with a little courage, I was able to create a steel prototype within 2 weeks without any prior experience. The mould was made by stacking various layers of laser cut MDF on top of each other. The mould would consist of two negative and one positive mould, between which the steel sheet would be pressed."
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Math, Data & Computing",
    URL: "/images/claudemdc.jpg",
    description: (
      <>
        <p>
          {
            "In the past, Math, Data & computing would mean programming and the integration of algorithms to me. Whereas I still consider programming a valuable design tool, This expertise area has grown to mean much more to me. In my bachelor I already experimented with networking and getting my prototypes to work through the internet. In my masters this became a core aspect to my designs. In my  time I started to spent more time looking into connectivity and networking, which in the second half of the master truly came to fruition in the Claude project, as I utilised my newly acquired knowledge on networking to fight for our right to privacy."
          }{" "}
        </p>

        <p>
          {
            "During the master I have done several courses on the integration of machine learning. Whereas I do see these implementations as valuable tools to make smarter and more adaptive projects, I have also become more sceptical on the role of data and AI in our future. My thorough understanding of AI through courses like Designing with and for digital twins and embodying intelligent behaviour, combined with my growth in User and Society, made me aware that our techno-optimistic approach to design could also be harmful to society, for example when it comes to privacy. Throughout other courses Math, Data & Computing primarily played a role in managing the dataflow of the many Internet of Things based projects I have done."
          }{" "}
        </p>

        <p>
          {
            "Through embedding privacy by design in my final master project, I learnt that embedding privacy into a project is much more than storing data at home. Privacy also influences our sharing behaviour [3] and what data or metadata is exposed on the internet. In the Claude project I created a decentralised storage and file-sharing system. This not only allowed me to learn about internet security but also about how the data architecture of a project can influence privacy [2]. Claude generally applied two approaches to privacy by design, Hiding; by storing data away from external companies and Minimize; by making sharing possible without having to exchange personal identifiers [1]."
          }{" "}
        </p>

        <p>
          {
            "1. Jaap-Henk Hoepman. 2013. Privacy Design Strategies. Retrieved June 10, 2024 from http://arxiv.org/abs/1210.6621."
          }
        </p>
        <p>
          {
            "2. Francesca Musiani. 2014. Decentralised internet governance: the case of a ‘peer-to-peer cloud.’ Internet Policy Review."
          }
        </p>
        <p>
          {
            "3. Arnout Terpstra, Alexander P. Schouten, Alwin De Rooij, and Ronald E. Leenes. 2019. Improving privacy choice through design: How designing for reflection could support privacy self-management. First Monday."
          }
        </p>
      </>
    ),
  },
];

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

function Description(props) {
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
          {cards[props.count].title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component="h3"
          variant="h7"
          color="black"
          paddingLeft="5vw"
          paddingRight="5vw"
          paddingBottom="5vw"
          gutterBottom
          paragraph
        >
          {cards[props.count].description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function Showcase() {
  const [gone, addItem] = useState(new Set());
  const [likes, setLikes] = useState(cards.length - 1);

  function handleClick() {
    setLikes(likes - 1);
  }

  function clearDescription() {
    setLikes(cards.length - 1);
  }

  const [props, set] = useSprings(cards.length, (i) => ({
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

      if (!down && gone.size === cards.length) clearDescription();
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    },
    { preventDefault: true }
  ); // Prevent default behavior here

  return (
    <Paper elevation={3} sx={{ bgcolor: "background.cards", margin: "2vw" }}>
      <Grid item xs={12} md={7}>
        <Box sx={{ minHeight: "60em" }}>
          <Grid container spacing={1}>

            <Grid item xs={12} md={5}>
              <Container
                sx={{
                  backgroundColor: "background.dark",
                  marginTop: "5rem",
                  minWidth: "14vw",
                  maxWidth: "50vw",
                  minHeight: "55em",
                  justifyContent: "center",
                }}
              >
                {props.map(({ x, y, rot, scale }, i) => (
                  <animated.div key={i} style={{ x, y }} className={styles.no}>
                    <animated.div
                      {...bind(i)}
                      className={styles.yes}
                      style={{
                        transform: interpolate([rot, scale], trans),
                        backgroundImage: `url(${cards[i].URL})`,
                      }}
                    />
                  </animated.div>
                ))}
              </Container>
            </Grid>
            <Grid item xs={12} md={7} justifyContent="flex-start">
              <Description count={likes} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Paper>
  );
}