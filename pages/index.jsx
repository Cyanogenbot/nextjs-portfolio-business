import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Deck from "../components/cardstack";
import utilStyles from "../styles/utils.module.css";
import Slidesjow from "../components/slidesjow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PIV from "../components/textSection";
import PIVMirror from "../components/textSectionMirror";
import PIV3 from "../components/textSection3";
import PIVMirror3 from "../components/textSectionMirror3";
import Buffer from "../components/buffer";
import Buffertext from "../components/buffertext";
import Bufferlink from "../components/bufferlink";
import DeckReverse from "../components/cardstackreverse";
import Container from "@mui/material/Container";
import Skills from "../components/Skills";
import { getCards } from "../utility/getCardstackData";

const identity = {
  title: "Welcome to my portfolio",
  content: (
    <>
      <p>
        {
          "I'm Diede, an EngD candidate in Human-Systems Interaction at TU/e and an industrial designer with a deep interest in the relationship between technology and society. My work sits at the intersection of design research and creative technology as I build novel concepts, prototypes, and experiences that bring abstract futures into reality. But I also use design as a tool to gain a better understanding of the design context by utilizing Research-Through-Design methods."
        }
      </p>
      <p>
        {
          "My specialisation is in UX research: understanding how people actually live with technology, how it impacts them, and how we can use technologies to support their values. That research feeds directly into design as I research how people interact and reflect on my provocations and probes, iteratively refining these into  prototypes tested with real people in real contexts."
        }
      </p>
      <p>
        {
          "The domains that I primarily work within are privacy-by-design, slow technology, and sustainability. Not as buzzwords, but as the values that shape my decision-making. I've been formally trained with the KEMs, design methods for profesionals which allow me to dissect and contribute to complex societal challenges and deal with ambiguous situations."
        }
      </p>
    </>
  ),
  image: "/images/wholesome.jpg",
  image3: "/images/foto.jpg",
  image2: "/images/diedeaantwerk.jpg",
  caption: <p>{"Me in my creative process"}</p>,
};

const vision = {
  title: "Vision on design",
  content: (
    <>
      <p>
        {
          "I believe design has more power than we realize. In a society that defines success by profitability rather than impact, practices like surveillance capitalism have emerged, and human-centered values like safety, privacy, and happiness have been pushed aside. I believe designers could take a stance against this growth and efficiency centered approach by going the extra mile and design with the public good in mind. "
        }
      </p>
      <p>
        {
          "An example of which can be found in designing around the internet. I believe the smart home itself resides in the users house, and not on an external cloud. This is because data protection often seems to be an afterthought in design, and sometimes even a business model. Humans have turned into products of the attention economy and Data sovereignty has become more important than ever. But to act on this, we might have to rethink our digital infrastructure. Not only do I advocate for a decentralized internet where our digital lives are not ruled by a handful of companies, but also the involvement of practices like Privacy-by-Design, which urges designers to take care of privacy throughout the entire design process. As practices like these can help us design for the public good."
        }
      </p>
      <p>
        {
          "But the bigger idea is this: what if we applied that same logic to other contexts? Sustainable-by-design. Equal-by-design. As designers, we should be innovating from social values like privacy, sustainability, and equality rather than innovating for the sake of technology or growth."
        }
      </p>
    </>
  ),
  image: "/images/opendevice.jpg",
  image2: "/images/diededriveoud.jpg",
  image3: "/images/hass.png",
  caption: <p>{"My homeserver & Repair"}</p>,
};

