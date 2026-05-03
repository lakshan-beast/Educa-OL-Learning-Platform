import { useState } from "react";
import {
  FaBarsStaggered,
  FaRegCopyright,
  FaRocket,
  FaRegCircle,
  FaBell,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

import NotificationCenter from "./NotificationCenter";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

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
            <FaRegCircle /> educa<span>.</span>
          </a>

          <div
            className={`header-navbar ${isActive ? "nav-active" : ""}`}
            id="header-navbar">
            <a href="#resources" onClick={toggleMenu}>
              Resources
            </a>
            <a href="#classes" onClick={toggleMenu}>
              Classes
            </a>
            <a href="#teachers" onClick={toggleMenu}>
              Teachers
            </a>
            <a href="#about" onClick={toggleMenu}>
              About us
            </a>
            <a href="#contacts" onClick={toggleMenu}>
              Contact us
            </a>

            <div className="header-copyrights">
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
            </div>
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

            <Link to="/login" className="sign-btn">
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <div
        className={`overlay ${isActive ? "active" : ""}`}
        onClick={toggleMenu}></div>
    </>
  );
};

export default Header;
