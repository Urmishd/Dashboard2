import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineCube } from "react-icons/hi2";
import { PiUsersThree } from "react-icons/pi";
import { FaBell, FaCodeBranch, FaMoneyBill1 } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoRocketSharp } from "react-icons/io5";
import { LiaUserSecretSolid, LiaTicketAltSolid } from "react-icons/lia";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import {
  FaBullhorn,
  FaGraduationCap,
  FaQuestion,
  FaRegEdit,
  FaRegFilePdf,
  FaRegObjectUngroup,
  FaRegTimesCircle,
} from "react-icons/fa";
import { PiChartPieThin } from "react-icons/pi";
import { FiCrosshair } from "react-icons/fi";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
import Department from "../Pages/Department";
import Designations from "../Pages/Designations";
import Header from "./Header";

const Sidebar = () => {
  // State variables to manage open/closed state
  const [adminOpen, setAdminOpen] = useState(true);
  const [appOpen, setAppOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [ClientsOpen, setClients] = useState(false);
  const [LeadsOpen, setLeads] = useState(false);
  const [Tickets, setTickets] = useState(false);
  const [Sales, setSales] = useState(false);
  const [Accounting, setAccounting] = useState(false);
  const [Payroll, setPayroll] = useState(false);
  const [Polices, setPolices] = useState(false);
  const [Reports, setReports] = useState(false);

  return (
    <Router>
      <Header />
      <div className="d-flex">
        {/* ------- Adminpage start ------- */}
        {/* <div className={`sidebaroff ${isoff ? "open" : ""}`}> */}
          <div className="col-2 sidebar-fix overflow-scroll ">
            <div className="sidebar p-2">
              <h6>Main</h6>
              <div className="main">
                <div
                  className="header"
                  onClick={() => setAdminOpen(!adminOpen)}
                >
                  <p>
                    <AiOutlineDashboard /> Dashboard
                  </p>
                </div>
                {adminOpen && (
                  <ul className="submenu">
                    <Link to="/" className="sublist">
                      <li>Admin Dashboard</li>
                    </Link>
                    <li>Employee Dashboard</li>
                  </ul>
                )}
                <div className="header" onClick={() => setAppOpen(!appOpen)}>
                  <p>
                    <HiOutlineCube /> App
                  </p>
                </div>
                {appOpen && (
                  <ul className="submenu">
                    <li>Chat</li>
                    <li>Call</li>
                    <li>Game</li>
                  </ul>
                )}
              </div>

              <h6>Master</h6>

              <div
                className="header"
                onClick={() => setMasterOpen(!masterOpen)}
              >
                <p>
                  <FaCodeBranch /> Master
                </p>
              </div>
              {masterOpen && (
                <ul className="submenu">
                  <Link to="/designations" className="sublist">
                    <li>Designation</li>
                  </Link>
                  <Link to="/department" className="sublist">
                    <li>Department</li>
                  </Link>
                </ul>
              )}
              {/* Employees */}
              <h6>Employee</h6>
              <div
                className="header"
                onClick={() => setEmployeeOpen(!employeeOpen)}
              >
                <p>
                  <CiUser /> Employee
                </p>
              </div>
              {employeeOpen && (
                <ul className="submenu">
                  <li>Game</li>
                  <li>Gum</li>
                  <li>Tee</li>
                  <li>Bee</li>
                </ul>
              )}

              <div
                className="header"
                onClick={() => setProjectOpen(!projectOpen)}
              >
                <p>
                  <IoRocketSharp /> Project
                </p>
              </div>
              {projectOpen && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setClients(!ClientsOpen)}>
                <p>
                  <PiUsersThree /> Clients
                </p>
              </div>
              {ClientsOpen && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setLeads(!LeadsOpen)}>
                <p>
                  <LiaUserSecretSolid /> Leads
                </p>
              </div>
              {LeadsOpen && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setTickets(!Tickets)}>
                <p>
                  <LiaTicketAltSolid /> Tickets
                </p>
              </div>
              {Tickets && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              {/*  HR*/}

              <h6>HR</h6>
              <div className="header" onClick={() => setSales(!Sales)}>
                <p>
                  <RiCheckboxMultipleBlankLine /> Sales
                </p>
              </div>
              {Sales && (
                <ul className="submenu">
                  <li>Game</li>
                  <li>Gum</li>
                  <li>Tee</li>
                  <li>Bee</li>
                </ul>
              )}

              <div
                className="header"
                onClick={() => setAccounting(!Accounting)}
              >
                <p>
                  <RiCheckboxMultipleBlankLine /> Accounting
                </p>
              </div>
              {Accounting && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPayroll(!Payroll)}>
                <p>
                  <FaMoneyBill1 /> Payroll
                </p>
              </div>
              {Payroll && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPolices(!Polices)}>
                <p>
                  <FaRegFilePdf /> Polices
                </p>
              </div>
              {Polices && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setReports(!Reports)}>
                <p>
                  <PiChartPieThin /> Reports
                </p>
              </div>
              {Reports && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              {/* Performance */}

              <h6>Performance</h6>
              <div className="header" onClick={() => setSales(!Sales)}>
                <p>
                  <FaGraduationCap /> Performance
                </p>
              </div>
              {Sales && (
                <ul className="submenu">
                  <li>Game</li>
                  <li>Gum</li>
                  <li>Tee</li>
                  <li>Bee</li>
                </ul>
              )}

              <div
                className="header"
                onClick={() => setAccounting(!Accounting)}
              >
                <p>
                  <FiCrosshair /> Goals
                </p>
              </div>
              {Accounting && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPayroll(!Payroll)}>
                <p>
                  <FaRegEdit /> Training
                </p>
              </div>
              {Payroll && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPolices(!Polices)}>
                <p>
                  <FaBullhorn /> Promotion
                </p>
              </div>
              {Polices && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setReports(!Reports)}>
                <p>
                  <LiaExternalLinkSquareAltSolid /> Resignation
                </p>
              </div>
              {Reports && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setReports(!Reports)}>
                <p>
                  <FaRegTimesCircle /> Termination
                </p>
              </div>
              {Reports && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              {/* Administration */}
              <h6>Administration</h6>
              <div className="header" onClick={() => setSales(!Sales)}>
                <p>
                  <FaRegObjectUngroup /> Assets
                </p>
              </div>
              {Sales && (
                <ul className="submenu">
                  <li>Game</li>
                  <li>Gum</li>
                  <li>Tee</li>
                  <li>Bee</li>
                </ul>
              )}

              <div
                className="header"
                onClick={() => setAccounting(!Accounting)}
              >
                <p>
                  <IoBriefcaseOutline /> Jobs
                </p>
              </div>
              {Accounting && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPayroll(!Payroll)}>
                <p>
                  <FaQuestion /> Knowledgebase
                </p>
              </div>
              {Payroll && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}

              <div className="header" onClick={() => setPolices(!Polices)}>
                <p>
                  <FaBell /> Activities
                </p>
              </div>
              {Polices && (
                <ul className="submenu">
                  <li>Term</li>
                  <li>Team</li>
                  <li>Member</li>
                </ul>
              )}
            </div>
          </div>
        {/* </div> */}
        {/* ------- Router start to collas */}
        <div className="col-12 main-bg">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route path="/department" element={<Department />}></Route>
            <Route path="/designations" element={<Designations />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
