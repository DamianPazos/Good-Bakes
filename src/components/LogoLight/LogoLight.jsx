import React from 'react';
import logo from '../../images/logo.jpg';
import { LogoContainer } from './LogoLight.elements';

const LogoLight = () => {
    return (
        <>
            <LogoContainer>
                <img src={logo} alt="logo"/>
            </LogoContainer>
        </>
    );
}

export default LogoLight;