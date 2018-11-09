import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ButtonsContainer from '../buttons-container/project-status-buttons-container';
import StatusInputArea from '../status-input-area/status-input-area';
import CurrentStatus from '../current-status/current-status';
import Notification from '../../../../components/notification/notification';

import './project-status.less';

class ProjectStatus extends Component {
  state = {
    statusText: '',
  };

  static propTypes = {
    projectId: PropTypes.number,
    projectName: PropTypes.string,
    dispatchGetCurrentStatus: PropTypes.func.isRequired,
    dispatchSetStatus: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatchGetCurrentStatus, projectId } = this.props;

    dispatchGetCurrentStatus(projectId);
  }

  componentWillReceiveProps(nextProps) {
    const { projectId, projectName } = this.props;

    if (
      projectId !== nextProps.projectId &&
      projectName !== nextProps.projectName
    ) {
      this.setState({
        statusText: '',
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { projectName, projectId, dispatchGetCurrentStatus } = this.props;

    if (
      projectId !== prevProps.projectId &&
      projectName !== prevProps.projectName
    ) {
      dispatchGetCurrentStatus(projectId);
    }
  }

  onSetStatus = () => {
    const { statusText } = this.state;
    const { dispatchSetStatus, projectId } = this.props;

    if (statusText.length > 20) {
      dispatchSetStatus(statusText, projectId);
    }
  };

  onChangeStatusText = event => {
    this.setState({
      statusText: event.target.value,
    });
  };

  render() {
    const { statusText } = this.state;
    const { projectName, currentStatus, error } = this.props;

    return (
      <Col md={10}>
        <Notification message={error} />
        <Row className="main">
          <Col md={8} className="projects__content">
            <Row className="projects__name">
              <Col md={10} mdPush={2}>
                <Row>
                  <h1>{projectName}</h1>
                </Row>
              </Col>
            </Row>
            <Row className="projects__status-container">
              {currentStatus ? (
                <CurrentStatus currentStatus={currentStatus} />
              ) : (
                <StatusInputArea
                  onChangeStatusText={this.onChangeStatusText}
                  status={statusText}
                />
              )}
            </Row>
            <ButtonsContainer
              onSetStatus={this.onSetStatus}
              currentStatus={currentStatus}
            />
          </Col>
        </Row>
      </Col>
    );
  }
}

export default onlyUpdateForKeys([
  'projectName',
  'projectId',
  'currentStatus',
  'error',
])(ProjectStatus);
