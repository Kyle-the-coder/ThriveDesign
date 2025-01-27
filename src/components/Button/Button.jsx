import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../SmoothScroll";
import "./button.css";
export function Button({ word, fontSize, color, nav, web, id }) {
  const navigate = useNavigate();

  function handleScrollTo(id) {
    if (location.pathname !== "/projects") {
      console.log(id);
      navigate("/projects");

      setTimeout(() => {
        scrollToSection(`#${id}`);
      }, 400);
    }
  }

  return (
    <>
      {web ? (
        <a href={web} target="_blank">
          {" "}
          <button
            className={` font1Bold ${color}`}
            style={{ fontSize: fontSize }}
          >
            {word}
          </button>
        </a>
      ) : (
        <button
          onClick={() => handleScrollTo(id)}
          className={` font1Bold ${color}`}
          style={{ fontSize: fontSize }}
        >
          {word}
        </button>
      )}
    </>
  );
}
