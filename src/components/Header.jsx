import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const title =
    pathname === "/"
      ? "Home"
      : pathname === "/projects"
        ? "Projects"
        : pathname === "/social"
          ? "Social Links"
          : "Not Found";
  return (
    <header
      id="home"
      className="sticky top-1 z-50 backdrop-blur-lg flex flex-row justify-center items-center h-24 w-full px-2 py-3 md:p-4 gap-2 md:gap-0 bg-linear-to-b from-acc1/60 via-acc1/70 to-acc1/60 text-acc4"
    >
      <nav className="flex flex-row justify-between items-center h-24 w-full max-w-5xl px-2 py-3 md:p-4 gap-2">
        <Link to="/" onClick={() => scrollTo(0, 0)}>
          <img
            src="https://res.cloudinary.com/dplnnusav/image/upload/f_auto,q_auto/circle_logo_t9pa36"
            alt="Logo"
            width="60px"
          />
        </Link>

        <h1 className="text-xl text-acc3 md:text-4xl lg:text-6xl">{title}</h1>

        <div className="flex content-center items-center gap-4 md:gap-12 lg:gap-16">
          <Link
            to="/projects"
            onClick={() => scrollTo(0, 0)}
            className="hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/social"
            onClick={() => scrollTo(0, 0)}
            className="hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          >
            Social Links
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
