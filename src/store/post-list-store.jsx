import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, content, reactions, title, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        body: content,
        reactions: reactions,
        title: title,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Paris",
    body: "Hi Friends , I am going to Paris this weekend for my vacations. See you soon",
    reactions: 10,
    userId: "Sameer Saleem",
    tags: ["vacations", "paris", "France", "eifel tower"],
  },
  {
    id: "2",
    title: "Going To Hunza",
    body: "Hi Friends , I am going to Hunza this weekend for my vacations. See you soon",
    reactions: 15,
    userId: "John Doe",
    tags: ["vacations", "Hunza", "Skardu"],
  },
];

export default PostListProvider;
