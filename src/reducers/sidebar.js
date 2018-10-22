import { handleActions } from 'redux-actions';
import {
  GET_USER_PROJECTS_FAILURE,
  GET_USER_PROJECTS_REQUEST,
  GET_USER_PROJECTS_SUCCESS,
} from '../constants/sidebar';

const INITIAL_STATE = {
  isLoading: false,
  projects: [],
};

const sidebarReducer = handleActions(
  {
    [GET_USER_PROJECTS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_USER_PROJECTS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: action.payload,
    }),
    [GET_USER_PROJECTS_FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default sidebarReducer;
