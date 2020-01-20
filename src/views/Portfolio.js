import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import item1 from "../images/1.png";
import item2 from "../images/2.png";
import item3 from "../images/3.png";

export default function Portfolio(props) {
  const { imgStyles, bgEven } = props;
  return (
    <Grid item xs={12} className={bgEven}>
      <Typography variant="h2">Portfolio</Typography>
      <Grid container justify="center">
        <Grid item>
          <Link href="https://codepen.io/ioqren/full/mVVXBZ">
            <img src={item1} className={imgStyles}></img>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://codepen.io/ioqren/full/mAXWwO">
            <img src={item2} className={imgStyles}></img>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://codepen.io/ioqren/full/wMwQNa">
            <img src={item3} className={imgStyles}></img>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
