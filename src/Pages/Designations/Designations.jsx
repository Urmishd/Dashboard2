// Designations.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ModalForm from "./DesignationsModel";
import DesignationsTable from "./DesignationsTable";
import SearchInput from "./SearchInput";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Designations = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});
  const [showActionBox, setShowActionBox] = useState({});
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [editedId, setEditedId] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  useEffect(() => {
    const fetchDepartmentOptions = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNAYWRzLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTaGFpbGVzaCBQYXJtYXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEaXJlY3RvciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFiY0BhZHMuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiU2hhaWxlc2ggUGFybWFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMiIsIlVzZXJUeXBlIjoiU3VwZXIgQWRtaW4iLCJFbXBsb3llZUlkIjoiMiIsIkNvbXBhbnlJZCI6IjEiLCJyb2wiOiJhcGlfYWNjZXNzIiwibmJmIjoxNzE3NzQxNTg1LCJleHAiOjE3MTc4Mjc5ODUsImlzcyI6IkFEU19ERVNLX0FQSSIsImF1ZCI6IkFEU0NvZGUifQ.VqWzwHb6TFiTdbFkPhXEG7hijCoce3YdlKYU7l8jSxs";
      try {
        const response = await axios.get(
          "https://adsdeskapi.adscodegensolutions.com/api/v1/Department/DepartmentDrp",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setDepartmentOptions(response.data.items);
      } catch (error) {
        console.error("Error fetching department options:", error);
      }
    };

    fetchDepartmentOptions();

    const savedTableData = localStorage.getItem("tableData");
    if (savedTableData) {
      setTableData(JSON.parse(savedTableData));
    }
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
    setInputValue("");
    setSelectedOption("");
    setErrors({});
    setEditedId(null);
  }, []);

  const handleShow = useCallback(() => setShow(true), []);

  const handleInputChange = useCallback((e) => setInputValue(e.target.value), []);

  const handleSelectChange = useCallback((e) => setSelectedOption(e.target.value), []);

  const handleSaveChanges = useCallback(() => {
    const newErrors = {};
    if (!inputValue) newErrors.inputValue = "Input value is required";
    if (!selectedOption) newErrors.selectedOption = "Select value is required";

    if (Object.keys(newErrors).length === 0) {
      const updatedTableData = editedId !== null
        ? tableData.map((row) => (row.id === editedId ? { ...row, designation: inputValue, department: selectedOption } : row))
        : [...tableData, { id: tableData.length + 1, designation: inputValue, department: selectedOption }];

      setTableData(updatedTableData);
      localStorage.setItem("tableData", JSON.stringify(updatedTableData));

      Swal.fire({
        title: "Success",
        text: editedId !== null ? "Designation updated successfully." : "Designation added successfully.",
        icon: "success"
      });

      handleClose();
    } else {
      setErrors(newErrors);
    }
  }, [inputValue, selectedOption, editedId, tableData, handleClose]);

  const toggleActionBox = useCallback((id) => setSelectedRowId((prevId) => (prevId === id ? null : id)), []);

  const handleEdit = useCallback((id) => {
    const rowToEdit = tableData.find((row) => row.id === id);
    if (rowToEdit) {
      setInputValue(rowToEdit.designation);
      setSelectedOption(rowToEdit.department);
      setEditedId(id);
      setShow(true);
    }
  }, [tableData]);

  const handleDelete = useCallback((id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTableData = tableData.filter((row) => row.id !== id);
        setTableData(updatedTableData);
        localStorage.setItem("tableData", JSON.stringify(updatedTableData));
        Swal.fire("Deleted!", "The designation has been deleted.", "success");
      }
    });
  }, [tableData]);

  const handleActivateDeactivate = useCallback((id) => console.log("Activate/Deactivate row with id:", id), []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (actionBoxRef.current && !actionBoxRef.current.contains(event.target)) {
        setSelectedRowId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const actionBoxRef = useRef(null);

  const handleNameSearch = useCallback((event) => {
    const value = event.target.value;
    setSearchName(value);
    setFilteredData(tableData.filter((row) => row.designation.toLowerCase().includes(value.toLowerCase())));
  }, [tableData]);

  const requestSort = useCallback((key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") direction = "descending";
    setSortConfig({ key, direction });
  }, [sortConfig]);

  const getSortIcon = useCallback((key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? <BsArrowUp /> : <BsArrowDown />;
    }
    return (
      <>
        <BsArrowUp className="sort-icon" />
        <BsArrowDown className="sort-icon" />
      </>
    );
  }, [sortConfig]);

  return (
    <div className="content-main container">
      <BreadcrumbNavigation handleShow={handleShow} />
      <ModalForm
        show={show}
        handleClose={handleClose}
        inputValue={inputValue}
        selectedOption={selectedOption}
        departmentOptions={departmentOptions}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleSaveChanges={handleSaveChanges}
        errors={errors}
        editedId={editedId}
      />
      <SearchInput searchName={searchName} handleNameSearch={handleNameSearch} />
      <div className="row mt-2">
        <div className="col-md-12">
          <DesignationsTable
            tableData={tableData}
            filteredData={filteredData}
            searchName={searchName}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleActivateDeactivate={handleActivateDeactivate}
            toggleActionBox={toggleActionBox}
            selectedRowId={selectedRowId}
            actionBoxRef={actionBoxRef}
            requestSort={requestSort}
            sortConfig={sortConfig}
            getSortIcon={getSortIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Designations;
