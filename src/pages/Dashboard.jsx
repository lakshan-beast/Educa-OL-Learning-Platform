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
import { useNavigate } from "react-router-dom";
import {
  // FaClock,
  FaVideo,
  // FaBookOpen,
  // FaUser,
  FaLock,
  // FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa6";
// import { ImOffice } from "react-icons/im";

import ScoreAnalytics from "../components/ScorenAnalytics";
import { premiumStudentsList } from "../data/approvedStudents"; // Premium ලැයිස්තුව ගත්තා
import { FaCrown, FaWhatsapp } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const studentId = localStorage.getItem("user_id") || "";
  const userSubjects = localStorage.getItem("user_subjects") || ""; // උදා: "MES", "M"

  // 🧠 ළමයා සල්ලි ගෙවපු Premium කෙනෙක්ද කියලා බලන True/False Logic එක
  const isPremiumUser = premiumStudentsList.includes(
    studentId.trim().toUpperCase(),
  );

  // 1. Tasks State (Daily Mission Progress Bar එකට)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Watch this week's Mathematics recording",
      completed: false,
    },
    {
      id: 2,
      text: "Complete the Science short-note summary",
      completed: false,
    },
    { id: 3, text: "Check your active class notifications", completed: false },
  ]);

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
    const examDate = new Date("2026-12-01T08:30:00").getTime();
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
    if (hr < 12) return "Good Morning ☀️";
    if (hr < 17) return "Good Afternoon ⛅";
    return "Good Evening 🌙";
  };

  // Progress Bar එකේ ප්‍රතිශතය හැදීම
  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

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
    <div
      className="dashboard-wrapper page-container"
      style={{
        padding: "40px 20px",
        background: "#f8faff",
        minHeight: "90vh",
      }}>
      <div className="system-container">
        {/* 👑 A. Dynamic Welcome Banner */}
        <div
          className="welcome-banner"
          style={{
            background: "linear-gradient(135deg, #26136d 0%, #4b6bfb 100%)",
            color: "white",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: "0 10px 20px rgba(75,107,251,0.15)",
          }}>
          <h2>{getGreeting()}, Student!</h2>
          <p style={{ opacity: 0.8, marginTop: "5px", fontSize: "0.95rem" }}>
            Your ID: {studentId}
          </p>
          <span> Grade 11 - 2026 O/L Batch</span>
          <p
            style={{
              marginTop: "15px",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#fffbf0",
            }}>
            "Success is the sum of small efforts, repeated day in and day out."
          </p>
        </div>

        <div
          className="dashboard-grid"
          style={
            {
              // display: "grid",
              // gridTemplateColumns: "2fr 1fr",
              // gap: "30px",
            }
          }>
          {/* වම් පැත්තේ කොටස: Daily Mission & Core Classes */}
          <div className="main-dash-content">
            {/* 🎯 B. Daily Mission & Interactive Progress Bar */}
            <div
              className="card-containers tasks-card"
              style={{
                // background: "red",
                padding: "25px",
                borderRadius: "20px",
                marginBottom: "30px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}></div>
            <h3>Daily Focus Mission</h3>

            {/* Progress Bar UI */}
            <div
              className="progress-container"
              style={{ margin: "15px 0 25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  color: "#555",
                }}>
                <span>Mission Progress</span>
                <span>{progressPercent}% Done</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  background: "#eee",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}>
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: "100%",
                    background: "#2ecc71",
                    transition: "width 0.4s ease",
                  }}></div>
              </div>
            </div>

            {/* Task Checklist */}
            <div
              className="tasks-list"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {tasks.map((t) => (
                <label
                  key={t.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "0.95rem",
                    color: t.completed ? "#aaa" : "#333",
                    textDecoration: t.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTask(t.id)}
                    style={{
                      width: "18px",
                      height: "18px",
                      accentColor: "#2ecc71",
                    }}
                  />
                  {t.text}
                </label>
              ))}
            </div>
          </div>

          {/* 🔒 C. Core Subject Enrolment & Content Locking Area */}
          <div className="subjects-section">
            <h3 style={{ marginBottom: "20px" }}>
              Your Enrolled Class Portals
            </h3>
            <div
              className="subjects-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
              }}>
              {/* 1. MATHEMATICS PORTAL */}
              <div
                className={`subject-portal-card ${!hasAccess("M") ? "locked" : ""}`}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  borderLeft: "5px solid #4b6bfb",
                  opacity: hasAccess("M") ? 1 : 0.6,
                  position: "relative",
                }}>
                {!hasAccess("M") && (
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#ff4d4d",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "10px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}>
                    <FaLock /> Locked
                  </div>
                )}
                <h4>O/L Mathematics</h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                    margin: "5px 0 15px",
                  }}>
                  Instructor: Sir 01
                </p>
                {hasAccess("M") ? (
                  <button
                    className="start-btn"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                    <FaVideo /> Enter Live / Recordings
                  </button>
                ) : (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#cc0000",
                      fontWeight: "bold",
                    }}>
                    Not enrolled in this subject. Contact card marker.
                  </p>
                )}
              </div>

              {/* 2. SCIENCE PORTAL */}
              <div
                className={`ubject-portal-card ${!hasAccess("S") ? "locked" : ""}`}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  borderLeft: "5px solid #2ecc71",
                  opacity: hasAccess("S") ? 1 : 0.6,
                  position: "relative",
                }}>
                {!hasAccess("S") && (
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#ff4d4d",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "10px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}>
                    <FaLock /> Locked
                  </div>
                )}
                <h4>O/L Science</h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                    margin: "5px 0 15px",
                  }}>
                  Instructor: Sir 02
                </p>
                {hasAccess("S") ? (
                  <button
                    className="start-btn"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                    <FaVideo /> Enter Live / Recordings
                  </button>
                ) : (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#cc0000",
                      fontWeight: "bold",
                    }}>
                    Not enrolled in this subject. Contact card marker.
                  </p>
                )}
              </div>
              {/* 3. ENGLISH PORTAL */}
              <div
                className={`subject-portal-card ${!hasAccess("E") ? "locked" : ""}`}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  borderLeft: "5px solid #ff9f43",
                  opacity: hasAccess("E") ? 1 : 0.6,
                  position: "relative",
                }}>
                {!hasAccess("E") && (
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#ff4d4d",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "10px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}>
                    <FaLock /> Locked
                  </div>
                )}
                <h4>O/L English</h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                    margin: "5px 0 15px",
                  }}>
                  Instructor: Sir 03
                </p>
                {hasAccess("E") ? (
                  <button
                    className="start-btn"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                    <FaVideo /> Enter Live / Recordings
                  </button>
                ) : (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#cc0000",
                      fontWeight: "bold",
                    }}>
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
          <div
            className="card-container countdown-card"
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
            }}>
            <h4
              style={{
                color: "#26136d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}>
              <FaHourglassHalf /> O/L 2026 Countdown
            </h4>
            <div
              className="countdown-tiles"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                margin: "20px 0",
              }}>
              <div
                style={{
                  background: "#f4f7ff",
                  padding: "10px",
                  borderRadius: "10px",
                }}>
                <h3 style={{ color: "#26136d", margin: 0 }}>
                  {countdown.days}
                </h3>
                <small style={{ fontSize: "0.75rem", color: "#666" }}>
                  Days
                </small>
              </div>
              <div
                style={{
                  background: "#f4f7ff",
                  padding: "10px",
                  borderRadius: "10px",
                }}>
                <h3 style={{ color: "#26136d", margin: 0 }}>
                  {countdown.hours}
                </h3>
                <small style={{ fontSize: "0.75rem", color: "#666" }}>
                  Hours
                </small>
              </div>
              <div
                style={{
                  background: "#f4f7ff",
                  padding: "10px",
                  borderRadius: "10px",
                }}>
                <h3 style={{ color: "#26136d", margin: 0 }}>
                  {countdown.mins}
                </h3>
                <small style={{ fontSize: "0.75rem", color: "#666" }}>
                  Mins
                </small>
              </div>
              <div
                style={{
                  background: "#f4f7ff",
                  padding: "10px",
                  borderRadius: "10px",
                }}>
                <h3 style={{ color: "#ff4b2b", margin: 0 }}>
                  {countdown.secs}
                </h3>
                <small style={{ fontSize: "0.75rem", color: "#666" }}>
                  Secs
                </small>
              </div>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#777" }}>
              * Target Date: December 01, 2026
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 👑 PREMIUM SCORE ANALYTICS ZONE */}
        <div className="premium-tracker-zone" style={{ marginTop: "40px" }}>
          {isPremiumUser ? (
            // 🔓 A. ළමයා Premium නම්: කෙලින්ම Graph පද්ධතිය වැඩ කරනවා
            <ScoreAnalytics />
          ) : (
            // 🔒 B. ළමයා සාමාන්‍ය කෙනෙක් නම්: පේන ලස්සන Paid Lock Wall එක
            <div
              className="premium-lock-card"
              style={{
                background: "linear-gradient(135deg, #fffdf6 0%, #fff9e6 100%)",
                padding: "40px 30px",
                borderRadius: "24px",
                border: "2px solid #f1c40f",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(241,196,15,0.15)",
                position: "relative",
                overflow: "hidden",
              }}>
              {/* රන් පාට ඔටුන්න සහ ලොක් එක */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  background: "#f1c40f",
                  color: "#26136d",
                  padding: "40px",
                  transform: "rotate(-45deg)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}>
                <FaCrown style={{ fontSize: "1.5rem" }} />
              </div>

              <div
                style={{
                  margin: "0 auto 20px",
                  width: "70px",
                  height: "70px",
                  background: "#f1c40f",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  boxShadow: "0 8px 15px rgba(241,196,15,0.3)",
                }}>
                <FaLock />
              </div>

              <h3
                style={{
                  color: "#26136d",
                  fontSize: "1.6rem",
                  fontWeight: "800",
                  margin: "0 0 10px",
                }}>
                Unlock O/L Progress Analytics Tracker 👑
              </h3>
              <p
                style={{
                  color: "#555",
                  maxWidth: "500px",
                  margin: "0 auto 25px",
                  fontSize: "0.92rem",
                  lineHeight: "1.6",
                }}>
                Activate Sri Lanka's first smart system that can track your
                mistakes and weaknesses by graphing your paper scores for all 9
                of your O/L subjects individually (Line Graph).
              </p>

              {/* විශේෂ දීමනාව */}
              <div
                style={{
                  background: "white",
                  display: "inline-block",
                  padding: "10px 30px",
                  borderRadius: "15px",
                  border: "1px dashed #f1c40f",
                  marginBottom: "25px",
                }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    color: "#777",
                    fontWeight: "bold",
                  }}>
                  Limited Lifetime Offer
                </span>
                <h2
                  style={{
                    margin: "5px 0 0",
                    color: "#e67e22",
                    fontWeight: "900",
                    fontSize: "2rem",
                  }}>
                  LKR 490/-{" "}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#aaa",
                      textDecoration: "line-through",
                      fontWeight: "normal",
                    }}>
                    Rs.990
                  </span>
                </h2>
              </div>

              {/* WhatsApp Payment Trigger Button */}
              <div>
                <a
                  href={`https://wa.me/94740130305?text=Hello%20Sir,%20I%20want%20to%20activate%20the%20Educa%20Premium%20Progress%20Tracker.%20My%20Student%20ID%20is:%20${studentId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="start-btn"
                  style={{
                    background: "#2ecc71",
                    color: "white",
                    padding: "14px 30px",
                    borderRadius: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(46,204,113,0.3)",
                  }}>
                  <FaWhatsapp style={{ fontSize: "1.3rem" }} /> Activate via
                  WhatsApp Now
                </a>
              </div>
            </div>
          )}
        </div>
        {/* ================================================================ */}
      </div>

      <button
        onClick={handleLogout}
        className="browse-btn"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          borderRadius: "12px",
          borderColor: "#ff4b2b",
          color: "#ff4b2b",
        }}>
        Sign Out Account
      </button>
    </div>
  );
};

export default Dashboard;
