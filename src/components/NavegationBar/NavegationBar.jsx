import React from "react";
import "./NavegationBar.css";
import LogoLight from "../LogoLight/LogoLight";

const NavegationBar = () => {

    return (
      <nav className="navegation-bar">
        <div className="navegation-logo">
        <LogoLight />
        </div>
        <ul className="navegation-items">
          <li className="navegation-item"><a href="#inicio">Inicio</a></li>
          <li className="navegation-item"><a href="#productos">Productos</a></li>
          <li className="navegation-item"><a href="#contacto">Contacto</a></li>
          <li className="navegation-item"><a href="#acerca">Acerca de</a></li>
        </ul>
      </nav>
    );
  };

export default NavegationBar;