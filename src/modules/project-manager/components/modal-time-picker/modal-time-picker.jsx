import React from 'react';
import PropTypes from 'prop-types';
import { Row, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { onlyUpdateForKeys } from 'recompose';
import TimePicker from 'react-bootstrap-time-picker';

const ModalTimePicker = ({
  caption,
  inputLabel,
  inputValue,
  inputOnchange,
  pickerLabel,
  pickerValue,
  pickerOnChange,
}) => (
  <Row className="modal-segment">
    <Row className="modal-segment__caption"> {caption} </Row>
    <FormGroup>
      <ControlLabel className="modal-segment__input">{inputLabel}</ControlLabel>
      <FormControl
        type="text"
        placeholder={`${inputLabel}...`}
        value={inputValue}
        onChange={inputOnchange}
      />
      <ControlLabel className="modal-segment__input">
        {pickerLabel}
      </ControlLabel>
      <TimePicker
        value={pickerValue}
        onChange={pickerOnChange}
        format={24}
        start="00:00"
        end="23:59"
        step={15}
      />
    </FormGroup>
  </Row>
);

ModalTimePicker.propTypes = {
  caption: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  pickerLabel: PropTypes.string.isRequired,
  inputOnchange: PropTypes.func.isRequired,
  pickerOnChange: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys([
  'caption',
  'inputLabel',
  'inputValue',
  'pickerLabel',
  'pickerValue',
])(ModalTimePicker);
