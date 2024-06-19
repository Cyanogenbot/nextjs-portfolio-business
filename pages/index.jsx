import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Deck from '../components/cardstack'
import utilStyles from '../styles/utils.module.css'
import Slidesjow from '../components/slidesjow'	
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import PIV from '../components/textSection'
import PIVMirror from '../components/textSectionMirror'
import PIV3 from '../components/textSection3'
import PIVMirror3 from '../components/textSectionMirror3'
import Buffer from '../components/buffer'
import Buffertext from '../components/buffertext'
import Bufferlink from '../components/bufferlink'
import DeckReverse from '../components/cardstackreverse'
import Container from '@mui/material/Container';
import Skills from '../components/Skills'

const identity = {
  title: "Design identity",
  content :<><p>{"As a maker at heart, my interest lay in the field of 3D manufacturing, electronics, and programming. My peers know me for my ability to turn a concept into an experience. This ability to turn concepts into reality makes it easier to evaluate the concepts and build forward on them. I also like to tinker around with novel technologies and open source projects in my spare time, an example of which is that I host and maintain my own digital services on my old computer which I turned into a server. Most of my thinking is done through my hands, as I express myself through, drawing, photo & videography, coding and building."}</p><p>{"In my personal design process I delve deep into problems, often trying to get a complete overview of a situation or challenge (US & MDC). This gives me an all encompassing overview of the issue and a design context to work in. By quickly learning and mastering new concepts, I can communicate and collaborate with experts on an equal footing (BE), which allows me to get a better understanding of the design space. Based on this design space I then try to see how technology could take a role in this situation and design a concept around this (TR, MDC). Which then can be discussed with experts and users for additional insights and iterations(US, BE). Once a problem is turned into a concept, my maker skill-set allows me to iterate quickly and move towards a final design (TR, MDC). Combining the power of thoughtful concepts with quick realisation skills."}</p><p>{'When working together with other designers I take on the role of Creative Director. through which I try to preserve the overarching vision of the project, making sure the projects strong points are not lost and keeping alignment with concepts. My strength is flexibility as I am not scared to pivot. I aim to inspire others in the design team to give input, and democratically tackle decisions, but I am not scared to go against the grain. Hence I believe a position like "Product Owner" would suit me well in the future.'}</p></>,
  image: "/images/wholesome.jpg",
  image3: "/images/foto.jpg",
  image2: "/images/diedeaantwerk.jpg",
  caption: <p>{"Me in my creative process"}</p>
}

const vision = {
  title:"Vision on design",
  content: <><p>{'As a designer I am very critical of our neoliberal capitalist system where profits proceed people. Our society defines success by profitability rather than impact, enabling practices such as surveillance capitalism, where new products are designed for the sake of collecting more data, rather than helping people. I believe designers could take a stance against this growth and efficiency centred approach tso "innovation" by going the extra mile and design with the public good in mind.'}</p><p>{"An example of which can be found in designing around the internet. I believe the smart home itself resides in the users house, and not on an external cloud. This is because data protection often seems to be an afterthought in design, and sometimes even a business model. We have become the product ourselves in this capitalist society, where everyone want us to consume their products. Data sovereignty has become more important than ever and to do so we might have to rethink our digital infrastructure. Not only do I advocate for a decentralised internet where our digital lives are not ruled by big companies, but also the involvement of practices like Privacy by Design, which urges designers to take care of privacy throughout the entire design process. As practices like these can help us design for the public good."}</p><p>{"Another topic would be sustainability, where planned obsolescence has been compromising products for a while. I believe that a more open approach to design, where hardware can be repaired, modded and maintained by anyone, can not just help us reduce waste, but also create better user experiences. An example of which would be the framework laptop, a laptop that is not only modular and repairable, but also actively involves its community to reuse old motherboards for other purposes. Just like I use my old computer as a server."}</p><p>{"As designers, we should take social values such as privacy, sustainability and equality and innovate based these core values, rather than innovate for the sake of technology and growth. Applying the idea of privacy by design to other social contexts, like sustainable by design or equal by design, might result into truly disruptive innovations."}</p></>,
  image: "/images/opendevice.jpg",
  image2: "/images/diededriveoud.jpg",
  image3: "/images/hass.png",
  caption: <p>{"My homeserver & Repair"}</p>

}

const development = {
  title:"Development",
  content: <><p>{'During my master I developed myself on various fronts. After finishing the industrial design bachelor, I was a designer who designed technology-centric solutions to problems. My designs used to be based on a simple concept and would be characterized by the effort put into the technological implementation. Because so much time was spent on the Technology and Realisation behind my designs, I would often forget to elaborate on the bigger picture behind my designs. This indicated that I had trouble communicating the interesting aspects to my concepts, and could not reflect on its societal relevance. My designs would often be too complicated to explain to users, making it difficult to validate. '}</p><p>{"Throughout my master I've realized that this societal relevance and bigger picture was much more important than the execution of the project. Through courses like 'Designerly Perspective on IoT' and 'Sound of Smart Things', I learnt to create more holistic and narrative based designs whereas the course 'Interactional Morality' emphasized the importance of societal relevance and moral problems."}</p><p>{"Additionally, I underwent a shift in how I approach and realize my projects. Instead of trying to get the designs to work, my realisation skills would be applied more effectively into prototypes, by trying to emulate the experience instead. Through the course 'Designing User Interface using Emerging Technologies' I would discover valuable prototyping methods that made it easier for me to build reliable and immersive experiences. Which allowed me to spent more time working with external stakeholders and experts, to get deeper insights into the design context."}</p><p>{"For the research projects I often took a more explorative stance, in which my making skills would come to good use. The focus of this research would be in building interesting research artifacts with novel technologies, and instead of validating these artifacts, these would be used to figure out more specific problems like: 'would the sense box improve story- and world-building' or 'can a more creative approach to a repair café make repair more prevalent'. Especially when it comes to academic writing I have improved a lot, Writing is still not my strength, but during my master it certainly has become less of a bottleneck"}</p><p>{"Together this made me change from a product designer towards a more strategic designer who does not just value the execution of a project but also the conceptual aspects of design. all of this has resulted into my ability to tackle complex challenges by engaging with various stakeholders, enabling me to create innovative concepts that address societal problems and make them tangible sand experienceable."}</p></>,
  image: "/images/demoday.jpg",
  image2: "/images/beun.png",
  image3: "/images/explorasie.jpg",
  caption: <p></p>
}

