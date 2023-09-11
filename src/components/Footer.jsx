import footerImg from "../assets/images/footer-wave.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <img src={footerImg} alt="footer-wave" className="footer-img" />
      <div className="footer row px-2">
        <div className="col-sm-12 col-md-4 ">
          <h5>Wai Ian Vong</h5>
          <p>📧 valenvwi@gmail.com</p>
        </div>
        <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
          <p>This portfolio is made with React in Sep 2023.</p>
        </div>
        <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
          <a
            href="https://github.com/valenvwi"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              className="fonticon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amywaiianvong/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              className="fonticon"
            />
          </a>
          <a
            href="https://www.instagram.com/wai_inderschweiz/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff" }}
              className="fonticon"
            />
          </a>
        </div>
      </div>
    </>
  );
};
