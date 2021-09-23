import React from 'react';
import styles from './promo.module.scss';
import blackCard1x from '../../assets/img/black-card@1x.png';
import blackCard2x from '../../assets/img/black-card@2x.png';
import whiteCard1x from '../../assets/img/white-card@1x.png';
import whiteCard2x from '../../assets/img/white-card@2x.png';

function Promo() {
  return (
    <section className={styles['promo']}>
      <div className={styles['promo__wrapper']}>
        <div className={styles['promo__wrapper--text']}>
          <h2 className={styles['promo__title']}>Лига Банк</h2>
          <p className={styles['promo__description']}>
            Кредиты на любой случай
          </p>
          <a href='/' className={styles['promo__link']}>
            Рассчитать кредит
          </a>
        </div>
        <div className={styles['promo__wrapper--img']}>
          <picture className={styles['promo__cards--black']}>
            <source srcSet={blackCard2x} />
            <img srcSet={blackCard1x} alt='Черная карта'/>
          </picture>
          <picture className={styles['promo__cards--white']}>
            <source srcSet={whiteCard2x} />
            <img srcSet={whiteCard1x} alt='Белая карта'/>
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Promo;
