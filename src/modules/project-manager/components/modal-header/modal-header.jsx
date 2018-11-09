import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalHeader = ({ closeModal }) => (
  <Modal.Header>
    <div className="modal__header">
      <Modal.Title className="modal__title">Project management</Modal.Title>
      <FontAwesomeIcon
        icon={faTimes}
        className="modal__icon_close"
        onClick={closeModal}
      />
    </div>
  </Modal.Header>
);

ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default pure(ModalHeader);
