import styles from '../styles/welcome.module.css'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import wood from '../public/images/profile.jpg'
import Image from 'next/image';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
export default function TextPart(props){
    return(
    <Paper elevation={3} sx={{bgcolor: "#cfe8fc", height: "auto", minHeight:730,  display:'flex', justifyContent:'flex-start', margin:"2vw"}}>
        <Container maxWidth="xl"  sx={{margin:"3vw", position: "absolute",display:'flex', alignItems:'center'}}>
            <Typography 
            component="h1"
            variant="h3"
            color="background.main"
            gutterBottom

            >
               {props.title}
            </Typography>
        </Container>
        <Card maxWidth="xl"  sx={{bgcolor: "background.cards", marginTop:"12vw",display:'flex'}}>
            <Typography sx={{ m: 4}} component="h3" variant="h7" color="background.main" paragraph={true}
             
            >
              {props.content}
            </Typography>
        </Card>
       
    </Paper>
    )
    }