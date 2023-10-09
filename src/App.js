import { Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Posts from "./components/sub/posts/Posts";
import Review from "./components/sub/review/Review";
import About from "./components/sub/about/About";
import "./styles/Global.scss";
import Visual from "./components/main/visual/Visual";

function App() {
  return (
    <>
      <Header />

      <Route exact path="/" component={Visual} />
      <Route path="/posts" component={Posts} />
      <Route path="/review" component={Review} />
      <Route path="/about" component={About} />

      <Footer />
    </>
  );
}

export default App;
