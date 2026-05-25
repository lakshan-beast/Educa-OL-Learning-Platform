// // import React from 'react';
// import DashboardSidebar from "../components/DashboardSidebar";

// const Dashboard = () => {
//   return (
//     <div
//       className="dashboard-layout"
//       style={{ display: "flex", marginTop: "80px" }}>
//       <DashboardSidebar />

//       <main className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
//         <h2>
//           Welcome Back, <span>Student!</span> 👋
//         </h2>

//         <div
//           className="stats-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             marginTop: "20px",
//           }}>
//           <div className="card-container stats-card">
//             <h4>Quizzes Done</h4>
//             <p style={{ fontSize: "2rem", fontWeight: "bold" }}>12</p>
//           </div>
//           <div className="card-container stats-card">
//             <h4>Avg. Score</h4>
//             <p style={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>
//               85%
//             </p>
//           </div>
//           <div className="card-container stats-card">
//             <h4>Papers Downloaded</h4>
//             <p style={{ fontSize: "2rem", fontWeight: "bold" }}>05</p>
//           </div>
//         </div>

//         <div
//           className="recent-activity card-container"
//           style={{ marginTop: "30px" }}>
//           <h3>Recent Activity</h3>
//           <p>
//             You completed <b>Mathematics Weekly Paper 04</b> yesterday.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState } from "react";
// import { FaChartLine, FaFilePdf, FaToolbox, FaUser } from "react-icons/fa6";

// const Dashboard = () => {
//   // දැනට පේන්න ඕනේ මොන කොටසද කියලා තීරණය කරන State එක
//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <div className="dashboard-layout">
//       {/* 1. Sidebar කොටස (පේජ් එක ඇතුළෙම තියෙනවා) */}

//       <aside className="dashboard-sidebar">
//         <div
//           className="sidebar-user"
//           style={{ textAlign: "center", marginBottom: "30px" }}>
//           <FaUser style={{ fontSize: "40px" }} />
//           <h3>Student Name</h3>
//         </div>

//         <nav className="sidebar-nav">
//           <button
//             onClick={() => setActiveTab("overview")}
//             className={activeTab === "overview" ? "start-btn" : "browse-btn"}>
//             <FaChartLine /> Overview
//           </button>
//           <button
//             onClick={() => setActiveTab("papers")}
//             className={activeTab === "papers" ? "start-btn" : "browse-btn"}>
//             <FaFilePdf /> My Papers
//           </button>
//           <button
//             onClick={() => setActiveTab("tools")}
//             className={activeTab === "tools" ? "start-btn" : "browse-btn"}>
//             <FaToolbox /> Smart Tools
//           </button>
//         </nav>
//       </aside>

//       {/* 2. Content කොටස (activeTab එක අනුව මාරු වෙනවා) */}
//       <main className="dashboard-main">
//         {activeTab === "overview" && (
//           <div className="overview-content">
//             <h2>
//               Welcome Back, <span>Lakshan!</span> 👋
//             </h2>
//             <div className="stats-grid">
//               <div className="card-container">
//                 <h4>Quizzes Done</h4>
//                 <p>12</p>
//               </div>
//               <div className="card-container">
//                 <h4>Avg. Score</h4>
//                 <p>85%</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "papers" && (
//           <div className="papers-content">
//             <h2>
//               My <span>Target Papers</span>
//             </h2>
//             <p>ඔබට අදාළ සියලුම පේපර්ස් මෙතනින් ලබාගන්න.</p>
//             {/* පසුව මෙතනට PaperHub එකේ කෝඩ් එක දාන්න පුළුවන් */}
//           </div>
//         )}

//         {activeTab === "tools" && (
//           <div className="tools-content">
//             <h2>
//               Quick <span>Tools</span>
//             </h2>
//             <p>පන්ති වැඩ වලට අවශ්‍ය ටූල්ස් ඉක්මනින් පාවිච්චි කරන්න.</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  // FaClock,
  // FaVideo,
  FaBookOpen,
  // FaUser,
  FaLock,
  // FaCheckCircle,
  FaArrowLeft,
  FaHourglassHalf,
  FaRightFromBracket,
} from "react-icons/fa6";
// import { ImOffice } from "react-icons/im";

