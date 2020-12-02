import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CustomModal({
  show,
  handleClose,
  title,
  body,
  onSaveText,
  onCloseText,
}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {onSaveText}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {onCloseText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
