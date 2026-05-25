// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   FaFolderPlus,
//   FaFilePdf,
//   FaArrowDown,
//   FaTrashCan,
//   FaFileLines,
//   FaGraduationCap,
//   FaCircleExclamation,
// } from "react-icons/fa6";

// const PaperHubUploadVault = ({ selectedGrade }) => {
//   const { subject } = useParams(); // URL එකෙන් maths/science/english අඳුරගනී

//   // 1. දැනට පද්ධතියේ පවතින PDF ද්‍රව්‍ය ලැයිස්තුව (State)
//   const [uploadedMaterials, setUploadedMaterials] = useState([
//     {
//       id: 1,
//       grade: "11",
//       subject: "maths",
//       category: "tutes", // tutes, pastPapers, formulas
//       title: "ජ්‍යාමිතිය ප්‍රමේයයන් සහ සිද්ධාන්ත නිබන්ධනය",
//       link: "https://google.com",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     category: "tutes",
//     title: "",
//     link: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 💾 Upload Material Submission Handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.title.trim() === "" || formData.link.trim() === "") {
//       setError("කරුණාකර සියලුම විස්තර නිවැරදිව ඇතුළත් කරන්න! ⚠️");
//       return;
//     }

//     const newMaterial = {
//       id: Date.now(),
//       grade: selectedGrade,
//       subject: subject,
//       category: formData.category,
//       title: formData.title,
//       link: formData.link,
//     };

//     // 🚀 දත්ත Firebase Cloud එකට සහ ලෝකල් ස්ටේට් එකට එකතු වේ
//     setUploadedMaterials([newMaterial, ...uploadedMaterials]);
//     setFormData({ category: "tutes", title: "", link: "" });

//     setSuccess("අධ්‍යයන ද්‍රව්‍ය සාර්ථකව ශිෂ්‍ය පෝටලයට අප්ලෝඩ් විය! 🟢📄");
//     setError("");
//     setTimeout(() => setSuccess(""), 4000);
//   };

//   // 🗑️ Delete Material Handler
//   const handleDeleteMaterial = (id) => {
//     if (
//       window.confirm(
//         "මෙම නිබන්ධනය/ප්‍රශ්න පත්‍රය ශිෂ්‍ය පෝටලයෙන් සම්පූර්ණයෙන්ම ඉවත් කිරීමට අවශ්‍යද? 😮",
//       )
//     ) {
//       setUploadedMaterials(uploadedMaterials.filter((m) => m.id !== id));
//       setSuccess("ද්‍රව්‍ය සාර්ථකව පද්ධතියෙන් ඉවත් කරන ලදී! 🔴");
//       setTimeout(() => setSuccess(""), 3000);
//     }
//   };

//   // දැනට තෝරාගෙන ඇති ශ්‍රේණියට, විෂයට අදාළ ද්‍රව්‍ය පමණක් වෙන් කර ගැනීම
//   const currentGradeMaterials = uploadedMaterials.filter(
//     (m) => m.grade === selectedGrade && m.subject === subject,
//   );

//   return (
//     <div
//       className="vault-container"
//       style={{ background: "white", padding: "30px", borderRadius: "20px" }}>
//       {/* Vault Header */}
//       <div style={{ marginBottom: "25px" }}>
//         <h3
//           style={{
//             color: "#1a0a54",
//             margin: 0,
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}>
//           <FaFolderPlus /> Paper Hub Upload Vault ({subject?.toUpperCase()})
//         </h3>
//         <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
//           ශිෂ්‍ය Dashboard එකේ Paper Hub එකට අවශ්‍ය Tutes, Past Papers සහ
//           Formulas මෙතනින් අප්ලෝඩ් කරන්න.
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
//           gridTemplateColumns: "1fr 1.3fr",
//           gap: "30px",
//         }}>
//         {/* 📝 LEFT SIDE: UPLOAD NEW MATERIAL FORM */}
//         <div
//           style={{
//             background: "#f8faff",
//             padding: "20px",
//             borderRadius: "16px",
//             border: "1px solid #eef2ff",
//             height: "fit-content",
//           }}>
//           <h4
//             style={{
//               margin: "0 0 15px",
//               color: "#1a0a54",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}>
//             <FaFolderPlus /> Upload New Material
//           </h4>
//           <form
//             onSubmit={handleSubmit}
//             style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//             {/* Category Selector */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Material Category (ද්‍රව්‍ය වර්ගය)
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                   fontWeight: "bold",
//                 }}>
//                 <option value="tutes">📄 පන්ති නිබන්ධන (Class Tutes)</option>
//                 <option value="pastPapers">
//                   📕 පසුගිය ප්‍රශ්න පත්‍ර (Past Papers)
//                 </option>
//                 <option value="formulas">
//                   🎓 සූත්‍ර එකතුව (Formula Guides)
//                 </option>
//               </select>
//             </div>

