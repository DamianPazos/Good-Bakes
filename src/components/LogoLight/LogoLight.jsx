import React from 'react';
import "./LogoLight.css";
import logo from '../../images/logo.jpg';

const LogoLight = () => {

    return (
        <div className="logo">
            <img src={logo} alt="logo" /> 
        </div>
    );

}

export default LogoLight;