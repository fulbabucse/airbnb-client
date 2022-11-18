import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Checkout from "../Pages/Shared/Checkout/Checkout";
import ComingExp from "../Pages/Shared/ComingExp/ComingExp";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import HomeDetails from "../Pages/Shared/HomeDetails/HomeDetails";
import SearchResult from "../Pages/Shared/SearchResult/SearchResult";

import Login from "../Pages/User/Login/Login";
import Signup from "../Pages/User/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "search-result",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
