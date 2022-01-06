import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.Kakao.init("697755c18ddd8fee8828436cf1d6c04f");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
