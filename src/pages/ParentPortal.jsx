import { useState } from "react";
import { Link } from "react-router-dom";
import {
  parentGeneralNotices,
  parentFeesTable,
  parentAttendanceTable,
} from "../data/parentProtalData";
import {
  FaUserShield,
  FaKey,
  FaBell,
  FaMagnifyingGlass,
  FaMoneyCheckDollar,
  FaCalendarCheck,
  FaUserXmark,
  FaArrowLeft,
} from "react-icons/fa6";

const ParentPortal = () => {
  // Gate Security States
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Search Filter State
  const [searchQuery, setSearchQuery] = useState("");

  // 🔒 1. Login Security Gate Handler
  const handleParentLogin = (e) => {
    e.preventDefault();
    const cleanId = studentId.trim().toUpperCase();

    // ගාස්තු වගුවේ හෝ පැමිණීම් වගුවේ මේ ID එක තියෙනවාද බලනවා
    const isIdValid = parentFeesTable.some((r) => r.studentId === cleanId);

    if (isIdValid) {
      // PIN එක ගැලපෙනවාද බැලීම (ID එක අග තියෙන PIN එක සමඟ සසඳයි)
      if (cleanId.endsWith(pin.trim())) {
        setIsAuthenticated(true);
        setSearchQuery(cleanId); // ලොග් වුණු ගමන් තමන්ගේ ළමයාගේ ID එක ඔටෝ සර්ච් වෙනවා
        setError("");
      } else {
        setError("ඇතුළත් කළ රහස් අංකය (PIN) වැරදියි! ❌");
      }
    } else {
      setError(
        "වලංගු නොවන ශිෂ්‍ය ID අංකයකි. කරුණාකර කාඩ් මාකර් සම්බන්ධ කරගන්න. ❌",
      );
    }
  };

  // 📅 2. අද දින පන්ති පැමිණ නැති අයගේ (Absent) ලැයිස්තුව විතරක් වෙන් කරගැනීම
  const todayAbsentList = parentAttendanceTable.filter(
    (r) => r.status === "Absent",
  );

  // 🔍 3. සර්ච් බාර් එක අනුව වගු වල දත්ත Filter කරගැනීම
  const filteredFees = parentFeesTable.filter((r) =>
    r.studentId.includes(searchQuery.trim().toUpperCase()),
  );
  const filteredAttendance = parentAttendanceTable.filter((r) =>
    r.studentId.includes(searchQuery.trim().toUpperCase()),
  );

  return (
    <div
      className="parent-portal-wrapper page-container"
      style={{
        padding: "40px 20px",
        background: "#f8faff",
        minHeight: "85vh",
      }}>
      <div
        className="system-container"
        style={{ maxWidth: "1000px", margin: "0 auto" }}>
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

        {!isAuthenticated ? (
          // ==================== 🔒 SCREEN 01: SECURITY LOGIN GATE ====================
          <div
            className="card-container"
            style={{
              maxWidth: "420px",
              margin: "40px auto",
              padding: "35px 30px",
              borderRadius: "24px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
              background: "white",
              textAlign: "center",
            }}>
            <div
              style={{
                margin: "0 auto 15px",
                width: "65px",
                height: "65px",
                background: "#26136d",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.8rem",
              }}>
              <FaUserShield />
            </div>
            <h2
              style={{
                color: "#26136d",
                fontWeight: "800",
                marginBottom: "8px",
              }}>
              දෙමාපිය පෝටලය
            </h2>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginBottom: "25px",
                lineHeight: "1.5",
              }}>
              දරුවාගේ ගාස්තු වාර්තා, පැමිණීම සහ පන්ති නිවේදන රහසිගතව පරීක්ෂා
              කිරීම සඳහා ලොග් වන්න.
            </p>

            <form
              onSubmit={handleParentLogin}
              className="styled-form"
              style={{ textAlign: "left" }}>
              <div className="input-group" style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    color: "#26136d",
                    display: "block",
                    marginBottom: "5px",
                  }}>
                  ශිෂ්‍ය ID අංකය (Student ID)
                </label>
                <input
                  type="text"
                  placeholder="ex: EDU-MES-11-..."
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    textTransform: "uppercase",
                  }}
                />
              </div>
              <div className="input-group" style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    color: "#26136d",
                    display: "block",
                    marginBottom: "5px",
                  }}>
                  <FaKey /> රහස් අංකය (4-Digit PIN)
                </label>
                <input
                  type="password"
                  maxLength="4"
                  placeholder="XXXX"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
              {error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.85rem",
                    marginBottom: "15px",
                    fontWeight: "500",
                  }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="start-btn"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#26136d",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}>
                වාර්තාව බලන්න (View Reports)
              </button>
            </form>
          </div>
        ) : (
          // ==================== 🔓 SCREEN 02: MAIN PARENT PORTAL DASHBOARD ====================
          <div className="parent-main-dashboard">
            {/* 📢 A. GENERAL NOTICE BOARD */}
            <div
              className="card-container"
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                marginBottom: "30px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
              }}>
              <h3
                style={{
                  color: "#26136d",
                  margin: "0 0 15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                <FaBell style={{ color: "#ff4b2b" }} /> පොදු පන්ති නිවේදන පුවරුව
                (Notice Board)
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}>
                {parentGeneralNotices.map((notice) => (
                  <div
                    key={notice.id}
                    style={{
                      background: "#fff4f2",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      borderLeft: "4px solid #f7786f",
                    }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        color: "#333",
                        lineHeight: "1.5",
                      }}>
                      <span
                        style={{
                          background: "#f7786f",
                          color: "white",
                          padding: "2px 8px",
                          borderRadius: "5px",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}>
                        {notice.type}
                      </span>
                      {notice.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔍 B. SEARCH PORTAL BAR */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "30px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.01)",
              }}>
              <FaMagnifyingGlass
                style={{ color: "#26136d", fontSize: "1.2rem" }}
              />
              <input
                type="text"
                placeholder="දරුවාගේ ID අංකය ගසා සර්ච් කරන්න (Search Student ID...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              />
            </div>

            {/* 💰 C. FEES REPORT TABLE */}
            <div
              className="card-container"
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                marginBottom: "30px",
                overflowX: "auto",
              }}>
              <h3 style={{ color: "#26136d", marginBottom: "15px" }}>
                <FaMoneyCheckDollar style={{ color: "#2ecc71" }} /> පන්ති ගාස්තු
                වාර්තා වගුව (Class Fees Status)
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.92rem",
                  textAlign: "left",
                }}>
                <thead>
                  <tr style={{ background: "#26136d", color: "white" }}>
                    <th style={{ padding: "12px" }}>Student ID</th>
                    <th style={{ padding: "12px" }}>Class</th>
                    <th style={{ padding: "12px" }}>Grade</th>
                    <th style={{ padding: "12px" }}>Status</th>
                    <th style={{ padding: "12px" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFees.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid #eee",
                        background:
                          row.studentId === studentId.toUpperCase()
                            ? "#fffde9"
                            : "transparent",
                      }}>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        {row.studentId}
                      </td>
                      <td style={{ padding: "12px" }}>{row.class}</td>
                      <td style={{ padding: "12px" }}>Grade {row.grade}</td>
                      <td
                        style={{
                          padding: "12px",
                          color: row.feesStatus === "Paid" ? "green" : "red",
                          fontWeight: "bold",
                        }}>
                        {row.feesStatus === "Paid" ? "✓ Paid" : "✗ Unpaid"}
                      </td>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 📅 D. ATTENDANCE REPORT TABLE */}
            <div
              className="card-container"
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                marginBottom: "30px",
                overflowX: "auto",
              }}>
              <h3 style={{ color: "#26136d", marginBottom: "15px" }}>
                <FaCalendarCheck style={{ color: "#4b6bfb" }} /> ශිෂ්‍ය පැමිණීමේ
                වාර්තා වගුව (Student Attendance)
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.92rem",
                  textAlign: "left",
                }}>
                <thead>
                  <tr style={{ background: "#26136d", color: "white" }}>
                    <th style={{ padding: "12px" }}>Student ID</th>
                    <th style={{ padding: "12px" }}>Subject</th>
                    <th style={{ padding: "12px" }}>Date</th>
                    <th style={{ padding: "12px" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendance.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid #eee",
                        background:
                          row.studentId === studentId.toUpperCase()
                            ? "#fffde9"
                            : "transparent",
                      }}>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        {row.studentId}
                      </td>
                      <td style={{ padding: "12px" }}>{row.class}</td>
                      <td style={{ padding: "12px" }}>{row.date}</td>
                      <td
                        style={{
                          padding: "12px",
                          color: row.status === "Present" ? "green" : "red",
                          fontWeight: "bold",
                        }}>
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 📅 E. TODAY'S ABSENT LIST (පොදු ලැයිස්තුව) */}
            <div
              className="card-container"
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                overflowX: "auto",
                border: "1px solid rgba(231,76,60,0.2)",
              }}>
              <h3 style={{ color: "#c0392b", marginBottom: "15px" }}>
                <FaUserXmark /> අද දින පන්තියට පැමිණ නැති සිසුන් (Today's Absent
                Student IDs)
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.92rem",
                  textAlign: "left",
                }}>
                <thead>
                  <tr style={{ background: "#e74c3c", color: "white" }}>
                    <th style={{ padding: "12px" }}>Absent Student ID</th>
                    <th style={{ padding: "12px" }}>Subject</th>
                    <th style={{ padding: "12px" }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {todayAbsentList.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid #fdedec",
                        background:
                          row.studentId === studentId.toUpperCase()
                            ? "#fdf2f2"
                            : "transparent",
                      }}>
                      <td
                        style={{
                          padding: "12px",
                          fontWeight: "bold",
                          color: "#c0392b",
                        }}>
                        {row.studentId}
                      </td>
                      <td style={{ padding: "12px" }}>{row.class}</td>
                      <td style={{ padding: "12px" }}>Grade {row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="browse-btn"
              style={{ width: "100%", marginTop: "30px", padding: "12px" }}>
              පද්ධතියෙන් පිටවීම (Logout Portal)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentPortal;
