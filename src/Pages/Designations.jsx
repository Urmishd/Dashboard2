import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function Designations() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [designations, setDesignations] = useState([]);
  const [selectedDesignations, setSelectedDesignations] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // save the data or add data table 

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNAYWRzLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTaGFpbGVzaCBQYXJtYXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEaXJlY3RvciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFiY0BhZHMuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiU2hhaWxlc2ggUGFybWFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMiIsIlVzZXJUeXBlIjoiU3VwZXIgQWRtaW4iLCJFbXBsb3llZUlkIjoiMiIsIkNvbXBhbnlJZCI6IjEiLCJyb2wiOiJhcGlfYWNjZXNzIiwibmJmIjoxNzE0NTYzNjcyLCJleHAiOjE3MTQ2NTAwNzIsImlzcyI6IkFEU19ERVNLX0FQSSIsImF1ZCI6IkFEU0NvZGUifQ.9uMXNeZlhdpPKVPJ4x8clvXnN0mLVmAUgRudkvsYej4"
      try {
        const response = await fetch('https://adsdeskapi.adscodegensolutions.com/api/v1/Department/DepartmentDrp', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        setDesignations(data.items); // Assuming the API returns an array of departments
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when component mounts
  }, []); 

  return (
    <>
      <div className="content container">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-4">Designations</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/admindashboard"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active">Designations</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <button
                onClick={handleShow}
                className="btn btn-success rounded-5"
                data-bs-toggle="modal"
                data-bs-target="#add_department"
              >
                <i className="fa fa-plus"></i> Add
              </button>
            </div>
          </div>
        </div>

        {/* Model open start */}
         <Modal
        show={show}
        onHide={handleClose}
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Designation Name *</Form.Label>
              <Form.Control
                className="p-2"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDepartment">
              <Form.Label>Department *</Form.Label>
              <Form.Control
                as="select"
                className="p-2"
                value={selectedDesignations}
                onChange={(e) => setselectedDesignations(e.target.value)}
              >
                <option value="">Select Department</option>
                {designations.map((desg) => (
                  <option key={desg.id} value={desg.id}>
                    {desg.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

        {/* table start */}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>#</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th className="text-end"></th>
                  </tr>
                </thead>
                <tbody>
                  {(departments, index) => (
                    <tr key={index}>
                      <td></td>
                      <td>{departments.id}</td>
                      <td>{departments.name}</td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <BsThreeDotsVertical className="fs-4" />

                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_designation"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_designation"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h6 className="mt-3">Showing 1 to 10 of 15 entries</h6>
      </div>
    </>
  );
}

export default Designations;
