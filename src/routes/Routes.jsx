import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../layouts/login/Login";
import Register from "../layouts/register/Register";
import AllClasses from "../pages/classes/AllClasses";
import AllInstructors from "../pages/instructors/AllInstructors";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../layouts/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/admin/ManageUsers";
import AddClass from "../pages/dashboard/instructor/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import MyClasses from "../pages/dashboard/instructor/MyClasses";
import UpdatedClass from "../pages/dashboard/instructor/UpdatedClass";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import MySelectedClass from "../pages/dashboard/student/MySelectedClass";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/payment/PaymentHistory";
import EnrolledClasses from "../pages/dashboard/student/EnrolledClasses";

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
        path: "selectedclass",
        element: (
          <StudentRoute>
            <MySelectedClass />
          </StudentRoute>
        ),
      },
      {
        path: "enrolled-classes",
        element: (
          <StudentRoute>
            <EnrolledClasses />
          </StudentRoute>
        ),
      },
      {
        path: `selectedclass/payment/:id`,
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses/updateclass/:id",
        element: (
          <InstructorRoute>
            <UpdatedClass />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
