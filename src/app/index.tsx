import "@/shared/localization";

import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "@/app/globalStyle";
import Providers from "@/app/providers";

console.log("version is", __version);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers />
  </React.StrictMode>,
);
