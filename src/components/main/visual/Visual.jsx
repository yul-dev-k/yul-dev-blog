import MainPosts from "../mainPosts/MainPosts";
import Profile from "../profile/Profile";
import Serises from "../serises/Serises";
import TagList from "../tagList/TagList";
import "./Visual.scss";

export default function Visual() {
  return (
    <figure>
      <Profile />
      <Serises />
      <MainPosts />
      <TagList />
    </figure>
  );
}
