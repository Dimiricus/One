import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = () => {

    return (
      <div className={s.MyPosts}>
          My posts:
          <div>
            <Post message="Hello, World!"/>
            <Post />
            <Post />
            <Post />
            <Post /> 
            <Post />
          </div>
      </div>
    );
}

export default MyPosts;