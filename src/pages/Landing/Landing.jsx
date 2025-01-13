import { Hero } from "../../components/Hero/Hero";
import "./landing.css";
function Landing() {
  return (
    <div className="landing-mc">
      <Hero />
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
