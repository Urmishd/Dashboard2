import React, { useEffect, useRef, useState } from "react";
import Logo from "../img/logo.png";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "react-avatar";
import "bootstrap/dist/css/bootstrap.min.css";


function Header({ onLogout, toggleSidebar }) {
  const [userName, setUserName] = useState("");
  const [fName, setfName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("enc_name");
    if (storedName) {
      setUserName(storedName);
    }
    const storedFName = localStorage.getItem("enc_fname");
    if (storedFName) {
      setfName(storedFName);
    }
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNotificationOpen &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        !event.target.classList.contains("bell")
      ) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNotificationOpen]);

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const commentRef = useRef(null);

  const toggleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCommentOpen &&
        commentRef.current &&
        !commentRef.current.contains(event.target) &&
        !event.target.classList.contains("comment-icon")
      ) {
        setIsCommentOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCommentOpen]);

  return (
    <header className="sticky-header p-2 shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="company-name">
          <img src={Logo} alt="Logo" width="35px" />
          <div className="d-flex align-item-center gap-2">
          <HiBars3CenterLeft className="fs-3 cursor-pointer ms-3" onClick={toggleSidebar} />
          <span className="fs-5 ms-2 d-none d-md-inline">ADSCode Gen Solutions Pvt.Ltd.</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <input type="text" className="form-control me-3 d-none d-md-block text-light search-bar " placeholder="Search here" />
          <div className="position-relative me-3">
            <BsBell size={20} className="bell cursor-pointer" onClick={toggleNotification} />
            <div className="notification-dot">3</div>
            {isNotificationOpen && (
              <div ref={notificationRef} className="notifyim p-3 shadow">
                <div className="d-flex justify-content-between">
                  <span className="notification-title">Notifications</span>
                  <a href="/" className="clear-noti">Clear All</a>
                </div>
                <hr className="hrline" />
                <div className="d-flex gap-3">
                  <img alt="" src="/img/profiles/avatar-02.jpg" className="avatarnofty" />
                  <p className="noti-details">
                    <span className="noti-title">John Doe</span> added new task
                    <span className="noti-title">Patient appointment booking</span>
                    <br />
                    <span className="notification-time text-muted">4 mins ago</span>
                  </p>
                </div>
                <hr className="hrline" />
                <footer className="text-center">
                  <a href="/" className="text-decoration-none text-body">View all Notifications</a>
                </footer>
              </div>
            )}
          </div>
          <div className="position-relative me-3">
            <FaRegComment size={20} className="comment-icon cursor-pointer" onClick={toggleComment} />
            <div className="notification-dot">8</div>
            {isCommentOpen && (
              <div ref={commentRef} className="notifyim commnofty p-3 shadow">
                <div className="d-flex justify-content-between">
                  <span className="notification-title">Messages</span>
                  <a href="/" className="clear-noti">Clear All</a>
                </div>
                <hr className="hrline" />
                <div className="d-flex gap-3">
                  <img alt="" src="/img/profiles/avatar-02.jpg" className="avatarnofty" />
                  <p className="noti-details">
                    <div className="d-flex justify-content-between">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                    </div>
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </p>
                </div>
                <hr className="hrline" />
                <footer className="text-center">
                  <a href="/" className="text-decoration-none text-body">View all Messages</a>
                </footer>
              </div>
            )}
          </div>
          <div className="d-flex align-items-center gap-1 position-relative" style={{ cursor: "pointer" }}>
            <Avatar name={userName} size="40" round={true} onClick={toggleMenu} />
            <p className="mt-2 d-none d-md-inline" onClick={toggleMenu}>
              {fName} <IoIosArrowDown />
            </p>
            {isMenuOpen && (
              <div ref={menuRef} className="main-pro-menu shadow p-2">
                <div className="profile-menu">
                  <span>My Profile</span>
                  <span>Setting</span>
                  <span onClick={onLogout}>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
