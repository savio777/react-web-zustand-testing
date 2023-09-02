import React from "react";
import ReactDOM from "react-dom/client";
import process from "process";

import App from "./App.tsx";
import "./index.css";
import { useCartStore } from "./store/CartStore.ts";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  useCartStore.subscribe((state) => console.log({ state }));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
