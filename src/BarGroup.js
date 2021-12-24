import './BarGroup.css';
function BarGroup(props) {
  let barColour = '#0c44e7'

  let width = ""
  
  return <g className="bar-group" onMouseOver={props.mouseHover} onClick={props.mouseClick}>
    <text className="name-label" x="" y=""  alignmentBaseline="middle">{props.d.name}</text>
    <rect y="" width={width} height="" fill={barColour} />
    <text className="value-label" x="" y="" alignmentBaseline="middle" >{props.d.value}</text>
  </g>
}

export default BarGroup;