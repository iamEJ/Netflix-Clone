import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";
import { firebaseApp } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider value={{ firebaseApp }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
