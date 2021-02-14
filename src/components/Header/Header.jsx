import React from 'react';
import Clock from './Clock/Clock';
import s from './Header.module.css';
import Torsion from './Torsion/Torsion.jsx';

const Header = () => {
    return (
      <header className={s.header}>
        <img src="./img/logo.png" />
        <Torsion />
        <Clock />
      </header>
    );
}

export default Header;