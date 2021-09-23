import React from 'react';
import styles from './user-nav.module.scss';

function UserNav() {
  return (
    <ul className={styles['user-nav__list']}>
      <li className={styles['user-nav__item']}>
        <a href='/' className={styles['user-nav__link']}>
          Войти в Интернет-банк
        </a>
      </li>
    </ul>
  );
}

export default UserNav;
