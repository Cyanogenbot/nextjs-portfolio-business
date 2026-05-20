import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function TextPart(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: "background.cards",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        margin: { xs: "1rem", md: "2vw" },
        p: { xs: "1rem", md: "4vw" },
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        color="background.main"
        sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, fontWeight: "700" }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ mt: "1rem" }}
        component="h3"
        variant="body1"
        color="background.main"
        paragraph={true}
      >
        {props.content}
      </Typography>
    </Paper>
  );
}
