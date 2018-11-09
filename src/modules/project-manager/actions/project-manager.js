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
    .catch(err => {
      dispatch({ type: GET_ALL_PROJECTS.FAILURE });
      console.log(err);
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
    .catch(err => {
      dispatch({ type: DELETE_PROJECT.FAILURE });
      console.log(err);
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
    .catch(err => {
      dispatch({ type: CREATE_PROJECT.FAILURE });
      console.log(err);
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
    .catch(err => {
      dispatch({ type: EDIT_PROJECT.FAILURE });
      console.log(err);
    });
};

export { getAllProjects, deleteProjectById, createProject, editProjectById };
