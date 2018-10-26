import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { onlyUpdateForKeys, compose, withHandlers } from 'recompose';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const MembersWidgetListItem = ({ icon, name, onClickHandler }) => (
  <Row className="members-widget__item">
    <Col md={8} className="members-widget__member-name">
      {name}
    </Col>
    <Col md={2}>
      <FontAwesomeIcon
        icon={icon}
        onClick={onClickHandler}
        className={classNames('square-icon', 'members-list__icon', {
          minus: icon === faMinusSquare,
          plus: icon === faPlusSquare,
        })}
      />
    </Col>
  </Row>
);

export default compose(
  onlyUpdateForKeys(['icon', 'name', 'user']),
  withHandlers({
    onClickHandler: ({ onIconClickHandler, user }) => () => {
      onIconClickHandler(user);
    },
  })
)(MembersWidgetListItem);
