import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import './LeftSideMenu.css'
const LeftSideMenu = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-5">
      {categories.map((category) => (
        <NavLink
          to={`/Newses/${category.id}`}
          className={`block mb-2 p-5 ml-5 rounded-md text-xl font-semibold ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""} `}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideMenu;
