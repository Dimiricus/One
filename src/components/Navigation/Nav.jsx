import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}><a href="#">Lorem 1</a></div>
        <div className={s.item}><a href="#">Lorem 2</a></div>
        <div className={s.item}><a href="#">Lorem 3</a></div>
        <div className={s.item}><a href="#">Lorem 4</a></div>
        <div className={s.item}><a href="#">Lorem 5</a></div>
      </nav>
    );
}

export default Nav;