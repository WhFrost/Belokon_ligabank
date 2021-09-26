import React from 'react';
import styles from './history.module.scss';
import HistoryItem from '../history-item/history-item';
import Button from '../button/button';

function History() {
  return (
    <section className={styles['history']}>
      <ul className={styles['history__list']}>
        <HistoryItem
          date={'25.11.2020'}
          availableCurrencyQuantity={1000}
          haveCurrency={'RUB'}
          wantCurrencyQuantity={13.1234}
          wantCurrency={'USD'}
        />
      </ul>
      <Button text='Очистить историю' mod='button--small'/>
    </section>
  );
}

export default History;
