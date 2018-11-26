import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Col } from 'react-bootstrap';
import ManagementContainer from '../../../../components/common/management-container/management-container';
import ProjectModal from '../project-modal/project-modal';
import { DEFAULT_STATE } from '../../constants/default-state';
import Notification from '../../../../components/notification/notification';

class ProjectManager extends Component {
  state = {
    isOpenProjectModal: false,
    projectInfo: { ...DEFAULT_STATE },
  };

  componentDidMount() {
    const { dispatchGetAllProjects, dispatchGetUsers } = this.props;

    dispatchGetAllProjects();
    dispatchGetUsers();
  }

  onDeleteProject = id => {
    const { dispatchDeleteProjectById } = this.props;

    dispatchDeleteProjectById(id);
  };

  onOpenProjectModal = () => {
    this.setState({
      isOpenProjectModal: true,
    });
  };

  onCloseProjectModal = () => {
    this.setState({
      isOpenProjectModal: false,
      projectInfo: { ...DEFAULT_STATE },
    });
  };

  onChangeProjectInfo = id => {
    const { projects } = this.props;

    if (id) {
      const foundProject = projects.filter(project => project.id === id)[0];

      this.onOpenProjectModal();

      this.setState({
        projectInfo: { ...foundProject },
      });
    } else {
      this.onOpenProjectModal();

      this.setState({
        projectInfo: { ...DEFAULT_STATE },
      });
    }
  };

  onCreateProject = () => {
    this.onChangeProjectInfo();
  };

  onEditProject = id => {
    this.onChangeProjectInfo(id);
  };

  render() {
    const {
      projects,
      dispatchEditProject,
      dispatchCreateProject,
      users,
      error,
    } = this.props;
    const { isOpenProjectModal, projectInfo } = this.state;    

    return (
      <Col md={10}>
        <Notification message={error} />
        <ProjectModal
          isOpen={isOpenProjectModal}
          closeModal={this.onCloseProjectModal}
          openModal={this.onOpenProjectModal}
          projectInfo={projectInfo}
          onCreateProject={dispatchCreateProject}
          onEditProject={dispatchEditProject}
          users={users}
        />
        <ManagementContainer
          pageName="Project Manager"
          items={projects}
          onDeleteHandler={this.onDeleteProject}
          onEditHandler={this.onEditProject}
          onCreateHandler={this.onCreateProject}
        />
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['projects', 'users', 'error'])(ProjectManager);
