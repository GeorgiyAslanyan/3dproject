import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PixelProject from "./components/PixelProject";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pixel",
    element: <PixelProject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CharacterAnimationsProvider>
    <RouterProvider router={router} />
  </CharacterAnimationsProvider>
);
