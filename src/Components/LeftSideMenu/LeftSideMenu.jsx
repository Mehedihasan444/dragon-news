import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const LeftSideMenu = () => {

    const [categories,setCategories] =useState([])
  useEffect (() => {
      fetch("/categories.json")
      .then(res =>res.json())
      .then(data => setCategories(data))
    },[]);

    
  return (
    <div className="mt-5">
      {
        categories.map(category=>(
            <NavLink to={`/category/${category.id}`} className={`block mb-2 pl-5 ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-600": ""} `} key={category.id}>{category.name}</NavLink>
        ))
      }
    </div>
  );
};

export default LeftSideMenu;
