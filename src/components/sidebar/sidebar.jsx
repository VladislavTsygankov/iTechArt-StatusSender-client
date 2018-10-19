import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCogs,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

import './sidebar.less';

class Sidebar extends React.Component {
  state = {
    isOpenDropdown: false,
  };

  onChangeDropdown = () => {
    const { isOpenDropdown } = this.state;

    this.setState({
      isOpenDropdown: !isOpenDropdown,
    });
  };

  render() {
    const { isOpenDropdown } = this.state;
    const { user } = this.props;

    return (
      <Col md={2} className={classNames('sidebar', { disable: user === null })}>
        <Row>
          <Col sm={12} md={12} className="sidebar__menu">
            <Row onClick={this.onChangeDropdown} className="sidebar__item">
              <Col md={2} sm={2} className="sidebar__item_icon-project">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </Col>
              <Col md={9} className="sidebar__title">
                Projects
                <ul
                  className={classNames({
                    dropdown_open: isOpenDropdown,
                    dropdown_close: !isOpenDropdown,
                  })}
                >
                  <li className="sidebar__subtitle">Project 1</li>
                  <li className="sidebar__subtitle">Project 2</li>
                </ul>
              </Col>
            </Row>
            <Row className="sidebar__item">
              <Col md={2} sm={2} className="sidebar__item_icon-history">
                <FontAwesomeIcon icon={faBook} />
              </Col>
              <Col md={9} className="sidebar__title">
                History
              </Col>
            </Row>
            <Row className="sidebar__item">
              <Col md={2}>
                <FontAwesomeIcon
                  icon={faCogs}
                  className="sidebar__item_icon-project-manager"
                />
              </Col>
              <Col md={9} className="sidebar__title">
                Project manager
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['user'])(Sidebar);
