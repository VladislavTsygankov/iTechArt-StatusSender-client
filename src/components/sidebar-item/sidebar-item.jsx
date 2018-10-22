import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = ({
  icon,
  name,
  iconClassName,
  dropdownItems,
  isOpenDropdown,
  onClickHandler,
}) => (
  <Row className="sidebar__item">
    <Col md={2} onClick={onClickHandler}>
      <FontAwesomeIcon icon={icon} className={iconClassName} />
    </Col>
    <Col
      md={9}
      className={classNames('sidebar__title', {
        dropdown_open_title: isOpenDropdown,
      })}
    >
      <Row onClick={onClickHandler}>{name}</Row>
      {dropdownItems ? (
        <Row
          className={classNames({
            dropdown_open: isOpenDropdown,
            dropdown_close: !isOpenDropdown,
          })}
        >
          {dropdownItems.map(dropdownItem => (
            <Link
              key={dropdownItem.Id}
              className="sidebar__subtitle"
              to={{
                pathname: '/myprojects',
                state: {
                  project: dropdownItem,
                },
              }}
            >
              {dropdownItem.name}
            </Link>
          ))}
        </Row>
      ) : null}
    </Col>
  </Row>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOpenDropdown: PropTypes.bool,
  iconClassName: PropTypes.string.isRequired,
  dropdownItems: PropTypes.arrayOf(PropTypes.object),
  onClickHandler: PropTypes.func,
};

export default onlyUpdateForKeys([
  'icon',
  'name',
  'isOpenDropdown',
  'iconClassName',
  'dropdownItems',
])(SidebarItem);
