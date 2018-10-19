import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './project-status.less';

const ProjectStatus = () => (
  <Col md={8} className="projects__content">
    <Row className="projects__name">
      <Col md={10} mdPush={2}>
        <Row>
          <h1>Project #1</h1>
        </Row>
      </Col>
    </Row>
    <Row className="projects__status-container">
      <Col md={10} mdPush={2} style={{ height: '100%' }}>
        <Row className="projects__caption">
          <h2>Enter your status:</h2>
        </Row>
        <Row className="projects__status-textarea">
          <textarea
            name="status"
            placeholder="Status..."
            className="projects__status-textarea_big"
          />
        </Row>
      </Col>
    </Row>
    <Row className="projects__button-container">
      <Col md={4} mdPull={1}>
        <button type="submit" bsStyle="primary" className="button">
          Submit
        </button>
      </Col>
    </Row>
  </Col>
);

export default ProjectStatus;