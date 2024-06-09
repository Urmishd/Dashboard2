import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function EmployeeModal({
  showModal,
  handleModalClose,
  handleSubmit,
  handleChange,
  formData,
  selectedEmployee,
  handleEdit,
}) {
  return (
    <Modal show={showModal} onHide={handleModalClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedEmployee ? "Edit Employee" : "Add Employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmployeeId">
                <Form.Label>Employee ID *</Form.Label>
                <Form.Control
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                  className="w-100"
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formJoiningDate">
                <Form.Label>Joining Date *</Form.Label>
                <Form.Control
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  required
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone *</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDesignation">
                <Form.Label>Designation *</Form.Label>
                <Form.Control
                  as="select"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-100"
                >
                  <option value="">Select Designation</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Android Developer">Android Developer</option>
                  <option value="Ios Developer">Ios Developer</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            disabled={
              !formData.firstName ||
              !formData.email ||
              !formData.employeeId ||
              !formData.joiningDate ||
              !formData.phone ||
              !formData.designation
            }
          >
            {selectedEmployee ? "Update" : "Submit"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EmployeeModal;
