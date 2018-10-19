import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/logo';

import './header.less';

const Header = ({ user }) => (
  <Row className="header">
    <Col md={2}>
      <Logo />
    </Col>
    <Col md={10}>
      {user ? (
        <Row className="header__toolbar">
          <Col md={1} sm={1} className="header__item">
            {user.user.username}
          </Col>
          <Col md={1} sm={1} className="header__item">
            <FontAwesomeIcon icon={faCog} /> Settings
          </Col>
          <Col md={2} sm={2} className="header__item">
            <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
          </Col>
        </Row>
      ) : (
        <Row className="header__toolbar">
          <Col md={2} className="header__item">
            <FontAwesomeIcon icon={faSignInAlt} /> Sign In
          </Col>
        </Row>
      )}
    </Col>
  </Row>
);

export default onlyUpdateForKeys(['user'])(Header);
