// SearchInput.js
import React from "react";

const SearchInput = ({ searchName, handleNameSearch }) => {
  return (
    <div className="form-group form-focus d-flex justify-content-end">
      <input
        type="text"
        className="form-control w-25"
        placeholder="Search Name"
        value={searchName}
        onChange={handleNameSearch}
      />
    </div>
  );
};

export default React.memo(SearchInput);
