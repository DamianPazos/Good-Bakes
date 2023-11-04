import React, { useState } from "react";
import {
  NavegationBarIconLogo, 
  NavegationBarContainer, 
  NavegationBarWrapper, 
  NavegationBarMenu, 
  NavegationBarMenuItem, 
  NavegationBarMenuItemLink, 
  NavegationBarIconHamburger} from "./NavegationBar.elements";
import LogoLight from "../LogoLight/LogoLight";
import HamburgerButton from "../HamburgerButton/HamurgerButton";

const NavegationBar = () => {

  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  }

  return (
    <>
      <NavegationBarContainer>
        <NavegationBarWrapper>
          <NavegationBarIconLogo>
            <LogoLight/>
          </NavegationBarIconLogo>
          <NavegationBarIconHamburger onClick={() => changeClick()}>
            <HamburgerButton click={click} changeClick={changeClick}/>
          </NavegationBarIconHamburger>
          <NavegationBarMenu click = {click}>
            <NavegationBarMenuItem>
              <NavegationBarMenuItemLink onClick={() => changeClick()}>
                Inicio
              </NavegationBarMenuItemLink >
            </NavegationBarMenuItem>
            <NavegationBarMenuItem>
              <NavegationBarMenuItemLink onClick={() => changeClick()}>
                Productos
              </NavegationBarMenuItemLink>
            </NavegationBarMenuItem>
            <NavegationBarMenuItem>
              <NavegationBarMenuItemLink onClick={() => changeClick()}>
                Contacto
              </NavegationBarMenuItemLink>
            </NavegationBarMenuItem>
            <NavegationBarMenuItem>
              <NavegationBarMenuItemLink onClick={() => changeClick()}>
                Acerca de
              </NavegationBarMenuItemLink>
            </NavegationBarMenuItem>
          </NavegationBarMenu>
        </NavegationBarWrapper>
      </NavegationBarContainer>
    </>
  );
};

export default NavegationBar;