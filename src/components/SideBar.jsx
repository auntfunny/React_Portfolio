import React from "react";
import { useScroll } from "../context/ScrollContext";

const SideBar = () => {
  const { sectionRefs } = useScroll();

  return (
    <aside className="hidden md:flex justify-center bg-acc1">
      <nav className="sticky top-30 flex flex-col items-center justify-evenly mt-24 h-72 w-44 bg-acc2 rounded-xl shadow-xl">
        <button
          type="button"
          onClick={() => scrollTo(0,0)}
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() =>
            sectionRefs.current[0].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          }
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          About Me
        </button>
        <button
          type="button"
          onClick={() =>
            sectionRefs.current[1].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          }
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Skills
        </button>
        <button
          type="button"
          onClick={() =>
            sectionRefs.current[2].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          }
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() =>
            sectionRefs.current[3].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          }
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Contact Me
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;
