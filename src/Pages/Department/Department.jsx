// src/Pages/Department/Department.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DepartmentModal from "./DepartmentModal";
import DepartmentTable from "./DepartmentTable";
import {
  fetchDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
  setSelectedDepartment,
  setDepartmentName,
  setSortConfig,
  setSearchName,
  toggleDepartmentStatus,
  setDropdownVisibility,
} from "../../Redux/Action/DepartmentActions";
import { useDispatch, useSelector } from "react-redux";

const Department = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.departments);
  const departmentName = useSelector((state) => state.department.departmentName);
  const selectedDepartment = useSelector((state) => state.department.selectedDepartment);
  const [show, setShow] = useState(false);
  const [searchName, setSearchNameState] = useState("");
  const [sortConfig, setSortConfigState] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    dispatch(fetchDepartments());
    const intervalId = setInterval(() => {
      dispatch(fetchDepartments());
    }, 10000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleClose = () => {
    setShow(false);
    dispatch(setSelectedDepartment(null));
    dispatch(setDepartmentName(""));
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (departmentName.trim() === "") {
      Swal.fire("Error", "Department name cannot be empty", "error");
      return;
    }

    if (selectedDepartment && selectedDepartment.id) {
      dispatch(updateDepartment({ id: selectedDepartment.id, name: departmentName }));
    } else {
      dispatch(addDepartment({ name: departmentName }));
    }

    handleClose();
  };

  const handleEdit = (departmentId) => {
    const department = departments.find((dept) => dept.id === departmentId);
    dispatch(setSelectedDepartment(department));
    dispatch(setDepartmentName(department.name));
    handleShow();
  };

  const handleDelete = (departmentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDepartment(departmentId));
      }
    });
  };


  
  const handleNameSearch = (e) => {
    setSearchNameState(e.target.value);
    dispatch(setSearchName(e.target.value));
  };

  const filterDepartmentsByName = (departments) => {
    return departments.filter((department) =>
      department.name.toLowerCase().includes(searchName.toLowerCase())
    );
  };

  
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const newSortConfig = { key, direction };
    setSortConfigState(newSortConfig);
    dispatch(setSortConfig(newSortConfig));
  };

  const filteredDepartments = filterDepartmentsByName(departments);
  const sortedDepartments = [...filteredDepartments].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  }); 

  return (
    <div className="content container mt-5">
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title mt-4">Department</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/super-admin-dashboard" style={{ textDecoration: "none", color: "black" }}>
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item active">Department</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <button onClick={handleShow} className="btn btn-success rounded-5">
              <i className="fa fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>

      <DepartmentModal
        show={show}
        handleClose={handleClose}
        departmentName={departmentName}
        setDepartmentName={(name) => dispatch(setDepartmentName(name))}
        handleSubmit={handleSubmit}
        selectedDepartment={selectedDepartment}
      />

      <div className="form-group form-focus d-flex justify-content-end mt-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search Name"
          value={searchName}
          onChange={handleNameSearch}
        />
      </div>

      <DepartmentTable
        departments={sortedDepartments}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        requestSort={requestSort}
        sortConfig={sortConfig}
        setDepartments={(departments) => dispatch(toggleDepartmentStatus(departments))}
      />
    </div>
  );
};

export default Department;
    