import React from "react";
import swimmingimg from "../../assets/swimming.png";
import classimg from "../../assets/class.png";
import playimg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 px-3 py-6">
      <h3 className="font-bold pb-3">Q-Zone</h3>
      <div className="space-y-3 flex flex-col items-center">
        <img src={swimmingimg} alt="" />
        <img src={classimg} alt="" />
        <img src={playimg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
