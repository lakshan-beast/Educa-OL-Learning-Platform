// import React, { useState } from "react";
import { FaClock, FaVideo, FaBell, FaCalendarCheck } from "react-icons/fa6";

const Classes = () => {
  // ගුරුවරු තුන්දෙනාගේ පන්ති විස්තර (Data)
  const classData = [
    {
      id: 1,
      subject: "O/L Mathematics",
      teacher: "Sir 01",
      day: "Saturday",
      time: "8:00 AM - 12:00 PM",
      status: "Active", // පන්තිය දැන් පැවැත්වෙනවා නම් Active
      link: "https://zoom.us",
      notice: "හෙට පන්තියේදී ජ්‍යාමිතිය නිබන්ධනය සාකච්ඡා කෙරේ.",
    },
    {
      id: 2,
      subject: "O/L Science",
      teacher: "Sir 02",
      day: "Sunday",
      time: "1:30 PM - 5:30 PM",
      status: "Upcoming",
      link: "#",
      notice: "රසායනික විද්‍යාව ඒකක පරීක්ෂණය ලබන සතියේ පැවැත්වේ.",
    },
    {
      id: 3,
      subject: "O/L English",
      teacher: "Sir 03",
      day: "Tuesday",
      time: "3:30 PM - 6:30 PM",
      status: "Offline",
      link: "#",
      notice: "Active/Passive Voice නිබන්ධනය දැන් Paper Hub වෙත එක් කර ඇත.",
    },
  ];

  return (
    <section className="classes-section" id="classes">
      <div className="class-container">
        <h2 style={{ textAlign: "center" }}>
          Weekly <span>Class Schedule</span>
        </h2>

        {/* පන්ති කාලසටහන සහ විස්තර */}
        <div
          className="class-grid"
          style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
          {classData.map((cls) => (
            <div key={cls.id} className="card-container class-schedule-card">
              <div
                className="class-card-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <span className={`status-badge ${cls.status.toLowerCase()}`}>
                  {cls.status === "Active" ? "● Live Now" : cls.status}
                </span>
                <span className="class-day">
                  <FaCalendarCheck /> {cls.day}
                </span>
              </div>

              <div className="class-body" style={{ margin: "15px 0" }}>
                <h3>{cls.subject}</h3>
                <p>
                  Teacher: <b>{cls.teacher}</b>
                </p>
                <p>
                  <FaClock /> {cls.time}
                </p>
              </div>

              {/* Notification / Notice Section */}
              <div
                className="class-notice"
                style={{
                  background: "#fff4f2",
                  padding: "10px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #f7786f",
                  marginBottom: "15px",
                }}>
                <p style={{ fontSize: "0.85rem", color: "#333" }}>
                  <FaBell style={{ color: "#f7786f" }} /> <b>Notice:</b>{" "}
                  {cls.notice}
                </p>
              </div>

              {/* Active Class Link */}
              <div className="class-footer">
                {cls.status === "Active" ? (
                  <a
                    href={cls.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="start-btn"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      background: "linear-gradient(to right, #ff4b2b, #ff416c)",
                    }}>
                    <FaVideo /> Join Live Class Now
                  </a>
                ) : (
                  <button
                    className="browse-btn"
                    style={{
                      width: "100%",
                      cursor: "not-allowed",
                      opacity: "0.6",
                    }}>
                    Class Starts on {cls.day}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
