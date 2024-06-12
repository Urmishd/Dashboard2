import React, { useRef } from 'react';
import Avatar from 'react-avatar';
import EmployeeActions from './EmployeeActions'; // Adjust import path if needed

function EmployeeList({
  employees,
  handleEdit,
  handleDelete,
  handleActivateDeactivate,
  requestSort,
  sortConfig,
  getSortIcon,
  actionBoxOpen,
  handleActionBox,
  handleCloseActionBox,
  actionBoxRef,
}) {
  const handleDropdownToggle = (employeeId) => {
    if (actionBoxOpen === employeeId) {
      handleCloseActionBox();
    } else {
      handleActionBox(employeeId);
    }
  };

  return (
    <div className="col-12 mt-4" ref={actionBoxRef}>
      <div className="table-responsive">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('name')}>
                Name {getSortIcon('name')}
              </th>
              <th onClick={() => requestSort('employeeID')}>
                Employee ID {getSortIcon('employeeID')}
              </th>
              <th onClick={() => requestSort('email')}>
                Email {getSortIcon('email')}
              </th>
              <th onClick={() => requestSort('mobile')}>
                Mobile {getSortIcon('mobile')}
              </th>
              <th onClick={() => requestSort('joinDate')}>
                Join Date {getSortIcon('joinDate')}
              </th>
              <th onClick={() => requestSort('role')}>
                Role {getSortIcon('role')}
              </th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <h6 className="table-avatar d-flex gap-2">
                      <Avatar name={employee.name} size="30" round={true} />
                      <p>{employee.name}</p>
                    </h6>
                  </td>
                  <td style={{ paddingLeft: '20px' }}>{employee.employeeID}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobile}</td>
                  <td>{employee.joinDate}</td>
                  <td>{employee.role}</td>
                  <td className="text-end">
                    <div className="dropdown action-dropdown position-relative">
                      <span
                        className="fs-4"
                        type="button"
                        id={`dropdownMenuButton${employee.id}`}
                        onClick={() => handleDropdownToggle(employee.id)}
                        aria-expanded={actionBoxOpen === employee.id ? "true" : "false"}
                      >
                        <div className="threedot">
                          <i className="fas fa-ellipsis-v"></i>
                        </div>
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
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
