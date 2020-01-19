import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import Chart from "./Chart";
import pic from "../images/pic.jpg";

export default function About(props) {
  const { bgOdd, picStyles } = props;

  return (
    <Grid id="about" item xs={12} className={bgOdd}>
      <Typography variant="h2">About</Typography>
      <Grid container justify="center" alignItems="center">
        <Grid container item xs={4} justify="center">
          <Grid item>
            <Avatar src={pic} alt="Corrie Stoddard" className={picStyles} />
          </Grid>
          <Grid item>
            <Typography variant="h4">Bio</Typography>

        
            <Typography variant="body1">
              Hello! I'm a web developer based in Orange County, California. My
              focus is on front end technologies, especially Javascript
              libraries such as React, Redux, D3, and others. However, I am
              knowledgable about a variety of topics across the full stack, from
              UX Design to SQL to Rails. :) When I'm not web developing, you
              will find me leveling my WoW classic character, exploring the
              outdoors, playing with my cats Elliot and Darlene or engaging in
              any of my many hobbies.
            </Typography>
          </Grid>
          
        </Grid>
        <Grid item>
          <Chart /></Grid>
       </Grid>
      </Grid>

  );
}
