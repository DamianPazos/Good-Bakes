import React, { useState } from "react";
import "./NavegationBar.css";

const NavegationBar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
      <nav className="navegation-bar">
        <h1 className="logo">Good Bakes</h1>
        <ul className="navegation-items">
          <li className="navegation-item"><a href="#inicio">Inicio</a></li>
          <li className="navegation-item"><a href="#productos">Productos</a></li>
          <li className="navegation-item"><a href="#contacto">Contacto</a></li>
          <li className="navegation-item"><a href="#acerca">Acerca de</a></li>
        </ul>
        <div className="dark-mode-toggle">
          <input
            type="text"
            id="darkModeToggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </nav>
    );
  };

export default NavegationBar;
