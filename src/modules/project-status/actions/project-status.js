import axios from 'axios';
import {
  GET_CURRENT_STATUS,
  SET_CURRENT_STATUS,
} from '../constants/project-status';
import { API_SERVER_URL } from '../../../config';

const getCurrentStatus = projectId => dispatch => {
  dispatch({ type: GET_CURRENT_STATUS.REQUEST });

  axios
    .get(`${API_SERVER_URL}api/statushistory/user_status/${projectId}`)
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: GET_CURRENT_STATUS.SUCCESS, payload: response.data });
      } else {
        dispatch({ type: GET_CURRENT_STATUS.SUCCESS, payload: null });
      }
    })
    .catch(error => {
      dispatch({
        type: GET_CURRENT_STATUS.FAILURE,
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

const setStatus = (status, projectId) => dispatch => {
  dispatch({ type: SET_CURRENT_STATUS.REQUEST });

  axios
    .post(`${API_SERVER_URL}api/statushistory/`, {
      status,
      projectId,
    })
    .then(response =>
      dispatch({ type: SET_CURRENT_STATUS.SUCCESS, payload: response.data })
    )
    .catch(() => {
      dispatch({ type: SET_CURRENT_STATUS.FAILURE });
    });
};

export { getCurrentStatus, setStatus };
