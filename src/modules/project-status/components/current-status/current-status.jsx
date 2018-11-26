import React from 'react';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

const CurrentStatus = ({ currentStatus }) => (
  <Col md={10} mdPush={2} className="projects__message">
    <Row className="project__message_status project__message_line">
      {`Status : ${currentStatus.status}`}
    </Row>
    <Row className="project__message_line">
      {`Date : ${moment(currentStatus.date).utc().format('DD/MM/YYYY')}`}
    </Row>
    <Row className="project__message_line">
      {`At time : ${currentStatus.time}`}
    </Row>
  </Col>
);

CurrentStatus.propTypes = {
  currentStatus: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default onlyUpdateForKeys(['currentStatus'])(CurrentStatus);
