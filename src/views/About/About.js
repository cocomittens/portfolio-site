import React from "react";
// MUI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Images
import pic from "../../images/pic.jpg";
// Section Components
import Chart from "./Chart";
import Features from './Features';
import Bio from './Bio';
import Experience from './Experience';

// Animations
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";

export default function About(props) {
  const { bgOdd, picStyles, skillsHeader, features, chartStyles } = props;

  return (
    <Grid id="about" item xs={12} className={bgOdd}>
      <Typography variant="h2">About</Typography>
      <Grid container justify="center" alignItems="center">
        <LightSpeed left>
          <Features features={features} />
        </LightSpeed>
        <Bio picStyles={picStyles} pic={pic} />

        <Grid container item xs={5} justify="center">
          <Zoom>
            <Grid item>
              <Typography variant="h4" className={skillsHeader}>
                Skills
              </Typography>
            </Grid>

            <Grid item className={chartStyles}>
              <Chart />
            </Grid>
          </Zoom>
        </Grid>
        <Experience />
      </Grid>
    </Grid>
  );
}
