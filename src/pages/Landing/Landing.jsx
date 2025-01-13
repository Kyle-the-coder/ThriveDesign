import landingBg from "../../assets/AbstractPlay.jpg";
import "./landing.css";
function Landing() {
  return (
    <div className="landing-mc">
      <img src={landingBg} className="landing-bg" />
    </div>
  );
}

export const landingRoute = {
  element: Landing(),
};
