import { useEffect, useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [loaded, setLoaded] = useState(5);
  const [mounted, setMounted] = useState(false);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (id && mounted) {
      const current = document.getElementById(id);
      console.log(current);
      if (current) {
        current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [mounted]);

  return (
    <main className="min-h-124 relative flex flex-col justify-center items-center gap-12 p-12 bg-acc4">
      <ul className="relative flex flex-col justify-center items-center gap-12">
        {projects.slice(0, loaded).map((project) => (
          <ProjectCard key={project.card.id} project={project} />
        ))}
      </ul>
      {loaded < projects.length && (
        <button
          type="button"
          onClick={() => setLoaded((prev) => (prev += 5))}
          className="self-center px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-base lg:text-lg hover:cursor-pointer hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
        >
          {t('project_page.button')}
        </button>
      )}
    </main>
  );
};

export default Projects;
