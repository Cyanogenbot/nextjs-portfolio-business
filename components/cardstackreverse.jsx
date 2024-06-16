import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import { useSprings, animated, interpolate } from 'react-spring'
import styles from '../components/layout.module.css'
import { useDrag } from 'react-use-gesture'
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { Description } from '@mui/icons-material';
import Skills from '../components/Skills'


const cards = [
    {
    title: "Creativity & Aesthetics", 
    URL:"/images/C&A.jpg",
    description:<> <p>{"I feel that I have become quite proficient in the exploratory process I enjoy using exploratory prototyping methods to come up with new concepts. For example, through drawing, Modeling, Rapid prototyping and coding. By being able to confidently prototype, exploring new areas becomes easier and a lot more fun to figure out. This allows me to come up with ideas that have more depth to them. "} </p>
    <p>{"I do not solely use prototyping to come up with ideas as I also try to involve other designers in the process through cocreation sessions for example. This is important to me as sometimes I will get stuck in my own design process and knowing how to involve others can be super valuable, even if it is just a way to gain inspiration. "} </p>
    <p>{"I balanced the software first approach of my FBP out with the more creativity and aesthetics focused second half of the semester. In which the hardware and interaction aspect became more relevant. In this second half I spent more time looking at creating a more interest-ing interaction by combining skills such as drawing, the cocreation session, and ideation through methods from literature to figure out what direction I could go with the interaction. Trying out these different techniques allowed me to elaborate on the design and create a more in-depth experience. "} </p>
   s</>
    },
    
    {
    title: "Business & Entrepreneurship", 
    URL:"/images/B&E.jpg",
    description:<><p>{"The same counts for the Expertise area of Business and Entrepreneurship, in most projects this expertise area turned out to be an afterthought and usually would have meant to make a business canvas of how the final product would be marketed. Because I worked on the business aspect of this project from the start through the Course Design Innovation Methods, I think the ecosystem approach of thinking of design has stuck as a motive to this project and a small tool for ideation. This expertise area is one I only recently started developing as I wasn’t quite sure about its placement. I feel like this expertise area is an area I’m quite good at but does not feel challenging to me. I think this is the case because I’m relatively good at looking for opportunities due to my varying interests and my different look on things, but do not quite understand what is more to this expertise area. "} </p>
    <p>{"I do think looking at a problem from a more systematic view allows us designers to look at more effective approaches to tackle problems, for which analyzing existing businesses can help us spot more unconventional solutions. The canvasses such as the problem solution fit canvas and value proposition canvas make me think more elaborately about my designs and how these fit the market. Which allows me to create more effective designs. "} </p></>
    },
    {
    title: "User & Society", 
    URL:'/images/usertest.jpg',
    description:<><p>{"At the beginning of the bachelor I didn’t quite understand the purpose of this expertise area, I wasn’t quite sure how something could not be user centered but after the course User Centered Design, this idea changed, in smart homes I noticed that many devices we’re created with a technology first approach. Often enough products bring along gimmicks just for the sake to be able to market that a certain technology is used. I do not want to design products that way, I personally prefer creating products that fit out daily workflows, and if they do not fit my workflow, I’ll make sure they will fit that workflow according to my maximizer mindset. "} </p>
    <p>{"To do this user involvement is important, but how I could incorporate users was a challenge for me, in my first two products this was something to tick off on the project requirements list. In project 3 I started to understand what insights users could give in to a product, this not only gave me the opportunity see what problems others cope with, but also allowed to see what other people’s perspectives are on problems that I face. "} </p>
    <p>{"At first, I wanted to a cocreation session earlier in the design process just to have ticked the box of User and Society, however the way I ended up executing the cocreation later in the design process posed way more valuable than I would’ve thought. Not only helped the cocreation session with getting a better view of what people would want from such a system, it would also help me with gaining more creative ideas and approaches in a time I built up a tunnel vision. "} </p></>
    },
    {
    title: "Technology & Realisation", 
    URL:"/images/T&R.jpg",
    description:<> <p>{"Technology and Realization was the expertise area that bound this project together, this expertise area allowed me to not only try out concepts that I had created, but it also let me see how I can use existing technologies in a different context and purpose. I used my library of skills and expertise to be able to spot opportunities for certain technologies. This skill allowed me to help my peers often too as they would ask me for my advice in this field. Through being relatively quick in realization I was able to iterate quickly and gain more depth in my designs. "} </p>
    <p>{"As a kid I always liked arts and craft, but I did not have any particular skills in realization other than digital illustration before I did this degree. During this bachelor I gained many new skills, which range from 3D modeling and printing to exploratory sketching with markers. To me expanding this toolbox of skills to work with different electronics, materials and platforms is very important. This toolbox not only helps me in my ideation and realization process, but it also allows me to communicate with professionals in the field. This gives me a lot of autonomy in the design process and allows me to worry more about the execution of the concept rather than how I will realize it. "} </p>
   </>
    },
    {
    title: "Math, Data & Computing", 
    URL:"/images/MDC2.png",
    description:<> <p>{"Even though I didn’t have any coding experience before starting this bachelor, I was one of the few students that understood what they we’re doing during the Creative Programming course, and I noticed I had quite some programming talent so to say. I started off in processing, but after I understood how that worked, learning other new languages was a breeze. This shows in this but also my previous portfolio that we’re coded by me. Having programming skills allows me to create things for the digital age, without being limited by the features of more user-friendly programs. More than often already existing programs limit my creativity as they are generally restrictive but being able to make stuff myself allows me to bypass these restrictions and reach my goals. Whereas my connected dog feed would connect to my google home through a premade service, my more recent prototypes could connect to home assistant directly! "} </p>
    <p>{"During my FBP, I primarily improved myself on making use of math and functions inside my design process, in my final bachelors reporte I analyze and explain geofencing through functional logic. This allows me to explain the systems behavior in an understandable way. This gave my project a software and data first approach during the first half of the semester. I think this can be perceived as a positive approach to design as it allows me to look from a more systematic view on the technology in the house. On top of that thinking about how products could collaborate with each other allows for more elaborate interactions "} </p>
    </>
    },
]


