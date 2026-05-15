import React from "react";

const SideBar = () => {
  return (
    <aside className="hidden md:flex justify-center bg-acc1">
      <nav className="sticky top-24 flex flex-col items-center justify-evenly mt-24 h-72 w-44 bg-acc2 rounded-xl shadow-xl">
        <a
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          href="#about"
        >
          About Me
        </a>
        <a
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out"
          href="#contact"
        >
          Contact Me
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
