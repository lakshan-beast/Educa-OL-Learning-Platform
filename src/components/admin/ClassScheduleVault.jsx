// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   FaCalendarDays,
//   //   FaCirclePlus,
//   FaClock,
//   //   FaCheckCircle,
//   FaCircleXmark,
//   FaPause,
//   FaVideo,
//   FaPenToSquare,
// } from "react-icons/fa6";

// const ClassScheduleVault = ({ selectedGrade }) => {
//   const { subject } = useParams(); // URL එකෙන් maths/science/english අඳුරගනී

//   // 1. කාලසටහන් දත්ත ගබඩාව (State)
//   const [scheduleRecords, setScheduleRecords] = useState([
//     {
//       grade: "11",
//       subject: "maths",
//       className: "Grade 11 Mathematics",
//       teacherName: "Amila Sir",
//       targetDateTime: "2026-05-24T20:00", // පන්තිය පටන් ගන්නා දිනය සහ වෙලාව
//       currentLesson: "ත්‍රිකෝණමිතිය (Trigonometry)",
//       specialNotes: "කරුණාකර පසුගිය සතියේ නිබන්ධනය රැගෙන එන්න.",
//       zoomLink: "https://zoom.us",
//       overrideStatus: "AUTO", // AUTO, FORCE_ACTIVE, POSTPONED, CLOSED
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     targetDateTime: "",
//     currentLesson: "",
//     specialNotes: "",
//     zoomLink: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // දැනට තෝරාගෙන ඇති ශ්‍රේණියට සහ විෂයට අදාළ කාලසටහන පමණක් වෙන් කර ගැනීම
//   const currentSchedule = scheduleRecords.find(
//     (r) => r.grade === selectedGrade && r.subject === subject,
//   );

//   // කාඩ් මාකර් ශ්‍රේණිය මාරු කරද්දී දැනට පවතින විස්තර ෆෝම් එකට ඔටෝ පිරවීම
//   useEffect(() => {
//     if (currentSchedule) {
//       setFormData({
//         targetDateTime: currentSchedule.targetDateTime || "",
//         currentLesson: currentSchedule.currentLesson || "",
//         specialNotes: currentSchedule.specialNotes || "",
//         zoomLink: currentSchedule.zoomLink || "",
//       });
//     } else {
//       setFormData({
//         targetDateTime: "",
//         currentLesson: "",
//         specialNotes: "",
//         zoomLink: "",
//       });
//     }
//   }, [selectedGrade, subject, currentSchedule]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 🎛️ [THE 3 MANUAL OVERRIDE BUTTONS LOGIC]: තත්ත්වයන් මාරු කිරීම
//   const handleStatusOverride = (statusType) => {
//     if (!currentSchedule) {
//       setError("කරුණාකර මුලින්ම පන්තියේ විස්තර ඇතුළත් කර සේව් කරන්න! ⚠️");
//       return;
//     }

//     const updatedRecords = scheduleRecords.map((r) => {
//       if (r.grade === selectedGrade && r.subject === subject) {
//         return { ...r, overrideStatus: statusType };
//       }
//       return r;
//     });

//     setScheduleRecords(updatedRecords);
//     setSuccess(`පන්ති තත්ත්වය සාර්ථකව මාරු විය! 🟢 (${statusType})`);
//     setError("");
//     setTimeout(() => setSuccess(""), 4000);
//   };

