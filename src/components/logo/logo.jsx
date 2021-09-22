import React from 'react';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <a href="/">
      <img src={logo} width="28" height="25" alt="Лига Банк" />
    </a>
  );
}

export default Logo;