//             {/* Material Title */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Material Title (ළමයාට පේන නම)
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="ex: Lesson 02 - Core Theory Tute"
//                 required
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ddd",
//                 }}
//               />
//             </div>

//             {/* Google Drive Link */}
//             <div className="input-group">
//               <label
//                 style={{
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   color: "#1a0a54",
//                   display: "block",
//                   marginBottom: "5px",
//                 }}>
//                 Google Drive URL Link
//               </label>
//               <input
//                 type="url"
//                 name="link"
//                 placeholder="https://google.com/file/d/..."
//                 required
//                 value={formData.link}
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
//               🚀 Upload Academic Material
//             </button>
//           </form>
//         </div>

//         {/* 📊 RIGHT SIDE: CURRENT UPLOADED LOG TABLE */}
//         <div style={{ overflowX: "auto" }}>
//           <h4 style={{ margin: "0 0 15px", color: "#1a0a54" }}>
//             📁 Active Materials Inventory (Grade {selectedGrade})
//           </h4>

//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               fontSize: "0.88rem",
//               textAlign: "left",
//             }}>
//             <thead>
//               <tr style={{ background: "#1a0a54", color: "white" }}>
//                 <th style={{ padding: "12px" }}>Material Info & Type</th>
//                 <th style={{ padding: "12px" }}>Download Link</th>
//                 <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentGradeMaterials.length > 0 ? (
//                 currentGradeMaterials.map((row) => (
//                   <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
//                     <td style={{ padding: "12px" }}>
//                       <span
//                         style={{
//                           fontWeight: "bold",
//                           display: "block",
//                           color: "#1a0a54",
//                         }}>
//                         {row.title}
//                       </span>
//                       <small
//                         style={{
//                           color: "#777",
//                           fontWeight: "bold",
//                           display: "inline-flex",
//                           alignItems: "center",
//                           gap: "4px",
//                           marginTop: "4px",
//                         }}>
//                         {row.category === "tutes" ? (
//                           <FaFileLines />
//                         ) : row.category === "pastPapers" ? (
//                           <FaFilePdf />
//                         ) : (
//                           <FaGraduationCap />
//                         )}
//                         {row.category?.toUpperCase()}
//                       </small>
//                     </td>
//                     <td style={{ padding: "12px" }}>
//                       <a
//                         href={row.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{
//                           color: "#4b6bfb",
//                           textDecoration: "none",
//                           fontWeight: "bold",
//                           display: "inline-flex",
//                           alignItems: "center",
//                           gap: "5px",
//                         }}>
//                         View PDF <FaArrowDown style={{ fontSize: "0.8rem" }} />
//                       </a>
//                     </td>
//                     {/* Delete Material Button Tool */}
//                     <td style={{ padding: "12px", textAlign: "center" }}>
//                       <button
//                         onClick={() => handleDeleteMaterial(row.id)}
//                         style={{
//                           background: "#fce4e4",
//                           color: "#c0392b",
//                           border: "none",
//                           padding: "8px",
//                           borderRadius: "8px",
//                           cursor: "pointer",
//                           display: "inline-flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           transition: "0.2s",
//                         }}
//                         onMouseEnter={(e) =>
//                           (e.target.style.background = "#f9cbd2")
//                         }
//                         onMouseLeave={(e) =>
//                           (e.target.style.background = "#fce4e4")
//                         }>
//                         <FaTrashCan />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="3"
//                     style={{
//                       textAlign: "center",
//                       padding: "30px",
//                       color: "#777",
//                       fontWeight: "bold",
//                     }}>
//                     <FaCircleExclamation /> No materials uploaded for Grade{" "}
//                     {selectedGrade} yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaperHubUploadVault;

import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFolderPlus,
  FaFilePdf,
  FaArrowDown,
  FaTrashCan,
  FaFileLines,
  FaGraduationCap,
  FaCircleExclamation,
} from "react-icons/fa6";

