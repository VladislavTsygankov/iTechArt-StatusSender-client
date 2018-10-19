import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticate,
  redirectPath,
  ...rest
}) => {
  console.log(isAuthenticate);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticate ? (
          <Component {...props}>{props.children}</Component>
        ) : (
          <Redirect to={redirectPath} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticate: state.login.authorization.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
