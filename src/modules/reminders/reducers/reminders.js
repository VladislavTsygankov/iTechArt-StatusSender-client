import { handleActions } from 'redux-actions';
import {
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_REQUEST,
  GET_REMINDERS_SUCCESS,
  DELETE_REMINDER_FAILURE,
  DELETE_REMINDER_REQUEST,
  DELETE_REMINDER_SUCCESS,
  EDIT_REMINDER_FAILURE,
  EDIT_REMINDER_REQUEST,
  EDIT_REMINDER_SUCCESS,
  CREATE_REMINDER_FAILURE,
  CREATE_REMINDER_REQUEST,
  CREATE_REMINDER_SUCCESS,
} from '../constants/reminders';

const INITIAL_STATE = {
  isLoading: false,
  reminders: [],
};

const remindersReducer = handleActions(
  {
    [GET_REMINDERS_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [GET_REMINDERS_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: action.payload,
    }),
    [GET_REMINDERS_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [DELETE_REMINDER_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [DELETE_REMINDER_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: state.reminders.filter(
        reminder => reminder.id !== action.payload
      ),
    }),
    [DELETE_REMINDER_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [CREATE_REMINDER_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [CREATE_REMINDER_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: [...state.reminders, action.payload],
    }),
    [CREATE_REMINDER_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [EDIT_REMINDER_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [EDIT_REMINDER_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: state.reminders.map(
        reminder =>
          reminder.id === action.payload.id ? action.payload : reminder
      ),
    }),
    [EDIT_REMINDER_FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  INITIAL_STATE
);

export default remindersReducer;
