import { handleActions } from 'redux-actions';
import {
  GET_FREE_USERS_FAILURE,
  GET_FREE_USERS_REQUEST,
  GET_FREE_USERS_SUCCESS,
} from '../constants/members-widget';

const INITIAL_STATE = {
  isLoading: false,
  users: [],
};

const widgetReducer = handleActions(
  {
    [GET_FREE_USERS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_FREE_USERS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      users: action.payload,
    }),
    [GET_FREE_USERS_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default widgetReducer;
