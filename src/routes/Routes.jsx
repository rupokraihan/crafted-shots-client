import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../layouts/login/Login";
import Register from "../layouts/register/Register";
import AllClasses from "../pages/classes/AllClasses";
import AllInstructors from "../pages/instructors/AllInstructors";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../layouts/dashboard/Dashboard";
import SelectedClass from "../pages/dashboard/SelectedClass";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <AllInstructors />,
      },
      {
        path: "classes",
        element: <AllClasses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard/selectedclass",
        element: <SelectedClass />,
      },
    ],
  },
]);

export default router;