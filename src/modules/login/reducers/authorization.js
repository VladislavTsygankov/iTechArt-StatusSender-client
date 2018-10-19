import { handleActions } from 'redux-actions';
import {
  LOGIN_AUTHORIZATION_FAILURE,
  LOGIN_AUTHORIZATION_REQUEST,
  LOGIN_AUTHORIZATION_SUCCESS,
} from '../constants/login-form';
import { getLoggedUser } from '../../../helpers/user-storage';

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: Boolean(getLoggedUser()),
  user: getLoggedUser(),
};

const authorizationReducer = handleActions(
  {
    [LOGIN_AUTHORIZATION_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [LOGIN_AUTHORIZATION_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload,
      isLoggedIn: true,
      isLoading: false,
    }),
    [LOGIN_AUTHORIZATION_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default authorizationReducer;
