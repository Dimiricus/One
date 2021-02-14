import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    

    let DialogItems = props.state.dialogs.map( obj => (<DialogItem name={obj.name} id={obj.id} />) );

    let MessagesItems = props.state.messages.map( obj => (<Message message={obj.message} />) );

    let newPostElement = React.createRef();

    let addMessage = () => {

      props.addMessage();      
    }

    let onTextareaChange = () => {

        let text = newPostElement.current.value;

        props.uppdateMessages(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}                
            </div>
            <div className={s.messages}>
               {MessagesItems}
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} 
                              value={props.state.newMessage}
                              onChange={onTextareaChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;