import { configureStore } from '@reduxjs/toolkit';
import DepartmentReducer from './Reducers/DepartmentReducer';

const store = configureStore({
  reducer: {
    department: DepartmentReducer,
  },
});

export default store;
