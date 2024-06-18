import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useSprings, animated, interpolate } from "react-spring";
import styles from "../components/layout.module.css";
import { useDrag } from "react-use-gesture";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

const cards = [
  {
    title: "This portfolio",
    URL: "/images/codeportfolio.png",
    description: (
      <>
        <p>
          {
            "For this portfolio I wanted to code the website myself, rather than utilizing a website builder. In my previous portfolio did this by coding bare HTML + CSS, but I found this confusing to work with. This was especially confusing when it came to creating dynamic elements, Hence I decided to use NEXT.js this time, and created a more dynamic website. My website aims to symbolize the connection between interaction design and technology that has a central role in my personal identity and vision."
          }{" "}
        </p>

        <p>
          {
            "For the portfolio text I was able to learn how to reflect better on my work. Especially now most projects have age, it was easier to see the real purpose of certain courses within the bigger picture of the bachelor. This helped me create a better view on personal development through the years, and what my design motives are."
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Digital Craftmanship (Bachelor)",
    URL: "/images/DCmask.png",
    description: (
      <>
        {" "}
        <p>
          {
            "For this course we created mouth masks that were generated through code. Our code would cut up several pictures and glue them back together. The result is a pdf that can be printed on transfer paper and transferred on to a fabric stencil for a mouth mask. This process makes for a simple way to create a personalised mouthmasks in an accessible manner"
          }
        </p>
      </>
    ),
  },
  {
    title: "Aesthetics of Interaction (Bachelor)",
    URL: "/images/AoI.jpg",
    description: (
      <>
        {" "}
        <p>
          {
            " In the course Aesthetics of Interactions we created waking up experience for more mystical user group. This involved us taking aspects seen in mystical communities and trying to utilize these to enrich their waking up experience. We ended up creating an alarm clock based of a singing bowl, which would start singing once hit, this was paired together with a fog maker to create some more mystically. The creation of this device helped me see the significance of creating an interaction past the graphical user interfaces. "
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Radical toys (Bachelor)",
    URL: "/images/sociobear.jpg",
    description: (
      <>
        {" "}
        <p>
          {
            "Socio cultural design was my first elective during this bachelor, in this elective we did several mini projects about addressing societal problems and inclusion within design. One of these projects was an exhibition in which we would address gender marketing within toys. With the goal of starting a debate about the matter. Tried to evoke questions such as: Does gender marketing reinforce gender stereotypes. And what if kids don’t like the toys aimed at the opposite gender? This course mainly helped me think about looking at problems from different perspectives and designing for debate. "
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Bubbles (Bachelor)",
    URL: "/images/PoA.jpeg",
    description: (
      <>
        {" "}
        <p>
          {
            "For the course Perspectives on Aesthetics, we developed headgear through which we wanted to make people aware of the bubbles they are in, Physical bubbles were created to resemble different backgrounds and ideas. By looking through these bubbles we become more aware of our actions, but watch out as these bubbles might start blocking your vision"
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Creative Electronics (Bachelor)",
    URL: "/images/CEfeedy.jpg",
    description: (
      <>
        {" "}
        <p>
          {
            "In the course creative electronics I created a connected dog feeder which would dispense food on command. The device would also notify the user once the dispenser was almost out of food. The dog feeder was connected to my Google home speaker and allowed me to feed my dog using simple voice commands. This would make it a breeze to feed my dog. The prototype used a stepper motor to determine the right dose of food. "
          }{" "}
        </p>
        <p>
          {
            "This course was my first step into creating smart home devices. In this course we learnt how to work with electronics and Arduino’s which I enjoyed a lot. However, I wanted to take this a step further myself by figuring out how I could control my Arduino or ESP with my google home speaker. And so, I created Creating this device not only taught me how to work with technology and realize product prototypes, but also how to send data to my prototypes over the internet. "
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Pixii (Bachelor)",
    URL: "/images/P3.png",
    description: (
      <>
        <p>
          {
            "Pixii a design research project in which different loci of control within ambient projection systems were explored. The at students aimed ambient projection system aided the transition between work and leisure and tries to steer users into a more balanced work-life balance. From this research was concluded that the students would prefer a more suggestive system that would allow for flexibility."
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "heyOOCSI! (Bachelor)",
    URL: "/images/heyOOCSIProbe.jpg",
    description: (
      <>
        <p>
          {
            "Heyoocsi is a protocol I wrote during my internship, For this project I connected the TU/e in-house IoT prototyping system OOCSI to the open-source home automation software Home-Assistant. Heyoocsi allows students and designers to rapidly create working smart home prototypes that can be controlled through home-assistant. Through HomeAssistant students can explore connections between devices and find emergent functionalities. Heyoocsi works like a structured interview protocol in which devices announce their functionalities."
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Prototyping Probes (Bachelor)",
    URL: "/images/probe.jpg",
    description: (
      <>
        {" "}
        <p>
          {
            " I was asked to create a data collecting probe for a workshop about data driven design conducted at SIGCHI New Orleans by Renée Noortman and Peter Lovei and was part of the e/MTIC MEDICAID project. The probes would be used in a data driven design workshop. In this workshop they explored how creating data collection probes can give us a clearer view on the design context."
          }{" "}
        </p>
      </>
    ),
  },
  {
    title: "Final Bachelor Project",
    URL: "/images/Sphere.png",
    description: (
      <p>
        {
          "In the future, our houses will be smarter than ever. As innovative home products will start to lead their own lives, appliances might initiate actions just by sensing human presence. But how  do  we  as  humans  stay  in  control of these intelligent homes? Sphere  allows  users  to  indicate  to  their  smart  appliances  how  much  they  want  to  be  interacted  with.  It  does this by letting users set ranges for intelligent de-vices  and  letting  them  adjust  their  range  throughout  the  day.  By  doing  so  you  stay  in  control  of  your  safe  space, without having to sacrifice smart functionality. To indicate how much you want to be interacted with you pick up the sphere device and set your own sphere of influence by pulling the cord. To change to what degree smart device can see you, you magnetically dock your sphere to the device in question and pull the cord to the distance it is allowed to see you. This way your smart  home  devices  won’t  respond  to  your  presence  when you don’t want it to happen! "
        }
      </p>
    ),
  },
  {
    title: "Polaris",
    URL: "/images/polaris.jpg",
    description: (
      <p>
        {
          "Polaris is a speculative design exploration into creating more awareness around power use through multimodal ambient interfaces. This design was created to help homeowners become more energy independent by helping them stay within their energy generation capacity. The polari can be attached to cables of appliances and monitor their power draw, in case too much power is drawn, they sonify their power use and guide homeowners to decide which appliances to turn off."
        }
        <p></p>
        {
          "The polaris project was a tough lesson into teamwork. Whereas the group was always on good terms, we seemed to have trouble defining our project and would not make decisions. I personally learnt here that my flexibility can sometimes be confusing to my team. With the takeaway that I should take more care guiding others through my decision process so that everyone can be on board. Polaris also was one of the first projects that I created with a decentralised nature as it consists of a set of devices that work together"
        }
      </p>
    ),
  },
  {
    title: "Sjef",
    URL: "/images/sjef.jpg",
    description: (
      <p>
        {
          "Sjef is aimed at supplying convenience. It does this by allowing the user to remotely control and monitor from elsewhere in the home. Sjef is connected to a smart pan/lid and as it collects information from the pan, it transfers this to the user. The body of Sjef starts shaking according to the boiling behavior in the pan. The transparent ball holds liquid that will start shaking and so bubbles indicate the boiling intensity. Sjef works together with Cherry for emergent phenomena"
        }
        <p></p>
        {
          "This project was done for the course: Designerly Perspective on IoT, which taught us on how to design rich interaction products for growing systems. Putting the emphasis on combining multiple devices to create an unifying experience. In this course I learnt to design from a holistic perspective, in which devices we're merely tools to support the entire experience."
        }
      </p>
    ),
  },
  {
    title: "Dare-to-Repair",
    URL: "/images/daretorepair.png",
    description: (
      <p>
        {
          "We repair our products less and less, often enough we just throw an old or broken appliance away and replace it with a brand new unit. Extending the lifetime of an appliance could save us a lot of global warming potential. So the practice of repairing products could be very beneficial, but is often only done by enthusiasts, such enthusiasts can be found in for example Repair Cafés and hackerspaces. In this research we try to figure out what drives these enthusiasts in the repair process and how we can propagate this message to the rest of the world. The approach taken to do this is by trying to enhance the repair cafe experience through a clearer integration of creativity."
        }
        <p></p>
        {
          "In the dare to repair project, I learnt that design research could also be fun, as in my bachelor I did not quite understand the purpose of design research. As a maker, I am not too keen on writing reports and papers, but in this project I found my explorative approach to research."
        }
      </p>
    ),
  },
  {
    title: "Stekkie",
    URL: "/images/Stekkie.jpg",
    description: (
      <p>
        {
          "Stekkie is an adaptive charging solution to promote sustainable behaviour and help balance the grid. This is done with the goal of making vehicle-to-grid charging more transparent. Stekkie consists of a digital twin that reads information from the grid, weather and agenda of its user and gives recommendations on when its the best time to charge your electric vehicle."
        }
        <p></p>
        {
          "Stekkie was the first course in which I tried to integrate my moral judgements learnt in interactional morality into a design project. The course Designing with and for digital twins focussed on a data-driven design perspective in which machine learning and data gathering stood central. As a person with moral obligations against AI and excessive data collection, I tried to integrate a more transparent approach to machine learning. I did this by creating an interface that would not only show AI suggestions, but also the data on which the AI based its recommendations."
        }
      </p>
    ),
  },
  {
    title: "Interactional Morality",
    URL: "/images/redacted.jpg",
    description: (
      <>
        <p>
          {
            "In the Course interactional morality I composed a manifesto about ethical use of artificial intelligence. This manifesto was critical about the current implementation of artificial intelligence and proposed several points of attention such as: Transparency, Blame and Open-Sourcing. The manifesto made to look like an old governmental document and so it was written on a typewriter. Several sections of the manifesto were redacted, which made the manifesto look like it was advocating for unethical AI."
          }
        </p>
        <p>
          {
            "In the interactional morality course, I learnt to talk and reflect on societal problems surrounding equality and ethics. In The course we would learn about these problems and were trained into writing powerful manifesto's in a designerly manner. For me this course was quite an eye-opener as I always felt troubled expressing myself when it came to societal problems. This course did not only teach me on the complexity of these problems, but also trained be on how to make better arguments. This course helped me to understand the impact of design and technology on pressing social issues and allowed me integrate the expertise area of user & society into my future projects"
          }
        </p>
      </>
    ),
  },
  {
    title: "Rideswipe",
    URL: "/images/rideswipe.png",
    description: (
      <p>
        {
          "Additionally for the course Designing User Interfaces using emerging technologies I created the Rideswipe. The Rideswipe is interface to interact with your phone on a bicycle. This is done by embedding multi-touch sensors in the handle bars. These multi-touch sensors interact with the phone through bluetooth, allowing users to use media controls and interact with maps without having to take their hands of the handlebars."
        }
        <p></p>
        {
          "This project was created for the course Designing User Interfaces using Emerging Technologies. In this course we learned how to explore the potential of new technologies. In this course I primarily learnt how to use technologies to demonstrate or mock-up interactions. Giving me an edge at effective prototyping."
        }
      </p>
    ),
  },
  {
    title: "Busy Town",
    URL: "/images/busytown.jpg",
    description: (
      <p>
        {
          "Busy town is a research into creating more immersive toys by involving novel interaction technologies. Busy Town consists of an nfc enabled playing mat and a smart car which uses NFC to trigger sounds and visuals. By measuring the time between scanning NFC triggers, these toys can sense their speed and adjust the sound-effects accordingly. Additionally some triggers on the play mat would toggle a traffic light. This research concluded that the contextual sound effects would help with immersion and play and entice exploration."
        }
        <p></p>
        {
          "This project was created for the course Designing User Interfaces using Emerging Technologies. In this course we learned how to explore the potential of new technologies. In this course I primarily learnt how to use technologies to demonstrate or mock-up interactions. Giving me an edge at effective prototyping."
        }
      </p>
    ),
  },
  {
    title: "TringTring",
    URL: "/images/ringring.png",
    description: (
      <p>
        {
          "TringTring is a design exploration through sound. For the course the smart of smart things, I did an ethnography on an my front door and bike. These objects came together in the tring tring concept, a door lock that responds to the unique sound of a bicycle bell. Is the right bell used? Then the door opens automatically. Do you ring the bell from inside the house? Then the door responds with the outside weather conditions, preparer you for your next ride."
        }
        <p></p>
        {
          "This project was created for the course: sound of smart things. In this course we were tasked to design smart devices but based on sounds. In this course I learnt a lot on designing a narrative rather than a product, giving me a more holistic view based on an experience rather than a singular interaction."
        }
      </p>
    ),
  },
  {
    title: "yourshelf",
    URL: "/images/Yourshelf.jpg",
    description: (
      <p>
        {
          "During my M2.1 semester I did a project at TSG-Group, an engineering and design firm located in Eindhoven and Geleen. In my time at TSG, I was tasked to do a design project to help with the design processes at the company. I would analyse TSG's ongoing design processes through conducting interviews with various stakeholders within the company to find points of friction in the internal collaboration. One of the problems identified was cross-office communication and collaboration. Based on this problem I would started my development process, from which results the Yourshelf. The Yourshelf is a physical office dashboard which would establish a live video connection between the two TSG offices aimed to increase participatory sensemaking. This was tested in a 4 week long study, after which was concluded that a solution like the Yourshelf would increase group cohesion and reduced the threshold to ask questions."
        }
        <p></p>
        {
          "During my time at TSG I learned a lot about working within the context of a company. I familiarized myself with more standard design processes like agile and design sprints, and got a better idea of working together with stakeholders. This helped me develop my User & Society and Business & Entrepreneurship skills."
        }
      </p>
    ),
  },
  {
    title: "Sensebox",
    URL: "/images/sensebox.jpg",
    description: (
      <p>
        {
          "The Sensebox is a research aimed at creating a hybrid physical digital environment, to improve world-building practices and scenario creation. The research builds forward on the original IoT sandbox, a learning environment used at the TU/e for designing smart home products. The Sensebox embeds a new digital layer underneath this sandbox in which students can manipulate characters and interact with lights and other appliances. Giving students a new set of tools they can use during their world-building sessions."
        }
        <p></p>
        {
          "In the IoT Sensebox project, I put the explorative research strategy learnt in the dare-to-repair project to good use. This project would be a collaborative explorative study together with Teun Schutten, in which I explored adding additional modalities to the IoT sandbox. Here I used my Technology & Realisation and Math Data & Computing skills to create a new alternative sandbox which was used to measure the impact of the new modalities on storytelling and world-building."
        }
      </p>
    ),
  },
  {
    title: "Claude",
    URL: "/images/Claude.jpg",
    description: (
      <>
        <p>
          {
            "We are dependent on big tech companies. Day in day out we are using services by Microsoft, Google, Meta, Apple, and Amazon. While we have to use their services to live our comfortable western lifestyle, they have perfected creating intricate digital profiles which are sold to the highest bidder. These profiles are so detailed, that these companies can almost assure their clients they can nudge your behavior, Influence what you buy or determine an entire election. And we don't seem to have a choice. The Claude project reshapes the future of the home servers by adapting them to suit the decentralized internet, putting privacy at center. This is done by drawing inspiration from the self-hosting community, a community of people that have been developing and hosting free and open-sources alternatives to big tech companies. Claude consists of personal little clouds that can be hosted at home, making it possible to store data at home, without have to rely on third parties. Giving back control to the the people who want to preserve their privacy in the digital future."
          }
        </p>
        <p>{"Scroll down for additional information on Claude"}</p>
      </>
    ),
  },
  {
    title: "Project Cards",
    URL: "/images/instructions.png",
    description: (
      <>
        <p>{"To see my projects, click and drag the cards off the screen!"}</p>
        <p>{"For the best fling experience, a mouse is recommended."}</p>
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
          variant="h6"
          color="black"
          paddingLeft="5vw"
          paddingRight="5vw"
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
        <Box sx={{ minHeight: "55em" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7} justifyContent="flex-start">
              <Description count={likes} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Container
                sx={{
                  backgroundColor: "background.dark",
                  marginTop: "5rem",
                  minWidth: "14vw",
                  maxWidth: "50vw",
                  minHeight: "45em",
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
          </Grid>
        </Box>
      </Grid>
    </Paper>
  );
}
