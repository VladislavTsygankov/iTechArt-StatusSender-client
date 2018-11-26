import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys, compose, withHandlers } from 'recompose';
import { Row, Col } from 'react-bootstrap';
import { faPen, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './management-list-item.less';

const ManagementListItem = ({ value, onEditItem, onDeleteItem }) => (
  <Col md={12}>
    <Row className="list-item">
      <Col md={8}>
        <Row className="list-item__text">{value}</Row>
      </Col>
      <Col md={4}>
        <Row className="list-item__icon-container">
          <Col md={3} className="list-item__icon">
            <FontAwesomeIcon
              icon={faPen}
              className="pen"
              onClick={onEditItem}
            />
          </Col>
          <Col md={3} className="list-item__icon">
            <FontAwesomeIcon
              icon={faMinusSquare}
              className="minus"
              onClick={onDeleteItem}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);

ManagementListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};

export default compose(
  withHandlers({
    onDeleteItem: ({ onDeleteItemFromProps, itemId }) => () => {
      onDeleteItemFromProps(itemId);
    },
    onEditItem: ({ onEditItemFromProps, itemId }) => () => {
      onEditItemFromProps(itemId);
    },
  }),
  onlyUpdateForKeys(['value'])
)(ManagementListItem);