const latestProject ={
  title:"Final masters project",
  content: <>
  <p>{"We are dependent on big tech companies. Day in day out we are using services by Microsoft, Google, Meta, Apple, and Amazon. While we have to use their services to live our comfortable western lifestyle, they have perfected creating intricate digital profiles which are sold to the highest bidder. These profiles are so detailed, that these companies can almost assure their clients they can nudge your behavior, Influence what you buy or determine an entire election. And we don't seem to have a choice"}</p>
  
  <p>{"The Claude project reshapes the future of the home server by adapting it to suit the decentralized internet, putting privacy at center. This is done by drawing inspiration from the self-hosting community, a community of people that have been developing and hosting alternatives to big tech companies. Claude creates personal little clouds that can be hosted at home. Giving back control into the hands of the people who want to preserve their digital privacy through data-sovereignty. This is done through 2 co-creation session to figure out how users would envision a personal home server. After which an auto-ethnographic study into the architecture of home-severs results into a concept. This concept is then refined and validated with six experts and five students. The concept consists of two elements, the Claude portal; a home server on which users can store and share their data and the Claude wallet; a key wallet to manage access to your or your friends' their servers."}
  </p>
  </>,
  image: "/images/claude.jpg",
  image2: "/images/claudeApp.png",
  image3: "/images/claudedev.jpg",
  caption: <p></p>
  
  
}
const future={
  title:"My future plans",
  content: <><p>{"For the future there are still lots of choices to be made, as I have no clear path laid out. First of all I hope to present my project Claude to a wider audience, Nextcloud, a company that collaborated with me during the Claude project has already invited me to speak at their community event this september. Additionally I hope to find myself a spot on the Dutch Design Week, to propagate my message of decentralising the internet and rethinking our digital architecture. When it comes to future work, I am unsure whether staying in academics would fit me, as even though my writing gotten better, I still do not feel comfortable writing papers. So for now academics seems out of the question. Perhaps if I can find a spot within academia in which I can be more explorative, I might re-evaluate this decision. I do not feel ready to start working for a company either, but the job searching will start. At the end of my bachelors, I set a goal to work at a big tech company such as Google or Apple, as these companies would always be on the forefront of innovation. However my perception on these companies has changed a lot, not only do I disagree with their perception on privacy, but these companies regularly have mass lay-offs and are not reliable employers."}</p><p>{" When it comes to searching for a job, I would love to look for a position such as product owner or creative technology at a company with additional public interest. Combining both the conceptual and the realization aspects of design. Examples of which could be companies like Framework, Fairphone, Nextcloud or Nabu Casa. These companies could offer me additional perspectives on designing with social values in mind, all within the context of communities I already partake in. Another option would be getting a position at a small digital service design studio like Bureau Moeilijke Dingen, where I might be able to work on a variety of projects. By exploring different kind of jobs, I might find what kind of company I truly want to work for. One thing is clear however, the diededrive wil be rebuild better than ever, this time waterproof and with a backup..."}</p> 
  </>,
  image: "/images/claudedry.jpg",
  caption: <p>{"My homeserver was water damaged during a project about hosting at home"}</p>

}

export default function Home() {
  return (
    <Layout home>
      {/* <time datetime="2016-10-25" suppressHydrationWarning />s */}
      <Slidesjow  sx={{width:"100vw"}}/>

      <div id="Identity"/>
      <Buffertext text = "Hi I'm Diede! an Industrial Design master student at the TU/e"/>
      <PIV3 title={identity.title} content={identity.content} image={identity.image} image2={identity.image2} image3={identity.image3}  caption={identity.caption}/>

      <div id="Projects"/>
      <Buffertext id ="Projects" text = "What do you do?"/>
      <Deck/>
      <PIVMirror3 title = {latestProject.title} content = {latestProject.content} image = {latestProject.image} image2 = {latestProject.image2} image3 = {latestProject.image3} caption={latestProject.caption}/>
      
      <Buffertext id ="Projects" text= "How did you develop as a designer?"/>
      <PIV3 title={development.title} content={development.content} image={development.image} image2={development.image2} image3={development.image3} caption={development.caption}/>
      <div id="root"></div>


      <Buffertext text = "How do you see the future?"/>
      <div id="Vision"/>
      <PIVMirror3 title = {vision.title} content = {vision.content} image = {vision.image} image2 = {vision.image2} image3 = {vision.image3} caption={vision.caption}/>

      <div id="Development"/>
      <Buffertext text = "What about your expertises?"/>
      <DeckReverse/>
      <Skills/>
    
      <Buffertext text = "Where is the future headed?"/>
      <div id="Future"/>
      <PIVMirror title={future.title} content={future.content} image={future.image} caption={future.caption} />

      <Bufferlink text = "Want to be part of my future? Contact me!" link = "mailto: contact@designedbydie.de"/>
    </Layout>
  )
}