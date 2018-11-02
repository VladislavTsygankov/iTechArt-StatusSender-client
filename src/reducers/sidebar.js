import { handleActions } from 'redux-actions';
import {
  GET_USER_PROJECTS_FAILURE,
  GET_USER_PROJECTS_REQUEST,
  GET_USER_PROJECTS_SUCCESS,
  ADD_USER_PROJECT_SUCCESS,
  DELETE_USER_PROJECT_SUCCESS,
  EDIT_USER_PROJECT_SUCCESS,
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
    [ADD_USER_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      projects: [...state.projects, action.payload],
    }),
    [DELETE_USER_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      projects: state.projects.filter(project => project.id !== action.payload),
    }),
    [EDIT_USER_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      projects: state.projects.every(
        project => project.id !== action.payload.id
      )
        ? [...state.projects, action.payload]
        : state.projects.map(
            project =>
              project.id === action.payload.id ? action.payload : project
          ),
    }),
  },
  INITIAL_STATE
);

export default sidebarReducer;