const development = {
  title: "Development",
  content: (
    <>
      <p>
        {
          "During my master I developed myself on various fronts. After finishing the industrial design bachelor, I was a designer who designed technology-centric solutions to problems. My designs used to be based on a simple concept and would be characterized by the effort put into the technological implementation. Because so much time was spent on the Technology and Realisation behind my designs, I would often forget to elaborate on the bigger picture behind my designs. This indicated that I had trouble communicating the interesting aspects to my concepts, and could not reflect on its societal relevance. My designs would often be too complicated to explain to users, making it difficult to validate. "
        }
      </p>
      <p>
        {
          "Throughout my master I've realized that this societal relevance and bigger picture was much more important than the execution of the project. Through courses like 'Designerly Perspective on IoT' and 'Sound of Smart Things', I learnt to create more holistic and narrative based designs whereas the course 'Interactional Morality' emphasized the importance of societal relevance and moral problems."
        }
      </p>
      <p>
        {
          "Additionally, I underwent a shift in how I approach and realize my projects. Instead of trying to get the designs to work, my realisation skills would be applied more effectively into prototypes, by trying to emulate the experience instead. Through the course 'Designing User Interface using Emerging Technologies' I would discover valuable prototyping methods that made it easier for me to build reliable and immersive experiences. Which allowed me to spent more time working with external stakeholders and experts, to get deeper insights into the design context."
        }
      </p>
      <p>
        {
          "For the research projects I often took a more explorative stance, in which my making skills would come to good use. The focus of this research would be in building interesting research artifacts with novel technologies, and instead of validating these artifacts, these would be used to figure out more specific problems like: 'would the sense box improve story- and world-building' or 'can a more creative approach to a repair café make repair more prevalent'. Especially when it comes to academic writing I have improved a lot, Writing is still not my strength, but during my master it certainly has become less of a bottleneck"
        }
      </p>
      <p>
        {
          "Together this made me change from a product designer towards a more strategic designer who does not just value the execution of a project but also the conceptual aspects of design. all of this has resulted into my ability to tackle complex challenges by engaging with various stakeholders, enabling me to create innovative concepts that address societal problems and make them tangible sand experienceable."
        }
      </p>
    </>
  ),
  image: "/images/demoday.jpg",
  image2: "/images/beun.png",
  image3: "/images/explorasie.jpg",
  caption: <p></p>,
};

const latestProject = {
  title: "Final masters project",
  content: (
    <>
      <p>
        {
          "We are dependent on big tech companies. Day in day out we are using services by Microsoft, Google, Meta, Apple, and Amazon. While we have to use their services to live our comfortable western lifestyle, they have perfected creating intricate digital profiles which are sold to the highest bidder. These profiles are so detailed, that these companies can almost assure their clients they can nudge your behavior, Influence what you buy or determine an entire election. And we don't seem to have a choice."
        }
      </p>

      <p>
        {
          "In my project Claude, I aim to reshape the future of the home server by adapting it to suit the decentralized internet, but this time putting privacy at center. This is done by drawing inspiration from the self-hosting community, a community of people that have been developing and hosting alternatives to big tech companies. Claude creates personal little clouds that can be hosted at home. Giving back control into the hands of the people who want to preserve their digital privacy through data-sovereignty."
        }
      </p>
      {/*
      <p>
        {
          "This was done through 2 co-creation sessions to figure out how users would envision the concept of a personal home server. After which an auto-ethnographic study was held into figuring out what kind of architecture would be desired based on these home server concepts after which the concept was refined and validated with six experts and five students. The concept consists of two elements, the Claude portal; a home server on which users can store and share their data and the Claude wallet; a key wallet to manage access to your or your friends' their servers."
        }
      </p>*/}
      <p>
        {
          "Through an autoetnographic approach combined with expert interviews and a co-creation session I created a homeserver concept which put the users privacy first. It does this through a more personal approach to selfhosting architecture, which does not require personal services to be opened to the public web. This Architecture was then validated in another round of expert interviews. In the end I deliverd a well-rounded homeserver concept. The concept consists of two elements, the Claude portal; a home server and the Claude wallet; a key wallet to manage access to your or your friends' their servers. The whole project concept was then presented on the Nextcloud community days on invitation of Nextcloud."
        }
      </p>
    </>
  ),
  image: "/images/Claude.jpg",
  image2: "/images/claudeApp.png",
  image3: "/images/claudedev.jpg",
  caption: <p></p>,
};
const future = {
  title: "My future plans",
  content: (
    <>
      <p>
        {
          "For the future there are still lots of choices to be made, as I have no clear path laid out. First of all I hope to present my project Claude to a wider audience, Nextcloud, a company that collaborated with me during the Claude project has already invited me to speak at their community event this september. Additionally I hope to find myself a spot on the Dutch Design Week, to propagate my message of decentralising the internet and rethinking our digital architecture. When it comes to future work, I am unsure whether staying in academics would fit me, as even though my writing gotten better, I still do not feel comfortable writing papers. So for now academics seems out of the question. Perhaps if I can find a spot within academia in which I can be more explorative, I might re-evaluate this decision. I do not feel ready to start working for a company either, but the job searching will start. At the end of my bachelors, I set a goal to work at a big tech company such as Google or Apple, as these companies would always be on the forefront of innovation. However my perception on these companies has changed a lot, not only do I disagree with their perception on privacy, but these companies regularly have mass lay-offs and are not reliable employers."
        }
      </p>
      <p>
        {
          "When it comes to searching for a job, I would love to look for a position such as product owner or creative technology at a company with additional public interest. Combining both the conceptual and the realization aspects of design. Examples of which could be companies like Framework, Fairphone, Nextcloud or Nabu Casa. These companies could offer me additional perspectives on designing with social values in mind, all within the context of communities I already partake in. Another option would be getting a position at a small digital service design studio like Bureau Moeilijke Dingen, where I might be able to work on a variety of projects. By exploring different kind of jobs, I might find what kind of company I truly want to work for. One thing is clear however, the diededrive wil be rebuild better than ever, this time waterproof and with a backup..."
        }
      </p>
    </>
  ),
  image: "/images/claudedry.jpg",
  caption: (
    <p>
      {"My homeserver was water damaged during a project about hosting at home"}
    </p>
  ),
};

