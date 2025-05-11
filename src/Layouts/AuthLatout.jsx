import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLatout = () => {
  return (
    <div className="space-y-5 bg-base-200 min-h-screen">
      <header className="w-11/12 py-8 mx-auto ">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 py-8 mx-auto ">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLatout;
