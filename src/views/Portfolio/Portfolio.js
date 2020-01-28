import React from "react";
// MUI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Portfolio Items
import item1 from "../../images/1.png";
import item2 from "../../images/2.png";
import item4 from "../../images/4.png";

import PortfolioItem from "./PortfolioItem";
import PortfolioHover from "./PortfolioHover";


export default function Portfolio(props) {
  const { imgStyles, bgEven, overlay } = props;
  const [hover, setHover] = React.useState(false);

  return (
    <Grid item xs={12} className={bgEven}>
      <Typography variant="h2">Portfolio</Typography>

      <Grid container justify="center">
        <PortfolioItem
          url="https://pinify-app.herokuapp.com/#/"
          img={item4}
          imgStyles={imgStyles}
          overlay={overlay}
    
        />

        <PortfolioItem
          url="https://codepen.io/ioqren/full/mAXWwO"
          img={item2}
          imgStyles={imgStyles}
          overlay={overlay}
        />

        <PortfolioItem
          url="https://codepen.io/ioqren/full/mVVXBZ"
          img={item1}
          imgStyles={imgStyles}
          overlay={overlay}
        />
      </Grid>
    </Grid>
  );
}
