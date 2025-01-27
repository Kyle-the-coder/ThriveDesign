import logo from "../../assets/THRIVELogo.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import "./contact.css";
export function Contact() {
  return (
    <div className="contact-mc" id="contact">
      <div className="contact-info">
        <h1 className=" font1Bold blockText">Contact:</h1>
        <h3 className="blockText font1Bold">Email: thrivedesign@gmail.com</h3>
        <div className="contact-socials">
          <h3 className="font1Bold blockText">Socials:</h3>
          <img src={fb} className="contact-icon" />
          <img src={insta} className="contact-icon" />
        </div>
      </div>
      <img src={logo} className="contact-img" />
    </div>
  );
}
