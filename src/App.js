import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Review from "./components/sub/review/Review";
import About from "./components/sub/about/About";
import "./styles/Global.scss";
import Visual from "./components/main/visual/Visual";
import Posts from "./components/sub/posts/Posts";
import Detail from "./components/sub/posts/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Visual />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
