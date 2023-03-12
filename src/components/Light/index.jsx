import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import React, {useState} from "react";

const Light = ({state, name}) => {
    const [bulb, setBulb] = useState(state);

return (
    <div className="light" onClick={() => {bulb === 'on' ? setBulb('off') : setBulb('on')}}>
        <div className="light__icon">
            <img src={bulb === 'on' ? lightOn : lightOff}/>
        </div>
        <div className="light__name">
            {name}
        </div>
    </div>
)
}
export default Light;