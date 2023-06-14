import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import { useSprings, animated, interpolate } from 'react-spring'
import styles from '../components/layout.module.css'
import { useDrag } from 'react-use-gesture'
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';



const cards = [
    {
    title: "This portfolio", 
    URL:'/images/codeportfolio.png',
    description:<><p>{"For this portfolio I wanted to code the website myself, rather than utilizing a website builder. In my previous portfolio did this by coding bare HTML + CSS, but I found this confusing to work with. This was especially confusing when it came to creating dynamic elements, Hence I decided to use NEXT.js this time, and created a more dynamic website. My website aims to symbolize the connection between interaction design and technology that has a central role in my personal identity and vision."} </p>

    <p>{"For the portfolio text I was able to learn how to reflect better on my work. Especially now most projects have age, it was easier to see the real purpose of certain courses within the bigger picture of the bachelor. This helped me create a better view on personal development through the years, and what my design motives are."} </p>
    </> },
    {
    title: "Digital Craftmanship",
    URL: '/images/DCmask.png',
    description: <> <p>{"For this course we created mouth masks that were generated through code. Our code would cut up several pictures and glue them back together. The result is a pdf that can be printed on transfer paper and transferred on to a fabric stencil for a mouth mask. This process makes for a simple way to create a personalised moutmasks in an accesible manner"}</p>
   </>
    },
    {
    title: "Aesthetics of Interaction",
    URL: '/images/AoI.jpg',
    description: <> <p>{" In the course Aesthetics of Interactions we created waking up experience for more mystical user group. This involved us taking aspects seen in mystical communities and trying to utilize these to enrich their waking up experience. We ended up creating an alarm clock based of a singing bowl, which would start singing once hit, this was paired together with a fog maker to create some more mysticality. The creation of this device helped me see the significance of creating an interaction past the graphical user interfaces. "} </p>
   </>
    },
    {
    title: "Radical toys",
    URL: '/images/sociobear.jpg',
    description:<> <p>{"Socio cultural design was my first elective during this bachelor, in this elective we did several mini projects about addressing societal problems and inclusion within design. One of these projects was an exhibition in which we would address gender marketing within toys. With the goal of starting a debate about the matter. Tried to evoke questions such as: Does gender marketing reinforce gender stereotypes. And what if kids don’t like the toys aimed at the opposite gender? This course mainly helped me think about looking at problems from different perspectives and designing for debate. "} </p></>
    },
    {
    title: "Bubbles",
    URL: '/images/PoA.jpeg',
    description: <> <p>{"We developed headgear through which we wanted to make people aware of the bubbles they are in, Physical bubbles were created to resemble different backgrounds and ideas. By looking through these bubbles we become more aware of our actions, but watch out as these bubbles might start blocking your vision"} </p>
   </>
    },  
    {
    title: "Creative Electronics",
    URL: '/images/CEfeedy.jpg',
    description:<> <p>{"In the course creative electronics I created a connected dog feeder which would dispense food on command. The device would also notify the user once the dispenser was almost out of food. The dog feeder was connected to my Google home speaker and allowed me to feed my dog using simple voice commands. This would make it a breeze to feed my dog. The prototype used a stepper motor to determine the right dose of food. "} </p>
    <p>{"This course was my first step into creating smart home devices. In this course we learnt how to work with electronics and Arduino’s which I enjoyed a lot. However, I wanted to take this a step further myself by figuring out how I could control my Arduino or ESP with my google home speaker. And so, I created Creating this device not only taught me how to work with technology and realize product prototypes, but also how to send data to my prototypes over the internet. "} </p>
   </>
    },
    {
    title: "Pixii", 
    URL:'/images/P3.png',
    description:<><p>{"Pixii a design research project in which different loci of control within ambient projection systems were explored. The at students aimed ambient projection system aided the transition between work and leisure and tries to steer users into a more balanced work-life balance. From this research was concluded that the students would prefer a more suggestive system that would allow for flexibility."} </p>
   </>
    },
    {
    title: "heyOOCSI!",
    URL: '/images/heyOOCSIProbe.jpg',
    description: <><p>{"Heyoocsi is a protocol I wrote during my internship, For this project I connected the TU/e in-house IoT prototyping system OOCSI to the open-source home automation software Home-Assistant. Heyoocsi allows students and designers to rapidly create working smart home prototypes that can be controlled through homeassistant. Through HomeAssistant students can explore connections between devices and find emergent functionalities. Heyoocsi works like a structured interview protocol in which devices announce their functionalities."} </p>
   </>
    },
    {
    title: "Prototyping Probes",
    URL: '/images/probe.jpg',
    description: <> <p>{" I was asked to create a data collecting probe for a workshop about data driven design conducted at SIGCHI New Orleans by Renée Noortman and Peter Lovei and was part of the e/MTIC MEDICAID project. The probes would be used in a data driven design workshop. In this workshop they explored how creating data collection probes can give us a clearer view on the design context."} </p>
   
   </>
    },
    {
    title: "Final Bachelor Project",
    URL: '/images/Sphere.png',
    description:<p>{"In the future, our houses will be smarter than ever. As innovative home products will start to lead their own lives, appliances might initiate actions just by sensing human presence. But how  do  we  as  humans  stay  in  control of these intelligent homes? Sphere  allows  users  to  indicate  to  their  smart  appliances  how  much  they  want  to  be  interacted  with.  It  does this by letting users set ranges for intelligent de-vices  and  letting  them  adjust  their  range  throughout  the  day.  By  doing  so  you  stay  in  control  of  your  safe  space, without having to sacrifice smart functionality. To indicate how much you want to be interacted with you pick up the sphere device and set your own sphere of influence by pulling the cord. To change to what degree smart device can see you, you magnetically dock your sphere to the device in question and pull the cord to the distance it is allowed to see you. This way your smart  home  devices  won’t  respond  to  your  presence  when you don’t want it to happen! "}</p>
    },
    {
    title: "Polaris",
    URL: '/images/polaris.jpg',
    description:<p>{"Polaris is a speculative design exploration into creating more awareness around power use through multimodal ambient interfaces. This design was created to help homeowners become more energy independent by helping them stay within their energy generation capacity. The polari can be attached to cables of appliances and monitor their powerdraw, incase too much power is drawn, they sonify their power use and guide homeowners to decide which appliances to turn off.       "}</p>
    },
    {
        title: "Sjef",
        URL: '/images/sjef.jpg',
        description: <p>{"Sjef is aimed at supplying convenience. It does this by allowing the user to remotely control and monitor from elsewhere in the home. Sjef is connected to a smart pan/lid and as it collects information from the pan, it transfers this to the user. The body of Sjef starts shaking according to the boiling behavior in the pan. The transparent ball holds liquid that will start shaking and so bubbles indicate the boiling intensity. Sjef works together with Cherry for emergent phenomena"}</p>
    },
    {
    title: "Busy Town",
    URL: '/images/busytown.jpg',
    description:<p>{"Busy town is a research into creating more immersive toys by involving novel interaction technologies. Busy Town uses NFC to trigger sounds and visuals that match with their context. These toys can sense how fast they are going through NFC and adjust these effects accordingly. This research concluded that the contextual sound effects would help with immersion and play and entice exploration."}</p>
    },  
    {
    title: "Sensebox",
    URL: '/images/Sensebox.jpg',
    description:<p>{"The Sensebox is a research into creating hybrid digital physical tools to improve worldbuilding practices during scenario creation. The research builds forward on previous sandbox like interfaces and tries to embed a digital layer to improve home contextualisation. It does this by giving students an overview of the house and the necessary tools to modify this to suit the worlds they're creating."}</p>
    },  
    {
    title: "Project Cards",
    URL: '/images/instructions.png',
    description:<p>{"To see my projects, click and drag the cards off the screen!"}</p>
    },
]


