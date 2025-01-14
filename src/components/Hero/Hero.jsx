import heroBg from "../../assets/AbstractPlay.jpg";
import "./hero.css";
export function Hero() {
  return (
    <div className="hero-mc">
      <img src={heroBg} className="hero-bg" />

      <div className="hero-text">
        <h1 className="blockTextThick font1Bold">
          Websites <span className="orangeFont">built</span> to{" "}
        </h1>
        <h1 className="blockTextThick font1Bold">
          grow with <span className="blueFont">you</span>
        </h1>
      </div>

      <div className="hero-blerb">
        <p className="font1Bold blockText">
          Boise-based web developer passionate about growing small businesses
          through digital solutions that inspire growth, streamline operations,
          and create lasting customer connections.
        </p>
      </div>
    </div>
  );
}
