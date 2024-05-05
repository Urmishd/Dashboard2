import React, { useEffect, useRef, useState } from "react";
import Logo from "../img/logo.png";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "./Sidebar";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

function Header({ onLogout }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [fName, setfName] = useState("");

  useEffect(() => {
    // Retrieve user's name from local storage when component mounts
    const storedName = localStorage.getItem("enc_name");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // admin header

  useEffect(() => {
    // Retrieve user's name from local storage when component mounts
    const storedName = localStorage.getItem("enc_fname");
    if (storedName) {
      setfName(storedName);
    }
  }, []);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // profile
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

  const logout = () => {
    // Clear authentication token and any other user-related data from local storage
    localStorage.removeItem("token");
    // Redirect to the login page or any other appropriate route
    navigate("/");
  };

  // toggle sidebar

  // notification bell
  // const [hasNotification, setHasNotification] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close notification box if it is open and the click occurred outside the bell icon and the notification box
      if (
        isNotificationOpen &&
        !notificationRef.current.contains(event.target) &&
        !event.target.classList.contains("bell")
      ) {
        setIsNotificationOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNotificationOpen]);

// message comment 
const [isCommentOpen, setIsCommentOpen] = useState(false);
const commentRef = useRef(null);

const toggleComment = () => {
  setIsCommentOpen(!isCommentOpen);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    // Close comment box if it is open and the click occurred outside the comment icon and the comment box
    if (
      isCommentOpen &&
      !commentRef.current.contains(event.target) &&
      !event.target.classList.contains('comment-icon')
    ) {
      setIsCommentOpen(false);
    }
  };

  // Add event listener when component mounts
  document.addEventListener("click", handleClickOutside);
  
  // Remove event listener when component unmounts
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isCommentOpen]);

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
                <HiBars3CenterLeft className="fs-3" />
                {/* <Sidebar isOpen={SidebarOpen} toggle={toggleSidebar} /> */}
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

            <div className="d-flex gap-4">
              {/* notificatio bell */}

              <div style={{ position: "relative" }}>
                <BsBell
                  size={20}
                  className="bell"
                  onClick={toggleNotification}
                />
                <div className="notification-dot">3</div>
                {isNotificationOpen && (
                  <div ref={notificationRef} className="notifyim">
                    <div className="d-flex justify-content-between">
                      <span className="notification-title">Notifications</span>
                      <a href="" className="clear-noti">
                        Clear All
                      </a>
                    </div>
                    <hr className="hrline" />

                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                        <br />
                        <span className="notification-time text-muted">
                          4 mins ago
                        </span>
                      </p>
                    </div>
                    <hr className="hrline" />

                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                        <br />
                        <span className="notification-time text-muted">
                          4 mins ago
                        </span>
                      </p>
                    </div>
                    <hr className="hrline" />

                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                        <br />
                        <span className="notification-time text-muted">
                          4 mins ago
                        </span>
                      </p>
                    </div>
                    <hr className="hrline" />

                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                        <br />
                        <span className="notification-time text-muted">
                          4 mins ago
                        </span>
                      </p>
                    </div>
                    {/* nnofty footer */}
                    <hr className="hrline" />
                    <footer className="text-center">
                      <a href="#" className="text-decoration-none  text-body">
                        View all Notifications
                      </a>
                    </footer>
                  </div>
                )}
              </div>

              {/* comment notification */}

              <div style={{ position: "relative" }}>
                <FaRegComment size={20} onClick={toggleNotification} className="bell" />
                <div className="notification-dot">8</div>
                {isCommentOpen && (
                  <div ref={commentRef} className="notifyim commnofty">
                    <div className="d-flex justify-content-between">
                      <span className="notification-title">Messages</span>
                      <a href="" className="clear-noti">
                        Clear All
                      </a>
                    </div>
                    <hr className="hrline" />

                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <div class="d-flex justify-content-between">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                        </div>

                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </p>
                    </div>

                    <hr className="hrline" />
                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <div class="d-flex justify-content-between">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                        </div>

                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </p>
                    </div>

                    <hr className="hrline" />
                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <div class="d-flex justify-content-between">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                        </div>

                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </p>
                    </div>
                    <hr className="hrline" />
                    <div className="d-flex gap-3">
                      <span className=" flex-shrink-0">
                        <img
                          alt=""
                          src="/img/profiles/avatar-02.jpg"
                          className="avatarnofty"
                        />
                      </span>

                      <p className="noti-details">
                        <div class="d-flex justify-content-between">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                        </div>

                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </p>
                    </div>
                    {/* nnofty footer */}
                    <hr className="hrline" />
                    <footer className="text-center">
                      <a href="#" className="text-decoration-none  text-body">
                        View all Notifications
                      </a>
                    </footer>
                  </div>
                )}
              </div>
            </div>

            <div
              className="d-flex align-content-center gap-1 ml3 position-relative"
              style={{ cursor: "pointer" }}
            >
              {/* <div className="profile"  onClick={toggleMenu}></div> */}
              <Avatar name={userName} size="40" round={true} />
              <p className="mt-2" onClick={toggleMenu}>
                {fName} <IoIosArrowDown />
              </p>
              {isMenuOpen && (
                <div ref={menuRef} className="main-pro-menu">
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
      {/* {isSidebarOpen && <Sidebar />} */}
    </>
  );
}

export default Header;
