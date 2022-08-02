import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Context";
import axios from "axios";
import { GradientContextProvider } from "./context/GradientContext";

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
