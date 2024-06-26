import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
export default function TextPart(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: "#cfe8fc",
        height: "auto",
        display: "flex",
        justifyContent: "flex-start",
        margin: "2vw",
      }}
    >
      <Container
        sx={{
          margin: "3vw",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          maxWidth: "xxl",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="background.main"
          gutterBottom
        >
          {props.title}
        </Typography>
      </Container>
      <Card
        sx={{
          bgcolor: "background.cards",
          marginTop: "10vw",
          display: "flex",
          maxWidth: "xxl",
        }}
      >
        <Typography
          sx={{ m: "4vw" }}
          component="h3"
          variant="h6"
          color="background.main"
          paragraph={true}
        >
          {props.content}
        </Typography>
      </Card>
    </Paper>
  );
}
