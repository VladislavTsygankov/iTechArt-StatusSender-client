import { combineReducers } from 'redux';
import authorization from '../modules/login/reducers/authorization';
import sidebar from '../modules/sidebar/reducers/sidebar';
import status from '../modules/project-status/reducers/status';
import projectsManager from '../modules/project-manager/reducers/project-manager';
import usersWidget from '../modules/project-manager/reducers/members-widget';
import reminders from '../modules/reminders/reducers/reminders';
import statusHistory from '../modules/status-history/reducers/status-history';

export default combineReducers({
  authorization,
  sidebar,
  status,
  projectsManager,
  usersWidget,
  reminders,
  statusHistory,
});
