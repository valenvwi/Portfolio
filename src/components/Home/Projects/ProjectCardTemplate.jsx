import { ProjectButton } from "./ProjectButton";
import { ProjectTechIcons } from "./ProjectTechIcons";

export const ProjectCardTemplate = ({
  title,
  description,
  image,
  icons,
  button,
  direction,
}) => {
  return (
    <div className="row project-card border shadow-lg">
      {direction === "left" && (
        <div className="d-none d-lg-block col-lg-4 text-center py-2">
          <img src={image} alt={title} className="card-image"></img>
        </div>
      )}

      <div className="col-sm-12 col-md-8 container d-flex justify-content-center align-items-center">
        <div>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <h5>Tech-Stack</h5>
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-3">
              {icons.map((icon) => (
                <ProjectTechIcons key={icon} icon={icon} />
              ))}
            </div>
            <div className="col-sm-12 col-lg-4 my-3 text-center">
              <ProjectButton website={button.href} title={button.title} />
            </div>
          </div>
        </div>
      </div>

      {direction === "right" && (
        <div className="d-none d-lg-block col-lg-4 text-center py-2">
          <img src={image} alt={title} className="card-image"></img>
        </div>
      )}
    </div>
  );
};
