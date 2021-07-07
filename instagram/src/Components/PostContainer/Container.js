import React from "react";
import Post from "./Post.js";
import "./Posts.css";

const Container = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default Container;
