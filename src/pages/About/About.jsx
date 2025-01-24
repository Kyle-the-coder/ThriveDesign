import { Title } from "../../components/Title/Title";
import { Contact } from "../../components/Contact/Contact";
import headshot from "../../assets/headshot.png";
import contactBg from "../../assets/AbstractFierceUP.jpg";
import "./about.css";
function About() {
  return (
    <div className="about-mc">
      <svg width="0" height="0">
        <defs>
          <clipPath id="rounded-triangle" clipPathUnits="objectBoundingBox">
            <path d="M1,0.23 C0.95,0.05, 0.1,0.95, 0.81,0.95 Z"></path>
          </clipPath>
        </defs>
      </svg>
      <Title title="About Me" />
      <div className="about-info-container">
        <div className="about-info">
          <p className="font1Bold ">
            My name is <span className="blueFont">Kyle Mitchell</span> and I am
            the founder and owner of{" "}
            <span className="orangeFont">Thrive Design</span>, I have been
            working in the digital world for a few years now and I am excited to
            show what I can offer! I am aiming to help small businesses create
            an online platform that will help their business grow and THRIVE. I
            believe everyone deserves a chance in this world I want to help
            boost business owners forward to reach their goals.
          </p>
        </div>
        <div className="about-img-container">
          <img src={headshot} className="about-img" />

          <div className="orange-tri"></div>
          <div className="blue-tri"></div>
          <div className="arrow"></div>
        </div>
      </div>
      <div className="about-contact-container">
        <img src={contactBg} className="about-contact-bg" />
        <Contact />
      </div>
    </div>
  );
}

export const aboutRoute = {
  element: About(),
};
