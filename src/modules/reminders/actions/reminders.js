import axios from 'axios';
import { API_SERVER_URL } from '../../../config';
import {
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_REQUEST,
  GET_REMINDERS_SUCCESS,
  CREATE_REMINDER_FAILURE,
  CREATE_REMINDER_REQUEST,
  CREATE_REMINDER_SUCCESS,
  EDIT_REMINDER_FAILURE,
  EDIT_REMINDER_REQUEST,
  EDIT_REMINDER_SUCCESS,
  DELETE_REMINDER_FAILURE,
  DELETE_REMINDER_REQUEST,
  DELETE_REMINDER_SUCCESS,
} from '../constants/reminders';

const getReminders = () => dispatch => {
  dispatch({ type: GET_REMINDERS_REQUEST });

  axios
    .get(`${API_SERVER_URL}api/reminders`)
    .then(response =>
      dispatch({ type: GET_REMINDERS_SUCCESS, payload: response.data })
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_REMINDERS_FAILURE });
    });
};

const removeReminder = id => dispatch => {
  dispatch({ type: DELETE_REMINDER_REQUEST });

  axios
    .delete(`${API_SERVER_URL}api/reminders/${id}`)
    .then(
      response =>
        response.status === 204
          ? dispatch({ type: DELETE_REMINDER_SUCCESS, payload: id })
          : dispatch({ type: DELETE_REMINDER_FAILURE })
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_REMINDER_FAILURE });
    });
};

const createReminder = reminderValue => dispatch => {
  dispatch({ type: CREATE_REMINDER_REQUEST });

  axios
    .post(`${API_SERVER_URL}api/reminders`, { value: reminderValue })
    .then(response =>
      dispatch({ type: CREATE_REMINDER_SUCCESS, payload: response.data })
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: CREATE_REMINDER_FAILURE });
    });
};

const editReminder = (reminderValue, reminderId) => dispatch => {
  dispatch({ type: EDIT_REMINDER_REQUEST });

  axios
    .put(`${API_SERVER_URL}api/reminders/${reminderId}`, {
      value: reminderValue,
    })
    .then(response =>
      dispatch({ type: EDIT_REMINDER_SUCCESS, payload: response.data })
    )
    .catch(err => {
      dispatch({ type: EDIT_REMINDER_FAILURE });
      console.log(err);
    });
};

export { getReminders, removeReminder, createReminder, editReminder };
