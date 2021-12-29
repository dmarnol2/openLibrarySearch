import { useState } from 'react';
import './Bar.css';

const Bar = props => {

    const [fill, setFill] = useState('#4169E1');
    const resultsText = `${props.height} results`;

    const onHoverHandler = event => {
        event.preventDefault();
        setFill('#87CEEB');
    }

    const onLeaveHandler = event => {
        event.preventDefault();
        setFill('#4169E1');
    }

    return (
        <svg
            className="bar"
            onClick={props.onBarClick}
            onMouseOver={onHoverHandler}
            onMouseLeave={onLeaveHandler}>
            <rect
                data-id={props.id}
                className="bar"
                x={props.x}
                y={props.y}
                width={props.width}
                height={props.height}
                fill={fill}
                />
            <text  className = "bar-text" x={props.x + 10}  y={250}>{props.barDescription}</text>
            <text className = "bar-text" x={props.x + 10}  y={props.y - 15 }>{!!props.height && resultsText}</text>
        </svg>
    );
}
  export default Bar;