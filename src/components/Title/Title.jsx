import bg from "../../assets/AbstractPlay.jpg";
import "./title.css";
export function Title({ title }) {
  return (
    <div className="title-mc">
      <img src={bg} className="title-img" />
      <h1 className="blockText font1Bold">{title}</h1>
    </div>
  );
}
