import {
  FaLinkedin,
  FaSquareXTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import Img from "../../common/profile/Img";
import "./Profile.scss";

export default function Profile() {
  return (
    <aside className="profile">
      <Img />

      <div>
        <h1>Yul</h1>
        <span>frontEnd</span>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/yul-frontend-dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            {/* twitter 계정이 없어서 naver로 대체 */}
            <a href="https://www.naver.com/" target="_blank" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yul-dev-k"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=yul.dev.k@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
