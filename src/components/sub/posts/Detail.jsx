import Layout from "../../common/layout/Layout";
import postList from "../../../posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useParams } from "react-router-dom";
import "./Detail.scss";

function Detail() {
  const { id } = useParams();
  const currentId = postList
    .map((post) => post)
    .map((detail) => detail)
    .find((detail) => detail.id == id);

  const currentContent = currentId.content;

  return (
    <Layout>
      <ReactMarkdown
        className="md-content"
        remarkPlugins={[remarkGfm]}
        children={currentContent}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      ></ReactMarkdown>
    </Layout>
  );
}
export default Detail;
