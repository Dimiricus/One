import React from 'react';
import addMessage from '../../addMessage/addMessage.jsx';
import s from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={s.messageWrapper}>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    );
}



export default Message;