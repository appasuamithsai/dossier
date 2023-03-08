import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const appElement = document.getElementById("root");
const domain: any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId: any = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <>
    <App />
  </>,
  appElement
);
