// src/Pages/Department/DepartmentTable.jsx
import React, { useState, useEffect, useRef } from "react";
import DepartmentActions from "./DepartmentActions";
import { useDispatch, useSelector } from "react-redux";
import { setDropdownVisibility } from "../../Redux/Action/DepartmentActions";
import {  BsArrowUp,BsArrowDown  } from "react-icons/bs";


const DepartmentTable = ({
  departments,
  handleEdit,
  handleDelete,
  requestSort,
  sortConfig,
  setDepartments,
}) => {
  const [currentDepartmentId, setCurrentDepartmentId] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const showActionsDropdown = useSelector((state) => state.department.showActionsDropdown);

  const handleDropdownToggle = (departmentId) => {
    if (currentDepartmentId === departmentId) {
      dispatch(setDropdownVisibility(!showActionsDropdown));
    } else {
      setCurrentDepartmentId(departmentId);
      dispatch(setDropdownVisibility(true));
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      dispatch(setDropdownVisibility(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="table-responsive mt-3">
      <table className="table table-striped custom-table mb-0" ref={dropdownRef}>
        <thead >
          <tr>
            <th>#</th>
            <th onClick={() => requestSort("name")} >
              Name   <BsArrowUp />
              {sortConfig.key === "name" && (
                <span style={{ color: "black" }}>
                  {sortConfig.direction === "ascending" ?   <BsArrowDown /> :  <BsArrowUp />}
                </span>
              )}
            </th>
            <th>Status</th>
            <th style={{ textAlign: "end" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department.id}>
              <td>{index + 1}</td>
              <td>{department.name}</td>
              <td>
                <span
                  className={`badge ${department.isActive ? "badge-danger" : "badge-secondary"}`}
                  style={{
                    backgroundColor: department.isActive ? "red" : "black",
                    color: "white",
                    borderRadius: "50px",
                    // padding: "0.5em 1em",
                    fontSize:"10px"
                  }}
                >
                  {department.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td  style={{ textAlign: "end" }}>
                <div className="dropdown " >
                  <span 
                    className="fs-4"
                    type="button"
                    id={`dropdownMenuButton${department.id}`}
                    onClick={() => handleDropdownToggle(department.id)}
                    aria-expanded="false"
                  >
                    <div className="threedot"><i className="fas fa-ellipsis-v "></i></div>
                  </span>
                  {currentDepartmentId === department.id && showActionsDropdown && (
                    <DepartmentActions
                      departmentId={department.id}
                      currentDepartmentId={currentDepartmentId}
                      showActionsDropdown={showActionsDropdown}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      setDepartments={setDepartments}
                      departments={departments}
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

export default DepartmentTable;
