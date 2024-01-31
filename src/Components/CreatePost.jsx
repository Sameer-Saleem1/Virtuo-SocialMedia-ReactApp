import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const tagsElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();

  const handleonSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionElement.current.value;
    const title = titleElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
    titleElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, content, reactions, title, tags);
  };

  return (
    <form className="form-container" onSubmit={handleonSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your User id here..."
        />
      </div>{" "}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your Post title here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          ref={contentElement}
          type="text"
          rows={3}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your content here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Add the tags here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="How many people reacted to this post"
        />
      </div>
      <button type="submit" className="btn btn-warning">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
