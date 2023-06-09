import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CharacterAnimationsProvider>
    <App />
  </CharacterAnimationsProvider>
);
