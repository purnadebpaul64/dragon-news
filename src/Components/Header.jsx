import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4.5">
      <img src={logo} alt="" />
      <p className="text-accent-content text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold">
        {format(new Date(), "EEEE, LLLL dd, uuuu")}
      </p>
    </div>
  );
};

export default Header;
