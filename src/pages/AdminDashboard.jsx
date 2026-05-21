// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaUserPlus,
//   FaGraduationCap,
//   FaMoneyCheckDollar,
//   FaUserXmark,
//   FaBullhorn,
//   FaLaptop,
//   FaRightFromBracket,
//   FaFolderOpen,
// } from "react-icons/fa6";

// const AdminDashboard = () => {
//   const { subject } = useParams(); // URL එකෙන් maths/science/english කෑල්ල ඔටෝ කියවයි
//   const navigate = useNavigate();

//   // 🎛️ States පාලනය
//   const [selectedGrade, setSelectedGrade] = useState("11"); // Default Grade 11
//   const [activeVault, setActiveVault] = useState("add-student"); // Default Active Section
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   // 💻 Laptop/Desktop Lock පරීක්ෂා කිරීම (Screen Resize එකත් එක්කම)
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 🔒 1. Mobile Lock Screen: ෆෝන් එකෙන් ආවොත් ලොක් කරන කොටස
//   if (isMobile) {
//     return (
//       <div
//         className="admin-mobile-lock"
//         style={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#1a0a54",
//           color: "white",
//           padding: "30px",
//           textAlign: "center",
//         }}>
//         <FaLaptop
//           style={{ fontSize: "4rem", color: "#f1c40f", marginBottom: "20px" }}
//         />
//         <h2 style={{ fontWeight: "800" }}>🔒 Restricted Access</h2>
//         <p
//           style={{
//             maxWidth: "450px",
//             fontSize: "0.95rem",
//             opacity: 0.8,
//             marginTop: "10px",
//             lineHeight: "1.6",
//           }}>
//           ආරක්ෂිත හේතූන් මත සහ දත්ත ඇතුළත් කිරීමේ (Data Entry) පහසුව සඳහා
//           කරුණාකර Laptop හෝ Desktop පරිගණකයකින් මෙම පද්ධතියට පිවිසෙන්න.
//         </p>
//       </div>
//     );
//   }

//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div
//       className="admin-dashboard-wrapper"
//       style={{
//         display: "flex",
//         height: "100vh",
//         background: "#f4f7ff",
//         fontFamily: "inherit",
//         paddingTop: "6rem",
//         minWidth: "1140px",
//         width: "100%",
//       }}>
//       {/* ==================== 🟢 LEFT SIDEBAR (Midnight Blue) ==================== */}
//       <aside
//         className="admin-sidebar"
//         style={{
//           width: "280px",
//           background: "#1a0a54",
//           color: "white",
//           display: "flex",
//           flexDirection: "column",
//           padding: "25px 20px",
//         }}>
//         {/* Title Dynamic Logo */}
//         <div
//           style={{
//             borderBottom: "1px solid rgba(255,255,255,0.1)",
//             paddingBottom: "20px",
//             marginBottom: "25px",
//           }}>
//           <h3
//             style={{
//               textTransform: "uppercase",
//               fontSize: "1.15rem",
//               letterSpacing: "1px",
//               margin: 0,
//               fontWeight: "800",
//             }}>
//             {subject} Control
//           </h3>
//           <span
//             style={{ fontSize: "0.75rem", opacity: 0.6, fontWeight: "bold" }}>
//             Official Faculty Management
//           </span>
//         </div>

//         {/* Vaults Menu Buttons 5 */}
//         <nav
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "8px",
//             flex: 1,
//           }}>
//           <button
//             onClick={() => setActiveVault("add-student")}
//             style={{
//               width: "100%",
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               fontSize: "0.92rem",
//               fontWeight: "600",
//               background:
//                 activeVault === "add-student" ? "#ff4b2b" : "transparent",
//               color: "white",
//               textAlign: "left",
//               transition: "0.3s",
//             }}>
//             <FaUserPlus /> <span>1. Add Student Vault</span>
//           </button>

//           <button
//             onClick={() => setActiveVault("class-marks")}
//             style={{
//               width: "100%",
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               fontSize: "0.92rem",
//               fontWeight: "600",
//               background:
//                 activeVault === "class-marks" ? "#ff4b2b" : "transparent",
//               color: "white",
//               textAlign: "left",
//               transition: "0.3s",
//             }}>
//             <FaGraduationCap /> <span>2. Class Paper Marks</span>
//           </button>

