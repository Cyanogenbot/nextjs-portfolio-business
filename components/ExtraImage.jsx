import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

export default function ExtraImage(props){
    return(<>

    
      <Card elevation={3}  sx={{margin: "2vw",display:'flex', alignItems:'center'}}>
        <CardMedia
    component="img"
 
    image={props.image}
    alt="green iguana"
  />
  </Card>
  <Typography 
            component="h1"
            variant="h6"
            color="white"
            gutterBottom
            paddingLeft="3vw"
            marginTop="-3vh"
            >
              {props.caption}
            </Typography>
            </>
      )
}
