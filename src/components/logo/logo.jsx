import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <a href="/">
      <h1 className={styles['logo__title']}><span className={styles['logo__title--uppercase']}>Лига</span> Банк</h1>
      <img src={logo} width="28" height="25" alt="Лига Банк" />
    </a>
  );
}

export default Logo;
