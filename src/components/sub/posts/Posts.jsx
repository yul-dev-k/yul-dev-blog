import Layout from "../../common/layout/Layout";
import "./Posts.scss";
import postList from "../../../posts.json";
import { Link, NavLink } from "react-router-dom";
import PostList from "../../common/postList/PostList";

export default function Posts() {
  return (
    <Layout title={"posts"}>
      <PostList />
    </Layout>
  );
}
