import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './../Dialogs.module.css';


const DialogItem = (props) => {
    
    let path = "/dialogs/" + props.id;

    let name = props.name;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{name}</NavLink> 
        </div>
    );
}


export default DialogItem;