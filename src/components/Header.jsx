import { NavLink } from "react-router-dom";
// import { FaCartPlus } from "react-icons/fa6";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full bg-white dark:bg-slate-950 dark:text-white">
      <div className="w-[90%] md:w-[80%] mx-auto py-5 flex justify-between items-center md:z-50">
        <p
          className={`md:hidden border-2 border-slate-400 p-2 rounded-md ${
            isMenuOpen ? "border-2 border-slate-400" : ""
          } `}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </p>

        <h1 className="text-xl">
          <span className="w-3 h-3 px-2 mr-1 text-white bg-red-500 rounded-md">
            e
          </span>
          <span className="font-semibold">Shop</span>
        </h1>

        <ul className="hidden gap-10 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sort"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to="category"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        <ul
          className={`flex absolute  bottom-[-60px] -left-0 gap-12 md:hidden bg-white shadow-lg w-full pl-5 py-5 dark:bg-slate-950 border-t border-slate-500 ${
            isMenuOpen
              ? "translate-x-0 duration-700 transition-all"
              : "-translate-x-[450px]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sort"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to="category"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-400 px-2 py-1 rounded-md text-white font-semibold"
                  : ""
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <DarkModeSwitch
          // style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </div>
  );
};

export default Header;
