import "./buttonred.css";
export function ButtonRed({ word, fontSize }) {
  return (
    <button className="button-main font1Bold " style={{ fontSize: fontSize }}>
      {word}
    </button>
  );
}
