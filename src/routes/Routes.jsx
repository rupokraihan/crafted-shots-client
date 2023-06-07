import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../layouts/login/Login";
import Register from "../layouts/register/Register";

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
      {
        path: "login",
        element:<Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ],
  },
]);

export default router;