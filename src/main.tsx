import "./localization";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";
import { GlobalStyle } from "@/styles/globalStyle";

console.log("version is", __version);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
