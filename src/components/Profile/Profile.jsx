import React from 'react';
import MyPosts from './My_posts/MyPosts.jsx';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {

  

    return (
      <div className={s.content}>
        <ProfileInfo />
        <MyPosts data={props.profilePage.posts} 
                 addPost={props.addPost} 
                 newPostText={props.profilePage.newPostText}
                 uppdatePostText={props.uppdatePostText}/>
      </div>
    );
}

export default Profile;