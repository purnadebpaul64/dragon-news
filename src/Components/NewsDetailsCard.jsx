import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, category_id } = news;
  return (
    <div className="mt-5 p-5 rounded border-2 border-base-200 space-y-8">
      <img
        className="w-full rounded h-[400px] object-cover"
        src={image_url}
        alt=""
      />
      <h2 className="text-2xl font-semibold text-accent">{title}</h2>
      <p className="text-accent-content">{details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        <FaArrowLeftLong />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
