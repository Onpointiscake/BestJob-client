import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";

import Home from "./components/HomeList";
import Oferta from "./components/Oferta";
import Footer from "./components/pages/Footer";
import NavBar from "./components/pages/NavBar";
import SearchBar from "./components/pages/SearchBar";
import { keepTheme } from "./components/pages/themes";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="container-main">
      <BrowserRouter>
        <NavBar />
        <div className="container-main-content">
          <SearchBar />
          <Switch>
            <Route path={`/oferta/:id`}>
              <Oferta />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
