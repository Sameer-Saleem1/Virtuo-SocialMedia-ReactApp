import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card card-container ">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <button
            onClick={() => deletePost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border-0"
          >
            <MdDelete />
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-dark bg-warning mx-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary mt-2">
          {post.reactions} people have reacted to this post
        </div>
      </div>
    </div>
  );
};

export default Post;
