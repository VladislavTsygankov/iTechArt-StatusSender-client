import { combineReducers } from 'redux';
import projectManager from './project-manager';
import widget from './members-widget';

export default combineReducers({
  projectManager,
  widget,
});
