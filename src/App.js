import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/HomeList";
import Oferta from "./components/Oferta";
import logo from "./assets/logo/bestjobs-logo2.png";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">
          <img className="logo" src={logo} alt="Logo Best Jobs" />
        </a>
        <button className="cuelga_oferta" a="/">
          {" "}
          ¿Eres una empresa?
        </button>
      </nav>

      <Switch>
        <Route path={`/oferta/:id`}>
          <Oferta />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <footer>
        <div className="autores">
          <p>Developed by:</p>
          <ul>
            <li>Clemente Quintana</li>
            <li>Josema Saboreo</li>
            <li>Javier Suarez</li>
            <li>Ana Fernandez</li>
          </ul>
        </div>
        <div className="openBoot">
          <p>Open Boot Camp Project</p>
          <p>© 2021 All rights reserved</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
