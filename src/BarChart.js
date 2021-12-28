import {useState} from 'react';
import './BarChart.css';
import Bar from './Bar';

const BarChart = props => {

    const maxExpense = 200;
    const chartHeight = maxExpense + 20;

    let barHeight = 130
    const barWidth = 50;
    const barMargin = 15;

    const handleHover = () => {
    }

    const handleClick = () => {
    }

    return <svg
    viewBox={`0 0 ${500} ${300}`}
    width="70%"
    height="70%"
    preserveAspectRatio="xMidYMax meet"
  >
      {props.chartData.map((data, index) => {
        const barHeight = data.val;
        return (
      <Bar
      onBarClick={handleClick}
      onHover={handleHover}
      key={data.name}
      x={index * (barWidth + barMargin)}
      y={chartHeight - barHeight}
      width={barWidth}
      height={barHeight}
      name={data.name}>
      </Bar>
      )})}
  </svg>
  }

export default BarChart;