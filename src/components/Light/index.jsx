import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import React from "react";

const Light = ({state, name}) => {
    return(
        <div className="light">
            <div className="light__icon">
                <img src={lightOff}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}
export default Light;