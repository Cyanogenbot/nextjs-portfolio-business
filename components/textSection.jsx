import Grid from '@mui/material/Grid';
import TextPart from './textPart';
import ExtraImage from './ExtraImage';

export default function textSection(props){
    return (

        <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
                <TextPart title={props.title} content={props.content}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <ExtraImage image={props.image}/>
            </Grid>
        </Grid>
    )
  }
  