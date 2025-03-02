import { useEffect, useState } from "react";
import logo from "../../assets/THRIVELogo.png";
import LottieAnimation from "../LottieAnimation";
import gsap from "gsap";
import { scrollToSection } from "../SmoothScroll";
import "./nav.css";
import { useNavigate } from "react-router-dom";
export function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Phone States
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);
  const navigate = useNavigate();

  const links = [
    { linkName: "About Me", link: "/about" },
    { linkName: "Projects", link: "/projects" },
    { linkName: "Services", link: "#services" },
    { linkName: "Contact", link: "#contact" },
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

  function handleScrollTo(link) {
    if (link.startsWith("#")) {
      if (link === "#contact") {
        scrollToSection(link);
      } else if (location.pathname !== "/") {
        navigate("/");
        if (isHamburgerActive) {
          handleActivateHamburger();
          setTimeout(() => {
            scrollToSection(link);
          }, 2000);
        } else if (!isHamburgerActive) {
          setTimeout(() => {
            scrollToSection(link);
          }, 500);
        }
      } else {
        scrollToSection(link);
      }
    } else {
      navigate(link);
    }
    if (isHamburgerActive) handleActivateHamburger();
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
          onClick={() => {
            navigate("/");
            isHamburgerActive && handleActivateHamburger();
          }}
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
              <h3
                key={link.linkName}
                className="font1Bold blockText link"
                onClick={() => handleScrollTo(link.link)}
              >
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
                  onClick={() => handleScrollTo(link.link)}
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
