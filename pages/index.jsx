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
  content :<><p>{"Hi, I'm Diede! I create rich IoT experiences that explore the boundaries of agency and autonomy. I am a speculative designer that likes to design product ecosystems, protocols and human computer interfaces within the subject of ubiqitous computing. I try to push the boundaries of human computer interactions by creating rich experiences that make us rethink how we interact with products and product systems"}</p></>,
  image : "/images/me.jpg"
}

const vision = {
  title:"Vision on design",
  content: <><p>{"Modern-day smart products are not made to be used by humans directly, rather they’re made to be used through smartphones. Activating appliances through a smartphone feels like a gimmick to most people. Virtual buttons might allow for easier connectivity solutions, but for me, they kill the immersion of living in a smart home by disconnecting me from the physical home. The smart home product I value the most in my own room is the simple smart light switch as it allows me to change my lights without having to use my phone. I think appliances should focus more on interacting in the physical ecosystem of the house, with the common goal of delivering a more humane and seamless experience to the end-user. Where some designers believe the future of design is in the metaverse, I think the future of design augment the real world. "}</p>
   </>,
  image: "/images/opendevice.jpg",

}

const latestProject ={
  title:"My final bachelors project",
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

export default function Home() {
  return (
    <Layout home>
    
      <Slidesjow  sx={{width:"100vw"}}/>

      <div id="Identity"/>
      <Buffertext text = "Hi I'm Diede! an industrial design student at the TU/e"/>
      <PIV title = {identity.title} content = {identity.content} image = {identity.image}/>

      <div id="Projects"/>
      <Buffertext id ="Projects" text= "But what do you do?"/>
      <Deck/>
      <PIVMirror3 title = {latestProject.title} content = {latestProject.content} image = {latestProject.image} image2 = {latestProject.image2} image3 = {latestProject.image3}/>
      <div id="root"></div>


      <Buffertext text = "How do you see the future?"/>
      <div id="Vision"/>
      <PIV title = {vision.title} content = {vision.content} image = {vision.image}/>

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