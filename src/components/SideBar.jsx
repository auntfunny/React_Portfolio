import React from "react";
import { useScroll } from "../context/ScrollContext";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { sectionRefs } = useScroll();
  const { t } = useTranslation();

  return (
    <aside className="hidden md:flex justify-center bg-acc1">
      <nav className="sticky top-30 flex flex-col items-center justify-evenly mt-24 h-72 w-44 bg-acc2 rounded-xl shadow-xl">
        <button
          type="button"
          onClick={() => scrollTo(0,0)}
          className="text-acc4 hover:text-acc3 hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {t('side_bar.home')}
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
          {t('side_bar.about')}
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
          {t('side_bar.skills')}
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
          {t('side_bar.projects')}
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
          {t('side_bar.contact')}
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;
