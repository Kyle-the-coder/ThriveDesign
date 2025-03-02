import "./projectsection.css";
import APC from "../../assets/APCPortrait.png";
import RJP from "../../assets/RJPPortrait.png";
import Poke from "../../assets/PokePortrait.png";
import RMS from "../../assets/RMSPortrait.png";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";

export function ProjectSection() {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div className="projects-mc">
      <div className="projects-title">
        <h1 className="whiteFont font1Bold">Projects</h1>
      </div>

      <div className="projects-display-container">
        <div
          className={`projects-container ${hoverIndex === 1 ? "active" : ""}`}
          onMouseEnter={() => setHoverIndex(1)}
        >
          <div className="dark-bg"></div>
          <img src={APC} className="projects-img" />
          <div className="project-info">
            <h1 className=" font1Bold blockText blueFont">Restaurants</h1>

            <Button
              word="See Details"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
              color="button-blue"
              id="restaurant"
            />
          </div>
        </div>

        <div
          className={`projects-container ${hoverIndex === 2 ? "active" : ""}`}
          onMouseEnter={() => setHoverIndex(2)}
        >
          <div className="dark-bg"></div>
          <img src={RJP} className="projects-img" />
          <div className="project-info">
            <h1 className="orangeFont blockText font1Bold">Retail</h1>

            <Button
              word="See Details"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
              color="button-red"
              id="retail"
            />
          </div>
        </div>

        <div
          className={`projects-container ${hoverIndex === 3 ? "active" : ""}`}
          onMouseEnter={() => setHoverIndex(3)}
        >
          <div className="dark-bg"></div>
          <img src={Poke} className="projects-img" />
          <div className="project-info">
            <h1 className="blueFont blockText font1Bold">Games</h1>

            <Button
              word="See Details"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
              color="button-blue"
              id="games"
            />
          </div>
        </div>

        <div
          className={`projects-container ${hoverIndex === 4 ? "active" : ""}`}
          onMouseEnter={() => setHoverIndex(4)}
        >
          <div className="dark-bg"></div>
          <img src={RMS} className="projects-img" />
          <div className="project-info">
            <h1 className="orangeFont blockText font1Bold">Services</h1>

            <Button
              word="See Details"
              fontSize="clamp(1rem, 2.5vw, 2.5rem)"
              color="button-red"
              id="service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
