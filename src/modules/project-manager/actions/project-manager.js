import axios from 'axios';
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
import { API_SERVER_URL } from '../../../config';

const getAllProjects = () => dispatch => {
  dispatch({ type: GET_ALL_PROJECTS_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/projects/all`)
    .then(response =>
      dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: response.data })
    )
    .catch(err => {
      dispatch({ type: GET_ALL_PROJECTS_FAILURE });
      console.log(err);
    });
};

const deleteProjectById = id => dispatch => {
  dispatch({ type: DELETE_PROJECT_REQUEST });

  axios
    .delete(`${API_SERVER_URL}api/projects/${id}`)
    .then(() => {
      dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_PROJECT_FAILURE });
      console.log(err);
    });
};

const createProject = projectInfo => dispatch => {
  dispatch({ type: CREATE_PROJECT_REQUEST });

  axios
    .post(`${API_SERVER_URL}api/projects`, projectInfo)
    .then(response => {
      dispatch({ type: CREATE_PROJECT_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_PROJECT_FAILURE });
      console.log(err);
    });
};

const editProjectById = projectInfo => dispatch => {
  dispatch({ type: EDIT_PROJECT_REQUEST });

  axios
    .put(`${API_SERVER_URL}api/projects/${projectInfo.id}`, projectInfo)
    .then(response => {
      dispatch({ type: EDIT_PROJECT_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_PROJECT_FAILURE });
      console.log(err);
    });
};

export { getAllProjects, deleteProjectById, createProject, editProjectById };