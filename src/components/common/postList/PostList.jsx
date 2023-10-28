import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";

const path = process.env.PUBLIC_URL;

export default function PostList() {
  const [Posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch(`${path}/posts.json`);
    const json = await data.json();
    setPosts([...json].reverse());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {Posts.map((post, idx) => {
        return (
          <article className={styles.preCon} key={idx}>
            <Link className={styles.left} to={`/posts/${post.id}`}>
              <div>
                <h1>{post.title}</h1>
                <span>{post.date}</span>
              </div>
            </Link>
            <div className={styles.right}>
              <Link className={styles.summary} to={`/posts/${post.id}`}>
                <div>{post.summary}</div>
              </Link>
              <div className={styles.tags}>
                {post.tags.split(",").map((tag, idx) => (
                  <Link to={`/tags/${tag}`} key={idx}>
                    <span className={styles.tag}>{tag}</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
