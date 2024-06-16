import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Deck from '../components/cardstack'
import utilStyles from '../styles/utils.module.css'
import Slidesjow from '../components/slidesjow'	
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import PIV from '../components/textSection'
import PIVMirror from '../components/textSectionMirror'
import PIVMirror3 from '../components/textSectionMirror3'
import Buffer from '../components/buffer'
import Buffertext from '../components/buffertext'
import Bufferlink from '../components/bufferlink'
import DeckReverse from '../components/cardstackreverse'
import Container from '@mui/material/Container';
import Skills from '../components/Skills'

const identity = {
  title: "Design identity",
  content :<><p>{"As a maker at heart, as my interest lay in the field of 3D manufacturing, electronics, and programming. My peers known for my ability to turn a concept into an experience. This ability to turn concepts into reality makes it easier to evaluate the concepts and build forward on them. I also like to tinker around with novel technologies and open source projects in my spare time, an example of which is that I host and maintain my own digital services on my old computer which i turned into a server. Most of my thinking is done through my hands, as I express myself through, drawing, writing, coding and building."}</p><p>{"In my personal design process I delve deep into problems, often trying to get a complete overview of a situation or problem. This gives me an all encompassing overview of the issue and a design context to work in. By throroughly familiarising myself with the design space, I learn quickly, allowing me to involve and communicate with experts. Based on this design space I then try to see how technology could take a role in this situation and design a concept around this. Once a problem is turned into a concept my maker skillset allows me to iterate and quickly towards a final design. Combining the power of thoughtful concepts with quick realisation skills."}</p><p>{'When working together with other designers I take on the role of Creative Director. I try to preserve the overarching vision of the project, making sure the projects strong points are not lost and keeping alignment with concepts. My strength is in flexibility as I am not scared to pivot. I aim to inspire others in the design team to give input, and democratically tackle decisions, but I am not scared to go against the grain. Hence I believe a position like "Product Owner" would suit me well in the future.'}</p></>,
  image : "/images/me.jpg"
}

const vision = {
  title:"Vision on design",
  content: <><p>{'As a designer I am very critical of our neoliberal capitalist system where profits proceed people. Our society defines success by profitablity rather than impact, enabling practices such as surveillance capitalism, where new products are designed for the sake of collecting more data, rather than helping people. I believe designers could take a stance against this growth and efficiency centered approach to "innovation" by going the extra mile and design with the public good in mind.'}</p><p>{"An example of which can be found in designing around the internet. I believe the smart home itself resides in the users house, and not on an external cloud. This is because data protection often seems to be an afterthought in design, and sometimes even a business model. We have become the product ourselves in this capitalist society, where everyone want us to consume their products. Hence It has become more important than ever that our data is sovereign."}</p><p>{"As designers we should take social values such as privacy, sustainability and equality and innovate based these core values, rather than innovate for the sake of technology and growth. Applying the idea of privacy by design to other social contexts. Allowing for more disruptive changes to our world."}</p></>,
  image: "/images/opendevice.jpg",

}

const development = {
  title:"Development",
  content: <><p>{'ddgfsdfjghdfjklghdddlghjksdlgkhjdfshjksdfg'}</p></>,
  image: "/images/opendevice.jpg",

}

const latestProject ={
  title:"My final masters project",
  content: <><p>{"In the future, our houses will be smarter than ever. As novel smart home devices will start to lead their own lives, they might initiate actions just by sensing human presence. But how  do  we  as  humans  stay  in  control of these intelligent homes? Sphere is a design exploration on imposing presence sensing limits to our smart home devices. By pulling on sphere's string you can set a sphere of influence for appliances to respond to, so that these devices won’t  respond  to  your  presence  when you don’t want it to happen."}</p>
  </>,
  image: "/images/fbp.jpg",
  image2: "/images/systemdraw.jpg",
  image3: "/images/exploration.jpg", 
  
}
// const future={
//   title:"My future plans",
//   content: <><p>{"For the future I want to do a master’s in industrial design and specifically in the field of Computer Human Interaction. The overlap between psychology and the integration of often intrusive technologies is a field that interests me a lot. I to keep on exploring this within the field of smart homes but I am not quite sure about this. The reason smart homes are a subject that interests me a lot is that I think that homes are the battlefield of directing technologies and the values of their inhabitants. I want to do this here in Eindhoven as Eindhoven is still one of the better design studies when it comes to Computer Human Interaction, but I do aspire to do an exchange to Carnegie Melon University at some point as a lot of their graduate projects entice me. Attending another university will also allow me to see another perspective on design which will be valuable in exploring my identity and vision. How I want to develop on the expertise area’s is still unclear to me. This, however, might be a positive sign about my previous development and allows me to jump into my future education freshly. "}</p>
//   <p>{" As for my next project I want to create my own 3D printer during the summer, I noticed that I liked working on and with my 3D printer in my spare time and want to take the next step in this hobby. Most parts are ordered already and now it’s a matter of time to assemble the machine. I want to get higher quality prints in less time to make my rapid prototyping workflow even more rapid. To do this I’m creating my own iteration of the VZBot open-source project. Building this 3D printer, myself will allow me to create a 3D printer that fits my personal workflow better, give me more insight into additive manufacturing and printer kinematics which I can hopefully use in my future projects! "}</p> 
//   </>,
//   image: "/images/printer.jpg"

// }

function logoIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />{" "}
    </SvgIcon>
  );
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
      <Buffertext id ="Projects" text= "But what do you do?"/>
      <Deck/>
      <PIVMirror3 title = {latestProject.title} content = {latestProject.content} image = {latestProject.image} image2 = {latestProject.image2} image3 = {latestProject.image3}/>
      <PIV title ={development.title} content = {development.content} image ={development.image}/>
      <div id="root"></div>


      <Buffertext text = "How do you see the future?"/>
      <div id="Vision"/>
      <PIVMirror title = {vision.title} content = {vision.content} image = {vision.image}/>

      <div id="Development"/>
      <Buffertext text = "So how did I develop?"/>
      <DeckReverse/>
      <Skills/>
    
      {/* <Buffertext text = "Where is the future headed?"/> */}
      <div id="Future"/>
      {/* <PIVMirror title = {future.title} content = {future.content} image = {future.image}/> */}

      <Bufferlink text = "Want to be part of my future? Contact me!" link = "mailto: contact@designedbydie.de"/>
    </Layout>
  )
}