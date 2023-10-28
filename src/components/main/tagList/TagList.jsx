import { Link } from "react-router-dom";
import postList from "../../../posts.json";
import "./TagList.scss";

export default function TagList() {
  const distinctTags = postList
    .map((post) => post.tags)
    .filter((el, indx, arr) => arr.indexOf(el) === indx);

  return (
    <nav className="tagList">
      <Link to={"/tags"}>
        <h2>🏷️ Tags</h2>
      </Link>
      <ul>
        {distinctTags.map((tag, idx) => (
          <Link to={`/tags/${tag}`} key={idx}>
            <li>{tag}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
