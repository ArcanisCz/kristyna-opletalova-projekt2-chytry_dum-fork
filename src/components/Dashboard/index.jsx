import lightOff from "../../images/light-off.svg";
import lightOn from "../../images/light-on.svg";
import temp from "../../images/temp.svg";
import blindsOpen from "../../images/blinds-open.svg";
import electricity from "../../images/electricity.svg";
import water from "../../images/water.svg";
import React from "react";

const Dashboard = () => {
    return (
        <main className="dashboard">

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


            <div className="climate">
                <div className="climate__icon">
                    <img src={temp}/>
                </div>
                <div className="climate__content">
                    <div className="climate__temperature">24&deg;C</div>
                    <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
                </div>
                <div className="climate__controls">
                    <button className="button">+</button>
                    <button className="button">-</button>
                </div>
            </div>

            <div className="blinds">
                <div className="blinds__icon">
                    <img src={blindsOpen}/>
                </div>
                <div className="blinds__name">
                    Žaluzie
                </div>
                <div className="blinds__controls">
                    <button className="button button--active">Otevřeno</button>
                    <button className="button">Zavřeno</button>
                </div>
            </div>

            <div className="energy">
                <div className="energy__source">
                    <div className="energy__icon">
                        <img src={electricity}/>
                    </div>
                    <div className="energy__consumption">
                        <div className="energy__description">Elektřina</div>
                        <div className="energy__value">36.7 kW</div>
                    </div>
                </div>
                <div className="energy__source">
                    <div className="energy__icon">
                        <img src={water}/>
                    </div>
                    <div className="energy__consumption">
                        <div className="energy__description">Voda</div>
                        <div className="energy__value">14.1 m<sup>3</sup></div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Dashboard;