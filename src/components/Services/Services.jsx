import servicesBg from "../../assets/servicesBg.jpg";
import pencil from "../../assets/graphic-designer.png";
import pc from "../../assets/coding.png";
import phone from "../../assets/learning-app.png";
import "./services.css";

export function Services() {
  return (
    <div className="services-mc">
      <img src={servicesBg} className="services-bg" />
      <div className="bg-vignette"></div>
      <div className="services-title">
        <h1 className="blockTextThick font1Bold blueFont">Services</h1>
      </div>
      <div className="services-icons-container">
        <div className="icon-text-container">
          <img src={pencil} className="services-icon" />
          <h1 className="blockTect font1Bold">Design and Concept</h1>
        </div>
        <div className="icon-text-container">
          <img src={pc} className="services-icon" />
          <h1 className="blockTect font1Bold">Web Development</h1>
        </div>
        <div className="icon-text-container">
          <img src={phone} className="services-icon" />
          <h1 className="blockTect font1Bold">Responsive for all devices</h1>
        </div>
      </div>
    </div>
  );
}
