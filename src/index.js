import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

root.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
