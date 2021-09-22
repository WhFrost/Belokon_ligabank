import React from 'react';
import Logo from '../logo/logo';
import SiteNav from '../site-nav/site-nav';
import UserNav from '../user-nav/user-nav';

function Header() {
  return (
    <header>
      <Logo />
      <SiteNav />
      <UserNav />
    </header>
  );
}

export default Header;
