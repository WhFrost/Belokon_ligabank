import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <div className={styles['logo']}>
      <a href='/' className={styles['logo__link']}>
        <h1 className={styles['logo__title']}>
          <span className={styles['logo__title--uppercase']}>Лига</span> Банк
        </h1>
        <img src={logo} width='28' height='25' alt='Лига Банк' />
      </a>
    </div>
  );
}

export default Logo;
