import Layout from "../../common/layout/Layout";
import "./Posts.scss";
import postList from "../../../posts.json";
import ReactMarkdown from "react-markdown";

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <span>{post.date}</span>
      <div>{post.tags}</div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
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
