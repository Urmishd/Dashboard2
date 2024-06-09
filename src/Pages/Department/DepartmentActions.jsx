// src/Pages/Department/DepartmentActions.jsx
import React from "react";


const DepartmentActions = ({
  departmentId,
  currentDepartmentId,
  showActionsDropdown,
  handleEdit,
  handleDelete,
  setDepartments,
  departments,
}) => {
  return (
    <div className="dropdown-menu show" aria-labelledby={`dropdownMenuButton${departmentId}`}>
      <span className="dropdown-item" onClick={() => handleEdit(departmentId)}>
      <i className="fas fa-edit"></i> Edit
      </span>
      <span className="dropdown-item" onClick={() => handleDelete(departmentId)}>
      <i className="fas fa-trash-alt"></i> Delete
      </span>
      <span className="dropdown-item" onClick={() => setDepartments(departments)}>
      <i className="fas fa-times-circle"></i> {departments.find((dept) => dept.id === departmentId)?.isActive
          ? "Deactivate"
          : "Activate"}
      </span>
    </div>
  );
};

export default DepartmentActions;


