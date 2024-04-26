import React, { useState } from "react";
import Logo from "../img/logo.png";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "./Sidebar";
import Avatar from 'react-avatar'

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [hasNotification, setHasNotification] = useState(true); // Default language is English
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
// profile
const [isMenuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
};
// toggle sidebar
const toggleSidebar = () => {
  setSidebarOpen(!isSidebarOpen);
};



  return (
    <>
      <header className="sticky-header">
        <div className="main-container row">
          <div className="h-100 col-4 d-flex justify-content-end align-items-center">
            {/* logo and bar and name */}
            <div className="d-flex align-items-center gap5">
              <div>
                <img src={Logo} alt="" width="35px" />
              </div>
              <div className="d-flex align-items-center gap-3">
                <HiBars3CenterLeft className="fs-3" onClick={toggleSidebar} />
                {/* <Sidebar   isoff={isSidebaroff} toggle={toggleSidebar} /> */}
                <span className="fs-5 ">Dreamguy's Technologies</span>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-end gap-4">
            <div>
              <input
                type="text"
                className="serchbar"
                placeholder="Serach here"
                
              />
            </div>

            <div className="select-container">
              <select
                value={selectedLanguage}
                onChange={handleChange}
                className="select-language"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>
            </div>

            <div className="d-flex gap-4">
              <div style={{ position: "relative" }}>
                <BsBell size={20} />
                {hasNotification && <div className="notification-dot">3</div>}
              </div>
              <div style={{ position: "relative" }}>
                <FaRegComment size={20} />
                {hasNotification && <div className="notification-dot">8</div>}
              </div>
            </div>

            <div className="d-flex align-content-center gap-1 ml3 position-relative" 
            style={{cursor:"pointer"}}>
              {/* <div className="profile"  onClick={toggleMenu}></div> */}
              <Avatar name="Urmish"  size="40" round={true} />
              <p className="mt-2" onClick={toggleMenu}>Admin <IoIosArrowDown /></p>
              {isMenuOpen &&(
                
                <div className="main-pro-menu">
                <ul className="profile-menu">
                  <li>My Profile</li>
                  <li>Setting</li>
                  <li>Logout</li>
                </ul>
              </div>
              )}
              
            </div>
          </div>
        </div>
      </header>
      {/* {isSidebarOpen && <Sidebar />} */}
    </>
  );
}

export default Header;
