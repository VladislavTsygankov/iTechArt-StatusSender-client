import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectManager from '../components/project-manager/project-manager';
import {
  getAllProjects,
  deleteProjectById,
  createProject,
  editProjectById,
} from '../actions/project-manager';
import { getFreeUsersByProjectId } from '../actions/members-widget';

const mapStateToProps = state => ({
  projects: state.projectsManager.projects,
  users: state.usersWidget.users,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAllProjects: bindActionCreators(getAllProjects, dispatch),
  dispatchDeleteProjectById: bindActionCreators(deleteProjectById, dispatch),
  dispatchEditProject: bindActionCreators(editProjectById, dispatch),
  dispatchCreateProject: bindActionCreators(createProject, dispatch),
  dispatchGetUsers: bindActionCreators(
    getFreeUsersByProjectId,
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectManager);
