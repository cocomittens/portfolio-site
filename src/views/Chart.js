import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
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
        <Tooltip></Tooltip>
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
