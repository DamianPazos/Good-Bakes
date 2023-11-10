import React from 'react';
import logo from '../../images/logo-oscuro.jpg';
import { LogoContainer } from './LogoDark.elements';

const LogoDark = () => {

    return (
        <>
        <LogoContainer>
            <img src={logo} alt="logo" /> 
        </LogoContainer>
        </>
    );

}

export default LogoDark;