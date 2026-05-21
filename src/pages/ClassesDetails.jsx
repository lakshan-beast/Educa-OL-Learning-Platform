// // import React, { useState } from "react";
// import { FaClock, FaVideo, FaBell, FaCalendarCheck } from "react-icons/fa6";

// const Classes = () => {
//   // ගුරුවරු තුන්දෙනාගේ පන්ති විස්තර (Data)
//   const classData = [
//     {
//       id: 1,
//       subject: "O/L Mathematics",
//       teacher: "Sir 01",
//       day: "Saturday",
//       time: "8:00 AM - 12:00 PM",
//       status: "Active", // පන්තිය දැන් පැවැත්වෙනවා නම් Active
//       link: "https://zoom.us",
//       notice: "හෙට පන්තියේදී ජ්‍යාමිතිය නිබන්ධනය සාකච්ඡා කෙරේ.",
//     },
//     {
//       id: 2,
//       subject: "O/L Science",
//       teacher: "Sir 02",
//       day: "Sunday",
//       time: "1:30 PM - 5:30 PM",
//       status: "Upcoming",
//       link: "#",
//       notice: "රසායනික විද්‍යාව ඒකක පරීක්ෂණය ලබන සතියේ පැවැත්වේ.",
//     },
//     {
//       id: 3,
//       subject: "O/L English",
//       teacher: "Sir 03",
//       day: "Tuesday",
//       time: "3:30 PM - 6:30 PM",
//       status: "Offline",
//       link: "#",
//       notice: "Active/Passive Voice නිබන්ධනය දැන් Paper Hub වෙත එක් කර ඇත.",
//     },
//   ];

//   return (
//     <section className="classes-section" id="classes">
//       <div className="class-container">
//         <h2 style={{ textAlign: "center" }}>
//           Weekly <span>Class Schedule</span>
//         </h2>

//         {/* පන්ති කාලසටහන සහ විස්තර */}
//         <div
//           className="class-grid"
//           style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
//           {classData.map((cls) => (
//             <div key={cls.id} className="card-container class-schedule-card">
//               <div
//                 className="class-card-header"
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}>
//                 <span className={`status-badge ${cls.status.toLowerCase()}`}>
//                   {cls.status === "Active" ? "● Live Now" : cls.status}
//                 </span>
//                 <span className="class-day">
//                   <FaCalendarCheck /> {cls.day}
//                 </span>
//               </div>

//               <div className="class-body" style={{ margin: "15px 0" }}>
//                 <h3>{cls.subject}</h3>
//                 <p>
//                   Teacher: <b>{cls.teacher}</b>
//                 </p>
//                 <p>
//                   <FaClock /> {cls.time}
//                 </p>
//               </div>

//               {/* Notification / Notice Section */}
//               <div
//                 className="class-notice"
//                 style={{
//                   background: "#fff4f2",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   borderLeft: "4px solid #f7786f",
//                   marginBottom: "15px",
//                 }}>
//                 <p style={{ fontSize: "0.85rem", color: "#333" }}>
//                   <FaBell style={{ color: "#f7786f" }} /> <b>Notice:</b>{" "}
//                   {cls.notice}
//                 </p>
//               </div>

//               {/* Active Class Link */}
//               <div className="class-footer">
//                 {cls.status === "Active" ? (
//                   <a
//                     href={cls.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="start-btn"
//                     style={{
//                       width: "100%",
//                       justifyContent: "center",
//                       background: "linear-gradient(to right, #ff4b2b, #ff416c)",
//                     }}>
//                     <FaVideo /> Join Live Class Now
//                   </a>
//                 ) : (
//                   <button
//                     className="browse-btn"
//                     style={{
//                       width: "100%",
//                       cursor: "not-allowed",
//                       opacity: "0.6",
//                     }}>
//                     Class Starts on {cls.day}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Classes;

// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { CompleteShedule } from "../data/completeShedule";

// import {
//   FaClock,
//   FaVideo,
//   FaBell,
//   FaCalendarCheck,
//   // FaFilter,
//   // FaVideo,
//   // FaArrowLeft,
//   // FaUserTie,
// } from "react-icons/fa6";

// // const ClassesDetails = () => {
// // const { id } = useParams();

// // const currentClass = completeShedule.find(class => class.id === id);

