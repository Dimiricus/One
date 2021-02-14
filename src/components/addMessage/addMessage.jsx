import React from 'react';
import s from './addMessage.module.css';

const addMessage = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
      
      let text = newPostElement.current.value;

      alert(text);
    }
    

    return (
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    );
}

export default addMessage;