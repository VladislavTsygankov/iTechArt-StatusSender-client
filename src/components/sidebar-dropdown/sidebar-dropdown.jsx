import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { onlyUpdateForKeys } from 'recompose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarDropdown = ({
  dropdownItems,
  isOpenDropdown,
  path,
  iconClassName,
  onClickHandler,
  icon,
  name,
}) => (
  <Row className="sidebar__item">
    <Col md={2}>
      <FontAwesomeIcon
        className={iconClassName}
        icon={icon}
        onClick={onClickHandler}
      />
    </Col>
    <Col md={9} className="sidebar__title">
      <Row onClick={onClickHandler} className="sidebar__title-text">
        {name}
      </Row>
      <Row
        className={classNames({
          dropdown_open: isOpenDropdown,
          dropdown_close: !isOpenDropdown,
        })}
      >
        {dropdownItems.map(dropdownItem => (
          <Link
            key={dropdownItem.id}
            className="sidebar__subtitle"
            to={{
              pathname: path,
              state: {
                project: dropdownItem,
              },
            }}
          >
            {dropdownItem.name}
          </Link>
        ))}
      </Row>
    </Col>
  </Row>
);

SidebarDropdown.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpenDropdown: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys([
  'dropdownItems',
  'isOpenDropdown',
  'path',
  'icon',
  'iconClassName',
])(SidebarDropdown);
