import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Modal, Row, Col } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalSegment from '../modal-segment/modal-segment';
import ModalMembers from '../modal-members/modal-members';
import MembersWidget from '../members-widget/members-widget';
import { DEFAULT_STATE } from '../../constants/default-state';

import './project-modal.less';

class ProjectModal extends Component {
  state = {
    isOpenMembersWidget: false,
    project: { ...DEFAULT_STATE },
  };

  static getDerivedStateFromProps(props, state) {
    if (state.project.noAssignedUsers !== props.freeUsers) {
      const changedProject = state.project;

      changedProject.noAssignedUsers = props.freeUsers;

      return {
        project: changedProject,
      };
    }

    if (props.projectInfo !== props.project) {
      return {
        project: props.projectInfo,
      };
    }

    return null;
  }

  onChangeProjectName = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.name = value;

    this.setState({
      project: changedProject,
    });
  };

  onChangeGreeting = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.greeting = value;

    this.setState({
      project: changedProject,
    });
  };

  onChangeSignature = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.signature = value;

    this.setState({
      project: changedProject,
    });
  };

  onChangeTimeForSend = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.timeForSend = value;

    this.setState({
      project: changedProject,
    });
  };

  onChangeAddressees = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.addressees = value;

    this.setState({
      project: changedProject,
    });
  };

  onChangeCopyAddressees = event => {
    const { value } = event.target;
    const { project } = this.state;
    const changedProject = project;

    changedProject.copyAddressees = value;

    this.setState({
      project: changedProject,
    });
  };

  onSubmitProject = () => {
    const {
      projectInfo,
      onEditProject,
      onCreateProject,
      closeModal,
    } = this.props;
    const { project } = this.state;

    if (projectInfo !== null) {
      onEditProject(project);
      closeModal();
    } else {
      onCreateProject(project);
      closeModal();
    }
  };

  onOpenMembersWidget = () => {
    this.setState({
      isOpenMembersWidget: true,
    });
  };

  onCloseMembersWidget = () => {
    this.setState({
      isOpenMembersWidget: false,
    });
  };

  removeAssignedUser = user => {
    const { project } = this.state;
    const changedProject = project;

    changedProject.assignedUsers = changedProject.assignedUsers.filter(
      assignedUser => assignedUser !== user
    );
    changedProject.noAssignedUsers = [...changedProject.noAssignedUsers, user];

    this.setState({
      project: changedProject,
    });
  };

  addAssignedUser = user => {
    const { project } = this.state;
    const changedProject = project;

    changedProject.assignedUsers = [...changedProject.assignedUsers, user];
    changedProject.noAssignedUsers = changedProject.noAssignedUsers.filter(
      noAssignedUser => noAssignedUser !== user
    );

    this.setState({
      project: changedProject,
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { project, isOpenMembersWidget } = this.state;

    return (
      <Modal backdrop="static" bsSize="large" show={isOpen} onHide={closeModal}>
        <MembersWidget
          currentMembers={project.assignedUsers}
          freeUsers={project.noAssignedUsers}
          projectId={project.id}
          isOpen={isOpenMembersWidget}
          onCloseWidget={this.onCloseMembersWidget}
          removeAssignedUser={this.removeAssignedUser}
          addAssignedUser={this.addAssignedUser}
        />
        <Modal.Header>
          <div className="modal__header">
            <Modal.Title className="modal__title">
              Project management
            </Modal.Title>
            <FontAwesomeIcon
              icon={faTimes}
              className="modal__icon_close"
              onClick={closeModal}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Row className="modal__body">
            <Col md={4} mdPush={1}>
              <ModalSegment
                firstLabel="Project name"
                secondLabel="Time"
                firstValue={project.name}
                secondValue={project.timeForSend}
                firstOnChange={this.onChangeProjectName}
                secondOnChange={this.onChangeTimeForSend}
                caption="Main information"
              />
              <ModalMembers
                onOpenMembersWidget={this.onOpenMembersWidget}
                members={project.assignedUsers}
              />
            </Col>

            <Col md={4} mdOffset={3}>
              <ModalSegment
                firstLabel="Greeting"
                secondLabel="Signature"
                caption="Template"
                firstOnChange={this.onChangeGreeting}
                secondOnChange={this.onChangeSignature}
                firstValue={project.greeting === null ? '' : project.greeting}
                secondValue={
                  project.signature === null ? '' : project.signature
                }
              />
              <ModalSegment
                firstLabel="Addressees"
                secondLabel="Copy Addresses"
                caption="Distribution info"
                firstOnChange={this.onChangeAddressees}
                secondOnChange={this.onChangeCopyAddressees}
                firstValue={
                  project.addressees === null ? '' : project.addressees
                }
                secondValue={
                  project.copyAddressees === null ? '' : project.copyAddressees
                }
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="modal__footer">
          <div className="modal__button-container">
            <button type="button" className="button back" onClick={closeModal}>
              Back
            </button>
            <button
              type="button"
              className="button submit"
              onClick={this.onSubmitProject}
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default onlyUpdateForKeys(['projectInfo', 'isOpen', 'freeUsers'])(
  ProjectModal
);
