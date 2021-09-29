import React from 'react';
import PropTypes from 'prop-types';
import styles from './history.module.scss';
import globalStyles from '../app/app.module.scss';
import HistoryItem from '../history-item/history-item';
import Button from '../button/button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getHistory} from '../../store/history/selectors';
import {nanoid} from 'nanoid';

function History(props) {
  const {history, onClearHistoryClick} = props;

  return (
    <section className={styles['history']}>
      <div className={`${styles['history__wrapper']} ${globalStyles['container']}`}>
        <h2 className={styles['history__title']}>
          История конвертация
        </h2>
        <ul className={styles['history__list']}>
          {
            history.map((operation) => <HistoryItem key={nanoid()} {...operation}/>)
          }
        </ul>
        <Button
          text='Очистить историю'
          mod='button--small'
          onClick={onClearHistoryClick}
        />
      </div>
    </section>
  );
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  onClearHistoryClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  history: getHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClearHistoryClick() {
    dispatch(ActionCreator.clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