import ScoreAnalytics from "../components/ScorenAnalytics";
import { premiumStudentsList } from "../data/approvedStudents"; // Premium ලැයිස්තුව ගත්තා
import { FaCrown } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const studentId = localStorage.getItem("user_id") || "";
  const userSubjects = localStorage.getItem("user_subjects") || ""; // උදා: "MES", "M"

  // 🧠 ළමයා සල්ලි ගෙවපු Premium කෙනෙක්ද කියලා බලන True/False Logic එක
  const isPremiumUser = premiumStudentsList.includes(
    studentId.trim().toUpperCase(),
  );

  // 1. Tasks State (Daily Mission Progress Bar එකට)
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Watch this week's Mathematics recording",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     text: "Complete the Science short-note summary",
  //     completed: false,
  //   },
  //   { id: 3, text: "Check your active class notifications", completed: false },
  // ]);

  // 2. Countdown State (2026 O/L Exam - Target Date: Dec 1, 2026)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // ලොග් වෙලා නැත්නම් කෙලින්ම හෝම් පේජ් එකට හරවනවා
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }

    // විභාග Countdown ගණනය කිරීම
    const examDate = new Date("2026-12-08T08:30:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = examDate - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  // ☀️ 3. Dynamic Greeting Calculator Logic
  const getGreeting = () => {
    const hr = new Date().getHours();
    if (hr < 12) return `Good Morning ☀️`;
    if (hr < 17) return "Good Afternoon ⛅";
    return "Good Evening 🌙";
  };

  // Progress Bar එකේ ප්‍රතිශතය හැදීම
  // const completedCount = tasks.filter((t) => t.completed).length;
  // const progressPercent = Math.round((completedCount / tasks.length) * 100);

  // const toggleTask = (id) => {
  //   setTasks(
  //     tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
  //   );
  // };

  // 🔒 Subject Lock Checking Logic
  const hasAccess = (subLetter) => {
    return userSubjects.includes(subLetter);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="dashboard-wrapper page-container">
      <div className="system-container">
        <Link className="back-btn" to="/">
          <FaArrowLeft /> Back to Home Page
        </Link>
        {/* 👑 A. Dynamic Welcome Banner */}
        <div className="welcome-banner">
          <h2>{getGreeting()}, Student!</h2>
          <p className="student-id">Your ID: {studentId}</p>
          <span> Grade 11 - 2026 O/L Batch</span>

          <button onClick={handleLogout} className="browse-btn signout-btn">
            <FaRightFromBracket className="icon" />
            Sign Out
          </button>
        </div>

        <div className="dashboard-grid">
          {/* 🔒 C. Core Subject Enrolment & Paper Hub Redirection Area */}

          <div className="subjects-section">
            <h3>Your Enrolled Class Portals</h3>
            <div className="subjects-grid">
              {/* 1. MATHEMATICS PORTAL */}
              <div
                className={`subject-portal-card ${!hasAccess("M") ? "locked" : ""}`}
                style={{
                  borderLeft: "5px solid #2e78cc",
                  opacity: hasAccess("M") ? 1 : 0.6,
                }}>
                {!hasAccess("M") && (
                  <div className="locked">
                    <FaLock className="lock-icon" /> Locked
                  </div>
                )}

                <h4>Mathematics Papers</h4>
                {hasAccess("M") ? (
                  // 🟢 දැන් මේක බටන් එකක් නෙවෙයි, කෙලින්ම maths id එක අරන් යන ස්මාර්ට් ලින්ක් එකක්
                  <Link to="/paper-hub/maths" className="browse-btn paper-btn">
                    <FaBookOpen /> Paper Hub
                  </Link>
                ) : (
                  <p className="not-allowed ">
                    Not enrolled in this subject. Contact card marker.
                  </p>
                )}
              </div>

              {/* 2. SCIENCE PORTAL */}
              <div
                className={`subject-portal-card ${!hasAccess("S") ? "locked" : ""}`}
                style={{
                  borderLeft: "5px solid #2ecc71",
                  opacity: hasAccess("S") ? 1 : 0.6,
                }}>
                {!hasAccess("S") && (
                  <div className="locked">
                    <FaLock className="lock-icon" />
                  </div>
                )}
                <h4>Science Papers</h4>
                {hasAccess("S") ? (
                  // 🟢 Science Paper Hub එකට යන ලින්ක් එක
                  <Link
                    to="/paper-hub/science"
                    className="browse-btn paper-btn">
                    <FaBookOpen /> Paper Hub
                  </Link>
                ) : (
                  <p className="not-allowed ">
                    Not enrolled in this subject. Contact card marker.
                  </p>
                )}
              </div>

              {/* 3. ENGLISH PORTAL */}
              <div
                className={`subject-portal-card ${!hasAccess("E") ? "locked" : ""}`}
                style={{
                  borderLeft: "5px solid #ff9f43",
                  opacity: hasAccess("E") ? 1 : 0.6,
                }}>
                {!hasAccess("E") && (
                  <div className="locked">
                    <FaLock className="lock-icon" /> Locked
                  </div>
                )}
                <h4>English Papers</h4>
                {hasAccess("E") ? (
                  // 🟢 English Paper Hub එකට යන ලින්ක් එක
                  <Link
                    to="/paper-hub/english"
                    className="browse-btn paper-btn">
                    <FaBookOpen /> Paper Hub
                  </Link>
                ) : (
                  <p className="not-allowed">
                    Not enrolled in this subject. Contact card marker.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* දකුණු පැත්තේ කොටස: Countdown Clock & Actions */}
        <div className="side-dash-content">
          {/* ⏰ D. 2026 O/L Exam Countdown Clock Area */}
          <div className="card-container countdown-card">
            <h4>
              <FaHourglassHalf /> O/L 2026 Countdown
            </h4>
            <div className="countdown-tiles">
              <div>
                <h3>{countdown.days}</h3>
                <small>Days</small>
              </div>
              <div>
                <h3>{countdown.hours}</h3>
                <small>Hours</small>
              </div>
              <div>
                <h3>{countdown.mins}</h3>
                <small>Mins</small>
              </div>
              <div>
                <h3 className="seconds">{countdown.secs}</h3>
                <small>Secs</small>
              </div>
            </div>
            <p>* Target Date: December 08, 2026</p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 👑 PREMIUM SCORE ANALYTICS ZONE */}
        <div className="premium-tracker-zone">
          {isPremiumUser ? (
            // 🔓 A. ළමයා Premium නම්: කෙලින්ම Graph පද්ධතිය වැඩ කරනවා
            <ScoreAnalytics />
          ) : (
            // 🔒 B. ළමයා සාමාන්‍ය කෙනෙක් නම්: පේන ලස්සන Paid Lock Wall එක
            <div className="premium-lock-card">
              {/* රන් පාට ඔටුන්න සහ ලොක් එක */}
              <div className="premium-crown-logo">
                <FaCrown className="crown" />
              </div>

              <div>
                <FaLock className="premium-lock-logo" />
              </div>

              <h3>Unlock O/L Progress Analytics Tracker 👑</h3>
              <p className="premium-desc">
                Activate Sri Lanka's first smart system that can track your
                mistakes and weaknesses by graphing your paper scores for all 9
                of your O/L subjects individually (Line Graph).
              </p>

              {/* විශේෂ දීමනාව */}
              <div className="offer-content">
                <span className="offer-text">Limited Lifetime Offer</span>
                <h2>
                  Free Claim <span className="old-price">Rs.990</span>
                </h2>
              </div>

              {/* WhatsApp Payment Trigger Button */}
              <div>
                <button type="button" className="claim-btn start-btn">
                  Waiting...
                </button>
              </div>
            </div>
          )}
        </div>
        {/* ================================================================ */}
      </div>

      {/* <button onClick={handleLogout} className="browse-btn signout-btn">
        Sign Out
      </button> */}
    </div>
  );
};

export default Dashboard;
