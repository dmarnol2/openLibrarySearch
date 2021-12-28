import {useState} from 'react';
import './Bar.css';
const Bar = props => {

    const [fill, setFill] = useState('black');

    const onHoverHandler = event => {
        event.preventDefault();
        setFill('red');
    }

    const onLeaveHandler = event => {
        event.preventDefault();
        setFill('black');
    }

    return (
        <>
            <rect className="bar"
            x={props.x}
                    y={props.y}
                    width={props.width}
                    height={props.height}
                    fill={fill}
                    onClick={props.onBarClick}
                    onMouseOver={onHoverHandler}
                    onMouseLeave={onLeaveHandler}/>
            {/* <text x={} y={}>
            </text> */}
        </>
    );
}
  export default Bar;