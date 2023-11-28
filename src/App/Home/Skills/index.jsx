import webDevelopment from "../../../assets/images/developer.png";
import git from "../../../assets/images/git.png";
import deployment from "../../../assets/images/deployment.png";
import db from "../../../assets/images/database-storage.png";
import responsiveDesign from "../../../assets/images/responsive.png";
import restApi from "../../../assets/images/application.png";

const skills = [
  "Web Development",
  "Database",
  "Responsvie Design",
  "Git",
  "Deployment",
  "Rest APIs",
];
const skillIcons = [
  webDevelopment,
  db,
  responsiveDesign,
  git,
  deployment,
  restApi,
];

export const SkillSection = () => {
  return (
    <div className="container mb-5">
      <h1 className="m-5 text-end"> Top Skills</h1>
      <div className="row mx-3">
        {/* Big screen and larger */}
        {skills.map((skill, index) => {
          return (
            <div
              className="col-4 d-flex flex-column text-center justify-content-center align-items-center py-3 d-none d-md-block"
              key={skill}
            >
              <img
                src={skillIcons[index]}
                alt={skill}
                className="img-fluid w-25"
              />
              <h5>{skill}</h5>
            </div>
          );
        })}
        {/* mobile */}
        {skills.map((skill, index) => {
          return (
            <div
              className="col-6 d-flex flex-column text-center justify-content-center align-items-center py-2 d-block d-md-none"
              key={skill}
            >
              <img
                src={skillIcons[index]}
                alt={skill}
                className="img-fluid w-50 pb-1"
              />
              <h6>{skill}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
