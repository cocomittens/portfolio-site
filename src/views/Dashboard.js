import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import background from "../images/bg_colorful.jpg";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";

import Intro from './Intro';
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const theme = createMuiTheme({
  palette: {
    secondary: { main: "#2773e1" },
    primary: { main: "#123069" }
  },
  typography: {
    h1: {
      fontFamily: "merriweather"
    },
    h2: {
      fontFamily: "merriweather",
      textDecoration: "underline",
      textUnderlinePosition: "under",
      paddingTop: "30px",
      paddingBottom: "30px"
    },
    h3: {
      fontFamily: "montserrat"
    },
    h4: {
      fontFamily: "merriweather",
      fontWeight: "bold",
      paddingTop: "12px"
    },
    body1: {
      fontFamily: "montserrat"
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
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${background})`,
    objectFit: "cover",
    color: "#efefef",
    textShadow: "0 1px 0 #111"
  },
  bgOdd: {
    backgroundColor: grey[300],
    paddingBottom: theme.spacing(5)
  },
  bgEven: {
    backgroundColor: grey[100],
    paddingBottom: theme.spacing(5)
  },
  img: {
    objectFit: "cover",
    height: "300px",
    width: "400px"
  },
  submit: {
    marginTop: "20px"
  },
  contactForm: {
    background: "#fff"
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
          <Intro nameText={classes.nameText} />

          <About bgOdd={classes.bgOdd} picStyles={classes.pic} />

          <Portfolio imgStyles={classes.img} bgEven={classes.bgEven} />

          <Contact
            contactForm={classes.contactForm}
            submit={classes.submit}
            bgOdd={classes.bgOdd}
          />
        </Grid>

        <Grid container justify="center">
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
