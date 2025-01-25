import { Hero } from "../../components/Hero/Hero";
import { Intro } from "../../components/Intro/Intro";
import { Services } from "../../components/Services/Services";
import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contact/Contact";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import abstractBg from "../../assets/abstractWhole.png";
import "./landing.css";

function Landing() {
  return (
    <div className="landing-mc">
      <Hero />
      <Intro />
      <Services />

      <div className="landing-abstract-container">
        <img src={abstractBg} className="abstractBg" />
        <ProjectSection />
        <Banner />
        <Contact />
      </div>
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
