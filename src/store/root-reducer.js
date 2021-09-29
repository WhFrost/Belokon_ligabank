import {combineReducers} from 'redux';
import {dataReducer} from './data/data';
import {historyReducer} from './history/history';

const NameSpace = {
  DATA: 'DATA',
  HISTORY: 'HISTORY',
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.HISTORY]: historyReducer,
});

export {
  NameSpace,
  rootReducer
};
