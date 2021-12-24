import {Component} from 'react';
import BarGroup from './BarGroup';
import './BarChart.css';

class BarChart extends Component {
  state = {
    dummyData: [
      { name: '', value: '' },
      { name: '', value: '' },
      { name: '', value: '' },
    ]
  }

  render() {
    let barHeight = 130

    const handleHover = () => {
        console.log("hey mousey coumcy");
    }

    const handleClick = () => {
        console.log("thats whats up you just clicked me");
    }

    let barGroups = this.state.dummyData.map((d, i) =>
        <BarGroup d={d} barHeight={barHeight} mouseHover={handleHover} mouseClick={handleClick}/>)

    return <svg width="800" height="300" >
      <g className="container">
        <text className="title">search results</text>
        <g className="chart" transform="">
          {barGroups}
        </g>
      </g>
    </svg>
  }
}

export default BarChart;