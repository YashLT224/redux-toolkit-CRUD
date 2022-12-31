import React from "react";
import { useCreatePostMutation } from "../services/post";
const POST = () => {
  const [createPost, responseInfo] = useCreatePostMutation();
  console.log(responseInfo)
  const newPost = {
    title: 'This is New New Title',
    body: 'This is New New Body',
    userId: 1,
  }
  return (
    <div>
    
      <div className="App">
        <h1>Redux Toolkit - RTK Query (Create Data)</h1>
        <button
          onClick={() => {
            createPost(newPost);
          }}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default POST;
