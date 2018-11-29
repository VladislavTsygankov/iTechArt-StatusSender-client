import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import ReminderModal from '../reminder-modal/reminder-modal';
import ManagementContainer from '../../../../components/common/management-container/management-container';
import Notification from '../../../../components/notification/notification';
import timeHelper from '../../../../helpers/time-helper';

class Reminders extends Component {
  state = {
    isOpenReminderModal: false,
    reminderValue: 0,
    openReminderId: null,
  };

  componentDidMount() {
    const { dispatchGetUserReminders } = this.props;

    dispatchGetUserReminders();
  }

  onOpenModal = () => {
    this.setState({
      isOpenReminderModal: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isOpenReminderModal: false,
      reminderValue: 0,
      openReminderId: null,
    });
  };

  onChangeReminderValue = time => {
    this.setState({
      reminderValue: time,
    });
  };

  onSubmitReminder = () => {
    const { dispatchCreateReminder, dispatchEditReminder } = this.props;
    const { reminderValue, openReminderId } = this.state;

    if (openReminderId === null) {
      dispatchCreateReminder(timeHelper.getTimeFromSeconds(reminderValue));
      this.onCloseModal();
    } else {
      dispatchEditReminder(
        timeHelper.getTimeFromSeconds(reminderValue),
        openReminderId
      );
      this.onCloseModal();
    }
  };

  onEditReminder = id => {
    const { reminders } = this.props;
    const foundReminder = reminders.filter(reminder => reminder.id === id)[0];

    this.setState({
      openReminderId: foundReminder.id,
      reminderValue: foundReminder.value,
    });

    this.onOpenModal();
  };

  sortReminderByTime = () => {
    const { reminders } = this.props;

    return reminders.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }

      if (a.value < b.value) {
        return -1;
      }

      return 0;
    });
  };

  render() {
    const { isOpenReminderModal, reminderValue } = this.state;
    const { dispatchRemoveReminder, error } = this.props;

    return (
      <Col md={10}>
        <Notification message={error} />
        <ReminderModal
          isOpen={isOpenReminderModal}
          onChangeReminderValue={this.onChangeReminderValue}
          value={reminderValue}
          onSubmit={this.onSubmitReminder}
          onClose={this.onCloseModal}
        />
        <ManagementContainer
          items={this.sortReminderByTime()}
          onDeleteHandler={dispatchRemoveReminder}
          onEditHandler={this.onEditReminder}
          onCreateHandler={this.onOpenModal}
          pageName="Reminders"
        />
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['reminders', 'error'])(Reminders);
