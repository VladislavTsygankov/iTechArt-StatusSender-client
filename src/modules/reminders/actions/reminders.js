import axios from 'axios';
import { API_SERVER_URL } from '../../../config';
import {
  GET_REMINDERS,
  CREATE_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from '../constants/reminders';

const getReminders = () => dispatch => {
  dispatch({ type: GET_REMINDERS.REQUEST });

  axios
    .get(`${API_SERVER_URL}api/reminders`)
    .then(response =>
      dispatch({ type: GET_REMINDERS.SUCCESS, payload: response.data })
    )
    .catch(error => {
      dispatch({
        type: GET_REMINDERS.FAILURE,
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

const removeReminder = id => dispatch => {
  dispatch({ type: DELETE_REMINDER.REQUEST });

  axios
    .delete(`${API_SERVER_URL}api/reminders/${id}`)
    .then(
      response =>
        response.status === 204
          ? dispatch({ type: DELETE_REMINDER.SUCCESS, payload: id })
          : dispatch({ type: DELETE_REMINDER.FAILURE })
    )
    .catch(error => {
      if (error.response.status >= 400) {
        dispatch({
          type: DELETE_REMINDER.FAILURE,
          payload: {
            type: 'error',
            body: {
              status: error.response.status,
              statusText: error.response.statusText,
              data: error.response.data,
            },
          },
        });
      }
    });
};

const createReminder = reminderValue => dispatch => {
  dispatch({ type: CREATE_REMINDER.REQUEST });

  axios
    .post(`${API_SERVER_URL}api/reminders`, { value: reminderValue })
    .then(response =>
      dispatch({ type: CREATE_REMINDER.SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({
        type: EDIT_REMINDER.FAILURE,
        payload: {
          type: 'warning',
          body: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      })
    );
};

const editReminder = (reminderValue, reminderId) => dispatch => {
  dispatch({ type: EDIT_REMINDER.REQUEST });

  axios
    .put(`${API_SERVER_URL}api/reminders/${reminderId}`, {
      value: reminderValue,
    })
    .then(response =>
      dispatch({ type: EDIT_REMINDER.SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({
        type: EDIT_REMINDER.FAILURE,
        payload: {
          type: 'error',
          body: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      })
    );
};

export { getReminders, removeReminder, createReminder, editReminder };
