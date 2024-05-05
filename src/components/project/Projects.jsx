import React from "react";
import Title from "../Title";
import ProjectsCard from "./ProjectsCard";
import { ProjectsData } from "../Data";



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full xl:px-16 px-8 xl:py-10 py-4 xl:border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {ProjectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            des={project.description}
            src={project.img}
            github={project.github}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
