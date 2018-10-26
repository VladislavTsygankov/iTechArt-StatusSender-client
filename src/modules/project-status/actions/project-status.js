import axios from 'axios';
import {
  GET_CURRENT_STATUS_FAILURE,
  GET_CURRENT_STATUS_REQUEST,
  GET_CURRENT_STATUS_SUCCESS,
  SET_CURRENT_STATUS_FAILURE,
  SET_CURRENT_STATUS_REQUEST,
  SET_CURRENT_STATUS_SUCCESS,
} from '../constants/project-status';
import { API_SERVER_URL } from '../../../config';
import { getLoggedUser } from '../../../helpers/user-storage';

const getCurrentStatus = projectId => dispatch => {
  dispatch({ type: GET_CURRENT_STATUS_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/statushistory/${projectId}`)
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: GET_CURRENT_STATUS_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: GET_CURRENT_STATUS_SUCCESS, payload: null });
      }
    })
    .catch(err => {
      dispatch({ type: GET_CURRENT_STATUS_FAILURE });
      console.log(err);
    });
};

const setStatus = (status, projectId) => dispatch => {
  dispatch({ type: SET_CURRENT_STATUS_REQUEST });

  axios
    .post(`${API_SERVER_URL}api/statushistory/`, {
      status,
      projectId,
    })
    .then(response =>
      dispatch({ type: SET_CURRENT_STATUS_SUCCESS, payload: response.data })
    )
    .catch(err => {
      dispatch({ type: SET_CURRENT_STATUS_FAILURE });
      console.log(err);
    });
};

export { getCurrentStatus, setStatus };
