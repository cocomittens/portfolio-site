import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


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
    return (
      <Paper className="custom-tooltip">
        <Typography variant="h6" className="label">{`${label}: ${payload[0].value}`}</Typography>
        <Typography variant="body1" className="desc">Anything you want can be displayed here.</Typography>
      </Paper>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  render() {
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
          fill="#2773e1"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
