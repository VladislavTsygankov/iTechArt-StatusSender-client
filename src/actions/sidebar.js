import axios from 'axios';
import {
  GET_USER_PROJECTS_FAILURE,
  GET_USER_PROJECTS_REQUEST,
  GET_USER_PROJECTS_SUCCESS,
} from '../constants/sidebar';
import { API_SERVER_URL } from '../config';

const getUserProjects = () => dispatch => {
  dispatch({ type: GET_USER_PROJECTS_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/projects/my`)
    .then(response => {
      dispatch({ type: GET_USER_PROJECTS_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_PROJECTS_FAILURE });
      console.log(err);
    });
};

export { getUserProjects };