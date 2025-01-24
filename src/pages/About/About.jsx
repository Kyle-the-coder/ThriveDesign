import { Title } from "../../components/Title/Title";
import headshot from "../../assets/headshot.png";
import "./about.css";
function About() {
  return (
    <div className="about-mc">
      <Title title="About Me" />
      <div className="about-info-container">
        <div className="about-info">
          <p className="font1Bold ">
            My name is Kyle Mitchell and I am the founder and owner of Thrive
            Design, I have been working in the digital world for a few years now
            and I am excited to show what I can offer! I am aiming to help small
            businesses create an online platform that will help their business
            grow and THRIVE. I believe everyone deserves a chance in this world
            I want to help boost business owners forward to reach their goals.
          </p>
        </div>
        <div className="about-img-container">
          <img src={headshot} className="about-img" />
        </div>
      </div>
    </div>
  );
}

export const aboutRoute = {
  element: About(),
};
