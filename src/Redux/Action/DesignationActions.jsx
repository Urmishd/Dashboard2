// src/Redux/Action/DesignationActions.js
import axios from "axios";

export const FETCH_DESIGNATIONS = 'FETCH_DESIGNATIONS';
export const ADD_DESIGNATION = 'ADD_DESIGNATION';
export const UPDATE_DESIGNATION = 'UPDATE_DESIGNATION';
export const DELETE_DESIGNATION = 'DELETE_DESIGNATION';
export const SET_SELECTED_DESIGNATION = 'SET_SELECTED_DESIGNATION';
export const SET_SORT_CONFIG = 'SET_SORT_CONFIG';
export const SET_SEARCH_NAME = 'SET_SEARCH_NAME';

export const fetchDesignations = () => {
  return async (dispatch) => {
    const savedDesignations = localStorage.getItem('tableData');
    if (savedDesignations) {
      dispatch({ type: FETCH_DESIGNATIONS, payload: JSON.parse(savedDesignations) });
    }
  };
};

export const addDesignation = (designation) => {
  return (dispatch, getState) => {
    const designations = [...getState().designation.designations, designation];
    localStorage.setItem('tableData', JSON.stringify(designations));
    dispatch({ type: ADD_DESIGNATION, payload: designation });
  };
};

export const updateDesignation = (designation) => {
  return (dispatch, getState) => {
    const designations = getState().designation.designations.map((d) =>
      d.id === designation.id ? designation : d
    );
    localStorage.setItem('tableData', JSON.stringify(designations));
    dispatch({ type: UPDATE_DESIGNATION, payload: designation });
  };
};

export const deleteDesignation = (designationId) => {
  return (dispatch, getState) => {
    const designations = getState().designation.designations.filter((d) => d.id !== designationId);
    localStorage.setItem('tableData', JSON.stringify(designations));
    dispatch({ type: DELETE_DESIGNATION, payload: designationId });
  };
};

export const setSelectedDesignation = (designation) => {
  return { type: SET_SELECTED_DESIGNATION, payload: designation };
};

export const setSortConfig = (sortConfig) => {
  return { type: SET_SORT_CONFIG, payload: sortConfig };
};

export const setSearchName = (name) => {
  return { type: SET_SEARCH_NAME, payload: name };
};
