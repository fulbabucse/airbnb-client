import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
