import {  createHashRouter } from "react-router-dom";

import {
  Activity,
  Donate,
  Error,
  Feedback,
  Home,
  Introduction,
  PoliticalIssue,
} from "../pages";
import { HeaderLayout, NavigationLayout } from "../layout";


export const AppRoutes = createHashRouter([
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