//           <button
//             onClick={() => setActiveVault("payments")}
//             style={{
//               width: "100%",
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               fontSize: "0.92rem",
//               fontWeight: "600",
//               background:
//                 activeVault === "payments" ? "#ff4b2b" : "transparent",
//               color: "white",
//               textAlign: "left",
//               transition: "0.3s",
//             }}>
//             <FaMoneyCheckDollar /> <span>3. Payments Vault</span>
//           </button>

//           <button
//             onClick={() => setActiveVault("absent-mark")}
//             style={{
//               width: "100%",
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               fontSize: "0.92rem",
//               fontWeight: "600",
//               background:
//                 activeVault === "absent-mark" ? "#ff4b2b" : "transparent",
//               color: "white",
//               textAlign: "left",
//               transition: "0.3s",
//             }}>
//             <FaUserXmark /> <span>4. Today's Absent Vault</span>
//           </button>

//           <button
//             onClick={() => setActiveVault("notices")}
//             style={{
//               width: "100%",
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               fontSize: "0.92rem",
//               fontWeight: "600",
//               background: activeVault === "notices" ? "#ff4b2b" : "transparent",
//               color: "white",
//               textAlign: "left",
//               transition: "0.3s",
//             }}>
//             <FaBullhorn /> <span>5. Class Notice Vault</span>
//           </button>
//         </nav>

//         {/* Sign Out Button */}
//         <button
//           onClick={handleLogout}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "10px",
//             border: "1px solid rgba(255,255,255,0.2)",
//             background: "transparent",
//             color: "#ff4d4d",
//             cursor: "pointer",
//             fontWeight: "bold",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "8px",
//           }}>
//           <FaRightFromBracket /> Sign Out Panel
//         </button>
//       </aside>

//       {/* ==================== 🔵 RIGHT MAIN CONTENT SCREEN ==================== */}
//       <main
//         style={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           overflowY: "auto",
//         }}>
//         {/* TOP NAV BAR (Grade Selection Tabs) */}
//         <header
//           style={{
//             background: "white",
//             padding: "15px 40px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
//           }}>
//           {/* Grade Toggles 10 / 11 */}
//           <div
//             style={{
//               display: "flex",
//               gap: "10px",
//               background: "#f0f2f5",
//               padding: "5px",
//               borderRadius: "12px",
//             }}>
//             <button
//               onClick={() => setSelectedGrade("10")}
//               style={{
//                 padding: "8px 24px",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontWeight: "700",
//                 cursor: "pointer",
//                 background: selectedGrade === "10" ? "white" : "transparent",
//                 color: selectedGrade === "10" ? "#1a0a54" : "#777",
//                 boxShadow:
//                   selectedGrade === "10"
//                     ? "0 2px 6px rgba(0,0,0,0.05)"
//                     : "none",
//                 transition: "0.3s",
//               }}>
//               Grade 10
//             </button>
//             <button
//               onClick={() => setSelectedGrade("11")}
//               style={{
//                 padding: "8px 24px",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontWeight: "700",
//                 cursor: "pointer",
//                 background: selectedGrade === "11" ? "white" : "transparent",
//                 color: selectedGrade === "11" ? "#1a0a54" : "#777",
//                 boxShadow:
//                   selectedGrade === "11"
//                     ? "0 2px 6px rgba(0,0,0,0.05)"
//                     : "none",
//                 transition: "0.3s",
//               }}>
//               Grade 11
//             </button>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               fontSize: "0.9rem",
//               fontWeight: "600",
//               color: "#555",
//             }}>
//             <FaFolderOpen style={{ color: "#ff4b2b" }} /> Managing:{" "}
//             <span style={{ color: "#1a0a54", fontWeight: "bold" }}>
//               Grade {selectedGrade} ({subject})
//             </span>
//           </div>
//         </header>

