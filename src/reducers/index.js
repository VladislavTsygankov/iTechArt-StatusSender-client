import { combineReducers } from 'redux';
import authorization from '../modules/login/reducers';
import sidebar from './sidebar';
import status from '../modules/project-status/reducers';

export default combineReducers({
  login: authorization,
  sidebar,
  status
});
