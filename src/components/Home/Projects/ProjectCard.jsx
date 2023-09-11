import starry from "../../../assets/images/starry.png";
import { ProjectTechIcons } from "./ProjectTechIcons";
import { ProjectButton } from "./ProjectButton";
import { ProjectCardImage } from "./ProjectCardImage";

const firstIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
];

const secondIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
];

const thirdIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
];

const buttons = [
  {
    href: "https://instaexplore-9b589f2c49e0.herokuapp.com/users/sign_in",
    title: "Explore now",
  },
  {
    href: "https://github.com/valenvwi/Starry-Accessory-React",
    title: "View code",
  },
  {
    href: "https://github.com/valenvwi/QuickDrop-Amy",
    title: "View code",
  },
];

const images = [
  {
    href: "https://user-images.githubusercontent.com/119674688/263705821-06ba57f4-73b4-41c7-8caa-cadb393ac70a.png",
    title: "InstaExplore",
  },
  {
    href: "https://user-images.githubusercontent.com/119674688/259377178-d9a315d3-4754-4059-ae79-804622be577a.png",
    title: "QuickDrop",
  },
];

export const ProjectCard = () => {
  function showCard() {
    const cards = document.querySelectorAll(".project-card");

    for (let i = 0; i < cards.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = cards[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", showCard);

  return (
    <div>
      <div className="d-lg-block">
        <div className="row project-card left border shadow-lg">
          <div className="col-sm-12 col-md-8 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>InstaExplore</h1>
              <p className="lead">
                InstaExplore is a mobile application designed to help newcomers
                discover their local area and connect with people in their
                vicinity. Inspired by popular social media platforms like
                Instagram, InstaExplore combines the power of geolocation and
                user-generated content to create an engaging and interactive
                experience.
              </p>
              <h5>Tech-Stack</h5>
              <div className="row">
                <div className="col-sm-12 col-lg-8 mb-3">
                  {firstIcons.map((icon) => (
                    <ProjectTechIcons key={Math.random()} icon={icon} />
                  ))}
                </div>
                <div className="col-sm-12 col-lg-4 my-3 text-center">
                  <ProjectButton
                    website={buttons[0].href}
                    title={buttons[0].title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-4 text-center py-2">
            <ProjectCardImage href={images[0].href} title={images[0].title} />
          </div>
        </div>

        <div className="row project-card right border shadow-lg">
          <div className="d-none d-lg-block col-lg-4 text-center py-2">
            <img src={starry} alt="InstaExplore" className="card-image"></img>
          </div>

          <div className="col-sm-12 col-md-8 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Starry Accessory</h1>
              <p className="lead">
                Starry Accessory is an online earrings shop that offers a
                straightforward shopping experience. Visitors can freely browse
                a variety of products. Upon logging in, users gain the ability
                to add items to their cart, proceed with the checkout process,
                and conveniently track their order history.
              </p>
              <h5>Tech-Stack</h5>
              <div className="row">
                <div className="col-sm-12 col-lg-8 mb-3">
                  {secondIcons.map((icon) => (
                    <ProjectTechIcons key={Math.random()} icon={icon} />
                  ))}
                </div>
                <div className="col-sm-12 col-lg-4 my-3 text-center">
                  <ProjectButton
                    website={buttons[1].href}
                    title={buttons[1].title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row project-card left border shadow-lg">
          <div className="col-sm-12 col-md-8 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>QuickDrop</h1>
              <p className="lead">
                Sending or receiving packages can be a hassle in today's
                fast-paced world. With just a few taps on your smartphone, you
                can send or receive packages on time and with complete
                transparency. Originally, this was a two-week student project
                made by Wai Ian Vong, Micaela Frigola, Mayavi Steiner and
                Corinna Grundmeier. I have added additional pages to complete
                the driver's journey, edited validations for orders, and add-ons
                to improve the user's journey.
              </p>
              <h5>Tech-Stack</h5>
              <div className="row">
                <div className="col-sm-12 col-lg-8 mb-3">
                  {thirdIcons.map((icon) => (
                    <ProjectTechIcons key={Math.random()} icon={icon} />
                  ))}
                </div>
                <div className="col-sm-12 col-lg-4 my-3 text-center">
                  <ProjectButton
                    website={buttons[2].href}
                    title={buttons[2].title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-4 text-center py-2">
            <ProjectCardImage href={images[1].href} title={images[1].title} />
          </div>
        </div>
      </div>
    </div>
  );
};