//         {/* DYNAMIC CONTENT CONTAINER (වමේ බටන් එක ඔබද්දී දකුණු පැත්තේ පෝම්ස් මාරු වන තැන) */}
//         <div style={{ padding: "40px", flex: 1 }}>
//           {activeVault === "add-student" && (
//             <div
//               className="card-container"
//               style={{
//                 background: "white",
//                 padding: "30px",
//                 borderRadius: "20px",
//               }}>
//               <h3>➕ Add New Student (Grade {selectedGrade})</h3>
//               <p style={{ color: "#666", fontSize: "0.85rem" }}>
//                 පන්තියට පැමිණි නව ශිෂ්‍යයා පද්ධතියට ලියාපදිංචි කිරීම මෙතැනින්
//                 සිදු කරන්න.
//               </p>
//               {/* Form එක හෙට ලියමු */}
//             </div>
//           )}
//           {activeVault === "class-marks" && (
//             <div
//               className="card-container"
//               style={{
//                 background: "white",
//                 padding: "30px",
//                 borderRadius: "20px",
//               }}>
//               <h3>📈 Weekly Class Paper Marks</h3>
//               <p style={{ color: "#666", fontSize: "0.85rem" }}>
//                 සතිපතා පවත්වන ලද පන්ති පරීක්ෂණ වල ලකුණු ඇතුළත් කිරීමේ ලැයිස්තුව.
//               </p>
//             </div>
//           )}

//           {activeVault === "payments" && (
//             <div
//               className="card-container"
//               style={{
//                 background: "white",
//                 padding: "30px",
//                 borderRadius: "20px",
//               }}>
//               <h3>💰 Monthly Fees & Payments Management</h3>
//               <p style={{ color: "#666", fontSize: "0.85rem" }}>
//                 මාසික පන්ති ගාස්තු ගෙවීම් සටහන් කිරීම සහ දෙමාපියන්ට WhatsApp
//                 මඟින් විස්තර යැවීම.
//               </p>
//             </div>
//           )}

//           {activeVault === "absent-mark" && (
//             <div
//               className="card-container"
//               style={{
//                 background: "white",
//                 padding: "30px",
//                 borderRadius: "20px",
//               }}>
//               <h3>📅 Today's Absent Log System</h3>
//               <p style={{ color: "#666", fontSize: "0.85rem" }}>
//                 අද දින පන්තියට පැමිණ නැති සිසුන්ගේ පැමිණීම සටහන් කිරීමේ වගුව.
//               </p>
//             </div>
//           )}

//           {activeVault === "notices" && (
//             <div
//               className="card-container"
//               style={{
//                 background: "white",
//                 padding: "30px",
//                 borderRadius: "20px",
//               }}>
//               <h3>📢 Broadcast Class Notice Board</h3>
//               <p style={{ color: "#666", fontSize: "0.85rem" }}>
//                 සිසුන්ගේ Dashboard එකට සහ දෙමාපිය පෝටලයට එකවර ලයිව් නිවේදන
//                 නිකුත් කිරීම.
//               </p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AddStudentVault from "../components/admin/AddStudentVault";
import ClassMarksVault from "../components/admin/ClassMarksVault";
import PaymentsVault from "../components/admin/PaymentsVault";
import AbsentMark from "../components/admin/AbsentVault";
import NoticeBoard from "../components/admin/NoticeVault";
import ClassScheduleVault from "../components/admin/ClassScheduleVault";
import PaperHubUploadVault from "../components/admin/PaperHubUploadVault";

import {
  FaUserPlus,
  FaGraduationCap,
  FaMoneyCheckDollar,
  FaUserXmark,
  FaBullhorn,
  FaLaptop,
  FaRightFromBracket,
  FaFolderOpen,
  FaFolderPlus,
  FaLock,
  FaUserShield,
  FaKey,
  FaCalendarCheck,
} from "react-icons/fa6";

