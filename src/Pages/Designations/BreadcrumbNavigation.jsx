// BreadcrumbNavigation.js
import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbNavigation = ({ handleShow }) => {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Designations</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/super-admin-dashboard" style={{ textDecoration: "none", color: "black" }}>
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active">Designations</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <button className="btn btn-success rounded-5" onClick={handleShow}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BreadcrumbNavigation);