const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({x: -55, rot: 0, scale: 1.5, y: -1000 })
    // This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(0) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`





export default function Showcase(){

    const [gone,addItem] = useState(new Set()) // The set flags all the cards that are flicked out
   
    console.log(gone.size);



    function Description(props){
        return (
    
            <Grid container>
                <Grid item>
                              
                        <Typography component="h1" variant="h3" color="black" paddingTop = "2vw" paddingLeft="5vw" gutterBottom>
                            {cards[props.count].title}
                        </Typography>
           
                </Grid>
                <Grid item>     
                    <Typography component="h3" variant="h7" color="black" paddingLeft="5vw" paddingRight="5vw" paddingBottom="2vh" utterBottom paragraph="true">
                        {cards[props.count].description}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

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
                if (!down && trigger) gone.add(index)  // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
                if (!down && trigger) handleClick()

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
        {/* <Grid container spacing={0.5}> */}
            {/* <Grid item xs={12} md={1}>
                <Skills/>
            </Grid> */}
            <Grid item xs={12} md={7}>
        
            <Box sx={{minHeight:"60vh" }}>
            <Grid container spacing ={1}>
            <Grid item xs={12} md={5}>
            <Container sx={{backgroundColor: 'background.dark', minWidth:"14vw", maxWidth: "50vw",minHeight:"60vh" , justifyContent:"center"}}>
                            <Deck/>
            </Container>
                </Grid>
                <Grid item xs={12} md={7} justifyContent= "flex-start">
                        <Description count={likes}/>
                </Grid>

            </Grid>
            </Box>
        
        {/* </Grid> */}

        </Grid>
        </Paper>
    )
}