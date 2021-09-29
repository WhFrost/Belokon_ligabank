import {NameSpace} from '../root-reducer';

const getAvailableQuantity = (state) => state[NameSpace.DATA].availableQuantity;
const getAvailableCurrency = (state) => state[NameSpace.DATA].availableCurrency;
const getWantQuantity = (state) => state[NameSpace.DATA].wantQuantity;
const getWantCurrency = (state) => state[NameSpace.DATA].wantCurrency;
const getDateExchangeRates = (state) => state[NameSpace.DATA].exchangeDateRates;

export {
  getAvailableQuantity,
  getAvailableCurrency,
  getWantQuantity,
  getWantCurrency,
  getDateExchangeRates
};
