import "./Serises.scss";
import postList from "../../../posts.json";

export default function Serises() {
  const distinctSerises = postList
    .map((post) => post.serises)
    .filter((el, indx, arr) => el && arr.indexOf(el) === indx)
    .filter((el) => !(el === "null"));

  return (
    <ul className="serises">
      {distinctSerises.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}
