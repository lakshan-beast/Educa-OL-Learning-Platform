// import { useState } from "react";
// import {
//   FaGraduationCap,
//   FaCirclePlus,
//   FaFileInvoice,
//   FaMagnifyingGlass,
// } from "react-icons/fa6";
// import { allApprovedStudents } from "../../data/approvedStudents"; // මධ්‍යම ළදරු ලැයිස්තුව ගත්තා

// const ClassMarksVault = ({ selectedGrade, subject }) => {
//   // 1. සාම්පල ලකුණු වාර්තා ලැයිස්තුව
//   const [marksRecords, setMarksRecords] = useState([
//     {
//       id: 1,
//       studentId: "EDU-MES-11-LAKSHAN-0102",
//       paperName: "Term Test 01",
//       score: 85,
//       date: "2026-05-18",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     studentId: "",
//     paperName: "",
//     score: "",
//   });
//   const [suggestions, setSuggestions] = useState([]); // Auto-suggest වෙන IDs තියාගන්න

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 🧠 [SMART SEARCH LOGIC]: ටයිප් කරද්දීම විෂය අකුරු, නම, PIN හෝ Phone එකෙන් Filter වෙන හැටි
//   const handleIdChange = (e) => {
//     const value = e.target.value.toUpperCase();
//     setFormData({ ...formData, studentId: value });

//     if (value.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     // මධ්‍යම ලැයිස්තුවෙන් (approvedStudents) මේ ශ්‍රේණියට ගැලපෙන ළමයි විතරක් මුලින්ම පෙරා ගනී
//     const gradeFiltered = allApprovedStudents.filter((student) => {
//       // ළමයාගේ ID එකෙන් Grade එක සහ Subject Code එක වෙන් කර ගැනීම
//       const parts = student.id.split("-"); // ex: ["EDU", "MES", "11", "LAKSHAN", "0102"]
//       const subCode = parts[1] || "";
//       const currentGrade = parts[2] || "";

//       return currentGrade === selectedGrade;
//     });

//     // 🎯 සැබෑ Filter පද්ධතිය: අකුර ගැහුවම M, ME, MS, MES ඔක්කොම බලනවා
//     const matched = gradeFiltered.filter((student) => {
//       const idParts = student.id.split("-");
//       const subCode = idParts[1] || ""; // MES, ME, M, SE, S වැනි කොටස
//       const namePart = idParts[3] || ""; // LAKSHAN වැනි කොටස
//       const pinPart = idParts[4] || ""; // 0102 වැනි කොටස

//       // ළමයා ලියාපදිංචි වෙද්දී දාපු phone number එක (තිබේ නම්)
//       const phonePart = student.parentMobile || "";

//       // 1. විෂය අකුර (M/E/S) හෝ මුළු ID එකම සර්ච් කිරීම
//       const matchId = student.id.includes(value);
//       // 2. නමෙන් සර්ච් කිරීම
//       const matchName = namePart.includes(value);
//       // 3. PIN එකෙන් සර්ච් කිරීම
//       const matchPin = pinPart.includes(value);
//       // 4. ෆෝන් නම්බර් එකෙන් සර්ච් කිරීම
//       const matchPhone = phonePart.includes(value);

//       return matchId || matchName || matchPin || matchPhone;
//     });

//     setSuggestions(matched.map((student) => student.id));
//   };

//   // Suggestion එකක් ක්ලික් කළාම ඒක Input එකට ඔටෝ පිරවෙන හැටි
//   const selectSuggestion = (id) => {
//     setFormData({ ...formData, studentId: id });
//     setSuggestions([]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (parseInt(formData.score) < 0 || parseInt(formData.score) > 100) {
//       alert("ලකුණු 0 ත් 100 ත් අතර විය යුතුය! ❌");
//       return;
//     }

//     const newRecord = {
//       id: Date.now(),
//       studentId: formData.studentId,
//       paperName: formData.paperName,
//       score: parseInt(formData.score),
//       date: new Date().toISOString().split("T")[0],
//     };

