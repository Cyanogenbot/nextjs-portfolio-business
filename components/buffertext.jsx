import * as React from "react";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";

export default function Buffertext(props) {
  return (
    <section className={utilStyles.headingMd}>
      <Typography variant="h4" component="h3" color="white">
        {props.text}
      </Typography>
    </section>
  );
}
