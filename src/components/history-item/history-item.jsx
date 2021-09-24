import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';

function HistoryItem(props) {
  const {
    date,
    availableCurrencyQuantity,
    haveCurrency,
    wantCurrencyQuantity,
    wantCurrency,
  } = props;
  return (
    <li className={styles['history__item']}>
      <span className={styles['history__date']}>{date}</span>
      <span className={styles['history__have-currency']}>{`${availableCurrencyQuantity} ${haveCurrency}`}</span>
      <span className={styles['history__want-currency']}>{`${wantCurrencyQuantity} ${wantCurrency}`}</span>
    </li>
  );
}

HistoryItem.propTypes = {
  date: PropTypes.string,
  availableCurrencyQuantity: PropTypes.number,
  haveCurrency: PropTypes.string,
  wantCurrencyQuantity: PropTypes.number,
  wantCurrency: PropTypes.string,
};

export default HistoryItem;
