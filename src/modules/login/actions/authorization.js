import axios from 'axios';
import { push } from 'connected-react-router';
import { API_SERVER_URL } from '../../../config';
import {
  LOGIN_AUTHORIZATION_FAILURE,
  LOGIN_AUTHORIZATION_REQUEST,
  LOGIN_AUTHORIZATION_SUCCESS,
} from '../constants/login-form';
import { setLoggedUser } from '../../../helpers/user-storage';

const signIn = userInfo => dispatch => {
  dispatch({ type: LOGIN_AUTHORIZATION_REQUEST });

  axios
    .post(`${API_SERVER_URL}auth/signin`, { ...userInfo })
    .then(response => {
      setLoggedUser(response.data);

      dispatch(push('/home'));
      dispatch({
        type: LOGIN_AUTHORIZATION_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_AUTHORIZATION_FAILURE });
      alert(err);
      console.log(err);
    });
};

export { signIn };
