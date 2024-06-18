import Grid from '@mui/material/Grid';
import TextPart from './textPart';
import ExtraImage from './ExtraImage';

export default function textSection(props){
    return (
        <Grid container spacing={1}>
                        <Grid item md={3} xs={12} >
                <ExtraImage image={props.image} caption={props.caption} />
            </Grid>
            <Grid item xs={12} md={9}>
                <TextPart title={props.title} content={props.content}/>
            </Grid>
        </Grid>
    )
  }
  