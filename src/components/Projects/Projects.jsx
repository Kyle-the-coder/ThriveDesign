import "./projects.css";
import APC from "../../assets/APCPortrait.png";
import RJP from "../../assets/RJPPortrait.png";
import Poke from "../../assets/PokePortrait.png";
import RMS from "../../assets/RMSPortrait.png";
import { ButtonBlue } from "../Button/ButtonBlue";
import { ButtonRed } from "../Button/ButtonRed";

export function Projects() {
  return (
    <div className="projects-mc">
      <div className="projects-title">
        <h1 className="blockTextThick font1Bold">Projects</h1>
      </div>

      <div className="projects-display-container">
        <div className="projects-container">
          <div className="dark-bg"></div>
          <img src={APC} className="projects-img" />
          <h1 className="blockTextThick font1Bold">Restaurant</h1>
          <p className="blockText font1">
            Small Restaurant website created to showcase a custom review system
          </p>
          <ButtonBlue word="See Website" />
        </div>

        <div className="projects-container">
          <div className="dark-bg"></div>
          <img src={RJP} className="projects-img" />
          <h1 className="blockTextThick font1Bold">Restaurant</h1>
          <p className="blockText font1">
            Small Restaurant website created to showcase a custom review system
          </p>
          <ButtonRed word="See Website" />
        </div>

        <div className="projects-container">
          <div className="dark-bg"></div>
          <img src={Poke} className="projects-img" />
          <h1 className="blockTextThick font1Bold">Restaurant</h1>
          <p className="blockText font1">
            Small Restaurant website created to showcase a custom review system
          </p>
          <ButtonBlue word="See Website" />
        </div>

        <div className="projects-container">
          <div className="dark-bg"></div>
          <img src={RMS} className="projects-img" />
          <h1 className="blockTextThick font1Bold">Restaurant</h1>
          <p className="blockText font1">
            Small Restaurant website created to showcase a custom review system
          </p>
          <ButtonRed word="See Website" />
        </div>
      </div>
    </div>
  );
}
