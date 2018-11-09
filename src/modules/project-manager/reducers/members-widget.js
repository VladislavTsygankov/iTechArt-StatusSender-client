import { handleActions } from 'redux-actions';
import { GET_FREE_USERS } from '../constants/members-widget';

const INITIAL_STATE = {
  isLoading: false,
  users: [],
};

const widgetReducer = handleActions(
  {
    [GET_FREE_USERS.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_FREE_USERS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      users: action.payload,
    }),
    [GET_FREE_USERS.FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default widgetReducer;
