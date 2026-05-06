import { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import NotificationCenter from "./NotificationCenter";
import Login from "../pages/Login";

import {
  FaBarsStaggered,
  // FaRegCopyright,
  // FaRocket,
  // FaRegCircle,
  FaBell,
  FaX,
} from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const notifications = [
    {
      id: 1,
      subject: "Maths",
      message: "අද රාත්‍රී 8ට විශේෂ අමතර පන්තියක් පැවැත්වේ.",
      time: "10 mins ago",
    },
    {
      id: 2,
      subject: "Science",
      message: "නව නිබන්ධනය Paper Hub එකට එක් කර ඇත.",
      time: "1 hour ago",
    },
    {
      id: 3,
      subject: "English",
      message: "Closed",
      time: "2 hour ago",
    },
  ];

  return (
    <>
      <header id="header" className="header-section">
        <nav className="header">
          <FaBarsStaggered
            className="menu-btn"
            id="menu-btn"
            title="Menu"
            onClick={toggleMenu}
          />

          <a href="#home" className="header-logo">
            <div className="logo-circle">E</div>educa<span>.</span>
          </a>

          <div
            className={`header-navbar ${isActive ? "nav-active" : ""}`}
            id="header-navbar">
            <Link
              to="/#home"
              className={({ isActive }) =>
                isActive ? "nav-active active" : ""
              }>
              Home
            </Link>

            <NavHashLink
              smooth
              to="/#resources"
              className={({ isActive }) =>
                isActive ? "nav-active active" : ""
              }>
              Learning Hub
            </NavHashLink>

            <NavHashLink
              smooth
              to="/#classes"
              className={({ isActive }) =>
                isActive ? "nav-active active" : ""
              }>
              Class Schedule
            </NavHashLink>

            <Link
              to="/tools"
              className={({ isActive }) =>
                isActive ? "nav-active active" : ""
              }>
              Smart Tools
            </Link>

            <Link
              to="/quizzes"
              className={({ isActive }) =>
                isActive ? "nav-active active" : ""
              }>
              Skill Test
            </Link>

            {/* <div className="header-copyrights">
              <a href="#home" className="header-logo">
                <FaRegCircle /> educa<span>.</span>
              </a>
              <p>
                <FaRocket />
                Version 1.0
              </p>
              <p>
                <FaRegCopyright />
                <span> {new Date().getFullYear()}</span> All rights reserved.
              </p>
            </div> */}
          </div>

          <div className="header-actions">
            <div
              className="notif-bell-wrapper"
              onClick={() => setShowNotif(!showNotif)}>
              <FaBell className="notif-bell" />
              {notifications.length > 0 && (
                <span className="notif-count"></span>
              )}
            </div>

            {showNotif && (
              <NotificationCenter
                notifications={notifications}
                onClose={() => setShowNotif(false)}
              />
            )}

            <button className="sign-btn" onClick={() => setShowLogin(true)}>
              <FaRegUserCircle />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`overlay ${isActive ? "active" : ""}`}
        onClick={toggleMenu}></div>

      {/* Login Popup Overlay */}
      {showLogin && (
        <div className="login-overlay" onClick={() => setShowLogin(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowLogin(false)}>
              <FaX className="close-btn " />
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
