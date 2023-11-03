import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Activity from "./pages/Activity";
import PoliticalIssue from "./pages/PoliticalIssue";
import Donate from "./pages/Donate";
import Feedback from "./pages/Feedback";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/event",
        element: <Activity />,
      },
      {
        path: "/issue",
        element: <PoliticalIssue />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
