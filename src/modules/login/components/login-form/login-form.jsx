import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { isLength } from 'validator';
import { Link } from 'react-router-dom';
import LoginGroup from '../login-group/login-group';

import './login-form.less';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    formErrors: {
      login: false,
      password: false,
    },
  };

  static propTypes = {
    dispatchSignIn: PropTypes.func.isRequired,
  };

  getLoginValidationState = () => {
    const { formErrors, login } = this.state;

    if (formErrors.login === true) {
      return 'success';
    }
    if (formErrors.login === false && login.length > 0) {
      return 'warning';
    }

    return null;
  };

  getPasswordValidationState = () => {
    const { formErrors, password } = this.state;

    if (formErrors.password === true) {
      return 'success';
    }
    if (formErrors.password === false && password.length > 0) {
      return 'warning';
    }

    return null;
  };

  onChangeLogin = event => {
    const { formErrors } = this.state;
    const { value } = event.target;
    const formErrorsField = formErrors;

    formErrorsField.login = isLength(value, { min: 3, max: 100 });

    this.setState({
      login: value,
      formErrors: formErrorsField,
    });
  };

  onChangePassword = event => {
    const { formErrors } = this.state;
    const { value } = event.target;
    const formErrorsField = formErrors;

    formErrorsField.password = isLength(value, { min: 5, max: 100 });

    this.setState({
      password: value,
      formErrors: formErrorsField,
    });
  };

  onLogin = () => {
    const { dispatchSignIn } = this.props;
    const { formErrors, login, password } = this.state;

    if (formErrors.login === true && formErrors.password === true) {
      dispatchSignIn({ username: login, password });
    } else {
      throw new Error('Incorrect login or password');
    }
  };

  render() {
    const { login, password } = this.state;

    return (
      <Col md={12}>
        <Row className="main">
          <Col md={8} className="login-form__container">
            <Row className="login-form__row">
              <Col md={10} mdPush={1}>
                <h1>Welcome to Status Sender</h1>
              </Col>
            </Row>
            <Row className="login-form__row">
              <Col md={10} mdPush={1}>
                <form className="login-form">
                  <LoginGroup
                    controlId="login"
                    validationState={this.getLoginValidationState}
                    onChange={this.onChangeLogin}
                    value={login}
                    placeholder="Enter login"
                    type="text"
                    label="Your login"
                  />
                  <LoginGroup
                    controlId="password"
                    validationState={this.getPasswordValidationState}
                    onChange={this.onChangePassword}
                    value={password}
                    placeholder="Enter password"
                    type="password"
                    label="Your password"
                  />
                </form>
              </Col>
            </Row>
            <Row className="login-form__row">
              <Col md={10} mdPush={1} className="login-form__buttons-container">
                <Link to="/myprojects">
                  <button
                    onClick={this.onLogin}
                    className="button submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default LoginForm;
