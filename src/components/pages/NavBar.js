import Toogle from "../Toggle";
import logo from "../../assets/logo/LogoOb2.svg";
function NavBar() {
  return (
    <nav>
      <a href="/" className="logo-main">
        <img src={logo} alt=""></img>{" "}
      </a>
      <Toogle className="color-toogle"></Toogle>
      <button className="cuelga_oferta" a="/">
        {" "}
        ¿Eres una empresa?
      </button>
    </nav>
  );
}

export default NavBar;
