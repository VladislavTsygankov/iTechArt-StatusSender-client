import { handleActions } from 'redux-actions';
import { LOGIN_AUTHORIZATION } from '../constants/login-form';
import { AUTHORIZATION } from '../../../constants/authorization';

const INITIAL_STATE = {
  isLoading: false,
  user: AUTHORIZATION ? AUTHORIZATION.user : null,
  token: AUTHORIZATION ? AUTHORIZATION.token : null,
};

const authorizationReducer = handleActions(
  {
    [LOGIN_AUTHORIZATION.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [LOGIN_AUTHORIZATION.SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoggedIn: true,
      isLoading: false,
    }),
    [LOGIN_AUTHORIZATION.FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default authorizationReducer;
