import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants";
import { ProjectTap } from "./ProjectTap";
import { useState } from "react";

export const Projects = () => {
  const [framework, setFramework] = useState("");

  function changeFramework(framework) {
    setFramework(framework);
  }

  const scrollToProjectCard = () => {
    const projectCardSection = document.getElementById("project-card");
    projectCardSection.scrollIntoView({ behavior: "smooth" });
    console.log("scrolling");
  };

  const filteredProjects = projects.filter((project) =>
    project.framework.includes(framework)
  );
  return (
    <div className="container flex-grow-1" id="projects">
      <h1 className="mt-5 mb-4 mx-2">Projects</h1>
      <ProjectTap
        changeFramework={changeFramework}
        scrollToProjectCard={scrollToProjectCard}
      />
      <div id="project-card">
        <ProjectCard projects={filteredProjects} />
      </div>
    </div>
  );
};
