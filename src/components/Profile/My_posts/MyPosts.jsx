import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let posts = props.data.map(post => <Post message={post.post} likesCount={post.likes}/>);
     
  let newPostElement = React.createRef();

  let addPost = () => {
    
    props.addPost();
  }

  let onPostChange = () => {

    let text = newPostElement.current.value;

    props.uppdatePostText(text);
  }

    return (
      <div className={s.MyPosts}>
          <h2>My posts:</h2>
          <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} 
                              ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
          </div>
          <div>
            {posts}            
          </div>
      </div>
    );
}

export default MyPosts;