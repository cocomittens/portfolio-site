import React from 'react';
// MUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Animations
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';


export default function Intro(props) {
    const { nameText } = props;

    return (  
    <Grid
        container
        item
        xs={12}
        className={nameText}
        alignContent="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Zoom>
          <Typography variant="h1">Corrie Stoddard</Typography></Zoom>
        </Grid>
        <Grid item xs={12}>
          <Roll left>
          <Typography variant="h3">Web Developer</Typography></Roll>
        </Grid>
      </Grid>)
}