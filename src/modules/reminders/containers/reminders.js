import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reminders from '../components/reminders/reminders';
import {
  getReminders,
  removeReminder,
  createReminder,
  editReminder,
} from '../actions/reminders';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
  error: state.reminders.error,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUserReminders: bindActionCreators(getReminders, dispatch),
  dispatchRemoveReminder: bindActionCreators(removeReminder, dispatch),
  dispatchCreateReminder: bindActionCreators(createReminder, dispatch),
  dispatchEditReminder: bindActionCreators(editReminder, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminders);
