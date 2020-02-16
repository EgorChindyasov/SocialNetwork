import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://s1.logaster.com/static/v3/img/products/logo.png" />
      {/* <div className={classes.exit}>
        <a>Exit</a>
      </div> */}
    </header>
  );
}

export default Header;