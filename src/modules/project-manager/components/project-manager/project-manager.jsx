import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Row, Col } from 'react-bootstrap';
import ProjectManagerItem from '../project-manager-item/project-manager-item';
import AddProjectButton from '../add-project-button/add-project-button';
import ProjectModal from '../project-modal/project-modal';
import { DEFAULT_STATE } from '../../constants/default-state';

import './project-manager.less';

class ProjectManager extends Component {
  state = {
    isOpenProjectModal: false,
    projectInfo: { ...DEFAULT_STATE },
  };

  componentDidMount() {
    const { dispatchGetAllProjects } = this.props;

    dispatchGetAllProjects();
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

      this.setState({
        projectInfo: { ...foundProject },
      });
    } else {
      this.setState({
        projectInfo: { ...DEFAULT_STATE },
      });
    }
  };

  onCreateProject = () => {
    const { dispatchGetFreeUsersByProjectId } = this.props;

    dispatchGetFreeUsersByProjectId();

    this.onChangeProjectInfo();
    this.onOpenProjectModal();
  };

  onEditProject = id => {
    const { dispatchGetFreeUsersByProjectId } = this.props;

    dispatchGetFreeUsersByProjectId(id);
    this.onChangeProjectInfo(id);
    this.onOpenProjectModal();
  };

  render() {
    const {
      projects,
      dispatchEditProject,
      dispatchCreateProject,
      freeUsers,
    } = this.props;
    const { isOpenProjectModal, projectInfo } = this.state;

    return (
      <Col md={10}>
        <ProjectModal
          isOpen={isOpenProjectModal}
          closeModal={this.onCloseProjectModal}
          openModal={this.onOpenProjectModal}
          projectInfo={projectInfo}
          onCreateProject={dispatchCreateProject}
          onEditProject={dispatchEditProject}
          freeUsers={freeUsers}
        />
        <Row className="main">
          <Col md={11} className="project-manager__container">
            <Row className="project-manager__caption"> Project manager</Row>
            <Row className="project-manager">
              <Col md={9}>
                <Row className="project-manager__projects-list-container">
                  {projects
                    ? projects.map(project => (
                        <ProjectManagerItem
                          name={project.name}
                          key={project.id}
                          onEditProject={this.onEditProject}
                          onDeleteProject={this.onDeleteProject}
                          projectId={project.id}
                        />
                      ))
                    : null}
                </Row>
              </Col>
              <AddProjectButton onClickHandler={this.onCreateProject} />
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['projects', 'freeUsers'])(ProjectManager);
