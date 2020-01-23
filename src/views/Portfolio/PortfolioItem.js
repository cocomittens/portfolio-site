import React from "react";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// Animations

import Bounce from "react-reveal/Bounce";

export default function PortfolioItem(props) {
  const { url, img, imgStyles } = props;
  return (
    <Grid item>
      <Bounce>
        <Link href={url}>
          <img src={img} className={imgStyles} alt="portfolio item"></img>
        </Link>
      </Bounce>
    </Grid>
  );
}
