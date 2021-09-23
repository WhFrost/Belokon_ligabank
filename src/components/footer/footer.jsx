import React from 'react';
import Logo from '../logo/logo';
import styles from './footer.module.scss';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';

function Footer() {
  return (
    <footer>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__address-wrapper']}>
          <Logo />
          <address className={styles['footer__address']}>
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050 Ⓒ Лига Банк, 2019
          </address>
        </div>
        <div className={styles['footer__nav']}>
          <ul className={styles['footer__nav-list']}>
            <li className={styles['footer__nav-item']}>
              <a href='/' className={styles['footer__nav-link']}>
                Услуги
              </a>
            </li>
            <li className={styles['footer__nav-item']}>
              <a href='/' className={styles['footer__nav-link']}>
                Рассчитать кредит
              </a>
            </li>
            <li className={styles['footer__nav-item']}>
              <a href='/' className={styles['footer__nav-link']}>
                Контакты
              </a>
            </li>
            <li className={styles['footer__nav-item']}>
              <a href='/' className={styles['footer__nav-link']}>
                Задать вопрос
              </a>
            </li>
          </ul>
        </div>
        <div className={styles['footer__phones-wrapper']}>
          <ul className={styles['footer__phones-list']}>
            <li className={styles['footer__phones-item']}>
              <a href='tel:*0904' className={styles['footer__phones-link']}>
                *0904
              </a>
            </li>
            <li className={styles['footer__phones-item']}>
              <a
                href='tel:88001112233'
                className={styles['footer__phones-link']}
              >
                8 800 111 22 33
              </a>
            </li>
          </ul>
        </div>
        <div className={styles['footer__socials']}>
          <ul className={styles['footer__socials-list']}>
            <li className={styles['footer__socials-item']}>
              <a
                href='facebook.com'
                className={styles['footer__socials-link']}
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a
                href='instagram.com'
                className={styles['footer__socials-link']}
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a
                href='twitter.com'
                className={styles['footer__socials-link']}
              >
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a
                href='youtube.com'
                className={styles['footer__socials-link']}
              >
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
