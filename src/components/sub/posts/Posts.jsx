import Layout from "../../common/layout/Layout";
import "./Posts.scss";
import postList from "../../../posts.json";
import { Link } from "react-router-dom";

function Post({ post }) {
  console.log(post);
  return (
    <Link to={`/detail/${post.id}`}>
      <article className="pre-con">
        <div className="left">
          <h1>{post.title}</h1>
          <span>{post.date}</span>
        </div>
        <div className="right">
          <div className="summery">{post.summery}</div>
          <span className="tags">{post.tags}</span>
          <div className="bar"></div>
        </div>
      </article>
    </Link>
  );
}

export default function Posts() {
  return (
    <Layout title={"Posts"}>
      {postList.map((post) => (
        <>
          <Post post={post} key={post.id} />
        </>
      ))}
    </Layout>
  );
}
