import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TimePicker from 'react-bootstrap-time-picker';

import './reminder-modal.less';

const ReminderModal = ({
  isOpen,
  onSubmit,
  onChangeReminderValue,
  value,
  onClose,
}) => (
  <Modal show={isOpen}>
    <Modal.Header>
      <div className="reminder-modal__header">
        <Modal.Title className="reminder-modal__title">
          pick time reminder what you want
        </Modal.Title>
        <FontAwesomeIcon
          icon={faTimes}
          className="modal__icon_close"
          onClick={onClose}
        />
      </div>
    </Modal.Header>
    <Modal.Body>
      <TimePicker
        onChange={onChangeReminderValue}
        value={value}
        format={24}
        start="00:50"
        end="05:00"
        step={5}
      />
      <button
        type="button"
        className="button submit btn-padding"
        onClick={onSubmit}
      >
        Submit
      </button>
    </Modal.Body>
  </Modal>
);

ReminderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangeReminderValue: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['isOpen', 'value'])(ReminderModal);
