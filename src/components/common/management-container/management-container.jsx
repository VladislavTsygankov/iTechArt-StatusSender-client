import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Row, Col } from 'react-bootstrap';
import ManagementListItem from '../management-list-item/management-list-item';
import AddButton from '../button-add/button-add';

import './management-container.less';

const ManagementContainer = ({
  items,
  onCreateHandler,
  onEditHandler,
  onDeleteHandler,
}) => (
  <Row className="main">
    <Col md={11} className="main__manager-container">
      <Row className="main__caption"> Project manager</Row>
      <Row className="main__content">
        <Col md={9}>
          <Row className="main__list-container">
            {items
              ? items.map(item => (
                  <ManagementListItem
                    value={item.name || item.value}
                    key={item.id}
                    onEditItemFromProps={onEditHandler}
                    onDeleteItemFromProps={onDeleteHandler}
                    itemId={item.id}
                  />
                ))
              : null}
          </Row>
        </Col>
        <AddButton onClickHandler={onCreateHandler} />
      </Row>
    </Col>
  </Row>
);

ManagementContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreateHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['items'])(ManagementContainer);
