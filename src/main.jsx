import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import HistoryContextProvider from "./context/HistoryContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <HistoryContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HistoryContextProvider>
);
