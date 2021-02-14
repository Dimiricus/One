import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import Friends from './../Friends/Friends.jsx';

const Nav = () => {
    return (
      <nav className={s.nav}>
        <div className={`${s.item}`}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><a href="#">Lorem 3</a></div>
        <div className={s.item}><a href="#">Lorem 4</a></div>
        <div className={s.item}><a href="#">Lorem 5</a></div>
        <Friends />
      </nav>
    );
}

export default Nav;