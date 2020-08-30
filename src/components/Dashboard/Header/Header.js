import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

import styles from './Header.module.scss';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogoContainer}>
        <img className={styles.headerLogo} src={logo} alt="Logo" />
      </div>
      <div className={styles.navContainer}>
        <Link to="/dashboard/1">Home</Link>
        <h1 className="title">Simple Web App</h1>
        <Link onClick={handleLogout} to="/">
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Header;
