import axios from 'axios';
import {
  GET_ALL_PROJECTS,
  DELETE_PROJECT,
  EDIT_PROJECT,
  CREATE_PROJECT,
} from '../constants/project-manager';
import {
  ADD_USER_PROJECT,
  EDIT_USER_PROJECT,
  DELETE_USER_PROJECT,
} from '../../sidebar/constants/sidebar';
import { API_SERVER_URL } from '../../../config';

const isAuthenticatedUserAssigned = (assignedUsers, state) =>
  assignedUsers.some(
    assignedUser => assignedUser.id === state.authorization.user.id
  );

const getAllProjects = () => dispatch => {
  dispatch({ type: GET_ALL_PROJECTS.REQUEST });

  axios
    .get(`${API_SERVER_URL}api/projects/all`)
    .then(response =>
      dispatch({ type: GET_ALL_PROJECTS.SUCCESS, payload: response.data })
    )
    .catch(() => {
      dispatch({ type: GET_ALL_PROJECTS.FAILURE });
    });
};

const deleteProjectById = id => dispatch => {
  dispatch({ type: DELETE_PROJECT.REQUEST });

  axios
    .delete(`${API_SERVER_URL}api/projects/${id}`)
    .then(() => {
      dispatch({ type: DELETE_PROJECT.SUCCESS, payload: id });
      dispatch({ type: DELETE_USER_PROJECT, payload: id });
    })
    .catch(() => {
      dispatch({ type: DELETE_PROJECT.FAILURE });
    });
};

const createProject = projectInfo => (dispatch, getState) => {
  dispatch({ type: CREATE_PROJECT.REQUEST });

  axios
    .post(`${API_SERVER_URL}api/projects`, projectInfo)
    .then(response => {
      dispatch({ type: CREATE_PROJECT.SUCCESS, payload: response.data });

      if (
        isAuthenticatedUserAssigned(response.data.assignedUsers, getState())
      ) {
        dispatch({
          type: ADD_USER_PROJECT,
          payload: { id: response.data.id, name: response.data.name },
        });
      }
    })
    .catch(error => {
      dispatch({
        type: CREATE_PROJECT.FAILURE,
        payload: {
          type: 'error',
          body: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      });
    });
};

const editProjectById = projectInfo => (dispatch, getState) => {
  dispatch({ type: EDIT_PROJECT.REQUEST });

  axios
    .put(`${API_SERVER_URL}api/projects/${projectInfo.id}`, projectInfo)
    .then(response => {
      dispatch({ type: EDIT_PROJECT.SUCCESS, payload: response.data });

      if (
        isAuthenticatedUserAssigned(response.data.assignedUsers, getState())
      ) {
        dispatch({
          type: EDIT_USER_PROJECT,
          payload: { id: response.data.id, name: response.data.name },
        });
      } else {
        dispatch({
          type: DELETE_USER_PROJECT,
          payload: projectInfo.id,
        });
      }
    })
    .catch(() => {
      dispatch({ type: EDIT_PROJECT.FAILURE });
    });
};

export { getAllProjects, deleteProjectById, createProject, editProjectById };
