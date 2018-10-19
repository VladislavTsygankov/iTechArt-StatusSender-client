import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Row, Col, Grid } from 'react-bootstrap';
import { ConnectedRouter } from 'connected-react-router';
import Sidebar from '../../containers/sidebar';
import Header from '../../containers/header';
import routes from '../../routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Grid fluid>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Sidebar />
        <Col md={10}>
          <Row className="main">{routes}</Row>
        </Col>
      </Row>
    </Grid>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['history'])(App);
