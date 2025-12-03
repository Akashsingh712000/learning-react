w// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Todoprovider from "./context/wraper";
import Home from "./Home";

createRoot(document.getElementById("root")).render(
  <Todoprovider>
    {/* App aur uske sare components Todoprovider ke children hain,
        isliye sab data access kar sakte hain */}
    <App />
    <Home/>
  </Todoprovider>
);
