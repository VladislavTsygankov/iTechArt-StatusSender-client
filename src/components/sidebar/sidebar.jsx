import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  faBook,
  faCogs,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import SidebarItem from '../sidebar-item/sidebar-item';
import SidebarDropdown from '../sidebar-dropdown/sidebar-dropdown';

import './sidebar.less';

class Sidebar extends React.Component {
  state = {
    isOpenDropdown: false,
  };

  componentDidMount() {
    const { dispatchGetUserProjects, user } = this.props;

    if (user) {
      dispatchGetUserProjects();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { user, projects, dispatchGetUserProjects } = this.props;
    const { isOpenDropdown } = this.state;

    if (user !== nextProps.user) {
      dispatchGetUserProjects();

      return true;
    }

    if (projects !== nextProps.projects) {
      return true;
    }

    if (isOpenDropdown !== nextState.isOpenDropdown) {
      return true;
    }

    return false;
  }

  onChangeDropdown = () => {
    const { isOpenDropdown } = this.state;
    const { projects } = this.props;

    if (projects.length === 0) {
      alert('You are do not have current projects');
    } else {
      this.setState({
        isOpenDropdown: !isOpenDropdown,
      });
    }
  };

  render() {
    const { isOpenDropdown } = this.state;
    const { user, projects } = this.props;

    return user === null ? null : (
      <Col md={2} className="sidebar">
        <Row>
          <Col sm={12} md={12} className="sidebar__menu">
            <SidebarDropdown
              isOpenDropdown={isOpenDropdown}
              icon={faProjectDiagram}
              iconClassName="sidebar__item_icon-project"
              dropdownItems={projects}
              onClickHandler={this.onChangeDropdown}
              name="Projects"
              path="/myprojects"
            />
            <SidebarItem
              icon={faBook}
              name="History"
              iconClassName="sidebar__item_icon-history"
              path="/history"
            />
            <SidebarItem
              icon={faCogs}
              name="Project Manager"
              iconClassName="sidebar__item_icon-project-manager"
              path="/project_manager"
            />
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Sidebar;
