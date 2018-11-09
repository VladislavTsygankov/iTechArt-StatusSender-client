import { handleActions } from 'redux-actions';
import { GET_STATUS_HISTORY } from '../constants/status-history';

const INITIAL_STATE = {
  isLoading: false,
  error: {
    type: '',
    body: null,
  },
  statuses: [],
  currentPage: 0,
  pages: 0,
};

const statusHistoryReducer = handleActions(
  {
    [GET_STATUS_HISTORY.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_STATUS_HISTORY.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      statuses: action.payload.statuses,
      currentPage: action.payload.currentPage,
      pages: action.payload.pages,
    }),
    [GET_STATUS_HISTORY.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  INITIAL_STATE
);

export default statusHistoryReducer;
