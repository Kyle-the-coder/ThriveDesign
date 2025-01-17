import { Hero } from "../../components/Hero/Hero";
import { Intro } from "../../components/Intro/Intro";
import { Services } from "../../components/Services/Services";
import "./landing.css";
function Landing() {
  return (
    <div className="landing-mc">
      <Hero />
      <Intro />
      <Services />
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
