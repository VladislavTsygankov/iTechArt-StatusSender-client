import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../containers/private-route';
import AdminPrivateRoute from '../containers/admin-private-route';
import ProjectStatus from '../modules/project-status/containers/project-status';
import LoginForm from '../modules/login/containers/login-form';
import ProjectManager from '../modules/project-manager/containers/project-manager';
import Reminders from '../modules/reminders/containers/reminders';

const routes = (
  <Switch>
    <PrivateRoute
      path="/myprojects"
      component={ProjectStatus}
      redirectPath="/login"
    />
    <AdminPrivateRoute
      path="/project_manager"
      component={ProjectManager}
    />
    <PrivateRoute
      path="/settings"
      component={Reminders}
      redirectPath="/login"
    />
    <Route path="/login" component={LoginForm} />
  </Switch>
);

export default routes;
