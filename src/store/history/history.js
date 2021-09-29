import {ActionType} from '../action';

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_OPERATION_TO_HISTORY:
      return {
        ...state,
        history: state.history.push(action.payload),
      };
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
