import {ROUND_LIMIT} from './const';

const round = (number) => Math.round((number + Number.EPSILON) * ROUND_LIMIT) / ROUND_LIMIT;

export {
  round
};
