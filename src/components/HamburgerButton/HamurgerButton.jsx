import React from "react";
import { HamburgerButtonContainer } from "./HamburgerButton.elements";

const HamburgerButton = (props) => {
  return (
    <HamburgerButtonContainer>
      <div onClick={props.changeClick} className={`hamburger-container ${props.click ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </HamburgerButtonContainer>
  )

};

export default HamburgerButton;