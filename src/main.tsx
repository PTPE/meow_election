import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Activity from "./pages/Activity";
import PoliticalIssue from "./pages/PoliticalIssue";
import Donate from "./pages/Donate";
import Feedback from "./pages/Feedback";
import Error from "./pages/Error";
import HeaderLayout from "./components/HeaderLayout";
import NavigationLayout from "./components/NavigationLayout";

const router = createHashRouter([
  {
    element: <HeaderLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <NavigationLayout />,
        children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
