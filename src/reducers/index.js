import { combineReducers } from 'redux';
import authorization from '../modules/login/reducers';

export default combineReducers({
  login: authorization,
});
