import React from 'react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap';

const LoginGroup = ({
  controlId,
  validationState,
  onChange,
  value,
  placeholder,
  type,
  label,
}) => (
  <FormGroup
    controlId={controlId}
    validationState={validationState()}
    className="login-form__group"
  >
    <ControlLabel className="login-form__control-label">
      {label}
    </ControlLabel>
    <FormControl
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </FormGroup>
);

export default LoginGroup;
