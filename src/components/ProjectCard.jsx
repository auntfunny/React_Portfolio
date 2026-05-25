import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <li id={project.card.id} className={`flex flex-col ${project.card.style === 1 ? "lg:flex-row" : "lg:flex-row-reverse"} justify-between gap-4 items-center w-3/4 p-3 md:p-6 bg-acc2 shadow-[0px_4px_12px_#335145f4] rounded-xl`}>
      <a
        href={project.pageLink.href}
        target="_blank"
        className="w-full md:w-120 hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img
          alt={t(project.image.alt)}
          src={project.image.src}
          className="rounded-xl w-full"
        />
      </a>
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-evenly">
        <h2 className={`text-lg md:text-3xl text-center ${project.card.style === 1 ? "lg:text-right" : "lg:text-left"} text-acc3`}>
          {t(project.articleTitle.text)}
        </h2>
        <p className="text-xs md:text-base text-acc4 p-2 md:indent-8">
          {t(project.articlePara.text)}
        </p>
        <a
          href={project.sourceLink.href}
          target="_blank"
          className="px-8 py-2 self-center border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
        >
          {t(project.sourceLink.text)}
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
