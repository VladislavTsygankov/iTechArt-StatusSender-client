import { handleActions } from 'redux-actions';
import {
  GET_STATUS_HISTORY_FAILURE,
  GET_STATUS_HISTORY_REQUEST,
  GET_STATUS_HISTORY_SUCCESS,
} from '../constants/status-history';

const INITIAL_STATE = {
  isLoading: false,
  statuses: [],
};

const statusHistoryReducer = handleActions(
  {
    [GET_STATUS_HISTORY_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_STATUS_HISTORY_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      statuses: action.payload,
    }),
    [GET_STATUS_HISTORY_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);


export default statusHistoryReducer;