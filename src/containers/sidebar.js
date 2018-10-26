import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/sidebar/sidebar';
import { getUserProjects } from '../actions/sidebar';

const mapStateToProps = () => state => ({
  user: state.login.authorization.user,
  projects: state.sidebar.projects,
});

const mapDispatchToProps = () => dispatch => ({
  dispatchGetUserProjects: bindActionCreators(getUserProjects, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
