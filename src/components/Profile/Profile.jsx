import React from 'react';
import MyPosts from './My_posts/MyPosts.jsx';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
        <div>
          <img src="./img/forest-bathing.jpg" />
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;