import React from 'react';
import "./LogoDark.css";
import logo from '../../images/logo-oscuro.jpg';

const LogoDark = () => {

    return (
        <div className="logo">
            <img src={logo} alt="logo" /> 
        </div>
    );

}

export default LogoDark;