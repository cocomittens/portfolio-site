import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Animations

import Fade from "react-reveal/Fade";

export default function PortfolioItem(props) {
  const { name, overlay } = props;
  return (
    <Grid container className={overlay}><Grid item><Typography>{name}</Typography></Grid></Grid>
  );
}
