import {ActionType} from '../action';
import {CurrencyCode, RequestResult, RequestStatus} from '../../const';
import dayjs from 'dayjs';
import {round} from '../../utils';

const initialState = {
  availableQuantity: 1000,
  availableCurrency: CurrencyCode.RUB,
  wantQuantity: 13.1234,
  wantCurrency: CurrencyCode.USD,
  exchangeDateRates: dayjs(),
  exchangeRates: {},
  exchangeRatesRequestStatus: RequestStatus.IDLE,
  exchangeRatesRequestResult: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AVAILABLE_QUANTITY:
      return {
        ...state,
        availableQuantity: action.payload,
      };
    case ActionType.SET_AVAILABLE_CURRENCY:
      return {
        ...state,
        availableCurrency: action.payload,
      };
    case ActionType.SET_WANT_QUANTITY:
      return {
        ...state,
        wantQuantity: action.payload,
      };
    case ActionType.SET_WANT_CURRENCY:
      return {
        ...state,
        wantCurrency: action.payload,
      };
    case ActionType.SET_DATE_EXCHANGE_RATES:
      return {
        ...state,
        exchangeDateRates: action.payload,
      };
    case ActionType.START_LOAD_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRatesRequestStatus: RequestStatus.PENDING,
      };
    case ActionType.LOAD_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRatesRequestStatus: RequestStatus.IDLE,
        exchangeRatesRequestResult: RequestResult.SUCCEEDED,
        exchangeRates: action.payload,
      };
    case ActionType.SET_CONVERTED_AVAILABLE_QUANTITY:
      return {
        ...state,
        availableQuantity: round(state.wantQuantity * (
          state.exchangeRates.data.quotes[`USD${state.availableCurrency}`] /
          state.exchangeRates.data.quotes[`USD${state.wantCurrency}`]
        )),
      };
    case ActionType.SET_CONVERTED_WANT_QUANTITY:
      return {
        ...state,
        wantQuantity: round(state.availableQuantity * (
          state.exchangeRates.data.quotes[`USD${state.wantCurrency}`] /
          state.exchangeRates.data.quotes[`USD${state.availableCurrency}`]
        )),
      };
    case ActionType.SET_EXCHANGE_RATES_FETCH_ERROR:
      return {
        ...state,
        exchangeRatesRequestStatus: RequestStatus.IDLE,
        exchangeRatesRequestResult: RequestResult.FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {dataReducer};
