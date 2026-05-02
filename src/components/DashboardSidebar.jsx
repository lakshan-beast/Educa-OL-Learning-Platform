// import React from 'react';
import { Link } from "react-router-dom";
import {
  FaUser,
  FaChartLine,
  FaToolbox,
  FaFilePdf,
  FaRightFromBracket,
} from "react-icons/fa6";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-user">
        <FaUser className="user-icon" />
        <h3>Student Name</h3>
        <p>Grade 11 - O/L</p>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard">
          <FaChartLine /> Overview
        </Link>
        <Link to="/paper-hub">
          <FaFilePdf /> My Papers
        </Link>
        <Link to="/tools">
          <FaToolbox /> Smart Tools
        </Link>
        <Link to="/" className="logout-btn">
          <FaRightFromBracket /> Logout
        </Link>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
