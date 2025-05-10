import React, { Component } from "react";
import { NavLink } from "react-router";
import avatar from "../assets/user.png";

export class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-between items-center">
        <div className="w-4/12"></div>
        <div className="flex justify-center gap-5 text-accent-content w-4/12">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex gap-3 w-4/12 justify-end">
          <img src={avatar} alt="" />
          <button className="btn btn-primary px-8">Login</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