//   // 💾 Form Submission Handler (කාලසටහන සේව් කිරීම)
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const existingRecordIndex = scheduleRecords.findIndex(
//       (r) => r.grade === selectedGrade && r.subject === subject,
//     );

//     const newRecord = {
//       grade: selectedGrade,
//       subject: subject,
//       className: `Grade ${selectedGrade} ${subject?.toUpperCase()}`,
//       teacherName:
//         subject === "maths"
//           ? "Amila Sir"
//           : subject === "science"
//             ? "Science Sir"
//             : "English Teacher",
//       targetDateTime: formData.targetDateTime,
//       currentLesson: formData.currentLesson,
//       specialNotes: formData.specialNotes,
//       zoomLink: formData.zoomLink,
//       overrideStatus: "AUTO", // සේව් කරපු ගමන් ආයේ ඔටෝ ටයිමර් එක ක්‍රියාත්මක වේ
//     };

//     if (existingRecordIndex > -1) {
//       // පරණ එක අප්ඩේට් කිරීම
//       const updated = [...scheduleRecords];
//       updated[existingRecordIndex] = newRecord;
//       setScheduleRecords(updated);
//     } else {
//       // අලුතින්ම එකතු කිරීම
//       setScheduleRecords([...scheduleRecords, newRecord]);
//     }

//     setSuccess("පන්ති කාලසටහන් වාර්තාව සාර්ථකව සේව් විය! 🟢");
//     setError("");
//     setTimeout(() => setSuccess(""), 4000);
//   };
//   return (
//     <div
//       className="vault-container"
//       style={{ background: "white", padding: "30px", borderRadius: "20px" }}>
//       {/* Header */}
//       <div style={{ marginBottom: "25px" }}>
//         <h3
//           style={{
//             color: "#1a0a54",
//             margin: 0,
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}>
//           <FaCalendarDays /> Class Schedule Vault ({subject?.toUpperCase()})
//         </h3>
//         <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
//           ශ්‍රේණිය අනුව පන්ති පවත්වන දිනය, වෙලාව, පාඩම සහ සූම් ලින්ක් එක පාලනය
//           කරන්න.
//         </p>
//       </div>

//       {/* Premium Alert Cards */}
//       {error && (
//         <div
//           style={{
//             background: "#fdedec",
//             borderLeft: "5px solid #e74c3c",
//             color: "#c0392b",
//             padding: "12px",
//             borderRadius: "8px",
//             marginBottom: "20px",
//             fontSize: "0.88rem",
//             fontWeight: "bold",
//           }}>
//           ⚠️ {error}
//         </div>
//       )}
//       {success && (
//         <div
//           style={{
//             background: "#e8f8f5",
//             borderLeft: "5px solid #2ecc71",
//             color: "#27ae60",
//             padding: "12px",
//             borderRadius: "8px",
//             marginBottom: "20px",
//             fontSize: "0.88rem",
//             fontWeight: "bold",
//           }}>
//           ✓ {success}
//         </div>
//       )}

//       {/* Main Layout Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1.2fr 1fr",
//           gap: "30px",
//         }}>
//         {/* 📝 LEFT SIDE: SCHEDULE ENTRY FORM */}
//         <div
//           style={{
//             background: "#f8faff",
//             padding: "25px",
//             borderRadius: "16px",
//             border: "1px solid #eef2ff",
//           }}>
//           <h4
//             style={{
//               margin: "0 0 20px",
//               color: "#1a0a54",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}>
//             <FaPenToSquare /> Update Class Details (Grade {selectedGrade})
//           </h4>
//           <form
//             onSubmit={handleSubmit}
//             style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//             {/* Target Date and Time */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Class Date & Start Time (ටයිමර් එක සඳහා)
//               </label>
//               <input
//                 type="datetime-local"
//                 name="targetDateTime"
//                 required
//                 value={formData.targetDateTime}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                   fontWeight: "bold",
//                 }}
//               />
//             </div>

//             {/* Current Lesson */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Current Lesson (අද උගන්වන පාඩම)
//               </label>
//               <input
//                 type="text"
//                 name="currentLesson"
//                 placeholder="ex: Lesson 05 - Trigonometry"
//                 required
//                 value={formData.currentLesson}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                 }}
//               />
//             </div>

//             {/* Special Notes */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Special Notes (විශේෂ පණිවිඩ)
//               </label>
//               <input
//                 type="text"
//                 name="specialNotes"
//                 placeholder="ex: Bring previous week tutes..."
//                 value={formData.specialNotes}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                 }}
//               />
//             </div>

