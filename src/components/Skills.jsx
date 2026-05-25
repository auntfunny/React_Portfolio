import { useEffect, useRef } from "react";
import { useScroll } from "../context/ScrollContext";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { sectionRefs } = useScroll();
  const { t } = useTranslation();
  const skillList = [
    {
      title: "HTML",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103002/html_efghvc.png",
    },
    {
      title: "CSS",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778102999/css_pxhife.png",
    },
    {
      title: "Tailwind",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103003/tailwind_gjuffx.png",
    },
    {
      title: "JavaScript",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103002/javascript_krwkiv.png",
    },
    {
      title: "React",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103002/react_r9mcf1.png",
    },
    {
      title: "C",
      image:
        "https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778102999/c_x6tqtd.png",
    },
  ];

  return (
    <section
      ref={(el) => (sectionRefs.current[1] = el)}
      className="min-h-124 flex justify-center items-center"
    >
      <div className="flex flex-col gap-2 justify-around w-full lg:w-4/5 min-h-100 pb-8 p-4">
        <h3 className="text-center text-acc3 text-3xl md:text-4xl lg:text-6xl font-bold">
          {t('skills.title')}
        </h3>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4">
          <div className="flex flex-col flex-wrap justify-around w-2/3 md:w-1/3 h-72 p-4 items-center bg-acc2 rounded-xl shadow-lg">
            <h3 className="text-center text-acc3 text-5xl lg:text-7xl">1</h3>
            <p className="text-center text-acc4 pb-1 text-xl lg:text-2xl">
              {t('skills.experience')}
            </p>
            <a
              href={t('skills.download.path')}
              download={t('skills.download.file')}
              className="px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
            >
              {t('skills.download.title')}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 relative justify-evenly items-center w-full">
            {skillList.map((skill, index) => (
              <SkillCard key={index} image={skill.image} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
