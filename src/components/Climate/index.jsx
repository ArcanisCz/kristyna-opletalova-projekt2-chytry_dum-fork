import temp from "../../images/temp.svg";
import React, {useState} from "react";

const Climate = ({temperature, humidity}) => {
    const [innerTemperature, setInnerTemperature] = useState(temperature);

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{innerTemperature}°C</div>
                <div className="climate__humidity">Vlhkost vzduchu {humidity} %</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={() => setInnerTemperature(innerTemperature + 1)}>+</button>
                <button className="button" onClick={() => setInnerTemperature(innerTemperature - 1)}>-</button>
            </div>
        </div>
    )
}

export default Climate;
