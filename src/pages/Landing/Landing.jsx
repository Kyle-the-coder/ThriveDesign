import { Hero } from "../../components/Hero/Hero";
import { Intro } from "../../components/Intro/Intro";
import "./landing.css";
function Landing() {
  return (
    <div className="landing-mc">
      <Hero />
      <Intro />
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
