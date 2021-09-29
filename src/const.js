const MAX_HISTORY_DAYS = 7;
const MAX_HISTORY_OPERATIONS = 10;

const CurrencyCode = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};
const currencyCodes = Object.values(CurrencyCode);

const RequestResult = {
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const RequestStatus = {
  IDLE: 'idle',
  PENDING: 'pending',
};

const ROUND_LIMIT = 10000;

export {
  MAX_HISTORY_DAYS,
  MAX_HISTORY_OPERATIONS,
  CurrencyCode,
  currencyCodes,
  RequestResult,
  RequestStatus,
  ROUND_LIMIT
};
