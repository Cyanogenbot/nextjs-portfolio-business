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
  content :<><p>{"As a maker at heart, my interest lay in the field of 3D manufacturing, electronics, and programming. My peers know me for my ability to turn a concept into an experience. This ability to turn concepts into reality makes it easier to evaluate the concepts and build forward on them. I also like to tinker around with novel technologies and open source projects in my spare time, an example of which is that I host and maintain my own digital services on my old computer which I turned into a server. Most of my thinking is done through my hands, as I express myself through, drawing, writing, coding and building."}</p><p>{"In my personal design process I delve deep into problems, often trying to get a complete overview of a situation or challenge. This gives me an all encompassing overview of the issue and a design context to work in. By throroughly familiarising myself with the design space, allowing me to involve and communicate with experts. Based on this design space I then try to see how technology could take a role in this situation and design a concept around this. Once a problem is turned into a concept my maker skillset allows me to iterate and quickly move towards a final design. Combining the power of thoughtful concepts with quick realisation skills."}</p><p>{'When working together with other designers I take on the role of Creative Director. I try to preserve the overarching vision of the project, making sure the projects strong points are not lost and keeping alignment with concepts. My strength is flexibility as I am not scared to pivot. I aim to inspire others in the design team to give input, and democratically tackle decisions, but I am not scared to go against the grain. Hence I believe a position like "Product Owner" would suit me well in the future.'}</p></>,
  image: "/images/wholesome.jpg"
}

const vision = {
  title:"Vision on design",
  content: <><p>{'As a designer I am very critical of our neoliberal capitalist system where profits proceed people. Our society defines success by profitability rather than impact, enabling practices such as surveillance capitalism, where new products are designed for the sake of collecting more data, rather than helping people. I believe designers could take a stance against this growth and efficiency centred approach tso "innovation" by going the extra mile and design with the public good in mind.'}</p><p>{"An example of which can be found in designing around the internet. I believe the smart home itself resides in the users house, and not on an external cloud. This is because data protection often seems to be an afterthought in design, and sometimes even a business model. We have become the product ourselves in this capitalist society, where everyone want us to consume their products. Hence It has become more important than ever that our data is sovereign. Practices like Privacy by Design, which urges designers to take care of privacy throughout the entire design process, can help us design for the public good."}</p><p>{"Another topic would be sustainability, where planned obsolescence has been compromising products for a while. I believe that a more open approach to design, where hardware can be repaired, modded and maintained by anyone, can not just help us reduce waste, but also create better user experiences. An example of which would be the framework laptop, a laptop that is not only modular and repairable, but also actively involves its community to reuse old motherboards for other purposes."}</p><p>{"As designers, we should take social values such as privacy, sustainability and equality and innovate based these core values, rather than innovate for the sake of technology and growth. Applying the idea of privacy by design to other social contexts, like sustainable by design or equal by design, might result into truly disruptive innovations."}</p></>,
  image: "/images/opendevice.jpg",

}

const development = {
  title:"Development",
  content: <><p>{'During my master I developed myself on various fronts. When I finished the industrial design bachelor I was a designer who designed technology-centric solutions to problems. My designs used to be based on a simple concept and I would spend a lot of time to realize and build this actual solution. Because I would spend so much time on the Technology and Realisation behind my designs, I would often forget to elaborate on the bigger picture behind my designs. This meant that I had trouble communicating what would be interesting about my designs, and could not reflect on its societal relevance. My designs would often be too complicated to explain to users, making it difficult to validate. '}</p><p>{"Throughout my master I've realized that this societal relevance and bigger picture was much more important than the execution of the project. I learnt this through courses like Designerly Perspective on IoT and Sound of Smart things, which focussed on creating more holistic and narrative based designs and Interactional Morality which emphasized the importance of societal relevance and moral problems."}</p><p>{'Additionally I underwent a shift in the way I would realize my projects. Instead of trying to get the designs to work, I would use the same skills more effectively prototype by trying to emulate the entire experience instead. In the course Designing User Interface using Emerging Technologies I would discover valuable prototyping methods that made it easier for me to build reliable and immersive experiences allowing me to spent more time working with external stakeholders and stakeholders, to get deeper insights into the design context and play with new ideas and contexts.'}</p><p>{'For the research projects I often took a more explorative stance where my making skills would come to good use. I would focus on making interesting research artifacts with novel technologies, and instead of validating these artifacts, would use them to figure out more specific problems like: would the sense box improve story and world building or can a more creative approach to a repair café make repair more prevalent. Especially when it comes to academic writing I have improved a lot already, as I do admit writing is still not my strength, it certainly has become less of a bottleneck in my projects'}</p><p>{'Together this made me change from a product designer towards a more strategic design who does not just value the execution of a project but also the conceptual aspects of a design. I now allow myself to express my vision on complex societal problems, and use these as basis for my designs so I can have my little impact on the world.'}</p></>,
  image: "/images/demoday.jpg",
  image2: "/images/desk.jpg",
  image3: "/images/explorasie.jpg"
}

