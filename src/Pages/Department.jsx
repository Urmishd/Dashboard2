import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";

function Department() {
  const [show, setShow] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [currentDepartmentId, setCurrentDepartmentId] = useState(null);

  const handleClose = () => {setShow(false);};
  const handleShow = () => setShow(true);
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDepartment) {
   
      const updatedDepartments = departments.map((department) =>
        department.id === selectedDepartment.id
          ? { ...department, name: departmentName }
          : department
      );
      setDepartments(updatedDepartments);
    } else {
  
      const newDepartment = { id: Date.now(), name: departmentName };
      setDepartments([...departments, newDepartment]);
    }

    handleClose();
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNAYWRzLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTaGFpbGVzaCBQYXJtYXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEaXJlY3RvciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFiY0BhZHMuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiU2hhaWxlc2ggUGFybWFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMiIsIlVzZXJUeXBlIjoiU3VwZXIgQWRtaW4iLCJFbXBsb3llZUlkIjoiMiIsIkNvbXBhbnlJZCI6IjEiLCJyb2wiOiJhcGlfYWNjZXNzIiwibmJmIjoxNzE0NTYzNjcyLCJleHAiOjE3MTQ2NTAwNzIsImlzcyI6IkFEU19ERVNLX0FQSSIsImF1ZCI6IkFEU0NvZGUifQ.9uMXNeZlhdpPKVPJ4x8clvXnN0mLVmAUgRudkvsYej4';
  
    try {
      const response = await fetch('https://adsdeskapi.adscodegensolutions.com/api/v1/Department/List', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchCriteria: "",
          pageNo: 0,
          pageSize: 10,
          sortBy: "",
          sortDirection: 0,
          rowStatus: -1
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      console.log(data);
   
      setDepartments(data.departments);
    } catch (error) {
      
      console.error('There was a problem with your fetch operation:', error);
    }
  };




  // edit delete function
  const handleEdit = (department) => {
    setSelectedDepartment(department);
    setDepartmentName(department.name);
    handleShow();
    setShowActionsDropdown(false)
  };

  const handleDelete = (departmentId) => {
    const updatedDepartments = departments.filter(
      (department) => department.id !== departmentId
    );
    setDepartments(updatedDepartments);
    
  };

  const handleDropdownToggle = (departmentId) => {
    setShowActionsDropdown(!showActionsDropdown);
    setCurrentDepartmentId(departmentId);
  };

  const renderActionsDropdown = (departmentId) => {
    if (currentDepartmentId === departmentId && showActionsDropdown) {
      return (
        <div className="dropdown-dot">
          <a onClick={() => handleEdit(departmentId)}>
          <i className="fa fa-pencil m-r-5"></i>  Edit</a>
          <a onClick={() => handleDelete(departmentId)}>
          <i className="fa fa-trash m-r-5"></i> Delete</a>
          <a> <i className="fa-solid fa-bolt"></i> Inactive</a>
        </div>
      );
    }
    return null;
  };
  

  return (
    <>
      <div className="content container">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-4">Department</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/admindashboard"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active">Department</li>
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

        <Modal show={show} onHide={handleClose} className="d-flex align-items-center">
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
             
              {selectedDepartment ? "Update Department" : "Add Department"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group controlId="formBasicDepartment">
                <Form.Label>Department Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department name"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                />
                
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
             onClick={handleSubmit}
            >
           Save
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="row mt-5">
          <div className="col-md-12">
            <div>
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>#</th>
                    <th>Department Name</th>
                    <th className="text-end"></th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((department, index) => (
                    <tr key={index}>
                      <td></td>
                      <td>{department.name}</td>
                      <td className="text-end">
                        <div className="dropdownt dropdown-action position-relative">
                        <BsThreeDotsVertical
                            className="fs-4 threedot"
                            onClick={() => handleDropdownToggle(department.id)}
                          />
                          {renderActionsDropdown(department.id)}
                     
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h6 className="mt-3 mb-5">Showing {departments.length} entries</h6>
      </div>
    </>
  );
}

export default Department;
