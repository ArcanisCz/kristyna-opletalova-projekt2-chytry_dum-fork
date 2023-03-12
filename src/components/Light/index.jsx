import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import React, {useState} from "react";

const Light = ({state, name}) => {
    const [bulb, setBulb] = useState(state);
    const isOn = bulb === 'on';

    return (
        <div className="light" onClick={() => {
            isOn ? setBulb('off') : setBulb('on')
        }}>
            <div className="light__icon">
                <img src={isOn ? lightOn : lightOff}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}
export default Light;