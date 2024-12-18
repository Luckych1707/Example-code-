import "./localization";

import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "@/styles/globalStyle";

import App from "./App";

console.log("version is", __version);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
