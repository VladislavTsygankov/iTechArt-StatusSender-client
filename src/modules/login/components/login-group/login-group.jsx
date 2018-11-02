import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
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
    <ControlLabel className="login-form__control-label">{label}</ControlLabel>
    <FormControl
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </FormGroup>
);

LoginGroup.propTypes = {
  controlId: PropTypes.string.isRequired,
  validationState: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys([
  'controlId',
  'value',
  'placeholder',
  'placeholder',
  'type',
  'label',
])(LoginGroup);
