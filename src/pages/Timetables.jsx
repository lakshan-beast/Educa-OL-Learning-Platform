// import React from 'react';
import { Link } from "react-router-dom";
import {
  FaClock,
  FaCalendarDays,
  FaUserTie,
  FaLocationDot,
  FaArrowLeft,
} from "react-icons/fa6";

const FullTimetable = () => {
  const schedules = [
    {
      grade: "Grade 10/11",
      subject: "Mathematics",
      teacher: "Sir 01",
      day: "Saturday",
      time: "08:00 AM - 12:00 PM",
      hall: "Main Hall A",
    },
    {
      grade: "Grade 10/11",
      subject: "Science",
      teacher: "Sir 02",
      day: "Sunday",
      time: "01:30 PM - 05:30 PM",
      hall: "Science Lab 01",
    },
    {
      grade: "Grade 10/11",
      subject: "English",
      teacher: "Sir 03",
      day: "Tuesday",
      time: "03:30 PM - 06:30 PM",
      hall: "Royal Hall",
    },
    // 6-9 ශ්‍රේණි වලටත් මේ වගේම දත්ත ඇතුළත් කරන්න පුළුවන්
  ];

  return (
    <div className="timetable-page page-container">
      <div className="system-container" style={{ paddingTop: "5rem" }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
            color: "#4b6bfb",
            textDecoration: "none",
            fontWeight: "bold",
          }}>
          <FaArrowLeft /> Back to Home
        </Link>
        <h2 className="section-title">
          Weekly <span>Class Schedule</span>
        </h2>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          ගුරුවරු තුන්දෙනාගේම පන්ති පැවැත්වෙන නිවැරදි දින සහ වෙලාවන් මෙතැනින්
          බලන්න.
        </p>

        <div className="table-responsive card-container">
          <table className="timetable">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((item, index) => (
                <tr key={index} data-aos="fade-up">
                  <td>
                    <b>{item.subject}</b> <br /> <small>{item.grade}</small>
                  </td>
                  <td>
                    <FaUserTie /> {item.teacher}
                  </td>
                  <td>
                    <FaCalendarDays /> {item.day}
                  </td>
                  <td>
                    <FaClock /> {item.time}
                  </td>
                  <td>
                    <FaLocationDot /> {item.hall}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullTimetable;
