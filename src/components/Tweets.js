import React, { useState } from "react";
import CreateTweet from "./CreateTweet";
import DefaultPost from "./DefaultPost";
import Post from './Post';
const Tweets = () => {
  const [posts, setPosts] = useState(['sample post']);
  const [content, setContent] = useState('');

  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet content={content} setContent={setContent} posts={posts} setPosts={setPosts} />
      {posts.map(post => { // use map
        return (
          <Post content={post} />
        )
      })
      }
      <DefaultPost />
      <DefaultPost />
    </div>
  );
};

export default Tweets;
