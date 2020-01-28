import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Zoom from "react-reveal/Zoom";

export default function Experience(props) {
  const { picStyles, pic, bgOdd, bioStyles } = props;

  return (
    <Grid className={`${bgOdd} ${bioStyles}`} container item xs={12} justify="space-around" alignItems="center">
     <Grid item>
        <Zoom>
        <Avatar src={pic} alt="Corrie Stoddard" className={picStyles} /></Zoom>
      </Grid>
      <Grid container item justify="center">
     
          <Grid item lg={12}>
          <Zoom>
            <Typography variant="h4">Bio</Typography>
            </Zoom>
          </Grid>
          <Grid item lg={6}>
            <Zoom>
            <Typography variant="body1">
              Hello! I'm a web developer based in Orange County, California. My
              focus is on front end technologies, especially Javascript
              libraries such as React, Redux, D3, and others. However, I am
              knowledgable about a variety of topics across the full stack, from
              UX Design to SQL to Rails. :) When I'm not web developing, you
              will find me leveling my rogue in WoW Classic, exploring the
              outdoors, playing with my cats Elliot and Darlene or engaging in
              any of my many hobbies.
            </Typography>
            </Zoom>
          </Grid>
     
      </Grid>
     
    </Grid>
  );
}
