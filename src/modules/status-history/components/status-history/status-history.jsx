import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Row, Col } from 'react-bootstrap';
import StatusTable from '../status-table/status-table';

import './status-history.less';

class StatusHistory extends Component {
  componentDidMount() {
    const { dispatchGetStatuses } = this.props;

    dispatchGetStatuses();
  }

  render() {
    const { user, statuses } = this.props;

    return (
      <Col md={10}>
        <Row className="main">
          <Col md={10} className="status-history__container">
            <Row className="status-history__caption">History</Row>
            <Row className="status-history__table-container">
              <StatusTable
                statuses={statuses}
                user={user}
                onSortByUsername={this.onChangeSortByUsername}
                onSortByProjectName={this.onChangeSortByProjectName}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default onlyUpdateForKeys(['statuses', 'user'])(StatusHistory);
