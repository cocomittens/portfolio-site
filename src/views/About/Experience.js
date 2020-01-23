import React from 'react';
// Timeline Components
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
  // Icons
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

// MUI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function Bio(props) {  
    return (
        <Grid item xs={12}>
        <Typography variant="h4">Experience</Typography>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
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
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Coding Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">App Academy</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--college"
            date="2013 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
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

    );
  }
  