import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

export default router;