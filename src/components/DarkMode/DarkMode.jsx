import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} alt="Sun icon" className="sun"/>
                <img src={Moon} alt="Moon icon" className="moon"/>
            </label>
        </div>
    );
};

export default DarkMode;
