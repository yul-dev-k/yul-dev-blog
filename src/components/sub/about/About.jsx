import Layout from "../../common/layout/Layout";
import Img from "../../common/profile/Img";
import styles from "./About.module.scss";

export default function About() {
  return (
    <Layout title={"About"}>
      <Img className={styles.profile} />
    </Layout>
  );
}
