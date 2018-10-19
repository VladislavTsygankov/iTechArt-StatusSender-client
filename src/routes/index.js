import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../containers/private-route';
import ProjectStatus from '../modules/project-status/components/project-status/project-status';
import LoginForm from '../modules/login/containers/login-form';

const routes = (
  <Switch>
    <PrivateRoute
      path="/myprojects"
      component={ProjectStatus}
      redirectPath="/login"
    />
    <Route path="/login" component={LoginForm} />
  </Switch>
);

export default routes;
