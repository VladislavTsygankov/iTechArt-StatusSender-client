import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StatusHistory from '../components/status-history/status-history';
import { getStatusHistory } from '../actions/status-history';

const mapStateToProps = state => ({
  statuses: state.statusHistory.statuses,
  user: state.authorization.user,
  currentPage: state.statusHistory.currentPage,
  pages: state.statusHistory.pages,
  error: state.statusHistory.error,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetStatuses: bindActionCreators(getStatusHistory, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusHistory);
