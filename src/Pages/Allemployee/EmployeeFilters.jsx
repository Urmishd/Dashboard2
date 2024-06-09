import React from 'react';

function EmployeeFilters({
  searchEmployeeId,
  searchName,
  searchDesignation,
  handleEmployeeIdSearch,
  handleSearchChange,
  handleDesignationChange,
}) {
  return (
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Employee ID"
            value={searchEmployeeId}
            onChange={handleEmployeeIdSearch}
          />
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Employee Name"
            value={searchName}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus select-focus">
          <select
            className="w-100 rounded-2 filter-search"
            value={searchDesignation}
            onChange={handleDesignationChange}
          >
            <option value="">Select Designation</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Ios Developer">Ios Developer</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <button
          className="btn text-light w-75 h-100"
          style={{ backgroundColor: '#55ce63' }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default EmployeeFilters;