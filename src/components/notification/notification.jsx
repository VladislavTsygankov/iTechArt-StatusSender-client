import React, { Component } from 'react';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    ),
  };

  componentDidUpdate(prevProps) {
    const { message } = this.props;

    if (prevProps.message !== message) {
      this.createNotification(message);
    }
  }

  createNotification = message => {
    switch (message.type) {
      case 'info':
        NotificationManager.info(
          message.body.data,
          `${message.body.status} ${message.body.statusText}`,
          3000
        );
        break;
      case 'warning':
        NotificationManager.warning(
          'Try again',
          `${message.body.status} ${message.body.statusText}`,
          5000
        );
        break;
      case 'error':
        NotificationManager.error(
          'SORRY T_T',
          `${message.body.status} ${message.body.statusText}`,
          5000
        );
        break;
      default:
        return null;
    }

    return null;
  };

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}

export default onlyUpdateForKeys(['message'])(Notification);