const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: -55, rot: 0, scale: 1.5, y: -1000 })
    // This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(0) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`



function Description(props){
    return (

        <Grid container>
            <Grid item>
                          
                    <Typography component="h1" variant="h3" color="black" paddingTop = "4vw" paddingLeft="5vw" gutterBottom>
                        {cards[props.count].title}
                    </Typography>
       
            </Grid>
            <Grid item>     
                <Typography component="h3" variant="h6" color="black" paddingLeft="5vw" paddingRight="5vw" gutterBottom paragraph="true">
                    {cards[props.count].description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default function Showcase(){

    const [gone,addItem] = useState(new Set()) // The set flags all the cards that are flicked out
   
  


    const [likes, setLikes] = useState(cards.length - 1)

    function handleClick() {
      setLikes(likes - 1)
    }

    function clearDescription(){
      setLikes(cards.length - 1 )
    }

    function Deck() {
        // const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
        // const [props, set] = useSprings(cards.length, (i) => ({...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
            // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
        const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
                
                const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
                const dir = xDir < 0 ? -1 : 1 
               // Direction should either point left or right
            //    
               // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
                if (!down && trigger) gone.add(index) && handleClick()

                set((i) => {
                    if (index !== i) return // We're only interested in changing spring-data for the current spring
                    const isGone = gone.has(index)
                    const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
                    const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
                    const scale = down ? 1.1 : 1 // Active cards lift up a bit
                    
                    return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
                })
                if (!down && gone.size === cards.length) clearDescription()
                if (!down && gone.size === cards.length) setTimeout(() =>  gone.clear() || set((i) => to(i)), 600)
                // if (!down && likes === cards.length-1) setTimeout(() => likes = 0 || set((i) => to(i)), 600)
            })
            
            // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
        return props.map(({ x, y, rot, scale }, i) => (
            
            <animated.div key = { i } style = {{ x, y } }className = { styles.no }> 
                <animated.div {...bind(i) }  className = { styles.yes } style = {{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i].URL})` } }/>
            </animated.div>
            
        ))
        
    }

    
    const [props, set] = useSprings(cards.length, (i) => ({...to(i), from: from(i) })) // Create a bunch of springs using the helpers above


  
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    return(
        <Paper elevation={3} sx={{bgcolor: "background.cards", margin:"2vw"}} >
            <Box sx={{display: "flex", minHeight: "80vh", }}>
                <Grid container spacing ={12}>
                    <Grid item xs={12} md={7}  >
                            <Description count={likes}/>
                    </Grid>
                    <Grid item xs={12} md={5} justifyContent= "flex-end">
                        <Container sx={{marginTop:"4vh",backgroundColor: 'background.dark', minHeight:"80vh", minWidth:"15vw", justifyContent:"center"}}>
                            <Deck/>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    )
}