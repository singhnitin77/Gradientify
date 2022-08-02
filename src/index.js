import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Context";
import axios from "axios";
import { GradientContextProvider } from "./context/GradientContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "https://gradientify-backend.vercel.app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GradientContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </GradientContextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
