import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { BiSolidMoon } from "react-icons/bi";

export default function Header() {
  const [DarkModeToogle, setDarkModeToogle] = useState(false);

  return (
    <header>
      <h1>
        <Link to="/">🌊 YulDev</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="review">Review</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <button
          onClick={() => {
            setDarkModeToogle(!DarkModeToogle);
          }}
        >
          {DarkModeToogle ? (
            <BiSolidMoon fill="#ffbb00" size={"1.5em"} />
          ) : (
            <MdSunny fill="#ffbb00" size={"1.5em"} />
          )}
        </button>

        <input placeholder="Search Keyword..." />
      </ul>
    </header>
  );
}
