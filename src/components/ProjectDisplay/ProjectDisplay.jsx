import appleVid from "../../assets/AppleVid.mp4";
import { ButtonRed } from "../Button/ButtonRed";
import "./projectdisplay.css";
export function ProjectDisplay({ title, desc, vid }) {
  return (
    <div className="project-display-mc">
      <div className="display-container">
        <div className="display-title">
          <h1 className="blockText font1Bold">{title}</h1>
        </div>
        <div className="display-content">
          <div className="display-vid-container">
            <video controls src={vid} className="display-vid" />
          </div>
          <div className="display-info">
            <p className="font1Bold">{desc}</p>
            <ButtonRed
              word="See Website"
              fontSize="clamp(.8rem, 1vw, 1.8rem)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
