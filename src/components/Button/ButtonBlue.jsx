import "./buttonblue.css";
export function ButtonBlue({ word, fontSize }) {
  return (
    <button
      className="button-blue-main font1Bold"
      style={{ fontSize: fontSize }}
    >
      {word}
    </button>
  );
}
