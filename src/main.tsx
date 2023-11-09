import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/route";
import "./index.css";

import { GlobalStyle,ResetStyle } from "./styles";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>
);
