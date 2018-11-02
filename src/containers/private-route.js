import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  user,
  redirectPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
       user !== null ? (
        <Component {...props}>{props.children}</Component>
      ) : (
        <Redirect to={redirectPath} />
      )
    }
  />
);

const mapStateToProps = state => ({
  user: state.authorization.user,
});

export default connect(mapStateToProps)(PrivateRoute);