//             {/* Zoom Link */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Live Zoom Link
//               </label>
//               <input
//                 type="url"
//                 name="zoomLink"
//                 placeholder="https://zoom.us..."
//                 required
//                 value={formData.zoomLink}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                   color: "#4b6bfb",
//                   fontWeight: "bold",
//                 }}
//               />
//             </div>

//             <button
//               type="submit"
//               className="start-btn"
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 background: "#1a0a54",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//                 marginTop: "5px",
//               }}>
//               💾 Save & Reset to Auto Countdown
//             </button>
//           </form>
//         </div>

//         {/* 🎛️ RIGHT SIDE: THE 3 MANUAL OVERRIDE BUTTONS PANEL */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div
//             style={{
//               background: "#fffdfd",
//               padding: "20px",
//               borderRadius: "16px",
//               border: "1px dashed #e74c3c",
//             }}>
//             <h4
//               style={{
//                 margin: "0 0 15px",
//                 color: "#1a0a54",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}>
//               <FaClock style={{ color: "#ff4b2b" }} /> Manual Control Dashboard
//             </h4>
//             <p
//               style={{
//                 fontSize: "0.8rem",
//                 color: "#666",
//                 marginBottom: "20px",
//                 lineHeight: "1.4",
//               }}>
//               හදිසි අවස්ථාවකදී ස්වයංක්‍රීය ටයිමර් එක මඟහැර පන්තියේ තත්ත්වය
//               ක්ෂණිකව වෙනස් කිරීමට පහත බටන්ස් පාවිච්චි කරන්න.
//             </p>

//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//               {/* Button 1: Force Active */}
//               <button
//                 onClick={() => handleStatusOverride("FORCE_ACTIVE")}
//                 style={{
//                   width: "100%",
//                   padding: "14px",
//                   background: "#2ecc71",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "10px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "10px",
//                   boxShadow: "0 4px 10px rgba(46,204,113,0.2)",
//                 }}>
//                 <FaVideo /> 🟢 FORCE ACTIVE (දැන්ම පන්තිය අරඹන්න)
//               </button>

//               {/* Button 2: Postpone */}
//               <button
//                 onClick={() => handleStatusOverride("POSTPONED")}
//                 style={{
//                   width: "100%",
//                   padding: "14px",
//                   background: "#f39c12",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "10px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "10px",
//                   boxShadow: "0 4px 10px rgba(243,156,18,0.2)",
//                 }}>
//                 <FaPause /> ⏳ POSTPONE CLASS (පන්තිය කල් දමන්න)
//               </button>

//               {/* Button 3: Closed */}
//               <button
//                 onClick={() => handleStatusOverride("CLOSED")}
//                 style={{
//                   width: "100%",
//                   padding: "14px",
//                   background: "#e74c3c",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "10px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "10px",
//                   boxShadow: "0 4px 10px rgba(231,76,60,0.2)",
//                 }}>
//                 <FaCircleXmark /> 🔴 CLOSED CLASS (පන්තිය නිවාඩු දෙන්න)
//               </button>
//             </div>
//           </div>

//           {/* Current Live Display Indicator */}
//           <div
//             style={{
//               background: "#f4f7ff",
//               padding: "15px",
//               borderRadius: "12px",
//               border: "1px solid #c7d2fe",
//               fontSize: "0.85rem",
//               fontWeight: "bold",
//               color: "#1e1b4b",
//             }}>
//             📢 දැනට සජීවී තත්ත්වය (Current Mode):{" "}
//             <span
//               style={{
//                 color:
//                   currentSchedule?.overrideStatus === "CLOSED"
//                     ? "red"
//                     : currentSchedule?.overrideStatus === "POSTPONED"
//                       ? "orange"
//                       : "green",
//               }}>
//               {currentSchedule?.overrideStatus || "AUTO COUNTDOWN"}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassScheduleVault;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaCalendarDays,
  // FaCirclePlus,
  FaClock,
  // FaCheckCircle,
  FaCircleXmark,
  FaPause,
  FaVideo,
  FaPenToSquare,
} from "react-icons/fa6";

