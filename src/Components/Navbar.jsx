import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-blue-400">
            MyApp
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
