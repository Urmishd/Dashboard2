import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNAYWRzLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTaGFpbGVzaCBQYXJtYXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEaXJlY3RvciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFiY0BhZHMuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiU2hhaWxlc2ggUGFybWFyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMiIsIlVzZXJUeXBlIjoiU3VwZXIgQWRtaW4iLCJFbXBsb3llZUlkIjoiMiIsIkNvbXBhbnlJZCI6IjEiLCJyb2wiOiJhcGlfYWNjZXNzIiwibmJmIjoxNzE4MTY4MTI2LCJleHAiOjE3MTgyNTQ1MjYsImlzcyI6IkFEU19ERVNLX0FQSSIsImF1ZCI6IkFEU0NvZGUifQ.Bix0Gpvxx0cxLS7y071qRGLtJl9NQdHyWsUjiOppCoE";

export const fetchDepartments = createAsyncThunk(
  'department/fetchDepartments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://adsdeskapi.adscodegensolutions.com/api/v1/Department/List", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchCriteria: "",
          pageNo: 0,
          pageSize: 10,
          sortBy: "",
          sortDirection: 0,
          rowStatus: -1,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      return data.departments.map(department => ({
        ...department,
        isActive: true,
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDepartment = createAsyncThunk(
  'department/addDepartment',
  async ({ name }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://adsdeskapi.adscodegensolutions.com/api/v1/Department/Create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.isSuccess) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Department added successfully!",
        });
        return { id: data.departmentId, name, isActive: true };
      } else if (data.message === "Department already exists") {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Department already exists",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request.",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const updateDepartment = createAsyncThunk(
  'department/updateDepartment',
  async ({ id, name }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://adsdeskapi.adscodegensolutions.com/api/v1/Department/Update", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.isSuccess) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Department updated successfully!",
        });
        return { id, name };
      } else {
        Swal.fire({
          icon: "success",
          title: "success",
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request.",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDepartment = createAsyncThunk(
  'department/deleteDepartment',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch("https://adsdeskapi.adscodegensolutions.com/api/v1/Department/Delete", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.isSuccess) {
        Swal.fire("Deleted!", "Department has been deleted.", "success");
        return id;
      } else {
        Swal.fire("Error!", data.message, "error");
      }
    } catch (error) {
      Swal.fire("Error!", "An error occurred while processing your request.", "error");
      return rejectWithValue(error.message);
    }
  }
);


// ---------- outer function start ----------- 
export const SET_DROPDOWN_VISIBILITY = "SET_DROPDOWN_VISIBILITY";
export const setDropdownVisibility = (isVisible) => ({
  type: SET_DROPDOWN_VISIBILITY,
  payload: isVisible,
});


// export {
//   fetchDepartments,
//   addDepartment,
//   updateDepartment,
//   deleteDepartment,
//   setSelectedDepartment,
//   setDepartmentName,
//   setSortConfig,
//   setSearchName,
//   toggleDepartmentStatus,
// };

// outer function is end-----------

export const setSelectedDepartment = createAction('department/setSelectedDepartment');
export const setDepartmentName = createAction('department/setDepartmentName');
export const setSortConfig = createAction('department/setSortConfig');
export const setSearchName = createAction('department/setSearchName');
export const toggleDepartmentStatus = createAction('department/toggleDepartmentStatus');



