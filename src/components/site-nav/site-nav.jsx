import React from 'react';
import styles from './site-nav.module.scss';

function SiteNav() {
  return (
    <ul className={styles['site-nav__list']}>
      <li className={styles['site-nav__item']}>
        <a href='/' className={styles['site-nav__link']}>
          Услуги
        </a>
      </li>
      <li className={styles['site-nav__item']}>
        <a href='/' className={styles['site-nav__link']}>
          Рассчитать кредит
        </a>
      </li>
      <li className={styles['site-nav__item']}>
        <a href='/' className={`${styles['site-nav__link']} ${styles['site-nav__link--active']}`}>
          Конвертер валют
        </a>
      </li>
      <li className={styles['site-nav__item']}>
        <a href='/' className={styles['site-nav__link']}>
          Контакты
        </a>
      </li>
      <li className={styles['site-nav__item']}>
        <a href='/' className={styles['site-nav__link']}>
          Задать вопрос
        </a>
      </li>
    </ul>
  );
}

export default SiteNav;
