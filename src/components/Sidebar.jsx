import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBell, FaCodeBranch, FaMoneyBill1 } from "react-icons/fa6";
import Department from "../Pages/Department";
import Designations from "../Pages/Designations";
import Header from "./Header";
import Employee from "../Pages/Employee";
import SuperAdmin from "../Pages/SuperAdmin";
import Login from "./Login";
import { Collapse } from "react-bootstrap";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Setting from "../other/Setting"

const Sidebar = ({ onLogout }) => {
  // window.location.reload(true);
  // State variables to manage open/closed state
  // const [adminOpen, setAdminOpen] = useState(true);
  const [masterOpen, setMasterOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);

  // collaspan sidebar
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
    if (!open) {
      setMasterOpen(false);
    }
  };
  const toggleCollapse2 = () => {
    setMasterOpen(!masterOpen);
    if (open) {
      setOpen(false);
    }
  };

  // tooglebar sidebar

  return (
    <Router>
      <Header onLogout={onLogout} />
      <div className="d-flex">
        {/* ------- Adminpage start ------- */}
        {/* <div className={`col-4 sidebar-main ${isOpen ? 'open' : ''}`}> */}
        <div className="col-2 sidebar-fix overflow-scroll">
          <div className="sidebar p-2">
            <div
              className="header"
              onClick={toggleCollapse}
              aria-controls="collapsibleContent"
              aria-expanded={open}
            >
              <p className="d-flex align-items-center gap-arrow">
                <span>
                  <AiOutlineDashboard className="fs-5" />
                  &nbsp; Dashboard
                </span>
                {open ? <BsChevronDown /> : <BsChevronRight />}
              </p>
            </div>

            <Collapse in={open} className="collapseopne" timeout={600}>
              <ul id="collapsibleContent">
                <Link to="/superadmin" className="sublist">
                  <li>Super Admin Dashboard</li>
                </Link>
                <Link to="/admindashboard" className="sublist">
                  <li>Admin Dashboard</li>
                </Link>
                <Link to="/employee" className="sublist">
                  <li>Employee Dashboard</li>
                </Link>
              </ul>
            </Collapse>

            <div
              className="header"
              onClick={toggleCollapse2}
              aria-controls="collapsibleContent2"
              aria-expanded={masterOpen}
            >
              <p className="d-flex align-items-center gap-arrow1">
                <span>
                  <FaCodeBranch className="fs-5" /> &nbsp; Master
                </span>
                {masterOpen ? <BsChevronDown /> : <BsChevronRight />}
              </p>
            </div>

            <Collapse in={masterOpen} className="collapseopne" timeout={500}>
              <ul id="collapsibleContent2">
                <Link to="/department" className="sublist">
                  <li>Department</li>
                </Link>
                <Link to="/designations" className="sublist">
                  <li>Designation</li>
                </Link>
              </ul>
            </Collapse>
          </div>
        </div>

        <Setting />
        {/* </div> */}
        {/* ------- Router start to collas */}
        <div className="col-12 main-bg">
          <Routes>
            <Route path="/superadmin" element={<SuperAdmin />}></Route>
            <Route path="/employee" element={<Employee />}></Route>
            <Route path="/admindashboard" element={<AdminDashboard />}></Route>
            <Route path="/department" element={<Department />}></Route>
            <Route path="/designations" element={<Designations />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
