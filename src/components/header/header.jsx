import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
            {user.username}
          </Col>
          <Col md={1} sm={1}>
            <Link to="/settings" className="header__item">
              <FontAwesomeIcon icon={faCog} /> Settings
            </Link>
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

Header.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])
  ),
};

export default onlyUpdateForKeys(['user'])(Header);
