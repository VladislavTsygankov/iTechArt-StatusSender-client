import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Row, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import './modal-segment.less';

const ModalSegment = ({
  caption,
  firstLabel,
  secondLabel,
  firstValue,
  secondValue,
  firstOnChange,
  secondOnChange,
}) => (
  <Row className="modal-segment">
    <Row className="modal-segment__caption"> {caption} </Row>
    <FormGroup>
      <ControlLabel className="modal-segment__input">{firstLabel}</ControlLabel>
      <FormControl
        type="text"
        placeholder={`${firstLabel}...`}
        value={firstValue}
        onChange={firstOnChange}
      />
      <ControlLabel className="modal-segment__input">
        {secondLabel}
      </ControlLabel>
      <FormControl
        type="text"
        placeholder={`${secondLabel}...`}
        value={secondValue}
        onChange={secondOnChange}
      />
    </FormGroup>
  </Row>
);

export default onlyUpdateForKeys([
  'caption',
  'firstLabel',
  'secondLabel',
  'firstValue',
  'secondValue',
])(ModalSegment);
