import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Col, Row } from 'react-bootstrap';
import {
  faBook,
  faCogs,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import SidebarItem from '../sidebar-item/sidebar-item';

import './sidebar.less';

class Sidebar extends React.Component {
  state = {
    isOpenDropdown: false,
  };

  componentDidMount() {
    const {user, dispatchGetUserProjects } = this.props;

    if(user !== null){
      dispatchGetUserProjects();
    };
  }

  onChangeDropdown = () => {
    const { isOpenDropdown } = this.state;

    this.setState({
      isOpenDropdown: !isOpenDropdown,
    });
  };

  render() {
    const { isOpenDropdown } = this.state;
    const { user, projects } = this.props;

    return user === null ? null : (
      <Col md={2} className="sidebar">
        <Row>
          <Col sm={12} md={12} className="sidebar__menu">
            <SidebarItem
              isOpenDropdown={isOpenDropdown}
              icon={faProjectDiagram}
              iconClassName="sidebar__item_icon-project"
              dropdownItems={projects}
              onClickHandler={this.onChangeDropdown}
              name="Projects"
            />
            <SidebarItem
              icon={faBook}
              name="History"
              iconClassName="sidebar__item_icon-history"
            />
            <SidebarItem
              icon={faCogs}
              name="Project Manager"
              iconClassName="sidebar__item_icon-project-manager"
            />
          </Col>
        </Row>
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['user', 'projects'])(Sidebar);
