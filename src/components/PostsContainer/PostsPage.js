//Complete the necessary code in this file
import React, { useState } from "react";
// import useState
import React from "react";

import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {PostsPage.map(p => )
        <Post key={p.imageURL} dataFromParent={p} />))}
      {/* map through data here to return a Post and pass data as props to Post */}
      
    </div>
  );
};

export default PostsPage;

