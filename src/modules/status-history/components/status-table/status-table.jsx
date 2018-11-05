import React from 'react';
import moment from 'moment';
import { onlyUpdateForKeys } from 'recompose';
import { Table } from 'react-bootstrap';

import './status-table.less';

const StatusTable = ({
  statuses,
  user,
  onSortByUsername,
  onSortByProjectName,
}) => (
  <Table bordered condensed hover className="status-history__table">
    <thead>
      <tr>
        <th>№</th>
        <th onClick={onSortByProjectName}>Project</th>
        {user.role === 'admin' ? (
          <th onClick={onSortByUsername}>Username</th>
        ) : null}
        <th className="table__status">Status</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {statuses.map((status, index) => (
        <tr key={status.id}>
          <td>{index}</td>
          <td>{status.Project.name}</td>
          {user.role === 'admin' ? <td>{status.User.username}</td> : null}
          <td>{status.status}</td>
          <td>{status.time}</td>
          <td>{moment(status.date).format('DD/MM/YYYY')}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default onlyUpdateForKeys(['statuses', 'user'])(StatusTable);
