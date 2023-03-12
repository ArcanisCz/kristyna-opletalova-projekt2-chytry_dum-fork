import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import React from "react";
import Light from "../Light";

const Lights = ({lights}) => {
    return (
        <div className="lights">
            {
                lights.map((light) => <Light name={light.name} state={light.state}/>)
            }
        </div>
    )
}

export default Lights;