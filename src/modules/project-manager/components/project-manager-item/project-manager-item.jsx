import React from 'react';
import { compose, withHandlers, onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPen } from '@fortawesome/free-solid-svg-icons';

const ProjectManagerItem = ({
  name,
  onDeleteProjectItem,
  onEditProjectItem,
}) => (
  <Col md={12}>
    <Row className="project-manager__projects-list-item">
      <Col md={8}>
        <Row className="project-manager__project-name">{name}</Row>
      </Col>
      <Col md={4}>
        <Row className="project-manager__icons-container">
          <Col md={3} className="project-manager__icon">
            <FontAwesomeIcon
              icon={faPen}
              className="pen"
              onClick={onEditProjectItem}
            />
          </Col>
          <Col md={3} className="project-manager__icon">
            <FontAwesomeIcon
              icon={faMinusSquare}
              className="minus"
              onClick={onDeleteProjectItem}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);

ProjectManagerItem.propTypes = {
  name: PropTypes.string.isRequired,
  onDeleteProjectItem: PropTypes.func.isRequired,
  onEditProjectItem: PropTypes.func.isRequired,
};

export default compose(
  withHandlers({
    onDeleteProjectItem: ({ onDeleteProject, projectId }) => () => {
      onDeleteProject(projectId);
    },
    onEditProjectItem: ({ onEditProject, projectId }) => () => {
      onEditProject(projectId);
    },
  }),
  onlyUpdateForKeys(['name'])
)(ProjectManagerItem);
