import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
    <div style={{ marginTop: "80px" }}>
    <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Projects</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/super-admin-dashboard"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto d-flex gap-5">
              <div className="view-icons d-flex gap-2">
               
                <span
                  className="btn border border-1 bg-white fs-5"
                //   onClick={handleViewChange}
                >
                  <i className="fa fa-th"></i>
                </span>
                <span
                  className="btn border bg-white border-1 fs-5"
                //   onClick={handleViewChange}
                >
                  <i className="fa fa-bars"></i>
                </span>
              </div>
              <button
                className="btn btn-success rounded-5"
                // onClick={handleModalOpen}
              >
                <i className="fa fa-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
    </div>
     
    </>
  );
}

export default Project;
