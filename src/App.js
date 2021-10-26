import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Oferta from "./components/Oferta";
import logo from "./assets/logo/bestjobs-logo2.png";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">
          <img id="logo" src={logo} alt="Logo Best Jobs" />
        </a>
        <button id="cuelga_oferta" a="/">
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
        <div id="autores">
          <p>Developed by:</p>
          <ul>
            <li>Clemente Quintana</li>
            <li>Josema Saborido</li>
            <li>Javier Suarez</li>
            <li>Ana Fernandez</li>
          </ul>
        </div>
        <div id="openBoot">
          <p>Open Boot Camp Project</p>
          <p>© 2021 All rights reserved</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
