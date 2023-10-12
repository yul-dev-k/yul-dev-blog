import Layout from "../../common/layout/Layout";
import "./Posts.scss";
import postList from "../../../posts.json";

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <span>{post.date}</span>
      <div>{post.tags}</div>
      <div>{post.content}</div>
    </>
  );
}

export default function Posts() {
  return (
    <Layout title={"Posts"}>
      {postList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Layout>
  );
}
