import React from "react";
// MUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Icons
import SendIcon from "@material-ui/icons/Send";
import Pulse from "react-reveal/Pulse";
// Animations
import Rotate from "react-reveal/Rotate";

export default function Contact(props) {
  const { contactForm, submit, bgOdd } = props;

  return (
    <Grid container item xs={12} className={bgOdd} justify="center">
      <Grid item xs={8}>
        <Typography variant="h2">Contact</Typography>
        <Typography variant="body1">
          Feel free to contact me about any type of opportunity, I'm open minded
          to pretty much anything.
        </Typography>
        <Pulse>
          <TextField
            className={contactForm}
            margin="dense"
            fullWidth
            id="name"
            variant="outlined"
            placeholder="Name"
          ></TextField>
          <TextField
            className={contactForm}
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Email"
          ></TextField>
          <TextField
            className={contactForm}
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Subject"
          ></TextField>
          <TextField
            className={contactForm}
            margin="dense"
            rows={5}
            fullWidth
            variant="outlined"
            multiline={true}
            placeholder="Message"
          ></TextField>
        </Pulse>
        <Rotate bottom right>
          <Button
            className={submit}
            color="secondary"
            startIcon={<SendIcon />}
            variant="contained"
          >
            <Typography variant="button">Submit</Typography>
          </Button>
        </Rotate>
      </Grid>
    </Grid>
  );
}
