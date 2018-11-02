import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './button-add.less';

const AddButton = ({ onClickHandler }) => (
  <Col md={2}>
    <FontAwesomeIcon
      icon={faPlusCircle}
      className="button__add-icon"
      onClick={onClickHandler}
    />
  </Col>
);

AddButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default AddButton;
