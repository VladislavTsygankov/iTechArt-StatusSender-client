import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

const StatusInputArea = ({ status, onChangeStatusText }) => (
  <Col md={10} mdPush={2} style={{ height: '100%' }}>
    <Row className="projects__caption">
      <h2>Enter your status:</h2>
    </Row>
    <Row className="projects__status-textarea">
      <textarea
        onChange={onChangeStatusText}
        value={status}
        name="status"
        placeholder="Status..."
        className="projects__status-textarea_big"
      />
    </Row>
  </Col>
);

StatusInputArea.propTypes = {
    status: PropTypes.string.isRequired,
    onChangeStatusText: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['status'])(StatusInputArea);
