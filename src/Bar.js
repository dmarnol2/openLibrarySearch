import {useState} from 'react';
import './Bar.css';
const Bar = props => {

    const [fill, setFill] = useState('#4169E1');

    const onHoverHandler = event => {
        event.preventDefault();
        setFill('#87CEEB');
    }

    const onLeaveHandler = event => {
        event.preventDefault();
        setFill('#4169E1');
    }

    return (
        <>
            <rect
            // id or key for each bar, maybe use index
            id={props.id}
            className="bar"
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
            fill={fill}
            onClick={props.onBarClick}
            onMouseOver={onHoverHandler}
            onMouseLeave={onLeaveHandler}
            />
            {/* <text x={} y={}>
            </text> */}
        </>
    );
}
  export default Bar;