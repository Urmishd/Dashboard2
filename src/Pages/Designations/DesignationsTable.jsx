// DesignationsTable.js
import React from "react";
import { BsThreeDotsVertical, BsArrowUp, BsArrowDown } from "react-icons/bs";

const DesignationsTable = ({
  tableData,
  filteredData,
  searchName,
  handleEdit,
  handleDelete,
  handleActivateDeactivate,
  toggleActionBox,
  selectedRowId,
  actionBoxRef,
  requestSort,
  sortConfig,
  getSortIcon
}) => {
  const sortedData = React.useMemo(() => {
    return [...tableData].sort((a, b) => {
      if (!sortConfig.key) {
        return 0;
      }
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [tableData, sortConfig]);

  return (
    <div className="table-responsive mt-2">
      <table className="table table-striped custom-table mb-0 datatable">
        <thead>
          <tr>
            <th style={{ width: "30px" }}>#</th>
            <th onClick={() => requestSort("designation")}>
              Designation {getSortIcon("designation")}
            </th>
            <th onClick={() => requestSort("department")}>
              Department {getSortIcon("department")}
            </th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {(searchName ? filteredData : sortedData).map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.designation}</td>
              <td>{row.department}</td>
              <td className="text-end">
                <div className="dropdown action-dropdown position-relative">
                  <BsThreeDotsVertical
                    className="fs-4 threedot"
                    onClick={() => toggleActionBox(row.id)}
                  />
                  {selectedRowId === row.id && (
                    <div className="action-box dropdown-dot" ref={actionBoxRef}>
                      <a onClick={() => handleEdit(row.id)}>
                        <i className="fa fa-pencil m-r-5"></i>&nbsp;&nbsp; Edit
                      </a>
                      <a onClick={() => handleDelete(row.id)}>
                        <i className="fa fa-trash m-r-5"></i>&nbsp;&nbsp; Delete
                      </a>
                      <a onClick={() => handleActivateDeactivate(row.id)}>
                        <i className="fa fa-bolt m-r-5"></i>&nbsp;&nbsp; Activate
                      </a>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(DesignationsTable);
