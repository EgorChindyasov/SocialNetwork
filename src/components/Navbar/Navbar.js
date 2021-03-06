import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <div className={classes.item}>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
        <div className={classes.item}>
          <a>Music</a>
        </div>
        <div className={classes.item}>
          <a>Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;