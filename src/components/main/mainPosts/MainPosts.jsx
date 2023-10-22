import { Link } from "react-router-dom";
import styles from "./MainPosts.module.scss";
import postList from "../../../posts.json";

function PostList({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <article className={styles.preCon}>
        <div className={styles.left}>
          <h1>{post.title}</h1>
          <span>{post.date}</span>
        </div>
        <div className={styles.right}>
          <div className={styles.summary}>{post.summary}</div>
          <span className={styles.tags}>{post.tags}</span>
          <div className={styles.bar}></div>
        </div>
      </article>
    </Link>
  );
}

export default function MainPosts() {
  return (
    <main className={styles.mainPost}>
      {[...postList].reverse().map((post) => (
        <PostList post={post} key={post.id} />
      ))}
    </main>
  );
}
