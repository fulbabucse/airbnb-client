import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ComingExp from "../Pages/Shared/ComingExp/ComingExp";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import HomeDetails from "../Pages/Shared/HomeDetails/HomeDetails";

import Login from "../Pages/User/Login/Login";
import Signup from "../Pages/User/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "coming-exp",
        element: <ComingExp></ComingExp>,
      },
      {
        path: "home-details",
        element: <HomeDetails></HomeDetails>,
      },
    ],
  },
]);

export default router;
