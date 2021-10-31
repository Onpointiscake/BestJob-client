
import React from "react";
import logo from "src/assets/logo/bestjobs-logo2.png"

const NavBar = () => (
    <nav>
    <a href="/">
      <img className="logo" src={logo} alt="Logo Best Jobs" />
    </a>
    <button className="cuelga_oferta" a="/">
      {" "}
      ¿Eres una empresa?
    </button>
  </nav>
);

export default NavBar;

