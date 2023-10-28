import Profile from "../profile/Profile";
import Serises from "../serises/Serises";
import PostList from "../../common/postList/PostList";
import TagList from "../tagList/TagList";
import "./Visual.scss";

export default function Visual() {
  return (
    <figure>
      <Profile />
      <Serises />
      <PostList />
      <TagList />
    </figure>
  );
}
