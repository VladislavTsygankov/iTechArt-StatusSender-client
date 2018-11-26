import axios from 'axios';
import { push } from 'connected-react-router';
import { API_SERVER_URL } from '../../../config';
import { LOGIN_AUTHORIZATION } from '../constants/login-form';
import { setLoggedUser } from '../../../helpers/user-storage';

const signIn = userInfo => dispatch => {
  dispatch({ type: LOGIN_AUTHORIZATION.REQUEST });

  axios
    .post(`${API_SERVER_URL}auth/signin`, { ...userInfo })
    .then(response => {
      setLoggedUser(response.data);

      dispatch({
        type: LOGIN_AUTHORIZATION.SUCCESS,
        payload: response.data,
      });

      dispatch(push('/home'));
    })
    .catch(error => {
      dispatch({
        type: LOGIN_AUTHORIZATION.FAILURE,
        payload: {
          type: 'warning',
          body: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      });
    });
};

export { signIn };
