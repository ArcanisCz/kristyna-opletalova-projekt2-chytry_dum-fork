import blindsOpen from "../../images/blinds-open.svg";
import blindsClosed from "../../images/blinds-closed.svg";
import React, {useState} from "react";
import {cn} from "../../index";

const Blinds = ({state}) => {
    const [blinds, setBlinds] = useState(state);
    const isOpen = blinds === 'open';

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={isOpen ? blindsOpen : blindsClosed}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={cn('button', isOpen && 'button--active')} onClick={() => setBlinds('open')}>Otevřeno</button>
                <button className={cn('button', !isOpen && 'button--active')} onClick={() => setBlinds('closed')}>Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;