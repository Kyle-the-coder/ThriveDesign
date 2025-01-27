import { useNavigate } from "react-router-dom";
import "./button.css";
export function Button({ word, fontSize, color, nav, web }) {
  const navigate = useNavigate();

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
          onClick={() => navigate(nav)}
          className={` font1Bold ${color}`}
          style={{ fontSize: fontSize }}
        >
          {word}
        </button>
      )}
    </>
  );
}
