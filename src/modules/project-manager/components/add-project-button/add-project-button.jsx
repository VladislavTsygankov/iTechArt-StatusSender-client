import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './add-project-button.less';

const AddProjectButton = ({ onClickHandler }) => (
  <Col md={2}>
    <FontAwesomeIcon
      icon={faPlusCircle}
      className="project-manager__add-icon"
      onClick={onClickHandler}
    />
  </Col>
);

export default AddProjectButton;
