import { Title } from "../../components/Title/Title";
import { Contact } from "../../components/Contact/Contact";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import contactBg from "../../assets/AbstractFierceUP.jpg";
import appleVid from "../../assets/AppleVid.mp4";
import serviceVid from "../../assets/ServiceVid.mp4";
import jewelVid from "../../assets/JewelVid.mp4";
import pokeVid from "../../assets/pokeVid.mp4";
import "./projectpage.css";
function ProjectPage() {
  return (
    <div className="project-page-mc">
      <Title title="Projects" />

      <ProjectDisplay
        title="Service"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={serviceVid}
        web="https://renewedmobilitysolutions.web.app/"
      />
      <ProjectDisplay
        title="Retail"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={jewelVid}
        web="https://jewelrystore-c8dfc.web.app/"
      />
      <ProjectDisplay
        title="Game"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={pokeVid}
        web="https://pokemonstay-5cade.web.app/"
      />
      <ProjectDisplay
        title="Restaurant"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Nisi ut aliquip ex ea commodo consequat."
        vid={appleVid}
        web="https://restuarantsite.web.app/"
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
