import { Title } from "../../components/Title/Title";
import { Contact } from "../../components/Contact/Contact";
import contactBg from "../../assets/AbstractFierceUP.jpg";
import appleVid from "../../assets/AppleVid.mp4";
import serviceVid from "../../assets/ServiceVid.mp4";
import jewelVid from "../../assets/JewelVid.mp4";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import "./projectpage.css";
function ProjectPage() {
  return (
    <div className="project-page-mc">
      <Title title="Projects" />

      <ProjectDisplay
        title="Restaurant"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={appleVid}
      />
      <ProjectDisplay
        title="Service"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={serviceVid}
      />
      <ProjectDisplay
        title="Retail"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={jewelVid}
      />

      <div className="project-contact-container">
        <img src={contactBg} className="project-contact-bg" />
        <Contact />
      </div>
    </div>
  );
}

export const projectPageRoute = {
  element: ProjectPage(),
};
