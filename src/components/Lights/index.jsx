import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import React from "react";

const Lights = () => {
    return (
        <div className="lights">

            <div className="light">
                <div className="light__icon">
                    <img src={lightOff}/>
                </div>
                <div className="light__name">
                    Obývací pokoj
                </div>
            </div>

            <div className="light">
                <div className="light__icon">
                    <img src={lightOn}/>
                </div>
                <div className="light__name">
                    Ložnice
                </div>
            </div>

            <div className="light">
                <div className="light__icon">
                    <img src={lightOn}/>
                </div>
                <div className="light__name">
                    Kuchyň
                </div>
            </div>

            <div className="light">
                <div className="light__icon">
                    <img src={lightOff}/>
                </div>
                <div className="light__name">
                    Chodba
                </div>
            </div>

        </div>
    )
}

export default Lights;