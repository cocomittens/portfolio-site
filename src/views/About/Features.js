import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BorderColorTwoToneIcon from "@material-ui/icons/BorderColorTwoTone";
import FastForwardTwoToneIcon from "@material-ui/icons/FastForwardTwoTone";
import PaletteTwoToneIcon from "@material-ui/icons/PaletteTwoTone";

export default function Features(props) {
  const { features } = props;

  return (
    <Grid container item justify="space-around" className={features}>
      <Grid item xs={12} md={6} lg={3}>
        <BorderColorTwoToneIcon style={{ fontSize: 80 }} />
        <Typography variant="h4">Responsive</Typography>
        <Typography variant="body1">
          My products are pixel perfect. My products are designed to handle any
          screen size, from mobile phones to 4k monitors.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FastForwardTwoToneIcon style={{ fontSize: 80 }} />
        <Typography variant="h4">Fast</Typography>
        <Typography variant="body1">
          I use the latest web development technologies to maximize efficiency
          in order to create near-instant loading times.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <PaletteTwoToneIcon style={{ fontSize: 80 }} />
        <Typography variant="h4">Aesthetic</Typography>
        <Typography variant="body1">
          My UI/UX design knowledge allows me to utilize design principals to
          create intuitive, aesthetically pleasing experiences.
        </Typography>
      </Grid>
    </Grid>
  );
}
