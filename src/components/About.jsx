import { useEffect, useRef } from "react";
import { useScroll } from "../context/ScrollContext";
import { useTranslation } from "react-i18next";

const About = () => {
  const { sectionRefs } = useScroll();
  const { t } = useTranslation();

  return (
    <section
      ref={(el) => (sectionRefs.current[0] = el)}
      id="about"
      className="min-h-124 relative flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-evenly text-center h-100 w-3/4 lg:w-1/2 p-3 mt-7 rounded-2xl shadow-xl bg-acc2">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-acc3">
          {t('about.title')}
        </h3>
        <p className="text-xs sm:text-xs md:text-sm lg:text-base text-acc4">
          {t('about.description1')}
        </p>
        <p className="text-xs sm:text-xs md:text-sm lg:text-base text-acc4">
          {t('about.description2')}
        </p>
        <p className="text-xs sm:text-xs md:text-sm lg:text-base text-acc4">
          {t('about.description3')}
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-evenly items-center min-h-72 lg:hidden">
        <div className="-rotate-12 flex justify-center items-center w-40 h-48 bg-acc4 rounded-2xl shadow-xl">
          <img
            src="https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103000/Foto_2_odgcte.png"
            alt={t('about.alt1')}
            className="rounded-xl w-36"
          />
        </div>
        <div className="rotate-6 flex justify-center items-center w-40 h-52 bg-acc4 rounded-2xl shadow-xl">
          <img
            src="https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103001/Foto_3_fmsggr.jpg"
            alt={t('about.alt2')}
            className="rounded-xl w-36"
          />
        </div>
      </div>
      <div className="hidden relative lg:absolute lg:right-3/4 lg:bottom-15 lg:-rotate-12 lg:flex justify-center items-center w-40 h-48 bg-acc4 rounded-2xl shadow-xl">
        <img
          src="https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103000/Foto_2_odgcte.png"
          alt={t('about.alt1')}
          className="rounded-xl w-36"
        />
      </div>
      <div className="hidden relative lg:absolute lg:left-3/4 lg:bottom-50 lg:rotate-6 lg:flex justify-center items-center w-40 h-52 bg-acc4 rounded-2xl shadow-xl">
        <img
          src="https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103001/Foto_3_fmsggr.jpg"
          alt={t('about.alt2')}
          className="rounded-xl w-36"
        />
      </div>
    </section>
  );
};

export default About;
