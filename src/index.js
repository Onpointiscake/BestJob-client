import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//STYLES
import "./styles/index.css";
import "./styles/oferta.css";
import "./styles/navbar.css";
import "./styles/searchbar.css";
import "./styles/footer.css";
import "./styles/queries.css";
import "./styles/toogle.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
