import { handleActions } from 'redux-actions';
import {
  GET_CURRENT_STATUS,
  SET_CURRENT_STATUS,
} from '../constants/project-status';

const INITIAL_STATE = {
  isLoading: false,
  currentStatus: null,
  error: {
    type: '',
    body: null,
  },
};

const statusReducer = handleActions(
  {
    [GET_CURRENT_STATUS.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_CURRENT_STATUS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      currentStatus: action.payload,
    }),
    [GET_CURRENT_STATUS.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [SET_CURRENT_STATUS.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [SET_CURRENT_STATUS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      currentStatus: action.payload,
    }),
    [SET_CURRENT_STATUS.FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default statusReducer;
