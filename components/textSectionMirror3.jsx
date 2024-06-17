import Grid from "@mui/material/Grid";
import TextPart from "./textPart";
import ExtraImage2 from "./ExtraImage2";
import ExtraImage3 from './ExtraImage3';
export default function textSection(props) {
  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={12}>
        <ExtraImage2
          image={props.image}
          image2={props.image2}
          image3={props.image3}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <TextPart title={props.title} content={props.content} />
        {/* <ExtraImage3 image={props.image} image2={props.image2} image3={props.image3}/> */}
      </Grid>
    </Grid>
  );
}
