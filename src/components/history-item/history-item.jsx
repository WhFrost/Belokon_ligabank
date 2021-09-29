import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';
import dayjs from 'dayjs';

function HistoryItem(props) {
  const {
    availableQuantity,
    availableCurrency,
    wantQuantity,
    wantCurrency,
    exchangeDateRates,
  } = props;

  return (
    <li className={styles['history__item']}>
      <span className={styles['history__date']}>{dayjs(exchangeDateRates).format('DD.MM.YYYY')}</span>
      <div className={styles['history__currency']}>
        <span className={styles['history__have-currency']}>{`${availableQuantity} ${availableCurrency}`}</span>
        <span className={styles['history__want-currency']}>{`${wantQuantity} ${wantCurrency}`}</span>
      </div>
    </li>
  );
}

HistoryItem.propTypes = {
  exchangeDateRates: PropTypes.object,
  availableQuantity: PropTypes.number,
  availableCurrency: PropTypes.string,
  wantQuantity: PropTypes.number,
  wantCurrency: PropTypes.string,
};

export default HistoryItem;
