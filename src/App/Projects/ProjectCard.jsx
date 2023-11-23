import { ProjectCardTemplate } from "./ProjectCardTemplate";

export const ProjectCard = (props) => {

  return (
    <div className="d-lg-block mt-2" id="project-card">
      {props.projects.map((project, index) => (
        <ProjectCardTemplate
          title={project.title}
          description={project.description}
          image={project.image}
          icons={project.icons}
          button={project.button}
          completedOn={project.completedOn}
          key={project.title}
          direction={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
};
