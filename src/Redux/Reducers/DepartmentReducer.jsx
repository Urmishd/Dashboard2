// src/Redux/Reducer/departmentSlice.js
import { createSlice } from "@reduxjs/toolkit";
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
  SET_DROPDOWN_VISIBILITY,
} from "../Action/DepartmentActions";

const initialState = {
  departments: [],
  selectedDepartment: null,
  departmentName: "",
  sortConfig: { key: null, direction: "ascending" },
  searchName: "",
  showActionsDropdown: false,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(setSelectedDepartment, (state, action) => {
        state.selectedDepartment = action.payload;
      })
      .addCase(setDepartmentName, (state, action) => {
        state.departmentName = action.payload;
      })
      .addCase(setSortConfig, (state, action) => {
        state.sortConfig = action.payload;
      })
      .addCase(setSearchName, (state, action) => {
        state.searchName = action.payload;
      })
      .addCase(toggleDepartmentStatus, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(SET_DROPDOWN_VISIBILITY, (state, action) => {
        state.showActionsDropdown = action.payload;
      });
  },
});

export default departmentSlice.reducer;
