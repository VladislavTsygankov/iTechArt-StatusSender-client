import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ModalMembers = ({ members = [], onOpenMembersWidget }) => (
  <Row className="modal-segment">
    <Col md={12}>
      <Row className="modal-segment__caption">Members</Row>
      <Row>
        <Col md={9} className="modal-segment__member-list">
          {members.length > 0 
            ? members.map(member => (
                <Row className="modal-segment__member" key={member.id}>{member.username}</Row>
              ))
            : (<Row>No current members</Row>)}
        </Col>
        <Col md={2}>
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="modal-segment__icon"
            onClick={onOpenMembersWidget}
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default onlyUpdateForKeys(['members'])(ModalMembers);
