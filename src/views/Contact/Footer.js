import React from "react";
// Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer(props) {
  const { socialMediaIcon, copyrightText } = props;

  return (
    <Grid container justify="center">
      <Grid container item justify="center">
        <Grid item>
          <FacebookIcon className={socialMediaIcon} fontSize="large" />
          <LinkedInIcon className={socialMediaIcon} fontSize="large" />
          <PhoneIcon className={socialMediaIcon} fontSize="large" />
          <GitHubIcon className={socialMediaIcon} fontSize="large" />
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          className={copyrightText}
          variant="body2"
          color="textSecondary"
          align="center"
        >
          {"Copyright © "}
          Corrie Stoddard {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
}
