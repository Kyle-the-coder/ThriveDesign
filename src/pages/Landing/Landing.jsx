import { Hero } from "../../components/Hero/Hero";
import { Intro } from "../../components/Intro/Intro";
import { Services } from "../../components/Services/Services";
import { Projects } from "../../components/Projects/Projects";
import abstractBg from "../../assets/abstractWhole.png";
import "./landing.css";
import { Banner } from "../../components/Banner/Banner";
function Landing() {
  return (
    <div className="landing-mc">
      <Hero />
      <Intro />
      <Services />

      <div className="landing-abstract-container">
        <img src={abstractBg} className="abstractBg" />
        <Projects />
        <Banner />
      </div>
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
