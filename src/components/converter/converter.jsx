import React, { useState, useRef, useEffect } from 'react';
import styles from './converter.module.scss';
import globalStyles from '../app/app.module.scss';
import Button from '../button/button';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { MAX_HISTORY_DAYS } from '../../const';

function Converter() {
  const [currentDate, setCurrentDate] = useState(dayjs().toDate());
  const [showCalendar, setShowCalendar] = useState(false);

  console.log(currentDate);

  const handleCalendarIconClick = () => {
    setShowCalendar(true);
  };

  const hadleCalendarClick = (value) => {
    setCurrentDate(value);
    setShowCalendar(false);
  };

  const calendarRef = useRef();
  const hadleCalendarClickOutside = (evt) => {
    if (
      evt.target !== calendarRef.current ||
      !calendarRef.current.contains(evt.target)
    ) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    if (showCalendar) {
      window.addEventListener('click', hadleCalendarClickOutside);
    }

    return () => {
      window.removeEventListener('click', hadleCalendarClickOutside);
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
                  value='1000'
                />
                <select
                  id='have-currency'
                  className={styles['converter__currency-type']}
                >
                  <option value='RUB'>RUB</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBR'>GBR</option>
                  <option value='CNY'>CNY</option>
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
                  value='13.1234'
                />
                <select
                  id='want-currency'
                  className={styles['converter__currency-type']}
                >
                  <option value='RUB'>RUB</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBR'>GBR</option>
                  <option value='CNY'>CNY</option>
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
                  value={dayjs(currentDate).format('D.MM.YYYY')}
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
                      value={currentDate}
                      maxDate={dayjs().toDate()}
                      minDate={dayjs().subtract(MAX_HISTORY_DAYS, 'day').toDate()}
                    />
                  </div>
                )}
              </div>
            </div>
            <Button text='Сохранить результат' mod='button--large' />
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Converter;
