import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

const ButtonsContainer = ({ onSetStatus, currentStatus }) => (
  <Row className="projects__button-container">
    <Col md={4} mdPull={1}>
      <button
        type="submit"
        className={classNames('button', 'submit', {
          disable: currentStatus !== null,
        })}
        onClick={onSetStatus}
      >
        Submit
      </button>
    </Col>
  </Row>
);

ButtonsContainer.propTypes = {
  onSetStatus: PropTypes.func.isRequired,
  currentStatus: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default onlyUpdateForKeys(['currentStatus'])(ButtonsContainer);
