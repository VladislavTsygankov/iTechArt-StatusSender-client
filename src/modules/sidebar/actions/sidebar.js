import axios from 'axios';
import { GET_USER_PROJECTS } from '../constants/sidebar';
import { API_SERVER_URL } from '../../../config';

const getUserProjects = () => dispatch => {
  dispatch({ type: GET_USER_PROJECTS.REQUEST });

  axios
    .get(`${API_SERVER_URL}api/projects/my`)
    .then(response => {
      dispatch({ type: GET_USER_PROJECTS.SUCCESS, payload: response.data });
    })
    .catch(() => {
      dispatch({ type: GET_USER_PROJECTS.FAILURE });
    });
};

export { getUserProjects };