export async function getStaticProps() {
  const cards = getCards("cardstack");
  const cardsReverse = getCards("cardstackreverse");
  return {
    props: {
      cards,
      cardsReverse,
    },
  };
}

export default function Home({ cards, cardsReverse }) {
  return (
    <Layout home>
      {/* <time datetime="2016-10-25" suppressHydrationWarning />s */}
      <Slidesjow sx={{ width: "100vw" }} />

      <div id="Identity" />
      <Buffertext text="Hi I'm Diede! A Human-Systems Interaction EngD candidate at Eindhoven University of Technology" />
      <PIV3
        title={identity.title}
        content={identity.content}
        image={identity.image}
        alt="Me Smiling"
        image2={identity.image2}
        alt2="Diede at work building"
        image3={identity.image3}
        alt3="Diede at work photographing"
        caption={identity.caption}
      />

      <div id="Projects" />
      <Buffertext id="Projects" text="What kind of projects have you done?" />
      <Deck cards={cards} />
      <Buffer />
      <PIVMirror3
        title={latestProject.title}
        content={latestProject.content}
        image={latestProject.image}
        alt="Claude homeserver"
        image2={latestProject.image2}
        alt2="Shared Gallery Interface"
        image3={latestProject.image3}
        alt3="Explanation on Claude Sharing"
        caption={latestProject.caption}
      />

      {/* <Buffertext id="Projects" text="How did you develop as a designer?" />
      <PIV3
        title={development.title}
        content={development.content}
        image={development.image}
        image2={development.image2}
        image3={development.image3}
        caption={development.caption}
      />*/}

      <div id="root"></div>

      <Buffertext text="What is your vision on design?" />
      <div id="Vision" />
      <PIV3
        title={vision.title}
        content={vision.content}
        image={vision.image}
        alt1="A Phone under repair"
        image2={vision.image2}
        alt2="A Homeserver with a plant on top"
        image3={vision.image3}
        alt3="Homeserver dashboard"
        caption={vision.caption}
      />

      <div id="Development" />
      {/* <Buffertext text = "What about your expertises?"/>
      <DeckReverse cards={cardsReverse}/>*/}
      <Skills />

      {/* <Buffertext text="Where is the future headed?" />
      <div id="Future" />
      <PIVMirror
        title={future.title}
        content={future.content}
        image={future.image}
        caption={future.caption}
      />*/}

      <div id="Contact" />
      <Bufferlink
        text="Do you want work together on a better world? Click me and Let's get in touch!"
        link="mailto: contact@designedbydie.de"
      />
      <a rel="me" href="https://mastodon.voordie.de/@diedeboef">
        Mastodon
      </a>
    </Layout>
  );
}
