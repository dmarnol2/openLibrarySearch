import {useState} from 'react';
import './BarChart.css';
import Bar from './Bar';

const BarChart = props => {

    const maxExpense = 200;
    const chartHeight = maxExpense + 20;

    let barHeight = 130
    const barWidth = 50;
    const barMargin = 15;

    const onBarClickHandler = event => {
        event.preventDefault();
        props.showBooksHandle(event);;
    }

    return (
        <>
        <p className="legend">
        <span className="search-term-frequency">Search Term Frequency</span>
      </p>
    <svg
        width="700"
        height="300"
    >
        
        {props.chartData.map((data, index) => {
            const barHeight = data.length;
            return (
        <Bar
        id={index}
        onBarClick={onBarClickHandler}
        showBooksHandle={props.showBooksHandle}
        key={index}
        x={index * (barWidth + barMargin)}
        y={chartHeight - barHeight}
        width={barWidth}
        height={barHeight}
        name={data.title}>
        </Bar>
        )})}
    </svg>
    </>
    )
  }

export default BarChart;