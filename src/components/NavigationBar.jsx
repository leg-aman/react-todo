import React from 'react';
import styles from './navBar.module.css'
import { Outlet, Link } from 'react-router-dom';
const NavigationBar = () => {

  return (
    <>
      <nav className={styles.nav}>
        <ul >
          <li > <Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  );

};


export default NavigationBar;