//     setMarksRecords([newRecord, ...marksRecords]);
//     setFormData({ studentId: "", paperName: "", score: "" });
//   };

//   return (
//     <div
//       className="vault-container"
//       style={{
//         background: "white",
//         padding: "30px",
//         borderRadius: "20px",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
//       }}>
//       <div style={{ marginBottom: "25px" }}>
//         <h3 style={{ color: "#1a0a54", margin: 0 }}>
//           <FaGraduationCap /> Class Paper Marks Vault ({subject.toUpperCase()})
//         </h3>
//         <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
//           විෂය අකුර (M, E, S), ශිෂ්‍ය නම, PIN හෝ දුරකථන අංකයෙන් ක්ෂණිකව ළමයාව
//           සොයාගන්න.
//         </p>
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1.3fr",
//           gap: "30px",
//         }}>
//         {/* 📝 FORM AREA WITH SMART SUGGESTIONS */}
//         <div
//           style={{
//             background: "#f8faff",
//             padding: "20px",
//             borderRadius: "16px",
//             border: "1px solid #eef2ff",
//             height: "fit-content",
//             position: "relative",
//           }}>
//           <h4
//             style={{
//               margin: "0 0 15px",
//               color: "#1a0a54",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}>
//             <FaCirclePlus /> Add New Paper Marks
//           </h4>
//           <form
//             onSubmit={handleSubmit}
//             style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//             {/* ID Input Search Box */}
//             <div className="input-group" style={{ position: "relative" }}>
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Search Student (ID/Name/PIN/Phone)
//               </label>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   position: "relative",
//                 }}>
//                 <input
//                   type="text"
//                   placeholder="Type Subject (ex: M) or Name..."
//                   required
//                   value={formData.studentId}
//                   onChange={handleIdChange}
//                   style={{
//                     width: "100%",
//                     padding: "11px 35px 11px 12px",
//                     borderRadius: "8px",
//                     border: "1px solid #ddd",
//                   }}
//                 />
//                 <FaMagnifyingGlass
//                   style={{ position: "absolute", right: "12px", color: "#aaa" }}
//                 />
//               </div>

//               {/* 👑 DYNAMIC DROP-DOWN LIST: ස්මාර්ට් යෝජනා ලැයිස්තුව මෙතන පෙනේ */}
//               {suggestions.length > 0 && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "100%",
//                     left: 0,
//                     width: "100%",
//                     background: "white",
//                     border: "1px solid #ccc",
//                     borderRadius: "8px",
//                     zIndex: 10,
//                     maxHeight: "180px",
//                     overflowY: "auto",
//                     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                     marginTop: "5px",
//                   }}>
//                   {suggestions.map((id, index) => (
//                     <div
//                       key={index}
//                       onClick={() => selectSuggestion(id)}
//                       style={{
//                         padding: "10px 12px",
//                         cursor: "pointer",
//                         borderBottom: "1px solid #f0f0f0",
//                         fontSize: "0.88rem",
//                         fontWeight: "bold",
//                         color: "#1a0a54",
//                         transition: "0.2s",
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.target.style.background = "#f4f7ff")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.target.style.background = "white")
//                       }>
//                       {id}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Paper Name / Code
//               </label>
//               <input
//                 type="text"
//                 name="paperName"
//                 placeholder="ex: Paper 01 or Unit Test"
//                 required
//                 value={formData.paperName}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                 }}
//               />
//             </div>

//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Obtained Marks
//               </label>
//               <input
//                 type="number"
//                 name="score"
//                 placeholder="ex: 85"
//                 required
//                 value={formData.score}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
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
//               Save Paper Marks
//             </button>
//           </form>
//         </div>

