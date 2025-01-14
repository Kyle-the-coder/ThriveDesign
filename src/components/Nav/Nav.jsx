import { useEffect, useState } from "react";
import logo from "../../assets/THRIVELogo.png";
import LottieAnimation from "../LottieAnimation";
import gsap from "gsap";
import "./nav.css";
export function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Phone States
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);

  const links = [
    { linkName: "About Me", link: "/aboutme" },
    { linkName: "Projects", link: "/projects" },
    { linkName: "Services", link: "/services" },
    { linkName: "Contact", link: "/contact" },
  ];

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  return (
    <div className="main-container">
      <div className={`nav-mc ${isHamburgerActive ? "active" : ""}`}>
        <img
          src={logo}
          className="logo-img"
          style={{
            ...(isHamburgerActive && { marginLeft: "10px" }),
          }}
        />
        <div className="nav-links-container">
          {windowWidth <= 600 ? (
            <>
              <div
                className="nav-hamburger-container"
                style={{
                  ...(isHamburgerActive && { marginRight: "10px" }),
                }}
                onClick={() => handleActivateHamburger()}
              >
                <LottieAnimation
                  isAnimationActive={isAnimationActive}
                  isHamburgerActive={isHamburgerActive}
                />
              </div>
            </>
          ) : (
            links.map((link) => (
              <h3 key={link.linkName} className="font1Bold blockText link">
                {link.linkName}
              </h3>
            ))
          )}
        </div>
      </div>

      {/* Move the dropdown here */}
      {isHamburgerActive && (
        <div className="navbar-phone-dropdown-container">
          <div className="dropdown-links-container">
            {links.map((link) => (
              <div key={link.linkName}>
                <h3
                  className=" blockText dropdown-link-name font1"
                  onClick={() => {
                    navigate(link.link);
                    handleActivateHamburger();
                  }}
                >
                  {link.linkName}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
