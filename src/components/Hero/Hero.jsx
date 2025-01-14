import { useEffect, useState } from "react";
import heroBg from "../../assets/AbstractPlay.jpg";
import heroBgPhone from "../../assets/AbstractPlayPhone.jpg";
import "./hero.css";
export function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-mc">
      {windowWidth <= 600 ? (
        <img src={heroBgPhone} className="hero-bg" />
      ) : (
        <img src={heroBg} className="hero-bg" />
      )}

      <div className="hero-text">
        {windowWidth <= 600 ? (
          <>
            {" "}
            <h1 className="blockTextThick font1Bold">Websites</h1>
            <h1 className="blockTextThick font1Bold orangeFont">built</h1>
            <h1 className="blockTextThick font1Bold">to grow</h1>
            <h1 className="blockTextThick font1Bold">
              with <span className="blueFont">you</span>
            </h1>
          </>
        ) : (
          <>
            {" "}
            <h1 className="blockTextThick font1Bold">
              Websites <span className="orangeFont">built</span> to{" "}
            </h1>
            <h1 className="blockTextThick font1Bold">
              grow with <span className="blueFont">you</span>
            </h1>
          </>
        )}
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
