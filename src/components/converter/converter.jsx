import React from 'react';
import styles from './converter.module.scss';
import Button from '../button/button';

function Converter() {
  return (
    <section className={styles['converter']}>
      <div className={styles['converter__wrapper']}>
        <h2 className={styles['converter__title']}>Конвертер валют</h2>
        <form action='#' method='get' className={styles['converter__form']}>
          <fieldset className={styles['converter__currencies-fieldsets']}>
            <legend>Выбор валют</legend>
            <div className={styles['converter__field-wrapper']}>
              <label htmlFor='available-quantity'>У меня есть</label>
              <input
                type='number'
                id='available-quantity'
                className={styles['converter__currency-field']}
              />
              <select id='have-currency'>
                <option value='RUB'>RUB</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBR'>GBR</option>
                <option value='CNY'>CNY</option>
              </select>
            </div>
            <div className={styles['converter__field-wrapper']}>
              <label htmlFor='want-quantity'>Хочу приобрести</label>
              <input
                type='number'
                id='want-quantity'
                className={styles['converter__currency-field']}
              />
              <select id='want-currency'>
                <option value='RUB'>RUB</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBR'>GBR</option>
                <option value='CNY'>CNY</option>
              </select>
            </div>
            <div className={styles['converter__field-wrapper']}>
              <div className={styles['converter__field-wrapper']}>
                <label htmlFor="date">Выбрать дату</label>
                <input type='date' id="date" className={styles['converter__date-field']}/>
              </div>
              <Button text='Сохранить результат' mod='button--large'/>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Converter;
