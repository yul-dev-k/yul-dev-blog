import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { MdSunny } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">🌊 YulDev</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="Posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="Review">Review</NavLink>
        </li>
        <li>
          <NavLink to="About">About</NavLink>
        </li>
        <MdSunny />
        <input placeholder="Search Keyword..." />
      </ul>
    </header>
  );
}
