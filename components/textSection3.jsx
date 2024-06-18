import Grid from '@mui/material/Grid';
import TextPart from './textPart';
import ExtraImage2 from './ExtraImage2';

export default function textSection(props){
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
                <TextPart title={props.title} content={props.content}/>
            
            </Grid>
            <Grid item md={3} xs={12} >
                <ExtraImage2 image={props.image} image2={props.image2} image3={props.image3} caption={props.caption}/>
            </Grid>

        </Grid>
    )
  }
  