import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchIcon, ShoppingCart, User, Menu, XIcon } from "lucide-react";

const Navbar = () => {
  // variables onclick section
  const [clickMenu, setClickMenu] = useState("");

  //variables for sidebar menu
  const [visible, setVisible] = useState(false);

  const navList = [
    { path: "/", name: "ACCUEIL" },
    { path: "/parfums", name: "PARFUM" },
    { path: "/nouveaute", name: "NOUVEAUTE" },
  ];

  return (
    <div className="flex justify-between py-5 items-center">
      <h1 className="italic text-2xl sm:text-4xl md-text-base font-bold cursor-pointer">
        Boparfum
      </h1>

      <ul className="hidden sm:flex gap-5 cursor-pointer text-sm">
        {navList.map((list) => (
          <li key={list.path}>
            <NavLink
              onClick={() => setClickMenu(list.path)}
              className={`cursor-pointer ${
                clickMenu === list.path ? "text-red-400" : ""
              }`}
              to={list.path}
            >
              {list.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 cursor-pointer">
        <Link className="">
          <SearchIcon />
        </Link>
        <Link to="/cart" className="flex relative">
          <ShoppingCart />
          <p className="absolute -top-3 -right-3 bg-black w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
            0
          </p>
        </Link>
        <Link to="/Login" className="">
          <User />
        </Link>
      </div>

      <div
        onClick={() => setVisible(!visible)}
        className="cursor-pointer sm:hidden"
      >
        {visible ? <XIcon /> : <Menu />}
      </div>

      {visible && (
        // sidebar menu for small screen
        <ul className="absolute top-[70px] left-0 w-full flex flex-col gap-4 bg-white py-5 px-4 sm:hidden z-50 shadow-md">
          {navList.map((list) => (
            <li key={list.path}>
              <NavLink
                onClick={() => {
                  setClickMenu(list.path);
                  setVisible(false);
                }}
                className={`cursor-pointer block py-2 ${
                  clickMenu === list.path ? "text-red-400" : ""
                }`}
                to={list.path}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
