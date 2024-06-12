import React, { useState, useEffect, useRef } from "react";
import DesignationActions from "./DesignationActions"; // Adjust import path if needed

const DesignationsTable = ({
  tableData,
  filteredData,
  searchName,
  handleEdit,
  handleDelete,
  handleActivateDeactivate,
}) => {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = (rowId) => {
    if (selectedRowId === rowId) {
      closeDropdown();
    } else {
      setSelectedRowId(rowId);
      setShowActionsDropdown(true);
    }
  };

  const closeDropdown = () => {
    setSelectedRowId(null);
    setShowActionsDropdown(false);
  };

  const handleEditAction = (id) => {
    handleEdit(id);
    closeDropdown();
  };

  const handleDeleteAction = (id) => {
    handleDelete(id);
    closeDropdown();
  };

  const handleActivateDeactivateAction = (id, isActive) => {
    handleActivateDeactivate(id, isActive);
    closeDropdown();
  };

  return (
    <div className="table-responsive mt-2">
      <table className="table table-striped custom-table mb-0 datatable" >
        <thead>
          <tr>
            <th style={{ width: "30px" }}>#</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Status</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {(searchName ? filteredData : tableData).map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.designation}</td>
              <td>{row.department}</td>
              <td >
                <span
                  className={`badge ${row.isActive ? "badge-danger" : "badge-secondary"}`}
                  style={{
                    backgroundColor: row.isActive ? "red" : "black",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "10px",
                  }}
                >
                  {row.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="text-end">
                <div className="dropdown action-dropdown position-relative" >
                  <span
                    className="fs-4"
                    type="button"
                    id={`dropdownMenuButton${row.id}`}
                    onClick={() => handleDropdownToggle(row.id)}
                    aria-expanded={selectedRowId === row.id ? "true" : "false"}
                  >
                    <div className="threedot">
                      <i className="fas fa-ellipsis-v "></i>
                    </div>
                  </span>
                  {selectedRowId === row.id && showActionsDropdown && (
                    <DesignationActions
                      rowId={row.id}
                      isActive={row.isActive}
                      handleEdit={handleEditAction}
                      handleDelete={handleDeleteAction}
                      handleActivateDeactivate={handleActivateDeactivateAction}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(DesignationsTable);
