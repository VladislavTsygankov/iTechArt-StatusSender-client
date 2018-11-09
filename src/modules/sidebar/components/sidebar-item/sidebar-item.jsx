import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = ({ icon, name, iconClassName, path }) => (
  <Link to={path} className="link">
    <Row className="sidebar__item">
      <Col md={2}>
        <FontAwesomeIcon icon={icon} className={iconClassName} />
      </Col>
      <Col md={9} className="sidebar__title">
        {name}
      </Col>
    </Row>
  </Link>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['icon', 'name', 'iconClassName', 'path'])(
  SidebarItem
);
