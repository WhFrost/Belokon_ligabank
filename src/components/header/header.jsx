import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import SiteNav from '../site-nav/site-nav';
import UserNav from '../user-nav/user-nav';

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header__wrapper']}>
        <Logo />
        <SiteNav />
        <UserNav />
      </div>
    </header>
  );
}

export default Header;
