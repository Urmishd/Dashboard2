import React from 'react';
import Avatar from 'react-avatar';
import { BsThreeDotsVertical, BsArrowUp, BsArrowDown } from 'react-icons/bs';

function EmployeeList({
  employees,
  handleActionBox,
  actionBoxOpen,
  handleCloseActionBox,
  handleEdit,
  handleDelete,
  requestSort,
  sortConfig,
  getSortIcon,
  actionBoxRef,
}) {
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
                  <td className="text-end position-relative">
                    <div className="threedots">
                      <BsThreeDotsVertical
                        className="fs-5 cursor-pointer"
                        onClick={() => handleActionBox(employee)}
                      />
                    </div>
                    {actionBoxOpen === employee.id && (
                      <div className="action-box">
                        <a onClick={() => handleEdit(employee)}>
                          <i className="fa fa-pencil m-r-5"></i>
                          &nbsp;&nbsp; Edit
                        </a>
                        <a onClick={() => handleDelete(employee)}>
                          <i className="fa fa-trash m-r-5"></i>
                          &nbsp;&nbsp; Delete
                        </a>
                      </div>
                    )}
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