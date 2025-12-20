import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/icons/antac.jpg";
import { Link, NavLink } from "react-router-dom";
import OpenProducts from "./OpenProduct";

const linkStyle =
  "w-fit cursor-pointer relative hover:text-[#da251a] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-[#da251a] after:transition-all after:duration-200 hover:after:w-full  ";

const getNavClass = (isActive) =>
  (isActive ? "text-[#da251a]" : "text-gray-700") + " " + linkStyle;

export const scrollHomeOnClick = () => {
  if (window.location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const MainNavbar = ({ setIsNavOpen, isNavOpen, setIsMenuOpen }) => {
  const mobileMenuHandler = () => {
    return setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <NavLink className="cursor-pointer" to="/" onClick={scrollHomeOnClick}>
          <img src={logo} alt="antac logo" className="h-[28px] w-auto" />
        </NavLink>

        {/* Center nav links */}
        <ul className="gap-4 text-sm hidden xl:flex">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              onClick={() => setIsNavOpen(false)}
              className={({ isActive }) => getNavClass(isActive)}
            >
              Home
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsNavOpen(false)}
              className={({ isActive }) => getNavClass(isActive)}
            >
              About Us
            </NavLink>
          </li>

          {/* Products (toggle dropdown) */}
          <li className="cursor-pointer flex items-center gap-1">
            <NavLink
              to="/product"
              onClick={() => setIsNavOpen(false)}
              className={({ isActive }) => getNavClass(isActive)}
            >
              Products
            </NavLink>
            <div
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 -m-2 cursor-pointer select-none"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`text-gray-500 transition-transform duration-300 ${
                  isNavOpen ? "rotate-[270deg]" : "rotate-90"
                }`}
              />
            </div>
          </li>

          {/* Gallery */}
          <li>
            <NavLink
              to="/gallery"
              onClick={() => setIsNavOpen(false)}
              className={({ isActive }) => getNavClass(isActive)}
            >
              Gallery
            </NavLink>
          </li>

          {/* Contact */}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsNavOpen(false)}
              className={({ isActive }) => getNavClass(isActive)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-8 items-center">
          <div className="xl:hidden ">
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-700 text-2xl"
              onClick={() => mobileMenuHandler()}
            />
          </div>

          {/* CTA button */}
          <a
            href="https://wa.me/919910194710"
            target="_blank"
            rel="noopener noreferrer"
            className=" hidden xl:inline-block  cursor-pointer p-2 px-4 rounded-3xl border-1 border-[#da251a] text-sm hover:bg-[#da251a] hover:text-white font-bold text-[#da251a]"
          >
            Request Free Quote
          </a>
        </div>
      </div>
      {/* Dropdown - positioned absolutely to prevent layout shift */}
      <OpenProducts isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default MainNavbar;