const AdminDashboard = () => {
  const { subject } = useParams(); // URL එකෙන් maths/science/english කෑල්ල ගනී
  const navigate = useNavigate();

  // 👑 [HARDCODED ADMIN CREDENTIALS]: සර්ලා 3 දෙනාගේ රහස් Username සහ Passwords 3
  const adminCredentials = {
    maths: { username: "MATHS-ADMIN", password: "maths@securepass" },
    science: { username: "SCIENCE-ADMIN", password: "science@securepass" },
    english: { username: "ENGLISH-ADMIN", password: "english@securepass" },
  };

  // 🎛️ States ਪාලනය
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [selectedGrade, setSelectedGrade] = useState("11");
  const [activeVault, setActiveVault] = useState("add-student");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // 💻 Laptop/Desktop Lock පරීක්ෂාව
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔒 1. Mobile Lock Screen
  if (isMobile) {
    return (
      <div className="admin-mobile-lock">
        <FaLaptop className="laptop" />
        <h2>
          <FaLock /> Restricted Access
        </h2>
        <p>
          For security reasons, please access this system from a laptop or
          desktop computer.
        </p>
      </div>
    );
  }

  // 🔐 2. Admin Login Handler (මුරපදය නිවැරදිද බැලීම)
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const currentSubject = subject ? subject.toLowerCase() : "";
    const validCredentials = adminCredentials[currentSubject];

    if (validCredentials) {
      if (
        inputUsername.trim() === validCredentials.username &&
        inputPassword.trim() === validCredentials.password
      ) {
        setIsAuthenticated(true);
        setLoginError("");
      } else {
        setLoginError("Invalid Admin Username or Password! ❌");
      }
    } else {
      setLoginError("Invalid Subject Dashboard Route! ❌");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setInputUsername("");
    setInputPassword("");
    navigate("/");
  };

  return (
    <>
      {!isAuthenticated ? (
        // ==================== 🔒 SCREEN 01: ADMIN SECURE LOGIN GATEWAY ====================
        <div className="admin-login-wrapper">
          <div className="card-container">
            <div className="admin-logo">
              <FaUserShield />
            </div>
            <h2>{subject} Faculty Login</h2>
            <p>
              Enter official management credentials to unlock database hubs.
            </p>
            <form
              onSubmit={handleAdminLogin}
              className="styled-form"
              style={{ textAlign: "left" }}>
              <div
                className="input-group"
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <label
                  style={{
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    color: "#1a0a54",
                    marginBottom: "5px",
                  }}>
                  <FaUserShield /> Admin Username
                </label>
                <input
                  type="text"
                  placeholder="Please Enter Your Admin User Name"
                  required
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
              <div
                className="input-group"
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <label
                  style={{
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    color: "#1a0a54",
                    marginBottom: "5px",
                  }}>
                  <FaKey /> Admin Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  required
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
              {loginError && <p className="error-message">{loginError}</p>}
              <button type="submit" className="start-btn admin-btn">
                Unlock Dashboard Gate
              </button>
            </form>
          </div>
        </div>
      ) : (
        // ==================== 🔓 SCREEN 02: DYNAMIC MAIN ADMIN PORTAL ====================
        // <div className="admin-dashboard-wrapper">
        //   {/* LEFT SIDEBAR */}
        //   <aside className="admin-sidebar">
        //     <div className="sidebar-header">
        //       <h3>{subject} Control</h3>
        //       <span>Official Faculty Management</span>
        //     </div>

        //     <nav>
        //       <button
        //         onClick={() => setActiveVault("add-student")}
        //         style={{
        //           background:
        //             activeVault === "add-student" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaUserPlus /> <span> Add Student Vault</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("class-marks")}
        //         style={{
        //           background:
        //             activeVault === "class-marks" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaGraduationCap /> <span> Class Paper Marks</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("payments")}
        //         style={{
        //           background:
        //             activeVault === "payments" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaMoneyCheckDollar /> <span> Payments Vault</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("absent-mark")}
        //         style={{
        //           background:
        //             activeVault === "absent-mark" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaUserXmark /> <span>Today's Absent Vault</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("notices")}
        //         style={{
        //           background:
        //             activeVault === "notices" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaBullhorn /> <span> Class Notice Vault</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("class-schedule")}
        //         style={{
        //           background:
        //             activeVault === "class-schedule"
        //               ? "#ff4b2b"
        //               : "transparent",
        //         }}>
        //         <FaCalendarCheck /> <span> Class schedule Vault</span>
        //       </button>
        //       <button
        //         onClick={() => setActiveVault("paper-upload")}
        //         style={{
        //           background:
        //             activeVault === "paper-upload" ? "#ff4b2b" : "transparent",
        //         }}>
        //         <FaBullhorn /> <span> Paper Upload Vault</span>
        //       </button>
        //     </nav>

        //     <button className="signout-btn" onClick={handleLogout}>
        //       <FaRightFromBracket /> Sign Out Panel
        //     </button>
        //   </aside>

        //   {/* RIGHT MAIN CONTENT SCREEN */}
        //   <main>
        //     <header>
        //       <div className="top-content">
        //         <button
        //           onClick={() => setSelectedGrade("11")}
        //           style={{
        //             background:
        //               selectedGrade === "11" ? "white" : "transparent",
        //             color: selectedGrade === "11" ? "#1a0a54" : "#777",
        //           }}>
        //           Grade 11
        //         </button>
        //         <button
        //           onClick={() => setSelectedGrade("10")}
        //           style={{
        //             background:
        //               selectedGrade === "10" ? "white" : "transparent",
        //             color: selectedGrade === "10" ? "#1a0a54" : "#777",
        //           }}>
        //           Grade 10
        //         </button>
        //       </div>
        //       <div className="desc-content">
        //         <FaFolderOpen className="open-folder" /> Managing:{" "}
        //         <span>
        //           Grade {selectedGrade} ({subject})
        //         </span>
        //       </div>
        //     </header>

        //     {/* DYNAMIC CONTENT VIEWS */}
        //     <div className="dynamic-content">
        //       {activeVault === "add-student" && (
        //         <AddStudentVault
        //           selectedGrade={selectedGrade}
        //           subject={subject}
        //         />
        //       )}

        //       {activeVault === "class-marks" && (
        //         <ClassMarksVault
        //           selectedGrade={selectedGrade}
        //           subject={subject}
        //         />
        //       )}

        //       {activeVault === "payments" && (
        //         <PaymentsVault
        //           selectedGrade={selectedGrade}
        //           subject={subject}
        //         />
        //       )}

        //       {activeVault === "absent-mark" && (
        //         <AbsentMark selectedGrade={selectedGrade} subject={subject} />
        //       )}

        //       {activeVault === "notices" && (
        //         <NoticeBoard selectedGrade={selectedGrade} subject={subject} />
        //       )}

        //       {activeVault === "class-schedule" && (
        //         <ClassScheduleVault
        //         // selectedGrade={selectedGrade}
        //         // subject={subject}
        //         />
        //       )}

        //       {activeVault === "paper-upload" && (
        //         <PaperHubUploadVault
        //           selectedGrade={selectedGrade}
        //           subject={subject}
        //         />
        //       )}

        //       {/* 👑 වෝල්ට් එක Schedule හෝ Paper Hub නොවන්නේ නම් පමණක් Top Tabs පෙන්වයි */}
        //       {activeVault !== "class-schedule" &&
        //         activeVault !== "paper-upload" && (
        //           <div className="top-grade-tabs">
        //             {/* Grade 10 & 11 Tabs... */}
        //           </div>
        //         )}
        //     </div>
        //   </main>
        // </div>
        <div className="admin-dashboard-wrapper">
          {/* 🏢 1. LEFT SIDEBAR (වම් පැත්තේ මෙනු තීරුව) */}
          <aside className="admin-sidebar">
            <div className="sidebar-header">
              <h3>{subject?.toUpperCase()} Control</h3>
              <span>Official Faculty Management</span>
            </div>

            <nav>
              <button
                onClick={() => setActiveVault("add-student")}
                style={{
                  background:
                    activeVault === "add-student" ? "#ff4b2b" : "transparent",
                }}>
                <FaUserPlus /> <span> Add Student Vault</span>
              </button>

              <button
                onClick={() => setActiveVault("class-marks")}
                style={{
                  background:
                    activeVault === "class-marks" ? "#ff4b2b" : "transparent",
                }}>
                <FaGraduationCap /> <span> Class Paper Marks</span>
              </button>

              <button
                onClick={() => setActiveVault("payments")}
                style={{
                  background:
                    activeVault === "payments" ? "#ff4b2b" : "transparent",
                }}>
                <FaMoneyCheckDollar /> <span> Payments Vault</span>
              </button>

              <button
                onClick={() => setActiveVault("absent-mark")}
                style={{
                  background:
                    activeVault === "absent-mark" ? "#ff4b2b" : "transparent",
                }}>
                <FaUserXmark /> <span>Today's Absent Vault</span>
              </button>

              <button
                onClick={() => setActiveVault("notices")}
                style={{
                  background:
                    activeVault === "notices" ? "#ff4b2b" : "transparent",
                }}>
                <FaBullhorn /> <span> Class Notice Vault</span>
              </button>

              <button
                onClick={() => setActiveVault("class-shedule")}
                style={{
                  background:
                    activeVault === "class-shedule" ? "#ff4b2b" : "transparent",
                }}>
                <FaCalendarCheck /> <span> Class Schedule Vault</span>
              </button>

              <button
                onClick={() => setActiveVault("paper-upload")}
                style={{
                  background:
                    activeVault === "paper-upload" ? "#ff4b2b" : "transparent",
                }}>
                <FaFolderPlus /> <span> Paper Upload Vault</span>
              </button>
            </nav>

            <button className="signout-btn" onClick={handleLogout}>
              <FaRightFromBracket /> Sign Out Panel
            </button>
          </aside>
          {/* 💻 2. RIGHT MAIN CONTENT SCREEN (දකුණු පැත්තේ ප්‍රධාන තිරය) */}
          <main>
            {/* 👑 🆕 [THE EXCLUSIVE FIX]: වෝල්ට් එක Class Schedule හෝ Paper Upload නොවන්නේ නම් පමණක් මේ මුළු හෙඩර් එකම පෙන්වයි */}
            {activeVault !== "class-shedule" &&
              activeVault !== "paper-upload" && (
                <header>
                  <div className="top-content">
                    <button
                      onClick={() => setSelectedGrade("11")}
                      style={{
                        background:
                          selectedGrade === "11" ? "white" : "transparent",
                        color: selectedGrade === "11" ? "#1a0a54" : "#777",
                      }}>
                      Grade 11
                    </button>
                    <button
                      onClick={() => setSelectedGrade("10")}
                      style={{
                        background:
                          selectedGrade === "10" ? "white" : "transparent",
                        color: selectedGrade === "10" ? "#1a0a54" : "#777",
                      }}>
                      Grade 10
                    </button>
                  </div>
                  <div className="desc-content">
                    <FaFolderOpen className="open-folder" /> Managing:{" "}
                    <span>
                      Grade {selectedGrade} ({subject?.toUpperCase()})
                    </span>
                  </div>
                </header>
              )}

            {/* 📋 DYNAMIC CONTENT VIEWS (ඔබන බටන් එක අනුව පිටු මාරු වන කොටස) */}
            <div className="dynamic-content" style={{ marginTop: "20px" }}>
              {activeVault === "add-student" && (
                <AddStudentVault
                  selectedGrade={selectedGrade}
                  subject={subject}
                />
              )}

              {activeVault === "class-marks" && (
                <ClassMarksVault
                  selectedGrade={selectedGrade}
                  subject={subject}
                />
              )}

              {activeVault === "payments" && (
                <PaymentsVault
                  selectedGrade={selectedGrade}
                  subject={subject}
                />
              )}

              {activeVault === "absent-mark" && (
                <AbsentMark selectedGrade={selectedGrade} subject={subject} />
              )}

              {activeVault === "notices" && (
                <NoticeBoard selectedGrade={selectedGrade} subject={subject} />
              )}
              {activeVault === "class-shedule" && <ClassScheduleVault />}

              {activeVault === "paper-upload" && <PaperHubUploadVault />}
            </div>
          </main>{" "}
          {/* 👑 Fixed: අතහැරී තිබුණු main closing tag එක නිවැරදිව වැහුවා */}
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
