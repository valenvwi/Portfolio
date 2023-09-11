import { Banner } from "./Banner";
import { AboutMeSection } from "./AboutMe/AboutMeSection";
import { ProjectsSection } from "./Projects/ProjectsSection";
import { Footer } from "./Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};
