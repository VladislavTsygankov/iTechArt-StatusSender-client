import { handleActions } from 'redux-actions';
import {
  GET_CURRENT_STATUS_FAILURE,
  GET_CURRENT_STATUS_REQUEST,
  GET_CURRENT_STATUS_SUCCESS,
  SET_CURRENT_STATUS_FAILURE,
  SET_CURRENT_STATUS_REQUEST,
  SET_CURRENT_STATUS_SUCCESS,
} from '../constants/project-status';

const INITIAL_STATE = {
  isLoading: false,
  currentStatus: null,
};

const statusReducer = handleActions(
  {
    [GET_CURRENT_STATUS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_CURRENT_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      currentStatus: action.payload,
    }),
    [GET_CURRENT_STATUS_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
    [SET_CURRENT_STATUS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [SET_CURRENT_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      currentStatus: action.payload,
    }),
    [SET_CURRENT_STATUS_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default statusReducer;
