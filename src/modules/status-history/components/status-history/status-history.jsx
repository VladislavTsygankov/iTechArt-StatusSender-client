import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Row, Col, Pager } from 'react-bootstrap';
import StatusTable from '../status-table/status-table';
import Notification from '../../../../components/notification/notification';

import './status-history.less';

class StatusHistory extends Component {
  static propTypes = {
    dispatchGetStatuses: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    user: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number,
      ])
    ),
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    const { dispatchGetStatuses, currentPage } = this.props;

    dispatchGetStatuses(currentPage);
  }

  onNextPage = () => {
    const { dispatchGetStatuses, currentPage } = this.props;

    dispatchGetStatuses(currentPage + 1);
  };

  onPreviousPage = () => {
    const { dispatchGetStatuses, currentPage } = this.props;

    dispatchGetStatuses(currentPage - 1);
  };

  render() {
    const { user, statuses, currentPage, pages, error } = this.props;

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
            <Pager className="status-history__pager-container">
              <Pager.Item
                onClick={this.onPreviousPage}
                previous
                disabled={currentPage === 0}
              >
                &larr; Previous Page
              </Pager.Item>
              <Pager.Item
                onClick={this.onNextPage}
                next
                disabled={currentPage === pages - 1}
              >
                Next Page &rarr;
              </Pager.Item>
            </Pager>
          </Col>
        </Row>
        <Notification message={error} />
      </Col>
    );
  }
}

export default onlyUpdateForKeys([
  'statuses',
  'user',
  'error',
  'currentPage',
  'pages',
])(StatusHistory);
