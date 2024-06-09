import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const DepartmentModal = ({ show, handleClose, departmentName, setDepartmentName, handleSubmit, selectedDepartment }) => {
  return (
   <>
     <Modal show={show} onHide={handleClose} className="d-flex align-items-center">
      <Modal.Header closeButton>
        <Modal.Title>{selectedDepartment ? "Edit Department" : "Add Department"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDepartmentName">
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              type="text"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {selectedDepartment ? "Update" : "Add"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
   </>
  );
};

export default DepartmentModal;