//         {/* 📊 RECENT LOG TABLE */}
//         <div style={{ overflowX: "auto" }}>
//           <h4 style={{ margin: "0 0 15px", color: "#1a0a54" }}>
//             <FaFileInvoice /> Recent Marks Entry Log (Grade {selectedGrade})
//           </h4>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               fontSize: "0.9rem",
//               textAlign: "left",
//             }}>
//             <thead>
//               <tr style={{ background: "#1a0a54", color: "white" }}>
//                 <th style={{ padding: "12px" }}>Student ID</th>
//                 <th style={{ padding: "12px" }}>Paper Info</th>
//                 <th style={{ padding: "12px" }}>Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {marksRecords.map((row) => (
//                 <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={{ padding: "12px", fontWeight: "bold" }}>
//                     {row.studentId}
//                   </td>
//                   <td style={{ padding: "12px" }}>{row.paperName}</td>
//                   <td
//                     style={{
//                       padding: "12px",
//                       fontWeight: "bold",
//                       color:
//                         row.score >= 75
//                           ? "#2ecc71"
//                           : row.score >= 40
//                             ? "#e67e22"
//                             : "#e74c3c",
//                     }}>
//                     {row.score}%
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassMarksVault;

import { useState } from "react";
import {
  FaGraduationCap,
  FaCirclePlus,
  FaFileInvoice,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { allApprovedStudents } from "../../data/approvedStudents"; // මධ්‍යම ළදරු ලැයිස්තුව ගත්තා

const ClassMarksVault = ({ selectedGrade, subject }) => {
  // 1. සාම්පල ලකුණු වාර්තා ලැයිස්තුව
  const [marksRecords, setMarksRecords] = useState([
    {
      id: 1,
      studentId: "EDU-MES-11-LAKSHAN-0102",
      paperName: "Term Test 01",
      score: 85,
      date: "2026-05-18",
    },
  ]);

  const [formData, setFormData] = useState({
    studentId: "",
    paperName: "",
    score: "",
  });
  const [suggestions, setSuggestions] = useState([]); // Auto-suggest වෙන IDs තියාගන්න

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🧠 [SMART SEARCH LOGIC]: ටයිප් කරද්දීම විෂය අකුරු, නම, PIN හෝ Phone එකෙන් Filter වෙන හැටි
  const handleIdChange = (e) => {
    const value = e.target.value.toUpperCase();
    setFormData({ ...formData, studentId: value });

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // 👑 [FIXED SUBJECT CODE]: ඇඩ්මින් පැනල් එක අනුව සැබෑ විෂය අකුර (M / S / E) වෙන් කරගැනීම
    const currentSubLetter =
      subject === "maths"
        ? "M"
        : subject === "science"
          ? "S"
          : subject === "english"
            ? "E"
            : "";

    // මධ්‍යම ලැයිස්තුවෙන් (allApprovedStudents) මේ ශ්‍රේණියට සහ විෂයට ගැලපෙන ළමයි විතරක් මුලින්ම පෙරා ගනී
    const gradeFiltered = allApprovedStudents.filter((student) => {
      const parts = student.id.split("-"); // ex: ["EDU", "MES", "11", "LAKSHAN", "0102"]
      const subCode = parts[1] || ""; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා
      const currentGrade = parts[2] || ""; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා

      if (!student || !student.id) {
        return false;
      }

      // ශ්‍රේණිය වගේම, ළමයා මේ පන්තියේ විෂයට ලියාපදිංචි වෙලා ඉන්නවද කියලත් බලනවා
      return (
        currentGrade === selectedGrade && subCode.includes(currentSubLetter)
      );
    });

    // 🎯 සැබෑ Filter පද්ධතිය: අකුර ගැහුවම M, ME, MS, MES ඔක්කොම බලනවා
    const matched = gradeFiltered.filter((student) => {
      const idParts = student.id.split("-");
      const namePart = idParts[3] || ""; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා
      const pinPart = idParts[4] || ""; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා

      if (!student || !student.id) {
        return false;
      }

      // ළමයා ලියාපදිංචි වෙද්දී දාපු phone number එක (තිබේ නම්)
      const phonePart = student.parentMobile || ""; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා

      // 1. විෂය අකුර (M/E/S) හෝ මුළු ID එකම සර්ච් කිරීම
      const matchId = student.id.includes(value);
      // 2. නමෙන් සර්ච් කිරීම
      const matchName = namePart.includes(value);
      // 3. PIN එකෙන් සර්ච් කිරීම
      const matchPin = pinPart.includes(value);
      // 4. ෆෝන් නම්බර් එකෙන් සර්ච් කිරීම
      const matchPhone = phonePart.includes(value);

      return matchId || matchName || matchPin || matchPhone; // 👑 Fixed:  ලකුණ දමා නිවැරදි කළා
    });

    setSuggestions(matched.map((student) => student.id));
  };

  // Suggestion එකක් ක්ලික් කළාම ඒක Input එකට ඔටෝ පිරවෙන හැටි
  const selectSuggestion = (id) => {
    setFormData({ ...formData, studentId: id });
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👑 Fixed: || ලකුණ දමා නිවැරදි කළා
    if (parseInt(formData.score) < 0 || parseInt(formData.score) > 100) {
      alert("ලකුණු 0 ත් 100 ත් අතර විය යුතුය! ❌");
      return;
    }

    const newRecord = {
      id: Date.now(),
      studentId: formData.studentId,
      paperName: formData.paperName,
      score: parseInt(formData.score),
      date: new Date().toISOString().split("T")[0], // 👑 Fixed: [0] කෑල්ල එකතු කළා
    };

    setMarksRecords([newRecord, ...marksRecords]);
    setFormData({ studentId: "", paperName: "", score: "" });
  };

  return (
    <div
      className="vault-container"
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      }}>
      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#1a0a54", margin: 0 }}>
          <FaGraduationCap /> Class Paper Marks Vault ({subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          විෂය අකුර (M, E, S), ශිෂ්‍ය නම, PIN හෝ දුරකථන අංකයෙන් ක්ෂණිකව ළමයාව
          සොයාගන්න.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}>
        {/* 📝 FORM AREA WITH SMART SUGGESTIONS */}
        <div
          style={{
            background: "#f8faff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #eef2ff",
            height: "fit-content",
            position: "relative",
          }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaCirclePlus /> Add New Paper Marks
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* ID Input Search Box */}
            <div className="input-group" style={{ position: "relative" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Search Student (ID/Name/PIN/Phone)
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}>
                <input
                  type="text"
                  placeholder="Type Subject (ex: M) or Name..."
                  required
                  value={formData.studentId}
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

              {/* 👑 DYNAMIC DROP-DOWN LIST: ස්මාර්ට් යෝජනා ලැයිස්තුව මෙතන පෙනේ */}
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
                    maxHeight: "180px",
                    overflowY: "auto",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    marginTop: "5px",
                  }}>
                  {suggestions.map((id, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(id)}
                      style={{
                        padding: "10px 12px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        fontSize: "0.88rem",
                        fontWeight: "bold",
                        color: "#1a0a54",
                        transition: "0.2s",
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

            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Paper Name / Code
              </label>
              <input
                type="text"
                name="paperName"
                placeholder="ex: Paper 01 or Unit Test"
                required
                value={formData.paperName}
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
                Obtained Marks
              </label>
              <input
                type="number"
                name="score"
                placeholder="ex: 85"
                required
                value={formData.score}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
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
              Save Paper Marks
            </button>
          </form>
        </div>

        {/* 📊 RECENT LOG TABLE */}
        <div style={{ overflowX: "auto" }}>
          <h4 style={{ margin: "0 0 15px", color: "#1a0a54" }}>
            <FaFileInvoice /> Recent Marks Entry Log (Grade {selectedGrade})
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
              textAlign: "left",
            }}>
            <thead>
              <tr style={{ background: "#1a0a54", color: "white" }}>
                <th style={{ padding: "12px" }}>Student ID</th>
                <th style={{ padding: "12px" }}>Paper Info</th>
                <th style={{ padding: "12px" }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {marksRecords.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {row.studentId}
                  </td>
                  <td style={{ padding: "12px" }}>{row.paperName}</td>
                  <td
                    style={{
                      padding: "12px",
                      fontWeight: "bold",
                      color:
                        row.score >= 75
                          ? "#2ecc71"
                          : row.score >= 40
                            ? "#e67e22"
                            : "#e74c3c",
                    }}>
                    {row.score}%
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

export default ClassMarksVault;
