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
        <h1 className="whiteFont font1Bold">Projects</h1>
      </div>

      <div className="projects-display-container">
        <div className="projects-container-1">
          <div className="dark-bg"></div>
          <img src={APC} className="projects-img" />
          <div className="project-info">
            <h1 className="whiteFont font1Bold">Restaurant</h1>
            <p className="whiteFont font1Bold">
              Small Restaurant website created to showcase a custom review
              system
            </p>
            <ButtonBlue
              word="See Website"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
            />
          </div>
        </div>

        <div className="projects-container-2">
          <div className="dark-bg"></div>
          <img src={RJP} className="projects-img" />
          <div className="project-info">
            <h1 className="whiteFont font1Bold">Retail</h1>
            <p className="whiteFont font1Bold">
              A Jewelry Store website made to showcase some advance features
              such as stock search and attractive UI techniques
            </p>
            <ButtonRed
              word="See Website"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
            />
          </div>
        </div>

        <div className="projects-container-3">
          <div className="dark-bg"></div>
          <img src={Poke} className="projects-img" />
          <div className="project-info">
            <h1 className="whiteFont font1Bold">Game</h1>
            <p className="whiteFont font1Bold">
              A Pokemon Capture Card game created to show some complex systems
              created in React{" "}
            </p>
            <ButtonBlue
              word="See Website"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
            />
          </div>
        </div>

        <div className="projects-container-4">
          <div className="dark-bg"></div>
          <img src={RMS} className="projects-img" />
          <div className="project-info">
            <h1 className="whiteFont font1Bold">Service</h1>
            <p className="whiteFont font1Bold">
              A Personal Trainer website created with a Calendar to create a
              schedule that clients can utilize to sign up for private sessions
            </p>
            <ButtonRed
              word="See Website"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
