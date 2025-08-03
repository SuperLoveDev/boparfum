import React from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full my-5">
      <div className="flex justify-between items-center">
        <h1 className="italic text-2xl sm:text-4xl md-text-base font-bold cursor-pointer">
          Boparfum
        </h1>

        <ul className="flex gap-5 cursor-pointer text-base">
          <NavLink>ACCUEIL</NavLink>
          <NavLink>PARFUMS</NavLink>
          <NavLink>NOUVEAUTE</NavLink>
        </ul>

        <div className="flex gap-5 cursor-pointer">
          <SearchIcon />
          <div className="">
            <ShoppingCart />
            <p>0</p>
          </div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
