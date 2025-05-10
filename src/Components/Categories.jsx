import React, { use } from "react";
import { NavLink } from "react-router";
const caterogyPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(caterogyPromise);
  return (
    <div>
      <h3 className="font-bold mb-5">All Caterogy</h3>
      <div>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "grid grid-cols-1 btn mb-1 text-accent-content text-left px-8 bg-base-100 border-none hover:bg-base-200"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
