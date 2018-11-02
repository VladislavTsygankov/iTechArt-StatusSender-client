import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Modal, Row, Col, Tab, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faMinusSquare,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import MembersWidgetListItem from '../members-widget-list/member-widget-list';

import './members-widget.less';

const MembersWidget = ({
  isOpen,
  onCloseWidget,
  currentMembers = [],
  freeUsers = [],
  removeAssignedUser,
  addAssignedUser,
}) => (
  <Modal backdrop="static" bsSize="sm" show={isOpen}>
    <Modal.Header>
      <div className="modal__header">
        <Modal.Title className="modal__title">{`${
          currentMembers.length
        } members`}</Modal.Title>
        <FontAwesomeIcon
          icon={faTimes}
          className="modal__icon_close"
          onClick={onCloseWidget}
        />
      </div>
    </Modal.Header>
    <Modal.Body>
      <Tab.Container
        id="members-widget"
        className="members-widget__tab-container"
        defaultActiveKey="first"
      >
        <Row>
          <Col sm={12}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="first" className="members-widget__tab">
                Current members
              </NavItem>
              <NavItem eventKey="second" className="members-widget__tab">
                Add Members
              </NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                <Col md={12} className="members-widget__list">
                  {currentMembers.length > 0 ? (
                    currentMembers.map(member => (
                      <MembersWidgetListItem
                        icon={faMinusSquare}
                        name={member.username}
                        key={member.id}
                        user={member}
                        onIconClickHandler={removeAssignedUser}
                      />
                    ))
                  ) : (
                    <Row>No current members</Row>
                  )}
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Col md={12} className="members-widget__list">
                  {freeUsers.length > 0 ? (
                    freeUsers.map(freeUser => (
                      <MembersWidgetListItem
                        name={freeUser.username}
                        key={freeUser.id}
                        user={freeUser}
                        onIconClickHandler={addAssignedUser}
                        icon={faPlusSquare}
                      />
                    ))
                  ) : (
                    <Row>There are no free users for this project</Row>
                  )}
                </Col>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Modal.Body>
  </Modal>
);

export default onlyUpdateForKeys(['isOpen', 'freeUsers', 'currentMembers'])(
  MembersWidget
);
