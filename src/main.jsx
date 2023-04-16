import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { SnackbarProvider } from "notistack";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
