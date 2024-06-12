// EmployeeActions.jsx
import React from "react";

const EmployeeActions = ({
  employeeId,
  isActive,
  handleEdit,
  handleDelete,
  handleActivateDeactivate,
}) => {
  const toggleActivateDeactivate = () => {
    handleActivateDeactivate(employeeId, !isActive);
  };

  return (
    <div className="dropdown-menu show" style={{ position: "absolute", willChange: "transform", lineHeight: "30px" }}>
      <span className="dropdown-item" onClick={() => handleEdit(employeeId)}>
        <i className="fas fa-edit"></i> Edit
      </span>
      <span className="dropdown-item" onClick={() => handleDelete(employeeId)}>
        <i className="fas fa-trash-alt"></i> Delete
      </span>
      <span className="dropdown-item" onClick={toggleActivateDeactivate}>
        <i className={`fas ${isActive ? "fa-times-circle" : "fa-check-circle"}`}></i> {isActive ? "Deactivate" : "Activate"}
      </span>
    </div>
  );
};

export default EmployeeActions;
