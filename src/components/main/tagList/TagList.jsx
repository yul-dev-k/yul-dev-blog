import "./TagList.scss";
import postList from "../../../posts.json";

export default function TagList() {
  const distinctTags = postList
    .map((post) => post.tags)
    .filter((el, indx, arr) => arr.indexOf(el) === indx);

  return (
    <ul className="tagList">
      {distinctTags.map((tag, idx) => (
        <li key={idx}>{tag}</li>
      ))}
    </ul>
  );
}
