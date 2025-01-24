import { Title } from "../../components/Title/Title";
import "./projectpage.css";
function ProjectPage() {
  return (
    <div className="project-page-mc">
      <Title title="Projects" />
    </div>
  );
}

export const projectPageRoute = {
  element: ProjectPage(),
};
