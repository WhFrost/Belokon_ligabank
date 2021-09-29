import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './converter.module.scss';
import globalStyles from '../app/app.module.scss';
import Button from '../button/button';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import {MAX_HISTORY_DAYS, currencyCodes} from '../../const';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {fetchExchangeRatesData} from '../../store/api-actions';
import {
  getAvailableQuantity,
  getAvailableCurrency,
  getWantQuantity,
  getWantCurrency,
  getDateExchangeRates
} from '../../store/data/selectors';
import {ActionCreator} from '../../store/action';

function Converter(props) {
  const {
    availableQuantity,
    availableCurrency,
    wantQuantity,
    wantCurrency,
    exchangeDateRates,
    onComponentRender,
    onAvailableQuantityChange,
    onAvailableCurrencyChange,
    onWantQuantityChange,
    onWantCurrencyChange,
    onDateExchangeRatesChange,
    onSaveOperationClick,
  } = props;

  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarIconClick = () => {
    setShowCalendar(true);
  };

  const hadleCalendarClick = (value) => {
    setShowCalendar(false);
    onDateExchangeRatesChange(dayjs(value));
  };

  const calendarRef = useRef();
  const hadleCalendarOutsideClick = (evt) => {
    if (
      evt.target !== calendarRef.current ||
      !calendarRef.current.contains(evt.target)
    ) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    onComponentRender(exchangeDateRates);
  }, []);

  useEffect(() => {
    if (showCalendar) {
      window.addEventListener('click', hadleCalendarOutsideClick);
    }

    return () => {
      window.removeEventListener('click', hadleCalendarOutsideClick);
    };
  }, [showCalendar]);

  return (
    <section className={styles['converter']}>
      <div
        className={`${styles['converter__wrapper']} ${globalStyles['container']}`}
      >
        <h2 className={styles['converter__title']}>Конвертер валют</h2>
        <form action='#' method='get' className={styles['converter__form']}>
          <fieldset className={styles['converter__currencies-fieldset']}>
            <legend className={globalStyles['visually-hidden']}>
              Выбор валют
            </legend>
            <div className={styles['converter__field-wrapper']}>
              <label
                htmlFor='available-quantity'
                className={styles['converter__field-label']}
              >
                У меня есть
              </label>
              <div className={styles['converter__fields-group-wrapper']}>
                <input
                  type='number'
                  id='available-quantity'
                  className={styles['converter__currency-field']}
                  value={availableQuantity.toString()}
                  onInput={onAvailableQuantityChange}
                />
                <select
                  id='available-quantity'
                  className={styles['converter__currency-type']}
                  onChange={onAvailableCurrencyChange}
                >
                  {
                    currencyCodes.map((currencyCode) => {
                      if (currencyCode === availableCurrency) {
                        return (
                          <option value={currencyCode} key={nanoid()} selected>{currencyCode}</option>
                        );
                      } else {
                        return <option value={currencyCode} key={nanoid()}>{currencyCode}</option>;
                      }
                    })
                  }
                </select>
              </div>
            </div>
            <div className={styles['converter__field-wrapper']}>
              <label
                htmlFor='want-quantity'
                className={styles['converter__field-label']}
              >
                Хочу приобрести
              </label>
              <div className={styles['converter__fields-group-wrapper']}>
                <input
                  type='number'
                  id='want-quantity'
                  className={styles['converter__currency-field']}
                  value={wantQuantity.toString()}
                  onInput={onWantQuantityChange}
                />
                <select
                  id='want-quantity'
                  className={styles['converter__currency-type']}
                  onChange={onWantCurrencyChange}
                >
                  {
                    currencyCodes.map((currencyCode) => {
                      if (currencyCode === wantCurrency) {
                        return <option value={currencyCode} key={nanoid()} selected>{currencyCode}</option>;
                      } else {
                        return <option value={currencyCode} key={nanoid()}>{currencyCode}</option>;
                      }
                    })
                  }
                </select>
              </div>
            </div>
          </fieldset>
          <fieldset className={styles['converter__currencies-fieldset']}>
            <div className={styles['converter__field-wrapper']}>
              <label
                htmlFor='date'
                className={`${styles['converter__field-label']} ${globalStyles['visually-hidden']}`}
              >
                Выбрать дату
              </label>
              <div className={styles['converter__fields-group-wrapper']}>
                <input
                  type='text'
                  id='date'
                  className={styles['converter__date-field']}
                  value={dayjs(exchangeDateRates).format('D.MM.YYYY')}
                />
                <button
                  type='button'
                  className={styles['converter__calendar-icon']}
                  onClick={handleCalendarIconClick}
                >
                </button>
                {showCalendar && (
                  <div
                    ref={calendarRef}
                    className={styles['converter__calendar-wrapper']}
                  >
                    <Calendar
                      onChange={hadleCalendarClick}
                      value={exchangeDateRates.toDate()}
                      maxDate={dayjs().toDate()}
                      minDate={dayjs().subtract(MAX_HISTORY_DAYS, 'day').toDate()}
                    />
                  </div>
                )}
              </div>
            </div>
            <Button
              text='Сохранить результат'
              mod='button--large'
              onClick={() => onSaveOperationClick(
                {availableQuantity,
                  availableCurrency,
                  wantQuantity,
                  wantCurrency,
                  exchangeDateRates})}
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
}

Converter.propTypes ={
  availableQuantity: PropTypes.number,
  availableCurrency: PropTypes.string,
  wantQuantity: PropTypes.number,
  wantCurrency: PropTypes.string,
  exchangeDateRates: PropTypes.object,
  onComponentRender: PropTypes.func,
  onAvailableQuantityChange: PropTypes.func,
  onAvailableCurrencyChange: PropTypes.func,
  onWantQuantityChange: PropTypes.func,
  onWantCurrencyChange: PropTypes.func,
  onDateExchangeRatesChange: PropTypes.func,
  onSaveOperationClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  availableQuantity: getAvailableQuantity(state),
  availableCurrency: getAvailableCurrency(state),
  wantQuantity: getWantQuantity(state),
  wantCurrency: getWantCurrency(state),
  exchangeDateRates: getDateExchangeRates(state),
});

const mapDispatchToProps = (dispatch) => ({
  onComponentRender(date) {
    dispatch(fetchExchangeRatesData(date));
  },

  onAvailableQuantityChange(evt) {
    dispatch(ActionCreator.setAvailableQuantity(Number(evt.target.value)));
    dispatch(ActionCreator.convertWantQuantity());
  },

  onAvailableCurrencyChange(evt) {
    dispatch(ActionCreator.setAvailableCurrency(evt.target.value));
    dispatch(ActionCreator.convertWantQuantity());
  },

  onWantQuantityChange(evt) {
    dispatch(ActionCreator.setWantQuantity(Number(evt.target.value)));
    dispatch(ActionCreator.convertAvailableQuantity());
  },

  onWantCurrencyChange(evt) {
    dispatch(ActionCreator.setWantCurrency(evt.target.value));
    dispatch(ActionCreator.convertAvailableQuantity());
  },

  onDateExchangeRatesChange(date) {
    dispatch(ActionCreator.setDateExchangeRates(date));
    dispatch(fetchExchangeRatesData(date));
  },

  onSaveOperationClick(data) {
    dispatch(ActionCreator.addOperationToHistory(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
