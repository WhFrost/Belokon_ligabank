import {ActionCreator} from './action';
import {currencyCodes} from '../const';
import dayjs from 'dayjs';

export const fetchExchangeRatesData = (date) => (dispatch, _getState, api) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  dispatch(ActionCreator.startLoadExchengeRates());
  return api
    .get(
      `historical?access_key=1d9d69c032c95a4485b41e06a8e12f5c&date=${formattedDate}&currencies=${currencyCodes.join(',')}`,
    )
    .then((data) => {
      dispatch(ActionCreator.loadExchangeRates(data));
      dispatch(ActionCreator.convertWantQuantity());
    })
    .catch((error) => dispatch(ActionCreator.setExchangeRatesFetchError(error)));
};