// const ClassesDetails = () => {
//   // 1. URL එකෙන් ID එක කියවා ගැනීම (ex: m10, s10, e10)
//   const { id } = useParams(); // 2. අදාළ ID එකට ගැලපෙන පන්ති දත්ත විතරක් මුළු ලැයිස්තුවෙන්ම පීරලා (Find) ගන්නවා
//   const currentClass = CompleteShedule.find((cls) => cls.id === id); // 3. වැරදි ID එකක් ආවොත් (නැති පන්තියක් නම්)
//   if (!currentClass) {
//     return (
//       <div
//         className="page-container"
//         style={{ textAlign: "center", padding: "50px" }}>
//         {" "}
//         <h3>Class Not Found! ❌</h3>{" "}
//         <Link to="/" className="start-btn">
//           Back to Home
//         </Link>{" "}
//       </div>
//     );
//   }

//   // 1. පරිශීලකයා තෝරන ශ්‍රේණිය (Default එක 11 වසර)
//   const [selectedGrade, setSelectedGrade] = useState("11");
//   // 2. වත්මන් වෙලාව තියාගන්න State එක (Auto Time Logic එකට)
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // සෑම තත්පර 30කට සැරයක්ම වත්මන් වෙලාව Update කරනවා
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 30000);
//     return () => clearInterval(timer);
//   }, []);

//   // සියලුම පන්ති වල දත්ත එකම තැනක (Data Structure)
//   // const allClassData = [
//   //   // --- GRADE 11 CLASSES ---
//   //   {
//   //     id: "m11",
//   //     grade: "11",
//   //     subject: "O/L Mathematics",
//   //     teacher: "Sir 01",
//   //     day: "Saturday",
//   //     startTime: "08:00", // 24-hour format වලින් දාන්න (HH:MM)
//   //     endTime: "12:00",
//   //     statusOverride: "Auto", // "Auto", "Canceled", "Holiday"
//   //     link: "zoom.us",
//   //     notice: {
//   //       lesson: "ජ්‍යාමිතිය ප්‍රමේයයන් සාකච්ඡාව",
//   //       specialNote: "රූලක් සහ කවකටුවක් අනිවාර්යයෙන් රැගෙන එන්න.",
//   //     },
//   //   },
//   //   {
//   //     id: "s11",
//   //     grade: "11",
//   //     subject: "O/L Science",
//   //     teacher: "Sir 02",
//   //     day: "Sunday",
//   //     startTime: "13:30",
//   //     endTime: "17:30",
//   //     statusOverride: "Auto",
//   //     link: "zoom.us",
//   //     notice: {
//   //       lesson: "රසායනික විද්‍යාව - මවුලය පාඩම",
//   //       specialNote: "පසුගිය සතියේ නිබන්ධනය සම්පූර්ණ කර තබාගන්න.",
//   //     },
//   //   },
//   //   {
//   //     id: "e11",
//   //     grade: "11",
//   //     subject: "O/L English",
//   //     teacher: "Sir 03",
//   //     day: "Saturday",
//   //     startTime: "13:30",
//   //     endTime: "17:30",
//   //     statusOverride: "Auto",
//   //     link: "zoom.us",
//   //     notice: {
//   //       lesson: "රසායනික විද්‍යාව - මවුලය පාඩම",
//   //       specialNote: "පසුගිය සතියේ නිබන්ධනය සම්පූර්ණ කර තබාගන්න.",
//   //     },
//   //   },
//   //   // --- GRADE 10 CLASSES (සාම්පලයක් ලෙස) ---
//   //   {
//   //     id: "m10",
//   //     grade: "10",
//   //     subject: "Grade 10 Mathematics",
//   //     teacher: "Sir 01",
//   //     day: "Saturday",
//   //     startTime: "13:00",
//   //     endTime: "16:00",
//   //     statusOverride: "Canceled", // සර් නිවාඩු දුන්නොත් කෙලින්ම "Canceled" දාන්න
//   //     link: "#",
//   //     notice: {
//   //       lesson: "පන්තිය නොපැවැත්වේ",
//   //       specialNote:
//   //         "සර්ට සනීප නොමැති බැවින් හෙට පන්තිය නොපැවැත්වේ. ලබන සතියේ සුපුරුදු පරිදි පැවැත්වේ.",
//   //     },
//   //   },
//   // ];

