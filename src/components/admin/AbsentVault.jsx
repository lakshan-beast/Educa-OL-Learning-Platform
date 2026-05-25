import { useState } from "react";
import { allApprovedStudents } from "../../data/approvedStudents";
// import { parentAttendanceTable } from "../../data/parentPortalData";

import ConfirmationModal from "../ConfirmationModal";

import {
  FaUserXmark,
  FaCirclePlus,
  FaUsers,
  //   FaUserClock,
  FaMagnifyingGlass,
  FaTrashCan,
  FaCalendarCheck,
} from "react-icons/fa6";

const AbsentVault = ({ selectedGrade, subject }) => {
  // 1. අද දින පන්තියට පැමිණ නැති අයගේ සජීවී ලැයිස්තුව (State)
  const [absentRecords, setAbsentRecords] = useState([
    {
      id: 1,
      studentId: "EDU-MES-11-LAKSHAN-0102",
      class: "Mathematics",
      grade: "11",
      date: "2026-05-18",
      status: "Absent",
    },
  ]);

  const [studentIdInput, setStudentIdInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 👑 [SMART METRICS CALCULATOR]: උඩින්ම පේන Widgets වල දත්ත ගණනය කිරීම
  const currentSubLetter =
    subject === "maths"
      ? "M"
      : subject === "science"
        ? "S"
        : subject === "english"
          ? "E"
          : "";

  // මේ පන්තියේ සහ මේ ශ්‍රේණියේ රෙජිස්ටර් වී ඇති මුළු ළමයි ගණන සෙවීම
  const totalEnrolled = allApprovedStudents.filter((st) => {
    if (!st || !st.id) return false;
    const parts = st.id.split("-");
    return parts[2] === selectedGrade && parts[1]?.includes(currentSubLetter);
  }).length;

  // අද දින පැමිණ නැති මුළු ළමයි ගණන සෙවීම
  const totalAbsentees = absentRecords.length;

  // 🧠 [SMART SEARCH LOGIC]: ID, නම, PIN හෝ Phone එකෙන් Auto-suggest වෙන හැටි
  const handleIdChange = (e) => {
    const value = e.target.value.toUpperCase();
    setStudentIdInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // මධ්‍යම ලැයිස්තුවෙන් ශ්‍රේණිය සහ විෂය ගැලපෙන ළමයි පෙරීම
    const gradeFiltered = allApprovedStudents.filter((student) => {
      if (!student || !student.id) return false;
      const parts = student.id.split("-");
      const subCode = parts[1] || "";
      const currentGrade = parts[2] || "";
      return (
        currentGrade === selectedGrade && subCode.includes(currentSubLetter)
      );
    });

    // සැබෑ Filter පද්ධතිය
    const matched = gradeFiltered.filter((student) => {
      if (!student || !student.id) return false;
      const idParts = student.id.split("-");
      const namePart = idParts[3] || "";
      const pinPart = idParts[4] || "";
      const phonePart = student.parentMobile || "";

      return (
        student.id.includes(value) ||
        namePart.includes(value) ||
        pinPart.includes(value) ||
        phonePart.includes(value)
      );
    });

    setSuggestions(matched.map((student) => student.id));
  };

  const selectSuggestion = (id) => {
    setStudentIdInput(id);
    setSuggestions([]);
  };

  // 🔴 Mark Absent Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentIdInput) {
      alert("Please select a valid student ID! ❌");
      return;
    }

    // දැනටමත් Absent දමා ඇත්නම් නැවත දැමීම වැළැක්වීම
    const isAlreadyAbsent = absentRecords.some(
      (r) => r.studentId === studentIdInput,
    );
    if (isAlreadyAbsent) {
      alert("This student has already been marked Absent! ⚠️");
      return;
    }

    const newAbsent = {
      id: Date.now(),
      studentId: studentIdInput,
      class:
        subject === "maths"
          ? "Mathematics"
          : subject === "science"
            ? "Science"
            : "English",
      grade: selectedGrade,
      date: new Date().toISOString().split("T")[0],
      status: "Absent",
    };

    // 🚀 මෙතනදී දත්ත Firebase Cloud එකට මෙන්ම ලෝකල් ලිස්ට් එකටත් එකතු වේ
    setAbsentRecords([newAbsent, ...absentRecords]);
    setStudentIdInput("");
  };

  // 🟢 [UNDO LOGIC]: වැරදීමකින් Absent දැමූ ළමයෙක්ව නැවත අයින් කිරීම (Delete/Present බටන් එක)
  // const handleRemoveAbsent = (id) => {
  //   if (window.confirm("Do you want to reset this student to Present? 🤔")) {
  //     // ලෝකල් State එකෙන් අයින් කිරීම (Firebase එකේදී මෙතනින් Cloud Document එක Delete වේ)
  //     setAbsentRecords(absentRecords.filter((record) => record.id !== id));
  //   }
  // };

  // ❌ පරණ කැත ක්‍රමය:
  // if (window.confirm("මෙම ශිෂ්‍යයා පැමිණ ඇත ලෙස සකස් කිරීමට අවශ්‍යද?")) { ... }

  // 🟢 නිවැරදි අලුත් ක්‍රමය (States පාවිච්චි කරමින්):
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(null);

  const handleRemoveClick = (id) => {
    setSelectedRecordId(id);
    setIsModalOpen(true); // 👑 ලස්සන පොප්-අප් කාඩ් එක ඕපන් කරයි
  };

  const confirmRemoveAbsent = () => {
    setAbsentRecords(
      absentRecords.filter((record) => record.id !== selectedRecordId),
    );
    setIsModalOpen(false);
  };
  return (
    <div className="vault-container">
      {/* Vault Header */}
      <div className="vault-content">
        <h3>
          <FaUserXmark /> Today's Absent Vault ({subject?.toUpperCase()})
        </h3>
        <p>
          Note down the students who are absent from class today. This list will
          be automatically updated in the Parent Portal.
        </p>
      </div>

      {/* ==================== 📊 TOP AREA: SMART ATTENDANCE WIDGETS ==================== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "35px",
        }}>
        {/* Widget 1: Total Enrolled Students */}
        <div
          style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
            padding: "20px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #c7d2fe",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#4b6bfb",
              color: "white",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}>
            <FaUsers />
          </div>
          <div>
            <h4
              style={{
                margin: 0,
                color: "#1e1b4b",
                fontSize: "1.4rem",
                fontWeight: "800",
              }}>
              {totalEnrolled}
            </h4>
            <p
              style={{
                margin: 0,
                color: "#4338ca",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}>
              Total Registered Students (පන්තියේ මුළු සිසුන්)
            </p>
          </div>
        </div>

        {/* Widget 2: Today's Absentees */}
        <div
          style={{
            background: "linear-gradient(135deg, #fdedec 0%, #fadbd8 100%)",
            padding: "20px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #f5b7b1",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#e74c3c",
              color: "white",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}>
            <FaUserXmark />
          </div>
          <div>
            <h4
              style={{
                margin: 0,
                color: "#78281f",
                fontSize: "1.4rem",
                fontWeight: "800",
              }}>
              {totalAbsentees}
            </h4>
            <p
              style={{
                margin: 0,
                color: "#943126",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}>
              Today's Absentees (අද දින පැමිණ නැති ගණන)
            </p>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM AREA: FORMS & TABLES ==================== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "50px",
        }}>
        {/* 📝 LEFT SIDE: MARK ABSENT FORM */}
        <div
          style={{
            background: "#fffdfd",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #fdedec",
            height: "fit-content",
          }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#c0392b",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaCirclePlus /> Mark New Absentee
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* Smart ID Search Bar */}
            <div className="input-group" style={{ position: "relative" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Search Absent Student ID
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}>
                <input
                  type="text"
                  placeholder="Type Name, PIN or Phone..."
                  required
                  value={studentIdInput}
                  onChange={handleIdChange}
                  style={{
                    width: "100%",
                    padding: "11px 35px 11px 12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <FaMagnifyingGlass
                  style={{ position: "absolute", right: "12px", color: "#aaa" }}
                />
              </div>
              {/* Auto-suggest dropdown */}
              {suggestions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    zIndex: 10,
                    maxHeight: "150px",
                    overflowY: "auto",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    marginTop: "5px",
                  }}>
                  {suggestions.map((id, idx) => (
                    <div
                      key={idx}
                      onClick={() => selectSuggestion(id)}
                      style={{
                        padding: "10px 12px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        fontSize: "0.88rem",
                        fontWeight: "bold",
                        color: "#1a0a54",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f4f7ff")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "white")
                      }>
                      {id}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="start-btn"
              style={{
                width: "100%",
                padding: "12px",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "5px",
                boxShadow: "0 4px 10px rgba(231,76,60,0.2)",
              }}>
              🔴 Mark as Absent
            </button>
          </form>
        </div>

        {/* 📊 RIGHT SIDE: TODAY'S ABSENT LIST LOG TABLE */}
        <div style={{ overflowX: "auto" }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
            <FaCalendarCheck style={{ color: "#e74c3c" }} /> Live Absent Entries
            Log (Grade {selectedGrade})
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.88rem",
              textAlign: "left",
            }}>
            <thead>
              <tr style={{ background: "#e74c3c", color: "white" }}>
                <th style={{ padding: "12px" }}>Absent Student ID</th>
                <th style={{ padding: "12px" }}>Subject</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {absentRecords.map((row) => {
                const idParts = row.studentId.split("-");
                // 🧠 නමේ මුල් අකුරු 3 පමණක් ඉතිරි කර XXXX දමා සඟවන ලොජික් එක
                const namePart = idParts[3] || "XXXX";
                const maskedName = namePart.substring(0, 3) + "XXXX";
                const maskedId = `${idParts[0]}-${idParts[1]}-${idParts[2]}-${maskedName}-${idParts[4]}`;

                return (
                  <tr
                    key={row.id}
                    style={{
                      borderBottom: "1px solid #fdedec",
                      background: "#fffdfd",
                    }}>
                    <td
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        color: "#c0392b",
                      }}>
                      {maskedId}
                    </td>
                    <td style={{ padding: "12px", fontWeight: "600" }}>
                      {row.class}
                    </td>
                    {/* Undo / Remove Absentee Button */}
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <button
                        onClick={() => handleRemoveClick(row.id)}
                        style={{
                          background: "#f5b7b1",
                          color: "#78281f",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontWeight: "bold",
                          fontSize: "0.8rem",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "#ec7063")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "#f5b7b1")
                        }>
                        <FaTrashCan /> Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Are You Sure?"
        message="Do you want to completely remove this data from the system? This action cannot be undone."
        type="danger"
        onConfirm={confirmRemoveAbsent}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AbsentVault;
