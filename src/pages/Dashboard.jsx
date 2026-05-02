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

import { useState } from "react";
import { FaChartLine, FaFilePdf, FaToolbox, FaUser } from "react-icons/fa6";

const Dashboard = () => {
  // දැනට පේන්න ඕනේ මොන කොටසද කියලා තීරණය කරන State එක
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard-layout">
      {/* 1. Sidebar කොටස (පේජ් එක ඇතුළෙම තියෙනවා) */}

      <aside className="dashboard-sidebar">
        <div
          className="sidebar-user"
          style={{ textAlign: "center", marginBottom: "30px" }}>
          <FaUser style={{ fontSize: "40px" }} />
          <h3>Student Name</h3>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => setActiveTab("overview")}
            className={activeTab === "overview" ? "start-btn" : "browse-btn"}>
            <FaChartLine /> Overview
          </button>
          <button
            onClick={() => setActiveTab("papers")}
            className={activeTab === "papers" ? "start-btn" : "browse-btn"}>
            <FaFilePdf /> My Papers
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={activeTab === "tools" ? "start-btn" : "browse-btn"}>
            <FaToolbox /> Smart Tools
          </button>
        </nav>
      </aside>

      {/* 2. Content කොටස (activeTab එක අනුව මාරු වෙනවා) */}
      <main className="dashboard-main">
        {activeTab === "overview" && (
          <div className="overview-content">
            <h2>
              Welcome Back, <span>Lakshan!</span> 👋
            </h2>
            <div className="stats-grid">
              <div className="card-container">
                <h4>Quizzes Done</h4>
                <p>12</p>
              </div>
              <div className="card-container">
                <h4>Avg. Score</h4>
                <p>85%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "papers" && (
          <div className="papers-content">
            <h2>
              My <span>Target Papers</span>
            </h2>
            <p>ඔබට අදාළ සියලුම පේපර්ස් මෙතනින් ලබාගන්න.</p>
            {/* පසුව මෙතනට PaperHub එකේ කෝඩ් එක දාන්න පුළුවන් */}
          </div>
        )}

        {activeTab === "tools" && (
          <div className="tools-content">
            <h2>
              Quick <span>Tools</span>
            </h2>
            <p>පන්ති වැඩ වලට අවශ්‍ය ටූල්ස් ඉක්මනින් පාවිච්චි කරන්න.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