//   // 🕒 3. Auto-Time Status Calculator Logic
//   const getClassStatus = (cls) => {
//     // 3.1 Maintenance Override එකක් තියෙනවා නම් මුලින්ම ඒක ක්‍රියාත්මක කරනවා
//     if (cls.statusOverride === "Canceled") return "Canceled";
//     if (cls.statusOverride === "Holiday") return "Holiday";

//     const daysOfWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     const currentDayName = daysOfWeek[currentTime.getDay()];

//     // පන්තිය තියෙන්නේ අද නෙවෙයි නම් ➔ Upcoming
//     if (currentDayName !== cls.day) {
//       return "Upcoming";
//     }

//     // අද පන්තිය තියෙන දවස නම්, වෙලාව බලනවා
//     const currentHours = currentTime.getHours();
//     const currentMinutes = currentTime.getMinutes();
//     const currentTotalMinutes = currentHours * 60 + currentMinutes;

//     const [startH, startM] = cls.startTime.split(":").map(Number);
//     const [endH, endM] = cls.endTime.split(":").map(Number);

//     const startTotalMinutes = startH * 60 + startM;
//     const endTotalMinutes = endH * 60 + endM;

//     if (
//       currentTotalMinutes >= startTotalMinutes &&
//       currentTotalMinutes <= endTotalMinutes
//     ) {
//       return "Active"; // පන්ති වෙලාව ඇතුළත නම් ➔ Live Now
//     } else if (currentTotalMinutes > endTotalMinutes) {
//       return "Ended"; // පන්ති වෙලාව ඉවර නම් ➔ Ended
//     }

//     return "Upcoming";
//   };

//   // තෝරාගත් ශ්‍රේණියට (Grade) අදාළ පන්ති විතරක් පෙන්නන්න Filter කිරීම
//   // const filteredClasses = allClassData.filter(
//   const filteredClasses = CompleteShedule.filter(
//     (cls) => cls.grade === selectedGrade,
//   );

//   return (
//     <section className=" parts" id="classesDetails">
//       <div className="class-container">
//         <h2>
//           Weekly <span>Class Schedule</span>
//         </h2>

//         {/* 🎓 4. Grade Selector Tabs (6-11 ශ්‍රේණි තෝරන්න බටන්ස්) */}
//         <div
//           className="grade-filter-tabs"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px",
//             margin: "20px 0",
//           }}></div>

//         {["6", "7", "8", "9", "10", "11"].map((grade) => (
//           <button
//             key={grade}
//             className={`grade - tab - btn ${selectedGrade === grade ? "active-tab" : ""}`}
//             onClick={() => setSelectedGrade(grade)}
//             style={{
//               padding: "8px 16px",
//               borderRadius: "20px",
//               cursor: "pointer",
//             }}>
//             Grade {grade}
//           </button>
//         ))}
//       </div>

//       {/* ਪන්ਤੀ කාඩ්ස් පද්ධතිය */}
//       <div
//         className="class-grid"
//         style={{
//           display: "grid",
//           gap: "20px",
//           marginTop: "30px",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         }}>
//         {filteredClasses.length > 0 ? (
//           filteredClasses.map((cls) => {
//             const currentStatus = getClassStatus(cls); // Status එක හැදෙනවා

//             return (
//               <div
//                 key={cls.id}
//                 className={`card -
//                   container class-schedule-card status-${currentStatus.toLowerCase()}`}>
//                 {/* Card Header */}
//                 <div
//                   className="class-card-header"
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}>
//                   <span
//                     className={`status - badge ${currentStatus.toLowerCase()}`}>
//                     {currentStatus === "Active" && "● Live Now"}
//                     {currentStatus === "Upcoming" && "Upcoming"}
//                     {currentStatus === "Ended" && "Class Ended"}
//                     {currentStatus === "Canceled" && "Postponed"}
//                   </span>
//                   <span className="class-day">
//                     <FaCalendarCheck /> {cls.day}
//                   </span>
//                 </div>

