import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminPrivateRoute = ({
  component: Component,
  isAuthenticate,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (user !== null && user.role === 'admin') {
        return <Component {...props}>{props.children}</Component>;
      }

      if (user !== null) {
        alert('Insufficient permissions');
        return <Redirect to="/home" />;
      }

      return <Redirect to="/login" />;
    }}
  />
);

const mapStateToProps = state => ({
  user: state.authorization.user,
});

export default connect(mapStateToProps)(AdminPrivateRoute);
