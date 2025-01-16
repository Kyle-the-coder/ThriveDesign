import { ButtonRed } from "../Button/ButtonRed";
import { ButtonBlue } from "../Button/ButtonBlue";
import dive from "../../assets/deepDive.jpg";
import "./intro.css";
import { useState } from "react";
export function Intro() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div className="intro-mc">
      <div className="intro-text">
        {windowWidth <= 600 ? (
          <>
            <h1 className="blockTextThick font1Bold intro-title">
              Deep Dive into a <span className="blueFont">new </span>
              digital adventure
            </h1>
          </>
        ) : (
          <>
            {" "}
            <h1 className="blockTextThick font1Bold intro-title">
              Deep Dive into a <span className="blueFont">new</span>
            </h1>
            <h1 className="blockTextThick font1Bold intro-title">
              digital adventure
            </h1>
          </>
        )}
      </div>
      <div className="intro-photo-blerb-container">
        <img src={dive} className="intro-img" />
        <div className="intro-blerb-button-container">
          <p className="blockText font1Bold intro-blerb">
            At Thrive Design, we are dedicated to delivering the online digital
            experience your business has always envisioned. Our approach begins
            with understanding your unique goals and identifying the digital
            tools and features that can help propel your business forward. We
            believe your website should be more than just a presence—it should
            be a dynamic asset that supports your growth. As your business
            thrives in the real world, we ensure your website evolves alongside
            it.
          </p>
          <ButtonRed word="Get Started" />
        </div>
      </div>
    </div>
  );
}
