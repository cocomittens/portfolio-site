import React from "react";
// MUI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Portfolio Items
import item1 from "../images/1.png";
import item2 from "../images/2.png";
import item4 from "../images/4.png";
// Animations
import PortfolioItem from "./PortfolioItem";

export default function Portfolio(props) {
  const { imgStyles, bgEven } = props;
  return (
    <Grid item xs={12} className={bgEven}>
      <Typography variant="h2">Portfolio</Typography>

      <Grid container justify="center">
        <PortfolioItem
          url="https://pinify-app.herokuapp.com/#/"
          img={item4}
          imgStyles={imgStyles}
        />

        <PortfolioItem
          url="https://codepen.io/ioqren/full/mAXWwO"
          img={item2}
          imgStyles={imgStyles}
        />

        <PortfolioItem
          url="https://codepen.io/ioqren/full/mVVXBZ"
          img={item1}
          imgStyles={imgStyles}
        />
      </Grid>
    </Grid>
  );
}
