import React from "react";

// MUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// Animations
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

export default function Intro(props) {
  const { nameText, actionButton } = props;

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
          <Typography variant="h1">Corrie Stoddard</Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12}>
        <Roll left>
          <Typography variant="h3">Web Developer</Typography>
        </Roll>
      </Grid>
      <Grid item xs={12}>
        <Rotate bottom right>
         
          <Button startIcon={<KeyboardArrowDownIcon />} className={actionButton} variant="contained">
            See My Work
          </Button>
    
        </Rotate>
      </Grid>
    </Grid>
  );
}
