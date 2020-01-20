import React from 'react';

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


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
          <Typography variant="h1">Corrie Stoddard</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Web Developer</Typography>
        </Grid>
      </Grid>)
}