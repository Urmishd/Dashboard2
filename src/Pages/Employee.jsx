import React, { useEffect, useState } from "react";
import Revenue from "../other/Revenue";
import Overview from "../other/Overview";
import { FaRegCircleUser } from "react-icons/fa6";

function AdminDashboard() {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    // Retrieve user's name from local storage when component mounts
    const storedName = localStorage.getItem('enc_name');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  return (
    <>
      <section className="container">
        <h2 className=" pt-3">Welcome {userName}</h2>
        <h6>Eployee Dashboard</h6>
        {/* Projects ,Projects ,Tasks ,Employees  */}
        <div className="row mt-4">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="dash-widget-icon">
                  <i className="fa fa-cubes"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>112</h3>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="dash-widget-icon">
                  <i className="fa fa-usd"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>44</h3>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="dash-widget-icon">
                  <i className="fa fa-diamond"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>37</h3>
                  <span>Tasks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="dash-widget-icon">
                  <i className="fa fa-user"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>218</h3>
                  <span>Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart and graph section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Revenue</h5>
                    <div id="bar-charts">
                      <Revenue />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Sales Overview</h5>
                    <div id="line-charts">
                      <Overview />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Employees,Earnings,Expenses,Profit*/}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card-group mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">New Employees</span>
                      </div>
                      <div>
                        <span className="text-success">+10%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">10</h3>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%", backgroundColor: "#ff9b44" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mb-0">Overall Employees 218</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Earnings</span>
                      </div>
                      <div>
                        <span className="text-success">+12.5%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$1,42,300</h3>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%", backgroundColor: "#ff9b44" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mb-0">
                      Previous Month
                      <span className="text-muted">$1,15,852</span>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Expenses</span>
                      </div>
                      <div>
                        <span className="text-danger">-2.8%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$8,500</h3>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%", backgroundColor: "#ff9b44" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mb-0">
                      Previous Month <span className="text-muted">$7,500</span>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Profit</span>
                      </div>
                      <div>
                        <span className="text-danger">-75%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$1,12,000</h3>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%", backgroundColor: "#ff9b44" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mb-0">
                      Previous Month{" "}
                      <span className="text-muted">$1,42,000</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics, Task Statistics, Today Absent  */}
        <div className="container">
          <div className="row">
            {/* Statistics */}
            <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
              <div className="card flex-fill dash-statistics">
                <div className="card-body">
                  <h4 className="card-title">Statistics</h4>
                  <div className="stats-list mt-4 d-flex flex-column gap-2">
                    {/* Today Leave */}
                    <div className="stats-info">
                      <div className="d-flex justify-content-between">
                        <div> Today Leave</div>
                        <strong>
                          4 <small>/ 65</small>
                        </strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "31%" }}
                          role="progressbar"
                          aria-valuenow="31"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Pending Invoice */}
                    <div className="stats-info">
                      <div className="d-flex justify-content-between">
                        <div> Pending Invoicez</div>
                        <strong>
                          15 <small>/ 92</small>
                        </strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "31%" }}
                          role="progressbar"
                          aria-valuenow="31"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Completed Projects */}
                    <div className="stats-info">
                      <div className="d-flex justify-content-between">
                        <div>Completed Projects</div>
                        <strong>
                          85 <small>/ 112</small>
                        </strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "62%" }}
                          role="progressbar"
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Open Tickets */}
                    <div className="stats-info ">
                      <div className="d-flex justify-content-between">
                        <div>Open Tickets</div>
                        <strong>
                          190 <small>/ 212</small>
                        </strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "62%" }}
                          role="progressbar"
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Closed Tickets */}
                    <div className="stats-info ">
                      <div className="d-flex justify-content-between">
                        <div> Closed Tickets</div>
                        <strong>
                          22 <small>/ 212</small>
                        </strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          style={{ width: "22%" }}
                          role="progressbar"
                          aria-valuenow="22"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Statistics */}
            <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="card-body">
                    <h4 className="card-title">Task Statistics</h4>
                    <div className="statistics">
                      <div className="row">
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>Total Tasks</p>
                            <h3>385</h3>
                          </div>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>Overdue Tasks</p>
                            <h3>19</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress1 mb-4">
                      <div
                        className="progress-bar bg-purple"
                        style={{ width: "30%" }}
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        30%
                      </div>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "22%" }}
                        role="progressbar"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        22%
                      </div>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "24%" }}
                        role="progressbar"
                        aria-valuenow="12"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        24%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "26%" }}
                        role="progressbar"
                        aria-valuenow="14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        21%
                      </div>
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "10%" }}
                        role="progressbar"
                        aria-valuenow="14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        10%
                      </div>
                    </div>
                    <div>
                      <p>
                        <i className="fa fa-dot-circle-o text-purple me-2"></i>
                        Completed Tasks <span className="float-end">166</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-warning me-2"></i>
                        Inprogress Tasks <span className="float-end">115</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-success me-2"></i>
                        On Hold Tasks <span className="float-end">31</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-danger me-2"></i>
                        Pending Tasks <span className="float-end">47</span>
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-dot-circle-o text-info me-2"></i>
                        Review Tasks <span className="float-end">5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today Absent */}
            <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="card-body">
                    <h4 className="card-title">
                      Today Absent
                      <span className="badge bg-danger ms-2">5</span>
                    </h4>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center gap-2">
                        <a href="#">
                          <img
                            alt="profile"
                            className="avatar"
                            src="../img/user.jpg"
                          />
                        </a>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-danger ">Pending</span>
                        </div>
                      </div>
                    </div>

                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center gap-2">
                        <a href="#">
                          <img
                            alt="Profile"
                            src="../img/user.jpg"
                            className="avatar"
                          />
                        </a>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-success">Approved</span>
                        </div>
                      </div>
                    </div>
                    <div className="load-more text-center mt-3">
                      <a className="text-dark" href="#">
                        Load More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices,Payments */}
        <div className="row mt-4">
          {/* Invoices */}
          <div className="col-md-6   d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Invoices</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0 invoices-w">
                    <thead>
                      <tr>
                        <th>Invoice ID</th>
                        <th>Client</th>
                        <th>Due Date</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#">#INV-0001</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Global Technologies</a>
                          </h6>
                        </td>
                        <td>11 Mar 2019</td>
                        <td>$380</td>
                        <td>
                          <span className="badge bg-warning">
                            Partially Paid
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">#INV-0002</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Delta Infotech</a>
                          </h6>
                        </td>
                        <td>8 Feb 2019</td>
                        <td>$500</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">#INV-0003</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Cream Inc</a>
                          </h6>
                        </td>
                        <td>23 Jan 2019</td>
                        <td>$60</td>
                        <td>
                          <span className="badge bg-danger">Unpaid</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="text-decoration-none ">
                  View all invoices
                </a>
              </div>
            </div>
          </div>

          {/* Payments */}
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Payments</h3>
              </div>
              <div className="card-body ">
                <div className="table-responsive">
                  <table className="table custom-table table-nowrap mb-0  Payments-w ">
                    <thead>
                      <tr>
                        <th>Invoice ID</th>
                        <th>Client</th>
                        <th>Payment Type</th>
                        <th>Paid Date</th>
                        <th>Paid Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#">#INV-0001</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Global Technologies</a>
                          </h6>
                        </td>
                        <td>Paypal</td>
                        <td>11 Mar 2019</td>
                        <td>$380</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">#INV-0002</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Delta Infotech</a>
                          </h6>
                        </td>
                        <td>Paypal</td>
                        <td>8 Feb 2019</td>
                        <td>$500</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">#INV-0003</a>
                        </td>
                        <td>
                          <h6>
                            <a href="#">Cream Inc</a>
                          </h6>
                        </td>
                        <td>Paypal</td>
                        <td>23 Jan 2019</td>
                        <td>$60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" zclassName="text-decoration-none ">
                  View all payments
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clients, Recent Projects */}
         <div className="row mt-4">
            <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                    <div className="card-header">
                        <h3 className="card-title mb-0">Clients</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Client data rows */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <a href="#" className="text-decoration-none">View all clients</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <div className="card card-table flex-fill">
                    <div className="card-header">
                        <h3 className="card-title mb-0">Recent Projects</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Project Name </th>
                                        <th>Progress</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Project data rows */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <a href="#" className="text-decoration-none ">View all projects</a>
                    </div>
                </div>
            </div>
        </div>
         
      </section>
    </>
  );
}

export default AdminDashboard;
