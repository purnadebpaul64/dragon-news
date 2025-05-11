import React, { use } from "react";
import { Link, NavLink } from "react-router";
import avatar from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignout = () => {
    // console.log("logout");
    logOut()
      .then(() => {
        alert("Loged out successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="w-4/12">{user && user.email}</div>
      <div className="flex justify-center gap-5 text-accent-content w-4/12">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-3 w-4/12 justify-end">
        <img src={avatar} alt="" />
        {user ? (
          <button onClick={handleSignout} className="btn btn-primary px-8">
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