//                 {/* Card Body */}
//                 <div className="class-body" style={{ margin: "15px 0" }}>
//                   <h3>{cls.subject}</h3>
//                   <p>
//                     Teacher: <b>{cls.teacher}</b>
//                   </p>
//                   <p>
//                     <FaClock /> {cls.startTime} - {cls.endTime}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "5px",
//                       fontSize: "0.9rem",
//                       color: "#555",
//                     }}>
//                     <b>Current Lesson:</b> {cls.notice.lesson}
//                   </p>
//                 </div>

//                 {/* Notice Section */}
//                 <div
//                   className="class-notice"
//                   style={{
//                     background:
//                       currentStatus === "Canceled" ? "#fff0f0" : "#fff4f2",
//                     padding: "10px",
//                     borderRadius: "8px",
//                     borderLeft:
//                       currentStatus === "Canceled"
//                         ? "4px solid #ff4d4d"
//                         : "4px solid #f7786f",
//                     marginBottom: "15px",
//                   }}>
//                   <p style={{ fontSize: "0.85rem", color: "#333" }}>
//                     <FaBell
//                       style={{
//                         color:
//                           currentStatus === "Canceled" ? "#ff4d4d" : "#f7786f",
//                       }}
//                     />{" "}
//                     <b>Special Note:</b> {cls.notice.specialNote}
//                   </p>
//                 </div>

//                 {/* Card Footer (Active Class Link Logic) */}
//                 <div className="class-footer">
//                   {currentStatus === "Active" ? (
//                     <a
//                       href={cls.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="start-btn"
//                       style={{
//                         width: "100%",
//                         justifyContent: "center",
//                         background:
//                           "linear-gradient(to right, #ff4b2b, #ff416c)",
//                       }}>
//                       <FaVideo /> Join Live Class Now
//                     </a>
//                   ) : (
//                     <button
//                       className="browse-btn"
//                       disabled
//                       style={{
//                         width: "100%",
//                         cursor: "not-allowed",
//                         opacity: "0.6",
//                       }}>
//                       {currentStatus === "Canceled"
//                         ? "Class Canceled"
//                         : `Class Starts on ${cls.day}`}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ textAlign: "center", gridColumn: "1/-1", color: "#777" }}>
//             No classes scheduled for Grade {selectedGrade} yet.
//           </p>
//         )}
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default ClassesDetails;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { completeShedules } from "../data/completeShedule";
import {
  FaClock,
  FaVideo,
  FaBell,
  FaCalendarCheck,
  FaArrowLeft,
} from "react-icons/fa6";

