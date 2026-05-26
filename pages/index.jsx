import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Deck from "../components/cardstack";
import Slidesjow from "../components/slidesjow";
import PIV3 from "../components/textSection3";
import PIVMirror3 from "../components/textSectionMirror3";
import Buffer from "../components/buffer";
import Buffertext from "../components/buffertext";
import Bufferlink from "../components/bufferlink";
import Skills from "../components/Skills";
import { getCards } from "../utility/getCardstackData";
import { getSections } from "../utility/getSectionData";

const defaultSection = {
  title: "",
  buffertext: "",
  image: "",
  image2: "",
  image3: "",
  caption: "",
  alt: "",
  alt2: "",
  alt3: "",
  link: "",
  paragraphs: [],
};

function SectionContent({ paragraphs }) {
  if (!paragraphs || paragraphs.length === 0) return null;
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const cards = getCards("cardstack");
  const cardsReverse = getCards("cardstackreverse");

  let sections = [];
  try {
    sections = getSections();
  } catch (err) {
    console.error("Failed to load sections:", err);
  }

  const identity =
    sections.find((s) => s.title === "Welcome to my portfolio") ||
    defaultSection;
  const latestProject =
    sections.find((s) => s.title === "Final masters project") || defaultSection;
  const vision =
    sections.find((s) => s.title === "Vision on design") || defaultSection;
  const development =
    sections.find((s) => s.title === "Development") || defaultSection;
  const future =
    sections.find((s) => s.title === "My future plans") || defaultSection;
  const contact =
    sections.find((s) => s.buffertext && s.link) || defaultSection;

  return {
    props: {
      cards,
      cardsReverse,
      identity,
      latestProject,
      vision,
      development,
      future,
      contact,
    },
  };
}

export default function Home({
  cards,
  cardsReverse,
  identity,
  latestProject,
  vision,
  development,
  future,
  contact,
}) {
  return (
    <Layout home>
      <Slidesjow sx={{ width: "100vw" }} />

      <div id="Identity" />
      <Buffertext text={identity.buffertext} />
      <PIV3
        title={identity.title}
        content={<SectionContent paragraphs={identity.paragraphs} />}
        image={identity.image}
        alt={identity.alt}
        image2={identity.image2}
        alt2={identity.alt2}
        image3={identity.image3}
        alt3={identity.alt3}
        caption={identity.caption ? <p>{identity.caption}</p> : <p />}
      />

      <div id="Projects" />
      <Buffertext id="Projects" text={latestProject.buffertext} />
      <Deck cards={cards} />
      <Buffer />
      <PIVMirror3
        title={latestProject.title}
        content={<SectionContent paragraphs={latestProject.paragraphs} />}
        image={latestProject.image}
        alt={latestProject.alt}
        image2={latestProject.image2}
        alt2={latestProject.alt2}
        image3={latestProject.image3}
        alt3={latestProject.alt3}
        caption={latestProject.caption ? <p>{latestProject.caption}</p> : <p />}
      />

      {/* <Buffertext text={development.buffertext} />
      <PIV3
        title={development.title}
        content={<SectionContent paragraphs={development.paragraphs} />}
        image={development.image}
        image2={development.image2}
        image3={development.image3}
        caption={development.caption ? <p>{development.caption}</p> : <p />}
      />*/}

      <div id="root"></div>

      <Buffertext text={vision.buffertext} />
      <div id="Vision" />
      <PIV3
        title={vision.title}
        content={<SectionContent paragraphs={vision.paragraphs} />}
        image={vision.image}
        alt={vision.alt}
        image2={vision.image2}
        alt2={vision.alt2}
        image3={vision.image3}
        alt3={vision.alt3}
        caption={vision.caption ? <p>{vision.caption}</p> : <p />}
      />

      <div id="Development" />
      {/* <Buffertext text="What about your expertises?"/>
      <DeckReverse cards={cardsReverse}/>*/}
      <Skills />

      {/* <Buffertext text={future.buffertext} />
      <div id="Future" />
      <PIVMirror3
        title={future.title}
        content={<SectionContent paragraphs={future.paragraphs} />}
        image={future.image}
        alt={future.alt}
        image2={future.image2}
        alt2={future.alt2}
        image3={future.image3}
        alt3={future.alt3}
        caption={future.caption ? <p>{future.caption}</p> : <p />}
      />*/}

      <div id="Contact" />
      <Bufferlink text={contact.buffertext} link={contact.link} />
      <a rel="me" href="https://mastodon.voordie.de/@diedeboef">
        Mastodon
      </a>
    </Layout>
  );
}
