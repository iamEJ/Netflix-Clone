import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
