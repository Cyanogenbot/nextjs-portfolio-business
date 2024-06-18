import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function ExtraImage(props) {
  return (
    <>
      <Grid container spacing={1} direction="row" maxHeight="5vh">
        <Grid item xs={2}>
          <Card
            elevation={3}
            sx={{
              margin: "2vw",
              marginBottom: "1vw",
              bgcolor: "background.cards",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia component="img" image={props.image} alt="green iguana" />
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card
            elevation={3}
            sx={{
              margin: "2vw",
              marginRight: "1vw",
              marginTop: ".7vh",
              bgcolor: "background.cards",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={props.image2}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card
            elevation={3}
            sx={{
              margin: "2vw",
              marginLeft: "1vw",
              marginTop: "1vh",
              bgcolor: "background.cards",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={props.image3}
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>

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
  );
}
