import { handleActions } from 'redux-actions';
import {
  ADD_USER_PROJECT,
  EDIT_USER_PROJECT,
  DELETE_USER_PROJECT,
  GET_USER_PROJECTS,
} from '../constants/sidebar';

const INITIAL_STATE = {
  isLoading: false,
  projects: [],
};

const sidebarReducer = handleActions(
  {
    [GET_USER_PROJECTS.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_USER_PROJECTS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: action.payload,
    }),
    [GET_USER_PROJECTS.FAILURE]: () => ({
      ...INITIAL_STATE,
      isLoading: false,
    }),
    [ADD_USER_PROJECT]: (state, action) => ({
      ...state,
      projects: [...state.projects, action.payload],
    }),
    [DELETE_USER_PROJECT]: (state, action) => ({
      ...state,
      projects: state.projects.filter(project => project.id !== action.payload),
    }),
    [EDIT_USER_PROJECT]: (state, action) => ({
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
