import React from 'react';
import { Modal } from 'react-bootstrap';
import { pure } from 'recompose';
import PropTypes from 'prop-types';

const ModalFooter = ({ closeModal, onSubmitProject }) => (
  <Modal.Footer className="modal__footer">
    <div className="modal__button-container">
      <button type="button" className="button back" onClick={closeModal}>
        Back
      </button>
      <button type="button" className="button submit" onClick={onSubmitProject}>
        Submit
      </button>
    </div>
  </Modal.Footer>
);

ModalFooter.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmitProject: PropTypes.func.isRequired,
};

export default pure(ModalFooter);
