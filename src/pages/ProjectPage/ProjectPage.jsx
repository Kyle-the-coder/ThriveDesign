import { Title } from "../../components/Title/Title";
import { Contact } from "../../components/Contact/Contact";
import contactBg from "../../assets/AbstractFierceUP.jpg";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import "./projectpage.css";
function ProjectPage() {
  return (
    <div className="project-page-mc">
      <Title title="Projects" />
      <ProjectDisplay />
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
