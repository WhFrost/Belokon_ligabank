const MAX_HISTORY_DAYS = 7;

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
  CurrencyCode,
  currencyCodes,
  RequestResult,
  RequestStatus,
  ROUND_LIMIT
};
