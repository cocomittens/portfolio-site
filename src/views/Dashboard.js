import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import background from "../images/bg_colorful.jpg";
import item1 from "../images/1.png";
import item2 from "../images/2.png";
import item3 from "../images/3.png";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import grey from '@material-ui/core/colors/grey';

import About from './About';

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#2773e1' },
    primary: { main: '#123069' }
  },
  typography: {
    h1: {
      fontFamily: 'merriweather',
      
    },
    h2: {
      fontFamily: 'merriweather',
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
      paddingTop: '30px',
      paddingBottom: '30px'
    },
    h3: {
      fontFamily: 'montserrat'
    },
    h4: {
      fontFamily: 'merriweather',
      fontWeight: 'bold',
      paddingTop: '12px',

    },
    body1: {
      fontFamily: 'montserrat'
    }
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Corrie Stoddard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "transparent",
    boxShadow: "none"
  },
  content: {
    padding: 0,
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  pic: {
    width: theme.spacing(35),
    height: theme.spacing(35)
  },
  nameText: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${background})`,
    objectFit: 'cover',
    color: '#efefef',
    textShadow: '0 1px 0 #111'
  },
  bgOdd: {
    backgroundColor: grey[50],
    paddingBottom: theme.spacing(5)
  },
  bgEven: {
    backgroundColor: grey[100],
    paddingBottom: theme.spacing(5)
  },
  img: {
    objectFit: 'cover',
    height: '300px',
    width: '400px'
  },
  submit: {
    marginTop: '20px'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}></AppBar>
        <Container className={classes.content}>
          <Grid container justify="center">
            <Grid container item xs={12} className={classes.nameText} alignContent="center" justify="center">
              <Grid item xs={12}>
              <Typography variant="h1">Corrie Stoddard</Typography></Grid>
              <Grid item xs={12}>
              <Typography variant="h3">Web Developer</Typography></Grid>
            </Grid>

          <About
            bgOdd={classes.bgOdd}
            picStyles={classes.pic}
          />
          

            <Grid item xs={12} className={classes.bgEven}>
                <Typography variant="h2">
                  Portfolio
                </Typography>
                <Grid container justify="center">
                  <Grid item>
                    <Link href="https://codepen.io/ioqren/full/mVVXBZ"><img src={item1} className={classes.img}></img></Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://codepen.io/ioqren/full/mAXWwO"><img src={item2} className={classes.img}></img></Link>
                  </Grid>
                  <Grid item>
                  <Link href="https://codepen.io/ioqren/full/wMwQNa"><img src={item3} className={classes.img}></img></Link>
                  </Grid>
                </Grid>
     
            </Grid>
            <Grid container item xs={12} className={classes.bgOdd} justify="center">
              <Grid item xs={8}>
              <Typography variant="h2">Contact</Typography>
                <Typography variant="body1">Feel 
                 free to contact me about any type of opportunity, I'm open minded to pretty much anything.</Typography>
              <Typography variant="body1"><b>Email:</b> corriestoddard@gmail.com</Typography>
                  <Typography variant="body1"><b>Phone:</b> 657-200-8701</Typography>
                  <TextField margin="dense" fullWidth id="name" variant="outlined" defaultValue="Name"></TextField>
                  <TextField margin="dense" fullWidth variant="outlined" defaultValue="Email"></TextField>
                  <TextField margin="dense" fullWidth variant="outlined" defaultValue="Subject"></TextField>
                  <TextField margin="dense" rows={5} fullWidth variant="outlined" multiline={true} defaultValue="Message"></TextField>
                <Button className={classes.submit} color="secondary" size="large" variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
    </ThemeProvider>
  );
}
