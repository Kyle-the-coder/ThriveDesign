import logo from "../../assets/THRIVELogo.png";
import "./nav.css";
export function Nav() {
  const links = [
    { linkName: "About Me", link: "/aboutme" },
    { linkName: "Projects", link: "/projects" },
    { linkName: "Services", link: "/services" },
    { linkName: "Contact", link: "/contact" },
  ];
  return (
    <div className="nav-mc">
      <img src={logo} className="logo-img" />
      <div className="nav-links-container">
        {links.map((link, index) => {
          return (
            <h3 key={link.linkName} className="font1 blockText link">
              {link.linkName}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
