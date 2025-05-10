import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 p-3 bg-base-200">
      <p className="bg-secondary text-base-100 px-4 py-1">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-semibold mr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </p>
        <p className="font-semibold mr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </p>
        <p className="font-semibold mr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </p>
        <p className="font-semibold mr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
