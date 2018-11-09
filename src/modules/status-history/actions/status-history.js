import axios from 'axios';
import { API_SERVER_URL } from '../../../config';
import { GET_STATUS_HISTORY } from '../constants/status-history';

const getStatusHistory = pageId => dispatch => {
  dispatch({ type: GET_STATUS_HISTORY.REQUEST });

  axios
    .get(`${API_SERVER_URL}api/statushistory/${pageId}`)
    .then(response =>
      dispatch({
        type: GET_STATUS_HISTORY.SUCCESS,
        payload: response.data,
      })
    )
    .catch(error => {
      dispatch({
        type: GET_STATUS_HISTORY.FAILURE,
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

export { getStatusHistory };
