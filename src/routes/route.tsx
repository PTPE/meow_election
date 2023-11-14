import { createHashRouter } from "react-router-dom";

import {
  Activity,
  Donate,
  Error,
  Feedback,
  Home,
  Introduction,
  PoliticalIssue,
} from "../pages";
import { Root } from "../layout/Root";

export const AppRoutes = createHashRouter([
  {
    element: <Home />,
    path: "/",
    errorElement: <Error />,
  },
  {
    element: <Root />,
    errorElement: <Error />,
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
]);
