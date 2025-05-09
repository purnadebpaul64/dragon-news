import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <h1>Auth</h1>,
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
]);

export default router;
