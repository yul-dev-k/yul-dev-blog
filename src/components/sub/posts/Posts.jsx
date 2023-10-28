import Layout from "../../common/layout/Layout";
import PostList from "../../common/postList/PostList";
import "./Posts.scss";

export default function Posts() {
  return (
    <Layout title={"posts"}>
      <PostList />
    </Layout>
  );
}
