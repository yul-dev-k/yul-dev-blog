import Layout from "../../common/layout/Layout";
import "./Posts.scss";
import postList from "../../../posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Post({ post }) {
  const markdown = post.content;

  return (
    <div className="md-content">
      <h1>{post.title}</h1>
      <span>{post.date}</span>
      <div>{post.tags}</div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={markdown}
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
    </div>
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
