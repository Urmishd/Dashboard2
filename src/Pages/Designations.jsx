import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap'

function Designations() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

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
                    to="/"
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
                <i className="fa fa-plus"></i> Add Designation
              </button>
            </div>
          </div>
        </div>

        {/* Model open start */}
        <Modal show={show} onHide={handleClose}>
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

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Department * </Form.Label>
              <Form.Control  
              className="p-2"
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {designationData.map((designation, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{designation.title}</td>
                      <td>{designation.category}</td>
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
                  ))}
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
const designationData = [
  { id: 1, title: "Web Designer", category: "Web Development" },
  { id: 2, title: "Web Developer", category: "Web Development" },
  { id: 3, title: "Android Developer", category: "Application Development" },
  { id: 4, title: "iOS Developer", category: "Application Development" },
  { id: 5, title: "UI Designer", category: "Application Development" },
  { id: 6, title: "UX Designer", category: "Application Development" },
  { id: 7, title: "IT Technician", category: "Application Development" },
  { id: 8, title: "Product Manager", category: "Application Development" },
  { id: 9, title: "SEO Analyst", category: "Application Development" },
  { id: 10, title: "Front End Designer", category: "Application Development" },
];
