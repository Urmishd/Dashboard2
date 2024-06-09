// src/Redux/Reducer/DesignationReducer.js
import {
    FETCH_DESIGNATIONS,
    ADD_DESIGNATION,
    UPDATE_DESIGNATION,
    DELETE_DESIGNATION,
    SET_SELECTED_DESIGNATION,
    SET_SORT_CONFIG,
    SET_SEARCH_NAME,
  } from '../Action/DesignationActions';
  
  const initialState = {
    designations: [],
    selectedDesignation: null,
    sortConfig: { key: null, direction: 'ascending' },
    searchName: '',
  };
  
  const designationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DESIGNATIONS:
        return { ...state, designations: action.payload };
      case ADD_DESIGNATION:
        return { ...state, designations: [...state.designations, action.payload] };
      case UPDATE_DESIGNATION:
        return {
          ...state,
          designations: state.designations.map((d) =>
            d.id === action.payload.id ? action.payload : d
          ),
        };
      case DELETE_DESIGNATION:
        return {
          ...state,
          designations: state.designations.filter((d) => d.id !== action.payload),
        };
      case SET_SELECTED_DESIGNATION:
        return { ...state, selectedDesignation: action.payload };
      case SET_SORT_CONFIG:
        return { ...state, sortConfig: action.payload };
      case SET_SEARCH_NAME:
        return { ...state, searchName: action.payload };
      default:
        return state;
    }
  };
  
  export default designationReducer;
  