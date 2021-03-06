import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectStatus from '../components/project-status/project-status';
import { getCurrentStatus, setStatus } from '../actions/project-status';

const mapStateToProps = state => ({
  projectName: state.router.location.state.project.name,
  projectId: state.router.location.state.project.id,
  currentStatus: state.status.currentStatus,
  error: state.status.error,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCurrentStatus: bindActionCreators(getCurrentStatus, dispatch),
  dispatchSetStatus: bindActionCreators(setStatus, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectStatus);
