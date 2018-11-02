import { handleActions } from 'redux-actions';
import {
  GET_ALL_PROJECTS_FAILURE,
  GET_ALL_PROJECTS_REQUEST,
  GET_ALL_PROJECTS_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
} from '../constants/project-manager';

const INITIAL_STATE = {
  isLoading: false,
  projects: [],
};

const projectManagerReducer = handleActions(
  {
    [GET_ALL_PROJECTS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_ALL_PROJECTS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: action.payload,
    }),
    [GET_ALL_PROJECTS_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [DELETE_PROJECT_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [DELETE_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: state.projects.filter(project => project.id !== action.payload),
    }),
    [DELETE_PROJECT_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [CREATE_PROJECT_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [CREATE_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: [...state.projects, action.payload],
    }),
    [CREATE_PROJECT_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [EDIT_PROJECT_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [EDIT_PROJECT_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      projects: state.projects.map(
        project => (project.id === action.payload.id ? action.payload : project)
      ),
    }),
    [EDIT_PROJECT_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default projectManagerReducer;
