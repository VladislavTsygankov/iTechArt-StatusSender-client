import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../containers/private-route';
import ProjectStatus from '../modules/project-status/containers/project-status';
import LoginForm from '../modules/login/containers/login-form';
import ProjectManager from '../modules/project-manager/containers/project-manager';

const routes = (
  <Switch>
    <PrivateRoute
      path="/myprojects"
      component={ProjectStatus}
      redirectPath="/login"
    />
    <PrivateRoute
      path="/project_manager"
      component={ProjectManager}
      redirectPath="/login"
    />
    <Route path="/login" component={LoginForm} />
  </Switch>
);

export default routes;
