import { useNavigate } from "react-router-dom";
import "./button.css";
export function Button({ word, fontSize, color, nav, web }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(nav)}
      className={` font1Bold ${color}`}
      style={{ fontSize: fontSize }}
    >
      {web ? (
        <a href={web} target="_blank" className="a-button">
          {word}
        </a>
      ) : (
        word
      )}
    </button>
  );
}
