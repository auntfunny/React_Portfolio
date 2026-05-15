import React from "react";
import About from "./About";
import Skills from "./Skills";
import MainProjects from "./MainProjects";

const MainHome = () => {
  return (
    <main className="bg-acc1 relative">
      <About />
      <Skills />
      <MainProjects />
    </main>
  );
};

export default MainHome;
