import {NameSpace} from '../root-reducer';

const getHistory = (state) => state[NameSpace.HISTORY].history;

export {
  getHistory
};
