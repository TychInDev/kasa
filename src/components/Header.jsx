import React from "react";
import "../styles/header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
    <img src={process.env.PUBLIC_URL + "/Logo1.png"} alt="Logo de KASA" />
    <nav>
      <ul>
        <li>
          <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Accueil</Link>
        </li>
        <li>
          <Link to="/about" className={window.location.pathname === "/about" ? "active" : ""}>À propos</Link>
        </li>
      </ul>
    </nav>
  </header>
  
  );
}

export default Header;