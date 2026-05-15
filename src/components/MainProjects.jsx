import { Link } from "react-router-dom";
import projects from "../data/projects.json";

const MainProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-124 flex justify-center items-center"
    >
      <div className="flex flex-col gap-2 justify-around min-w-3/4 min-h-100 pb-8 p-4 bg-acc2 rounded-2xl shadow-lg">
        <h3 className="text-center text-acc3 text-3xl md:text-4xl lg:text-6xl font-bold">
          Projects
        </h3>
        <div
          id="projectImageList"
          className="flex gap-2 justify-center items-center py-5 w-full"
        >
          {projects.slice(0, 4).map((project) => (
            <Link key={project.card.id} className="flex items-center justify-center h-60 w-20 lg:w-30 rounded-xl hover:w-100 transition-all duration-300 shadow-lg">
              <img
                src={project.small_image}
                alt={project.articleTitle.text}
                className="object-cover h-60 rounded-xl"
              />
            </Link>
          ))}
        </div>
        <a
          href="./pages/my_projects.html"
          className="self-center px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-base lg:text-lg hover:cursor-pointer hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
        >
          Show my Projects
        </a>
      </div>
    </section>
  );
};

export default MainProjects;
