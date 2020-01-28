import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from '@material-ui/core/Chip';

import Zoom from "react-reveal/Zoom";

const data = [
  {
    skill: "React/Redux",
    level: 90
  },
  {
    skill: "HTML",
    level: 95
  },
  {
    skill: "CSS",
    level: 90
  },
  {
    skill: "Angular",
    level: 65
  },
  {
    skill: "Node",
    level: 70
  },
  {
    skill: "UI/UX",
    level: 80
  },
  {
    skill: "JavaScript",
    level: 85
  },
  {
    skill: "Ruby/Rails",
    level: 75
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const score = (<Chip size="small" label={payload[0].value} />);
    const level= (<Chip size="small" label="novice" />);
    return (
      <Paper className="custom-tooltip">
        <Typography
          variant="subtitle1"
          className="label"
        >{`${label}: `}{score}</Typography>
        {level}
      </Paper>
    );
  }

  return null;
};

function Chart() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={420}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <PolarRadiusAxis />
      <Tooltip content={<CustomTooltip />} />

      <Radar
        name="Skills"
        dataKey="level"
        stroke="#fff"
        fill='#ff9800'
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default function Skills(props) {
    const { skillsHeader, chartStyles } = props;

    return (
      <Grid container item xs={5} justify="center" className={chartStyles}>
        <Zoom>
          <Grid item >
            <Typography variant="h4" className={skillsHeader}>Skills</Typography>
          </Grid>

          <Grid item>
            <Chart />
          </Grid>
        </Zoom>
      </Grid>
    );
  
}
