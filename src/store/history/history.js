import {ActionType} from '../action';
import {MAX_HISTORY_OPERATIONS} from '../../const';

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_OPERATION_TO_HISTORY:
      if (state.history.length < MAX_HISTORY_OPERATIONS) {
        return {
          ...state,
          history: [action.payload, ...state.history],
        };
      } else {
        return {
          ...state,
          history: [action.payload, ...state.history
            .slice(0, MAX_HISTORY_OPERATIONS -1)],
        };
      }
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        history: initialState.history,
      };
    default:
      return state;
  }
};

export {historyReducer};