const ClassesDetails = () => {
  // 1. පරිශීලකයා තෝරන ශ්‍රේණිය (Default එක 11 වසර)
  const [selectedGrade, setSelectedGrade] = useState("11");
  // 2. වත්මන් වෙලාව තියාගන්න State එක (Auto Time Logic එකට)
  const [currentTime, setCurrentTime] = useState(new Date());

  // සෑම තත්පර 30කට සැරයක්ම වත්මන් වෙලාව Update කරනවා
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // 🕒 3. Auto-Time Status Calculator Logic
  const getClassStatus = (cls) => {
    // 3.1 Maintenance Override එකක් තියෙනවා නම් මුලින්ම ඒක ක්‍රියාත්මක කරනවා
    if (cls.statusOverride === "Canceled") return "Canceled";
    if (cls.statusOverride === "Holiday") return "Holiday";

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayName = daysOfWeek[currentTime.getDay()];

    // පන්තිය තියෙන්නේ අද නෙවෙයි නම් ➔ Upcoming
    if (currentDayName !== cls.day) {
      return "Upcoming";
    }

    // අද පන්තිය තියෙන දවස නම්, වෙලාව බලනවා
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    const [startH, startM] = cls.startTime.split(":").map(Number);
    const [endH, endM] = cls.endTime.split(":").map(Number);

    const startTotalMinutes = startH * 60 + startM;
    const endTotalMinutes = endH * 60 + endM;

    if (
      currentTotalMinutes >= startTotalMinutes &&
      currentTotalMinutes <= endTotalMinutes
    ) {
      return "Active"; // පන්ති වෙලාව ඇතුළත නම් ➔ Live Now
    } else if (currentTotalMinutes > endTotalMinutes) {
      return "Ended"; // පන්ති වෙලාව ඉවර නම් ➔ Ended
    }

    return "Upcoming";
  };

  // තෝරාගත් ශ්‍රේණියට (Grade) අදාළ පන්ති විතරක් පෙන්නන්න Filter කිරීම
  const filteredClasses = completeShedules.filter(
    (cls) => cls.grade === selectedGrade,
  );

  return (
    <section
      className="parts"
      id="classesDetails"
      style={{ padding: "40px 20px" }}>
      <div
        className="class-container"
        style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "5rem" }}>
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
        <h2 style={{ textAlign: "center" }}>
          Weekly <span>Class Schedule</span>
        </h2>

        {/* 🎓 4. Grade Selector Tabs (6-11 ශ්‍රේණි තෝරන්න බටන්ස් - ටැග් එක නිවැරදි කළා) */}
        <div
          className="grade-filter-tabs"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "20px 0",
            flexWrap: "wrap",
          }}>
          {["6", "7", "8", "9", "10", "11", "Paper Class"].map((grade) => (
            <button
              key={grade}
              className={`grade-tab-btn ${selectedGrade === grade ? "active-tab" : ""}`}
              onClick={() => setSelectedGrade(grade)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                cursor: "pointer",
              }}>
              Grade {grade}
            </button>
          ))}
        </div>

        {/* ਪන්ਤੀ කාඩ්ස් පද්ධතිය */}
        <div
          className="class-grid"
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}>
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => {
              const currentStatus = getClassStatus(cls); // Status එක හැදෙනවා

              return (
                <div
                  key={cls.id}
                  className={`card-container class-schedule-card status-${currentStatus.toLowerCase()}`}>
                  {/* Card Header */}
                  <div
                    className="class-card-header"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "15px",
                    }}>
                    <span
                      className={`status-badge ${currentStatus.toLowerCase()}`}>
                      {currentStatus === "Active" && "● Live Now"}
                      {currentStatus === "Upcoming" && "Upcoming"}
                      {currentStatus === "Ended" && "Class Ended"}
                      {currentStatus === "Canceled" && "Postponed"}
                    </span>
                    <span className="class-day">
                      <FaCalendarCheck /> {cls.day}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="class-body" style={{ margin: "15px 0" }}>
                    <h3>{cls.subject}</h3>
                    <p>
                      Teacher: <b>{cls.teacher}</b>
                    </p>
                    <p>
                      <FaClock /> {cls.startTime} - {cls.endTime}
                    </p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "0.9rem",
                        color: "#555",
                      }}>
                      <b>Current Lesson:</b> {cls.notice.lesson}
                    </p>
                  </div>

                  {/* Notice Section */}
                  <div
                    className="class-notice"
                    style={{
                      background:
                        currentStatus === "Canceled" ? "#fff0f0" : "#fff4f2",
                      padding: "10px",
                      borderRadius: "8px",
                      borderLeft:
                        currentStatus === "Canceled"
                          ? "4px solid #ff4d4d"
                          : "4px solid #f7786f",
                      marginBottom: "15px",
                    }}>
                    <p
                      style={{ fontSize: "0.85rem", color: "#333", margin: 0 }}>
                      <FaBell
                        style={{
                          color:
                            currentStatus === "Canceled"
                              ? "#ff4d4d"
                              : "#f7786f",
                          marginRight: "5px",
                        }}
                      />{" "}
                      <b>Special Note:</b> {cls.notice.specialNote}
                    </p>
                  </div>

                  {/* Card Footer (Active Class Link Logic) */}
                  <div className="class-footer">
                    {currentStatus === "Active" ? (
                      <a
                        href={cls.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="start-btn"
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          textDecoration: "none",
                          background:
                            "linear-gradient(to right, #ff4b2b, #ff416c)",
                          color: "white",
                          padding: "10px",
                          borderRadius: "8px",
                          fontWeight: "bold",
                        }}>
                        <FaVideo /> Join Live Class Now
                      </a>
                    ) : (
                      <button
                        className="browse-btn"
                        disabled
                        style={{
                          width: "100%",
                          cursor: "not-allowed",
                          opacity: "0.6",
                          padding: "10px",
                          borderRadius: "8px",
                        }}>
                        {currentStatus === "Canceled"
                          ? "Class Canceled"
                          : `Class Starts on ${cls.day}`}
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p
              style={{
                textAlign: "center",
                gridColumn: "1/-1",
                color: "#777",
              }}>
              No classes scheduled for Grade {selectedGrade} yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassesDetails;