const PaperHubUploadVault = () => {
  const { subject } = useParams();

  // 👑 🆕 [LOCAL GRADE STATE]: 6 සිට 11 දක්වා ටියුට්ස් අප්ලෝඩ් පාලනයට වෙනම ස්ටේට් එකක් ගත්තා
  const [localGrade, setLocalGrade] = useState("11");

  const [uploadedMaterials, setUploadedMaterials] = useState([
    {
      id: 1,
      grade: "11",
      subject: "maths",
      category: "tutes",
      title: "ජ්‍යාමිතිය ප්‍රමේයයන් සහ සිද්ධාන්ත නිබන්ධනය",
      link: "https://google.com",
    },
  ]);

  const [formData, setFormData] = useState({
    category: "tutes",
    title: "",
    link: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === "" || formData.link.trim() === "") {
      setError("Please enter all details correctly! ⚠️");
      return;
    }

    const newMaterial = {
      id: Date.now(),
      grade: localGrade, // 6,7,8,9,10,11 ඕනෑම එකක් සේව් වේ
      subject: subject,
      category: formData.category,
      title: formData.title,
      link: formData.link,
    };

    setUploadedMaterials((prevMaterials) => [newMaterial, ...prevMaterials]);
    setFormData({ category: "tutes", title: "", link: "" });
    setSuccess(
      `Grade ${localGrade} The material for was successfully uploaded! 🟢📄`,
    );
    setTimeout(() => setSuccess(""), 4000);
  };

  const handleDeleteMaterial = (id) => {
    if (
      window.confirm(
        "Do you want to remove this tutorial from the student portal? 😮",
      )
    ) {
      setUploadedMaterials(uploadedMaterials.filter((m) => m.id !== id));
      setSuccess("The material was successfully removed from the system! 🔴");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  // 🧠 දැන් ඉන්වෙන්ට්‍රි එක ෆිල්ටර් වෙන්නේ localGrade එක අනුවයි
  const currentGradeMaterials = uploadedMaterials.filter(
    (m) => m.grade === localGrade && m.subject === subject,
  );

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
          <FaFolderPlus /> Paper Hub Upload Vault ({subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          Upload the required Tutes, Past Papers and Formulas for Paper Hub
          according to grades (6-11) here.
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
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #eef2ff",
            height: "fit-content",
          }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaFolderPlus /> Upload New Material
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* 👑 🆕 [6-11 GRADE SELECTOR]: ටියුට් අප්ලෝඩ් එකටත් 6-11 ඩ්‍රොප්ඩවුන් එක දැම්මා */}
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
                Material Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                <option value="tutes">📄 Class Tutes</option>
                <option value="pastPapers">📕 Past Papers</option>
                <option value="formulas">🎓 Formula Guides</option>
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
                Material Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="ex: Lesson Core Theory Tute"
                required
                value={formData.title}
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
                Google Drive URL Link
              </label>
              <input
                type="url"
                name="link"
                placeholder="https://google.com/file/d/..."
                required
                value={formData.link}
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
              🚀 Upload Academic Material
            </button>
          </form>
        </div>

        <div style={{ overflowX: "auto" }}>
          {/* 👑 Inventory Header එකත් localGrade එක අනුව වෙනස් වේ */}
          <h4 style={{ margin: "0 0 15px", color: "#1a0a54" }}>
            📁 Active Materials Inventory (Grade {localGrade})
          </h4>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.88rem",
              textAlign: "left",
            }}>
            <thead>
              <tr style={{ background: "#1a0a54", color: "white" }}>
                <th style={{ padding: "12px" }}>Material Info & Type</th>
                <th style={{ padding: "12px" }}>Download Link</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentGradeMaterials.length > 0 ? (
                currentGradeMaterials.map((row) => (
                  <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          color: "#1a0a54",
                        }}>
                        {row.title}
                      </span>
                      <small
                        style={{
                          color: "#777",
                          fontWeight: "bold",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          marginTop: "4px",
                        }}>
                        {row.category === "tutes" ? (
                          <FaFileLines />
                        ) : row.category === "pastPapers" ? (
                          <FaFilePdf />
                        ) : (
                          <FaGraduationCap />
                        )}{" "}
                        {row.category?.toUpperCase()}
                      </small>
                    </td>
                    <td style={{ padding: "12px" }}>
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#4b6bfb",
                          textDecoration: "none",
                          fontWeight: "bold",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}>
                        View PDF <FaArrowDown style={{ fontSize: "0.8rem" }} />
                      </a>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <button
                        onClick={() => handleDeleteMaterial(row.id)}
                        style={{
                          background: "#fce4e4",
                          color: "#c0392b",
                          border: "none",
                          padding: "8px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "#f9cbd2")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "#fce4e4")
                        }>
                        <FaTrashCan />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      color: "#777",
                      fontWeight: "bold",
                    }}>
                    <FaCircleExclamation /> No materials uploaded for Grade{" "}
                    {localGrade} yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaperHubUploadVault;
