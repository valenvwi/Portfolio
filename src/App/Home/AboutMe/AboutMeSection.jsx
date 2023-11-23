import avatar from "../../../assets/images/avatar.jpg";
import { AboutMeContent } from "./AboutMeContent";

export const AboutMeSection = () => {
  return (
    <div className="container" id="aboutMe">
      <h1 className="m-5">About me</h1>
      <div className="d-none d-lg-block">
        <div className="row mx-5">
          <div className="col-4">
            <img src={avatar} width="250" height="320" className="avatar" />
          </div>
          <div className="col-sm-12 col-lg-8 d-flex flex-column justify-content-center">
            <AboutMeContent />
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none d-flex justify-content-center align-items-center flex-column text-center gap-3">
        <img src={avatar} width="150" height="180" className="avatar" />
        <AboutMeContent />
      </div>
    </div>
  );
};
