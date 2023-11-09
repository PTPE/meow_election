import { createBrowserRouter } from "react-router-dom";

import {
  Activity,
  Donate,
  Error,
  Feedback,
  Home,
  Introduction,
  PoliticalIssue,
} from "../pages";
import AppLayout from "../components/AppLayout";

export const AppRoutes = createBrowserRouter([
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
