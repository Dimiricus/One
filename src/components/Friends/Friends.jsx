import React from 'react';
import s from './Friends.module.css';



const Friends = (props) => {

    return (
        <div className={s.friendsWrapper}>
            <h2>Friends:</h2>
            <div className={s.friends}>
                
                <div className={s.oneFriend}>
                    <img src="./img/burenka.jpg"/>
                    <p>Valera</p>
                </div>
                <div className={s.oneFriend}>
                    <img src="./img/burenka.jpg"/>
                    <p>Vlada</p>
                </div>
                <div className={s.oneFriend}>
                    <img src="./img/burenka.jpg"/>
                    <p>Sveta</p>
                </div>
            </div>
        </div>
    );
}

export default Friends;