const latestProject ={
  title:"Final masters project",
  content: <>
  <p>{"We are dependent on big tech companies. Day in day out we are using services by Microsoft, Google, Meta, Apple, and Amazon. While we have to use their services to live our comfortable western lifestyle, they have perfected creating intricate digital profiles which are sold to the highest bidder. These profiles are so detailed, that these companies can almost assure their clients they can nudge your behavior, Influence what you buy or determine an entire election. And we don't seem to have a choicee"}</p>
  
  <p>{"The Claude project reshapes the future of the home server by adapting it to suit the decentralized internet, putting privacy at center. This is done by drawing inspiration from the self-hosting community, a community of people that have been developing and hosting alternatives to big tech companies. Claude creates personal little clouds that can be hosted at home. Giving back control into the hands of the people who want to preserve their digital privacy through data-sovereignty. This is done through 2 co-creation session to figure out how users would envision a personal home server. After which an auto-ethnographic study into the architecture of home-severs results into a concept. This concept is then refined and validated with six experts and five students. The concept consists of two elements, the Claude portal; a home server on which users can store and share their data and the Claude wallet; a key wallet to manage access to your or your friends' their servers."}
  </p>
  </>,
  image: "/images/claude.jpg",
  image2: "/images/claudeApp.png",
  image3: "/images/claudedev.jpg", 
  
}
const future={
  title:"My future plans",
  content: <><p>{"For the future I still have lots of choices to make, as I have no clear idea of what I want to do yet. I am not sure whether staying in academics would fit me, as eventhough I have gotten better at writing, I still do not feel comfortable writing papers. Hence I am not thinking of continuing this path. Perhaps if I can find a spot within academia in which I can be more explorative, I might re-evaluate this decision. I feel like I am not quite ready to begin working for a company yet, as I am quite young, but the job searching will start. When I ended the bachelors I set my goal to work at a big tech company such as Google or Apple, as these companies would always be on the forefront of innovation. However I think my perception on these companies has changed a lot, not only do I not agree with their perception on privacy, but these companies regularily have mass lay-offs and are not reliable employers. When it comes to searching for a job, I would love to look for a position such as product owner or creative technology at a company with additional public interest. Examples of which could be companies like Fairphone, Nextcloud or Nabu Casa, as I think these companies could offer me additonal perspectives to the designing process, all within the context of communities I already partake in. Another option would be getting a position at a small digital service design studio like Bureau Moeilijke Dingen where I can work on a variety of projects. By exploring different kind of jobs, I might find what kind of company I truly want to work at. One thing is clear however, I am going to rebuild the diededrive better than ever, this time with a backup..."}</p> 
  </>,
  image: "/images/deaddrive.jpg"

}

export default function Home() {
  return (
    <Layout home>
    
      <Slidesjow  sx={{width:"100vw"}}/>

      <div id="Identity"/>
      <logoIcon  color="white"/>
      <Buffertext text = "Hi I'm Diede! an Industrial Design master student at the TU/e"/>
      <PIV title = {identity.title} content = {identity.content} image = {identity.image}/>

      <div id="Projects"/>
      <Buffertext id ="Projects" text= "What do you do?"/>
      <Deck/>
      <PIVMirror3 title = {latestProject.title} content = {latestProject.content} image = {latestProject.image} image2 = {latestProject.image2} image3 = {latestProject.image3}/>
      
      <Buffertext id ="Projects" text= "How did this impact you as a designer?"/>
      <PIV3 title ={development.title} content = {development.content} image ={development.image} image2 ={development.image2} image3 ={development.image3}/>
      <div id="root"></div>


      <Buffertext text = "How do you see the future?"/>
      <div id="Vision"/>
      <PIVMirror title = {vision.title} content = {vision.content} image = {vision.image}/>

      <div id="Development"/>
      <Buffertext text = "So how did I develop?"/>
      <DeckReverse/>
      <Skills/>
    
      <Buffertext text = "Where is the future headed?"/>
      <div id="Future"/>
      <PIVMirror title = {future.title} content = {future.content} image = {future.image}/>

      <Bufferlink text = "Want to be part of my future? Contact me!" link = "mailto: contact@designedbydie.de"/>
    </Layout>
  )
}