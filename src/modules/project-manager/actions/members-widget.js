import axios from 'axios';
import { API_SERVER_URL } from '../../../config';
import {
  GET_FREE_USERS_FAILURE,
  GET_FREE_USERS_REQUEST,
  GET_FREE_USERS_SUCCESS,
} from '../constants/members-widget';

const getFreeUsersByProjectId = () => dispatch => {
  dispatch({ type: GET_FREE_USERS_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/users/`)
    .then(response => {
      dispatch({ type: GET_FREE_USERS_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_FREE_USERS_FAILURE });
      console.log(err);
    });
};

export { getFreeUsersByProjectId };
