import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './helpers/store';
import history from './helpers/history';
import App from './components/app/app';
import { AUTHORIZATION } from './constants/authorization';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/styles.less';
import 'react-notifications/lib/notifications.css';

axios.interceptors.request.use(
  config => {
    if (AUTHORIZATION) {
      config.headers.authorization = `Bearer ${AUTHORIZATION.token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
