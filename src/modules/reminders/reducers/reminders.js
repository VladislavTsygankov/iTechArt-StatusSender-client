import { handleActions } from 'redux-actions';
import {
  GET_REMINDERS,
  CREATE_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from '../constants/reminders';

const INITIAL_STATE = {
  isLoading: false,
  reminders: [],
  error: {
    type: '',
    body: null,
  },
};

const remindersReducer = handleActions(
  {
    [GET_REMINDERS.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_REMINDERS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: action.payload,
    }),
    [GET_REMINDERS.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [DELETE_REMINDER.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [DELETE_REMINDER.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: state.reminders.filter(
        reminder => reminder.id !== action.payload
      ),
    }),
    [DELETE_REMINDER.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [CREATE_REMINDER.REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [CREATE_REMINDER.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: [...state.reminders, action.payload],
    }),
    [CREATE_REMINDER.FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
    [EDIT_REMINDER.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [EDIT_REMINDER.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      reminders: state.reminders.map(
        reminder =>
          reminder.id === action.payload.id ? action.payload : reminder
      ),
    }),
    [EDIT_REMINDER.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  INITIAL_STATE
);

export default remindersReducer;
