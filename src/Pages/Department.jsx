import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal, Button, Form } from 'react-bootstrap'

function Department() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className="content container">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-4">Department</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/"
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
                <i className="fa fa-plus"></i> Add Department
              </button>
            </div>
          </div>
        </div>
        {/* /page table departmant */}


          {/* Model open start */}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Department Name *</Form.Label>
              <Form.Control 
              className="p-2"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

        <div className="row mt-5">
          <div className="col-md-12">
            <div>
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>#</th>
                    <th>Department Name</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((d, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{d.name}</td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                            
                          <BsThreeDotsVertical className="fs-4" />

                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_department"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_department"
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
        <h6 className="mt-3 mb-5">Showing 1 to 6 of 6 entries</h6>
      </div>
    </>
  );
}

export default Department;
const departments = [
  { name: "Web Development" },
  { name: "Application Development" },
  { name: "IT Management" },
  { name: "Accounts Management" },
  { name: "Support Management" },
  { name: "Marketing" },
];
