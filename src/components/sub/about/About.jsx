import { TiLocation } from "react-icons/ti";
import { PiTerminalWindowFill } from "react-icons/pi";
import { RiJavascriptFill, RiReactjsFill, RiHtml5Fill } from "react-icons/ri";
import { FaPython, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiGraphql, SiMongodb } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import Layout from "../../common/layout/Layout";
import Img from "../../common/profile/Img";
import styles from "./About.module.scss";

export default function About() {
  const techStack = [
    {
      name: "JavaScript",
      icon: <RiJavascriptFill style={{ color: "F0DB4F" }} />,
    },
    {
      name: "React",
      icon: <RiReactjsFill style={{ color: "61DBFB" }} />,
    },
    {
      name: "HTML",
      icon: <RiHtml5Fill style={{ color: "e34c26" }} />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt style={{ color: "2965f1" }} />,
    },
    {
      name: "Python",
      icon: <FaPython style={{ color: "4B8BBE" }} />,
    },
    {
      name: "MySQL",
      icon: <SiMysql style={{ color: "00758F" }} />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql style={{ color: "e535ab" }} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb style={{ color: "4DB33D" }} />,
    },
  ];
  const qualificationList = [
    {
      name: "Mesurecare",
      logo: "img/Measurecare-logo.png",
      position: "Frontend Devleoper Intern",
      date: "May 2023 - Present",
    },
    {
      name: "OSSCA (Open Souurce Contribution Academy)",
      logo: "img/OSSCA-logo.png",
      position: "JavaScript Mentee",
      date: "October 2023 - Present",
    },
  ];
  return (
    <Layout>
      <main>
        <section className={styles.profile}>
          <Img className={styles.profileImg} />
          <div className={styles.profileDetail}>
            <h1>Jiyul Kim</h1>
            <p>Frontend Developer | 3D Visual Artist</p>
            <div>
              <TiLocation />
              <span>Yongin-si, Gyeonggi-do, Republic of Korea</span>
              <PiTerminalWindowFill />
              <span>Learning FE . . .</span>
            </div>
            <div>
              <AiFillPhone />
              <span>(+82)10-9104-7378</span>
            </div>
          </div>
        </section>
        <div className={styles.bar}></div>
        <section className={styles.about}>
          <h2>About</h2>
          <h3>
            안녕하세요, <span style={{ color: "#4E87DD" }}>율</span>입니다!
          </h3>
          <p>
            많은 이의 삶을 더욱 편안하게 하는 것에 관심이 많은 프론트엔드 개발자
            김지율입니다. 문제를 파악하고, 해결하는 것을 즐깁니다.
          </p>
        </section>
        <div className={styles.bar}></div>
        <section className={styles.techStack}>
          <h2>TechStack</h2>
          <div className={styles.stackList}>
            {techStack.map((data) => (
              <div key={data.name} className={styles.stack}>
                {data.icon}
                <span>{data.name}</span>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.bar}></div>
        <section className={styles.qualificationList}>
          <h2>Qualification</h2>
          {qualificationList.map((data, idx) => (
            <div className={styles.qualification} key={idx}>
              <img src={data.logo} alt={`${data.logo} logo`} />
              <div className={styles.qualificationDetail}>
                <h3>{data.position}</h3>
                <div>
                  <span>{data.name}</span>
                  <span>·</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
