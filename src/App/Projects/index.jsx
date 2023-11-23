import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants";
import { ProjectTap } from "./ProjectTap";
import { useState } from "react";

export const Projects = () => {
  const [framework, setFramework] = useState("");

  function changeFramework(framework) {
    setFramework(framework);
  }

  const filteredProjects = projects.filter((project) =>
    project.framework.includes(framework)
  );
  return (
    <div className="container" id="projects">
      <h1 className="my-5">Projects</h1>
      <ProjectTap changeFramework={changeFramework} />
      <ProjectCard projects={filteredProjects} />
    </div>
  );
};
