// AllEmployee.jsx
import React, { useEffect, useRef, useState } from 'react';
import EmployeeModal from './EmployeeModal';
import EmployeeList from './EmployeeList';
import EmployeeGrid from './EmployeeGrid';
import EmployeeFilters from './EmployeeFilters';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

function AllEmployee() {
  const [view, setView] = useState('list');
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchEmployeeId, setSearchEmployeeId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchDesignation, setSearchDesignation] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    joiningDate: '',
    phone: '',
    company: '',
    department: '',
    designation: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [actionBoxOpen, setActionBoxOpen] = useState(null);

  // Load employees from localStorage on initial render
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleViewChange = () => setView((prevView) => (prevView === 'list' ? 'grid' : 'list'));
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to create or update employee data
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedEmployees;
    if (selectedEmployee) {
      // Update existing employee
      updatedEmployees = employees.map((emp) =>
        emp.id === selectedEmployee.id
          ? {
              ...emp,
              name: formData.firstName + ' ' + formData.lastName,
              employeeID: formData.employeeId,
              email: formData.email,
              mobile: formData.phone,
              joinDate: formData.joiningDate,
              role: formData.designation,
            }
          : emp
      );
    } else {
      // Create new employee
      const newEmployee = {
        id: employees.length + 1,
        name: formData.firstName + ' ' + formData.lastName,
        employeeID: formData.employeeId,
        email: formData.email,
        mobile: formData.phone,
        joinDate: formData.joiningDate,
        role: formData.designation,
        avatar: '',
      };
      updatedEmployees = [...employees, newEmployee];
    }

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    resetForm();
    handleModalClose();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      employeeId: '',
      joiningDate: '',
      phone: '',
      company: '',
      department: '',
      designation: '',
    });
    setSelectedEmployee(null);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setFormData({
      firstName: employee.name.split(' ')[0],
      lastName: employee.name.split(' ')[1] || '',
      username: '',
      email: employee.email,
      password: '',
      confirmPassword: '',
      employeeId: employee.employeeID,
      joiningDate: employee.joinDate,
      phone: employee.mobile,
      company: '',
      department: '',
      designation: employee.role,
    });
    handleModalOpen();
    handleCloseActionBox();
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'employees.xlsx');
  };

  const handleActionBox = (employee) => {
    setActionBoxOpen(employee.id);
  };

  const handleCloseActionBox = () => {
    setActionBoxOpen(null);
  };

  const handleDelete = (employee) => {
    Swal.fire({
      title: `Are you sure you want to delete ${employee.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedEmployees = employees.filter((emp) => emp.id !== employee.id);
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        Swal.fire('Deleted!', `${employee.name} has been deleted.`, 'success');
        handleCloseActionBox();
      }
    });
  };

  const gridAlert = () => {
    alert('Change to list mode to perform actions.');
  };

  const actionBoxRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (actionBoxRef.current && !actionBoxRef.current.contains(event.target)) {
        handleCloseActionBox();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const filterEmployees = () => {
    return employees.filter((employee) => {
      return (
        employee.employeeID.includes(searchEmployeeId) &&
        employee.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (searchDesignation === '' || employee.role === searchDesignation)
      );
    });
  };

  const filteredEmployees = filterEmployees();

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <BsArrowUp /> : <BsArrowDown />;
    }
    return (
      <>
        <BsArrowUp className="sort-icon" />
        <BsArrowDown className="sort-icon" />
      </>
    );
  };

  const handleEmployeeIdSearch = (e) => setSearchEmployeeId(e.target.value);
  const handleSearchChange = (e) => setSearchName(e.target.value);
  const handleDesignationChange = (e) => setSearchDesignation(e.target.value);

  const existingEmployeeIds = employees.map((emp) => emp.employeeID);

  const generateUniqueEmployeeId = () => {
    let newId;
    do {
      newId = 'EMP' + Math.floor(100 + Math.random() * 900);
    } while (existingEmployeeIds.includes(newId));
    return newId;
  };

  useEffect(() => {
    const newEmployeeId = generateUniqueEmployeeId();
    setFormData((prevFormData) => ({ ...prevFormData, employeeId: newEmployeeId }));
  }, []);

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Employee</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/super-admin-dashboard" style={{ textDecoration: 'none', color: 'black' }}>
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item active">Employee</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto d-flex gap-5">
            <div className="view-icons d-flex gap-2">
              <span className="btn border border-1 bg-white fs-5" onClick={handleDownloadExcel}>
                <i className="fa-solid fa-file-export"></i>
              </span>
              <span className="btn border border-1 bg-white fs-5" onClick={handleViewChange}>
                <i className="fa fa-th"></i>
              </span>
              <span className="btn border bg-white border-1 fs-5" onClick={handleViewChange}>
                <i className="fa fa-bars"></i>
              </span>
            </div>
            <button className="btn btn-success rounded-5" onClick={handleModalOpen}>
              <i className="fa fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>

      <EmployeeFilters
        searchEmployeeId={searchEmployeeId}
        searchName={searchName}
        searchDesignation={searchDesignation}
        handleEmployeeIdSearch={handleEmployeeIdSearch}
        handleSearchChange={handleSearchChange}
        handleDesignationChange={handleDesignationChange}
      />

      <EmployeeModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        selectedEmployee={selectedEmployee}
        handleEdit={handleEdit}
      />

      <div className="row">
        {view === 'list' ? (
          <EmployeeList
            employees={sortedEmployees}
            handleActionBox={handleActionBox}
            actionBoxOpen={actionBoxOpen}
            handleCloseActionBox={handleCloseActionBox}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            requestSort={requestSort}
            sortConfig={sortConfig}
            getSortIcon={getSortIcon}
            actionBoxRef={actionBoxRef}
          />
        ) : (
          <EmployeeGrid employees={filteredEmployees} gridAlert={gridAlert} />
        )}
      </div>
    </div>
  );
}

export default AllEmployee;
