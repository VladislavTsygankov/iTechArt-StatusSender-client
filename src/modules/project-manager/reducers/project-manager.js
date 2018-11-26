import { handleActions } from 'redux-actions';
import {
  GET_ALL_PROJECTS,
  CREATE_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
} from '../constants/project-manager';

const INITIAL_STATE = {
  isLoading: false,
  projects: [],
  error: {
    type: '',
    body: null,
  },
};

const projectManagerReducer = handleActions(
  {
    [GET_ALL_PROJECTS.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_ALL_PROJECTS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: action.payload,
    }),
    [GET_ALL_PROJECTS.FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [DELETE_PROJECT.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [DELETE_PROJECT.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: state.projects.filter(project => project.id !== action.payload),
    }),
    [DELETE_PROJECT.FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [CREATE_PROJECT.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [CREATE_PROJECT.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: [...state.projects, action.payload],
    }),
    [CREATE_PROJECT.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [EDIT_PROJECT.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [EDIT_PROJECT.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: state.projects.map(
        project => (project.id === action.payload.id ? action.payload : project)
      ),
    }),
    [EDIT_PROJECT.FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default projectManagerReducer;
