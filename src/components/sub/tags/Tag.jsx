import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../common/layout/Layout";
import postList from "../../../posts.json";

export default function Tag() {
  const { tag } = useParams();

  return (
    <Layout>
      {postList.map((post, idx) =>
        post.tags === tag ? (
          <React.Fragment key={idx}>
            <Link to={`/posts/${post.id}`}>
              <article className="pre-con">
                <div className="left">
                  <h1>{post.title}</h1>
                  <span>{post.date}</span>
                </div>
                <div className="right">
                  <div className="summary">{post.summary}</div>
                  <span className="tags">{post.tags}</span>
                  <div className="bar"></div>
                </div>
              </article>
            </Link>
          </React.Fragment>
        ) : null
      )}
    </Layout>
  );
}
