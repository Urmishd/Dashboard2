import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AdminDashboard from "../Pages/AdminDashboard";
import SuperAdmin from "../Pages/SuperAdmin";
import Employee from "../Pages/Employee";
import Department from "../Pages/Department/Department";
import Designations from "../Pages/Designations/Designations";
import Setting from "../other/Setting";
import AllEmployee from "../Pages/Allemployee/AllEmployee ";
import Project from "../Pages/Project";
import PageNotFound from "../Pages/PageNotFound ";


const Sidebar = ({ onLogout }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header onLogout={onLogout} toggleSidebar={toggleSidebar} />
      <div className="row w-100">
        <Router>
          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <ul className="list-unstyled">
              <li>
                <span
                  onClick={() => toggleSubMenu("dashboard")}
                  className="cursor-pointer"
                >
                  <span>
                    <i className="fa-solid fa-gauge"></i>
                    <span className="text">&nbsp;&nbsp;Dashboard</span>
                  </span>
                  {openSubMenu === "dashboard" ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
                <ul
                  className={`submenu list-unstyled ${
                    openSubMenu === "dashboard" ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="/">Super Admin Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin-dashboard">Admin Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/employee-dashboard">Employee Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <span
                  onClick={() => toggleSubMenu("master")}
                  className="cursor-pointer"
                >
                  <span>
                    <i className="fa-solid fa-code-branch"></i>
                    <span className="text">&nbsp;&nbsp;Master</span>
                  </span>
                  {openSubMenu === "master" ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
                <ul
                  className={`submenu list-unstyled ${
                    openSubMenu === "master" ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="/department">Department</Link>
                  </li>
                  <li>
                    <Link to="/designations">Designation</Link>
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <span
                  onClick={() => toggleSubMenu("employee")}
                  className="cursor-pointer"
                >
                  <span>
                    <i className="fa-solid fa-user"></i>
                    <span className="text">&nbsp;&nbsp;Employee</span>
                  </span>
                  {openSubMenu === "employee" ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
                <ul
                  className={`submenu list-unstyled ${
                    openSubMenu === "employee" ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="/all-employees">All Employees</Link>
                  </li>
                  <li>
                    <Link to="/leave">Leave</Link>
                  </li>
                  <li>
                    <Link to="/game">Game</Link>
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <span
                  onClick={() => toggleSubMenu("project")}
                  className="cursor-pointer"
                >
                  <span>
                    <i className="fa-solid fa-rocket"></i>
                    <span className="text">&nbsp;&nbsp;Projects</span>
                  </span>
                  {openSubMenu === "project" ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
                <ul
                  className={`submenu list-unstyled ${
                    openSubMenu === "project" ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="/project">Project</Link>
                  </li>
                  <li>
                    <Link to="/task">Tasks</Link>
                  </li>
                  <li>
                    <Link to="/taskboard">Task Board</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={`right-side-sidebar ${sidebarOpen ? "" : "full"}`}>
            <Routes>
              <Route path="/" element={<SuperAdmin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/employee-dashboard" element={<Employee />} />
              <Route path="/department" element={<Department />} />
              <Route path="/designations" element={<Designations />} />
              <Route path="/all-employees" element={<AllEmployee />} />
              <Route path="/project" element={<Project />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Setting />
    </>
  );
};

export default Sidebar;
