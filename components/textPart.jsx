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
        margin: { xs: "1rem", md: "2vw" },
        p: { xs: "0.5rem", md: "0" },
      }}
    >
      <Container
        sx={{
          margin: { xs: "1rem", md: "3vw" },
          position: "absolute",
          display: "flex",
          alignItems: "center",
          maxWidth: "xxl",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          variant={{ xs: "h5", md: "h3" }}
          color="background.main"
          gutterBottom
        >
          {props.title}
        </Typography>
      </Container>
      <Card
        sx={{
          bgcolor: "background.cards",
          marginTop: { xs: "6rem", md: "10vw" },
          display: "flex",
          maxWidth: "xxl",
          width: "100%",
        }}
      >
        <Typography
          sx={{ m: { xs: "1rem", md: "4vw" } }}
          component="h3"
          variant={{ xs: "body1", md: "h6" }}
          color="background.main"
          paragraph={true}
        >
          {props.content}
        </Typography>
      </Card>
    </Paper>
  );
}
