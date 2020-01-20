import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip
} from 'recharts';

const data = [
  {
    skill: 'React',  level: 90,
  },
  {
    skill: 'HTML', level: 98,
  },
  {
    skill: 'CSS', level: 86,
  },
  {
    skill: 'Redux', level: 99,
  },
  {
    skill: 'Node', level:  85
  },
  {
    skill: 'UI/UX', level:  65
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis />
        <Tooltip></Tooltip>
        <Radar name="Skills" dataKey="level" stroke="#fff" fill="#2773e1" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
