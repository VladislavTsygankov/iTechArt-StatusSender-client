import React, { Component } from 'react';
import lodash from 'lodash';
import { onlyUpdateForKeys } from 'recompose';
import { Modal, Row, Col } from 'react-bootstrap';
import ModalSegment from '../modal-segment/modal-segment';
import ModalMembers from '../modal-members/modal-members';
import ModalTimePicker from '../modal-time-picker/modal-time-picker';
import MembersWidget from '../members-widget/members-widget';
import ModalFooter from '../modal-footer/modal-footer';
import ModalHeader from '../modal-header/modal-header';
import { DEFAULT_STATE } from '../../constants/default-state';

import './project-modal.less';

class ProjectModal extends Component {
  state = {
    isOpenMembersWidget: false,
    project: { ...DEFAULT_STATE },
    freeUsers: [],
  };

  static getDerivedStateFromProps(props, state) {
    if (props.projectInfo !== state.project) {
      return {
        project: props.projectInfo,
      };
    }

    if (props.users !== state.freeUsers) {
      return {
        freeUsers: lodash.xorWith(
          props.users,
          state.project.assignedUsers,
          lodash.isEqual
        ),
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

  onChangeTimeForSend = time => {
    const { project } = this.state;
    const changedProject = project;

    changedProject.timeForSend = time;

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

    if (projectInfo.id !== '') {
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
    const { project, freeUsers } = this.state;
    const changedProject = project;

    changedProject.assignedUsers = changedProject.assignedUsers.filter(
      assignedUser => assignedUser !== user
    );

    this.setState({
      project: changedProject,
      freeUsers: [...freeUsers, user],
    });
  };

  addAssignedUser = user => {
    const { project, freeUsers } = this.state;
    const changedProject = project;

    changedProject.assignedUsers = [...changedProject.assignedUsers, user];

    this.setState({
      project: changedProject,
      freeUsers: freeUsers.filter(freeUser => freeUser !== user),
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { project, isOpenMembersWidget, freeUsers } = this.state;

    return (
      <Modal
        backdrop="static"
        bsSize="large"
        show={isOpen}
        onHide={closeModal}
        className="project-modal"
      >
        <MembersWidget
          currentMembers={project.assignedUsers}
          freeUsers={freeUsers}
          projectId={project.id}
          isOpen={isOpenMembersWidget}
          onCloseWidget={this.onCloseMembersWidget}
          removeAssignedUser={this.removeAssignedUser}
          addAssignedUser={this.addAssignedUser}
        />
        <ModalHeader closeModal={closeModal} />
        <Modal.Body>
          <Row className="modal__body">
            <Col md={4} mdPush={1}>
              <ModalTimePicker
                inputLabel="Project name"
                pickerLabel="Time"
                inputValue={project.name}
                pickerValue={project.timeForSend}
                inputOnchange={this.onChangeProjectName}
                pickerOnChange={this.onChangeTimeForSend}
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
        <ModalFooter
          closeModal={closeModal}
          onSubmitProject={this.onSubmitProject}
        />
      </Modal>
    );
  }
}

export default onlyUpdateForKeys(['projectInfo', 'isOpen', 'users'])(
  ProjectModal
);
