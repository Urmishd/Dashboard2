import React, { useState, useRef, useEffect } from 'react';
import Avatar from 'react-avatar';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EmployeeActions from './EmployeeActions'; // Adjust the import path as needed

function EmployeeGrid({ employees, handleEdit, handleDelete, handleActivateDeactivate }) {
  const [actionBoxOpen, setActionBoxOpen] = useState(null);
  const actionBoxRef = useRef(null);

  const handleDropdownToggle = (employeeId) => {
    if (actionBoxOpen === employeeId) {
      setActionBoxOpen(null);
    } else {
      setActionBoxOpen(employeeId);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (actionBoxRef.current && !actionBoxRef.current.contains(event.target)) {
        setActionBoxOpen(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="col-12 mt-4">
      <div className="row">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" key={employee.id}>
              <div className="card text-center mt-3" ref={actionBoxRef}>
                <div className="card-body">
                  <div className="profile-img mb-3">
                    <Avatar name={employee.name} size="100" round={true} />
                  </div>
                  <h4 className="card-title">{employee.name}</h4>
                  <p className="card-text text-muted">{employee.role}</p>
                  <div className="d-flex justify-content-around mb-2">
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-solid fa-id-badge"></i>
                      <span>{employee.employeeID}</span>
                    </div>
                    <div className="dropdown profile-action position-relative">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDropdownToggle(employee.id)}
                      >
                        <BsThreeDotsVertical className="fs-4" />
                      </span>
                      {actionBoxOpen === employee.id && (
                        <EmployeeActions
                          employeeId={employee.id}
                          isActive={employee.isActive}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          handleActivateDeactivate={handleActivateDeactivate}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No data found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeGrid;
