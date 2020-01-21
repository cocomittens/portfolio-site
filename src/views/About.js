import React from "react";
// MUI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
// Images
import pic from "../images/pic.jpg";
// Timeline Components
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// Section Components
import Chart from "./Chart";

import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';


export default function About(props) {
  const { bgOdd, picStyles, skillsHeader } = props;

  return (
    <Grid id="about" item xs={12} className={bgOdd}>
      <Typography variant="h2">About</Typography>
      <Grid container justify="center" alignItems="center">
   
        <Grid container item xs={5} justify="space-around">
        <Zoom>
          <Grid item>
           
            <Avatar src={pic} alt="Corrie Stoddard" className={picStyles} />
          </Grid>
          <Grid item>
            <Typography variant="h4">Bio</Typography>

            <Typography variant="body1">
              Hello! I'm a web developer based in Orange County, California. My
              focus is on front end technologies, especially Javascript
              libraries such as React, Redux, D3, and others. However, I am
              knowledgable about a variety of topics across the full stack, from
              UX Design to SQL to Rails. :) When I'm not web developing, you
              will find me leveling my WoW classic character, exploring the
              outdoors, playing with my cats Elliot and Darlene or engaging in
              any of my many hobbies.
            </Typography>
          
          </Grid>
          </Zoom>
        </Grid>

        <Grid container item xs={5} justify="center">
          <Zoom>
          <Grid item>
          <Typography variant="h4" className={skillsHeader}>
            Skills
          </Typography>
          </Grid>
          
          <Grid item>
          <Chart />
          </Grid>
          </Zoom>
        </Grid>

      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Experience</Typography>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Blackberry Cylance
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--bootcamp"
            date="2019 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Coding Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">App Academy</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--college"
            date="2013 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Graduated University - BS Cognitive Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              UC Santa Cruz
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}
