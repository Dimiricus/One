import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
     
            <div className={s.item}>
              <div className={s.postImageWrapper}>
                <img src="./img/burenka.jpg" />
              </div>
              <span>{props.message}</span>
            </div>
            
    );
}

export default Post;