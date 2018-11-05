import axios from 'axios';
import { API_SERVER_URL } from '../../../config';
import {
  GET_STATUS_HISTORY_FAILURE,
  GET_STATUS_HISTORY_REQUEST,
  GET_STATUS_HISTORY_SUCCESS,
} from '../constants/status-history';

const getStatusHistory = () => dispatch => {
  dispatch({ type: GET_STATUS_HISTORY_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/statushistory`)
    .then(response =>
      dispatch({ type: GET_STATUS_HISTORY_SUCCESS, payload: response.data })
    )
    .catch(err => {
      console.log(err);
      dispatch({ GET_STATUS_HISTORY_FAILURE });
    });
};

export { getStatusHistory };