const ClassScheduleVault = () => {
  const { subject } = useParams();

  // 👑 🆕 [LOCAL GRADE STATE]: 6 සිට 11 දක්වා පාලනය කිරීමට වෙනම ස්ටේට් එකක් ගත්තා
  const [localGrade, setLocalGrade] = useState("11");

  const [scheduleRecords, setScheduleRecords] = useState([
    {
      grade: "11",
      subject: "maths",
      className: "Grade 11 Mathematics",
      teacherName: "Amila Sir",
      targetDateTime: "2026-05-24T20:00",
      currentLesson: "ත්‍රිකෝණමිතිය (Trigonometry)",
      specialNotes: "කරුණාකර පසුගිය සතියේ නිබන්ධනය රැගෙන එන්න.",
      zoomLink: "https://zoom.us",
      overrideStatus: "AUTO",
    },
  ]);

  const [formData, setFormData] = useState({
    targetDateTime: "",
    currentLesson: "",
    specialNotes: "",
    zoomLink: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🧠 දැන් Filter වෙන්නේ localGrade එක අනුවයි
  const currentSchedule = scheduleRecords.find(
    (r) => r.grade === localGrade && r.subject === subject,
  );

  useEffect(() => {
    if (currentSchedule) {
      setFormData({
        targetDateTime: currentSchedule.targetDateTime || "",
        currentLesson: currentSchedule.currentLesson || "",
        specialNotes: currentSchedule.specialNotes || "",
        zoomLink: currentSchedule.zoomLink || "",
      });
    } else {
      setFormData({
        targetDateTime: "",
        currentLesson: "",
        specialNotes: "",
        zoomLink: "",
      });
    }
  }, [localGrade, subject, currentSchedule]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusOverride = (statusType) => {
    if (!currentSchedule) {
      setError("Please enter the class details first and save! ⚠️");
      return;
    }
    const updatedRecords = scheduleRecords.map((r) => {
      if (r.grade === localGrade && r.subject === subject) {
        return { ...r, overrideStatus: statusType };
      }
      return r;
    });
    setScheduleRecords(updatedRecords);
    setSuccess(
      `The class situation was successfully changed! 🟢 (${statusType})`,
    );
    setTimeout(() => setSuccess(""), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingRecordIndex = scheduleRecords.findIndex(
      (r) => r.grade === localGrade && r.subject === subject,
    );

    const newRecord = {
      grade: localGrade,
      subject: subject,
      className: `Grade ${localGrade} ${subject?.toUpperCase()}`,
      teacherName:
        subject === "maths"
          ? "Amila Sir"
          : subject === "science"
            ? "Science Sir"
            : "English Teacher",
      targetDateTime: formData.targetDateTime,
      currentLesson: formData.currentLesson,
      specialNotes: formData.specialNotes,
      zoomLink: formData.zoomLink,
      overrideStatus: "AUTO",
    };

    let updatedRecords = [...scheduleRecords];
    if (existingRecordIndex > -1) {
      updatedRecords[existingRecordIndex] = newRecord;
    } else {
      updatedRecords.push(newRecord);
    }

    setScheduleRecords(updatedRecords);
    setSuccess(`Grade ${localGrade} The schedule was successfully updated! 🟢`);
    setTimeout(() => setSuccess(""), 4000);
  };

  return (
    <div
      className="vault-container"
      style={{ background: "white", padding: "30px", borderRadius: "20px" }}>
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            color: "#1a0a54",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <FaCalendarDays /> Class Schedule Vault ({subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          Control the date, time, lesson, and Zoom link for classes by grade
          (6-11).
        </p>
      </div>
      {error && (
        <div
          style={{
            background: "#fdedec",
            borderLeft: "5px solid #e74c3c",
            color: "#c0392b",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "0.88rem",
            fontWeight: "bold",
          }}>
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div
          style={{
            background: "#e8f8f5",
            borderLeft: "5px solid #2ecc71",
            color: "#27ae60",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "0.88rem",
            fontWeight: "bold",
          }}>
          ✓ {success}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "50px",
        }}>
        <div
          style={{
            background: "#f8faff",
            padding: "25px",
            borderRadius: "16px",
            border: "1px solid #eef2ff",
          }}>
          <h4
            style={{
              margin: "0 0 20px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaPenToSquare /> Update Class Details
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* 👑 🆕 [THE 6-11 DROPDOWN INPUT]: පෝම් එක ඇතුළතම තියෙන ශ්‍රේණි තෝරන කොටස */}
            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Select School Grade
              </label>
              <select
                value={localGrade}
                onChange={(e) => setLocalGrade(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                {["6", "7", "8", "9", "10", "11"].map((g) => (
                  <option key={g} value={g}>
                    Grade {g}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Class Date & Start Time
              </label>
              <input
                type="datetime-local"
                name="targetDateTime"
                required
                value={formData.targetDateTime}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}
              />
            </div>

            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Current Lesson
              </label>
              <input
                type="text"
                name="currentLesson"
                placeholder="ex: Lesson 01 - Core Concept"
                required
                value={formData.currentLesson}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Special Notes
              </label>
              <input
                type="text"
                name="specialNotes"
                placeholder="ex: Bring previous week tutes..."
                value={formData.specialNotes}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Live Zoom Link
              </label>
              <input
                type="url"
                name="zoomLink"
                placeholder="https://zoom.us..."
                required
                value={formData.zoomLink}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  color: "#4b6bfb",
                  fontWeight: "bold",
                }}
              />
            </div>

            <button
              type="submit"
              className="start-btn"
              style={{
                width: "100%",
                padding: "12px",
                background: "#1a0a54",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "5px",
              }}>
              💾 Save & Reset to Auto Countdown
            </button>
          </form>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "#fffdfd",
              padding: "20px",
              borderRadius: "16px",
              border: "1px dashed #e74c3c",
            }}>
            <h4
              style={{
                margin: "0 0 15px",
                color: "#1a0a54",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
              <FaClock style={{ color: "#ff4b2b" }} /> Manual Control Dashboard
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginBottom: "20px",
                lineHeight: "1.4",
              }}>
              Use the buttons below to instantly change the class status in an
              emergency.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={() => handleStatusOverride("FORCE_ACTIVE")}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#2ecc71",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 4px 10px rgba(46,204,113,0.2)",
                }}>
                <FaVideo /> 🟢 FORCE ACTIVE
              </button>
              <button
                onClick={() => handleStatusOverride("POSTPONED")}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#f39c12",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 4px 10px rgba(243,156,18,0.2)",
                }}>
                <FaPause /> ⏳ POSTPONE CLASS
              </button>
              <button
                onClick={() => handleStatusOverride("CLOSED")}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 4px 10px rgba(231,76,60,0.2)",
                }}>
                <FaCircleXmark /> 🔴 CLOSED CLASS
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#f4f7ff",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #c7d2fe",
              fontSize: "0.85rem",
              fontWeight: "bold",
              color: "#1e1b4b",
            }}>
            📢 Grade {localGrade} Currently live status :{" "}
            <span
              style={{
                color:
                  currentSchedule?.overrideStatus === "CLOSED"
                    ? "red"
                    : currentSchedule?.overrideStatus === "POSTPONED"
                      ? "orange"
                      : "green",
              }}>
              {currentSchedule?.overrideStatus || "AUTO COUNTDOWN"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassScheduleVault;
