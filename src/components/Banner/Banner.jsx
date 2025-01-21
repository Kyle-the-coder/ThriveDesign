import { useEffect } from "react";
import bannerImg from "../../assets/team-building.png";
import gsap from "gsap";
import "./banner.css";

export function Banner() {
  useEffect(() => {
    const banner = document.querySelector(".banner-content");
    const bannerItems = banner.children;
    const container = document.querySelector(".banner-mc");

    // Calculate the total width of the banner items
    const totalWidth = Array.from(bannerItems).reduce(
      (acc, item) => acc + item.offsetWidth,
      0
    );

    const containerWidth = container.offsetWidth;
    // Clone the banner content to ensure seamless looping
    const clone = banner.innerHTML;
    banner.innerHTML += clone;

    // Set initial animation state off-screen to the right
    gsap
      .timeline({ repeat: -1 }) // Repeat infinitely
      .fromTo(
        banner,
        { x: totalWidth }, // Start off-screen to the right
        {
          x: -totalWidth, // Move off-screen to the left
          duration: 50, // Adjust duration for speed
          ease: "linear",
        }
      );
  }, []);
  return (
    <div className="banner-mc">
      <div className="banner-line"></div>
      <div className="banner-content">
        <h1 className="blockTextThick font1Bold">Build Together</h1>
        <img src={bannerImg} className="banner-img" />
        <h1 className="blockTextThick font1Bold">Thrive Together</h1>
        <img src={bannerImg} className="banner-img" />
      </div>

      <div className="banner-line"></div>
    </div>
  );
}
