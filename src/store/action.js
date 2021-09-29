const ActionType = {
  SET_AVAILABLE_QUANTITY: 'data/availableQuantitySet',
  SET_WANT_QUANTITY: 'data/wantQuantitySet',
  SET_AVAILABLE_CURRENCY: 'data/availableCurrencySet',
  SET_WANT_CURRENCY: 'data/wantCurrencySet',
  SET_DATE_EXCHANGE_RATES: 'data/dateExchangeDate',
  START_LOAD_EXCHANGE_RATES: 'data/startLoadExchange',
  LOAD_EXCHANGE_RATES: 'data/loadExchangeRates',
  SET_CONVERTED_AVAILABLE_QUANTITY: 'data/availableQuantityConverted',
  SET_CONVERTED_WANT_QUANTITY: 'data/wantQuantityConverted',
  SET_EXCHANGE_RATES_FETCH_ERROR: 'data/ratesFetchErrorSet',
  ADD_OPERATION_TO_HISTORY: 'data/addOperationToHistory',
  CLEAR_HISTORY: 'data/clearHistory',
};

const ActionCreator = {
  setAvailableQuantity: (quantity) => ({
    type: ActionType.SET_AVAILABLE_QUANTITY,
    payload: quantity,
  }),
  setWantQuantity: (quantity) => ({
    type: ActionType.SET_WANT_QUANTITY,
    payload: quantity,
  }),
  setAvailableCurrency: (currency) => ({
    type: ActionType.SET_AVAILABLE_CURRENCY,
    payload: currency,
  }),
  setWantCurrency: (currency) => ({
    type: ActionType.SET_WANT_CURRENCY,
    payload: currency,
  }),
  setDateExchangeRates: (date) => ({
    type: ActionType.SET_DATE_EXCHANGE_RATES,
    payload: date,
  }),
  startLoadExchengeRates: () => ({
    type: ActionType.START_LOAD_EXCHANGE_RATES,
  }),
  loadExchangeRates: (data) => ({
    type: ActionType.LOAD_EXCHANGE_RATES,
    payload: data,
  }),
  convertAvailableQuantity: () => ({
    type: ActionType.SET_CONVERTED_AVAILABLE_QUANTITY,
  }),
  convertWantQuantity: () => ({
    type: ActionType.SET_CONVERTED_WANT_QUANTITY,
  }),
  setExchangeRatesFetchError: (error) => ({
    type: ActionType.SET_EXCHANGE_RATES_FETCH_ERROR,
    payload: error,
  }),
  addOperationToHistory: (data) => ({
    type: ActionType.ADD_OPERATION_TO_HISTORY,
    payload: data,
  }),
  clearHistory: () => ({
    type: ActionType.CLEAR_HISTORY,
  }),
};

export {
  ActionType,
  ActionCreator
};
