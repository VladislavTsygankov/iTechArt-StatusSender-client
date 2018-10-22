import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import momentService from '../../../../services/moment-service';

import './project-status.less';

class ProjectStatus extends Component {
  state = {
    statusText: '',
  };

  static propTypes = {
    projectId: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    dispatchGetCurrentStatus: PropTypes.func.isRequired,
    dispatchSetStatus: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatchGetCurrentStatus, projectId } = this.props;

    dispatchGetCurrentStatus(projectId);
  }

  shouldComponentUpdate(nextProps) {
    const {
      projectName,
      currentStatus,
      dispatchGetCurrentStatus,
      projectId,
    } = this.props;

    if (
      projectName !== nextProps.projectName &&
      projectId !== nextProps.projectId
    ) {
      dispatchGetCurrentStatus(nextProps.projectId);
      return true;
    }

    if (currentStatus !== nextProps.currentStatus) {
      return true;
    }

    return false;
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
    const { projectName, currentStatus } = this.props;

    return (
      <Col md={10}>
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
                <Col md={10} mdPush={2}>
                  <Row className="projects__message">
                    {`Status:  <<${
                      currentStatus.status
                    }>>  was sent today(${momentService.convertDate(
                      currentStatus.date
                    )}) at ${momentService.convertTime(
                      currentStatus.time
                    )} on UTC.`}
                  </Row>
                </Col>
              ) : (
                <Col md={10} mdPush={2} style={{ height: '100%' }}>
                  <Row className="projects__caption">
                    <h2>Enter your status:</h2>
                  </Row>
                  <Row className="projects__status-textarea">
                    <textarea
                      onChange={this.onChangeStatusText}
                      name="status"
                      placeholder="Status..."
                      className="projects__status-textarea_big"
                    />
                  </Row>
                </Col>
              )}
            </Row>
            <Row className="projects__button-container">
              <Col md={4} mdPull={1}>
                <button
                  type="submit"
                  className={classNames('button', 'submit', {
                    disable: currentStatus !== null,
                  })}
                  onClick={this.onSetStatus}
                >
                  Submit
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default ProjectStatus;
