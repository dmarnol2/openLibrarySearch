import Bar from './Bar';
import './BarChart.css';

const BarChart = props => {

    const barWidth = 90;
    const barMargin = 15;
    const chartHeight = 220;
    const chartWidth = props.chartData.length * (barWidth + barMargin)

    const onBarClickHandler = event => {
        event.preventDefault();
        props.showBooksHandle(event);;
    }

    return (
        <>
            <p className="legend">
                <span className="search-term-frequency">Search Term Frequency</span>
            </p>
            <svg width={chartWidth} height="300">
                {props.chartData.map((data, index) => {
                    const barHeight = data.length;
                    return (
                <Bar
                    barDescription={data.barDescription}
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