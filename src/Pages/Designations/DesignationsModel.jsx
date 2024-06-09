// ModalForm.js
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalForm = ({
  show,
  handleClose,
  inputValue,
  selectedOption,
  departmentOptions,
  handleInputChange,
  handleSelectChange,
  handleSaveChanges,
  errors,
  editedId
}) => {
  return (
    <Modal show={show} onHide={handleClose} className="d-flex align-items-center">
      <Modal.Header closeButton>
        <Modal.Title>{editedId ? "Edit Designation" : "Add Designation"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formInput">
            <Form.Label>Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter input"
              value={inputValue}
              onChange={handleInputChange}
              isInvalid={!!errors.inputValue}
            />
            <Form.Control.Feedback type="invalid">{errors.inputValue}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formSelect">
            <Form.Label>Select Department *</Form.Label>
            <Form.Control
              as="select"
              value={selectedOption}
              onChange={handleSelectChange}
              isInvalid={!!errors.selectedOption}
            >
              <option value="">Select an option</option>
              {departmentOptions.map((department) => (
                <option key={department.id} value={department.name}>
                  {department.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.selectedOption}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSaveChanges}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ModalForm);
