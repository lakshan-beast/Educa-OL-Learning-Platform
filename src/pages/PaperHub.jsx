// import { FaFilePdf, FaClock } from "react-icons/fa6";
// import { FaCloudDownloadAlt } from "react-icons/fa";

// const PaperHub = () => {
//   // මේකේ පේපර්ස් වල දත්ත (Data) තියෙනවා
//   const weeklyPapers = [
//     {
//       week: "Week 04 - April",
//       title: "Mathematics Target Paper 01",
//       description:
//         "වර්ගජ සමීකරණ සහ ජ්‍යාමිතිය ආවරණය වන පරිදි සැකසූ ප්‍රශ්න පත්‍රය.",
//       date: "2026-04-28",
//       link: "#", // පසුව PDF ලින්ක් එක දාන්න පුළුවන්
//     },
//     {
//       week: "Week 03 - April",
//       title: "Science Special Unit Test",
//       description:
//         "ජීව විද්‍යාව සහ රසායන විද්‍යාව ඒකක සඳහා විශේෂ ප්‍රශ්න පත්‍රය.",
//       date: "2026-04-21",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="paper-hub-page">
//       {/* <Header /> */}
//       <main className="system-container" style={{ marginTop: "120px" }}>
//         <h2 style={{ textAlign: "center" }}>
//           Weekly <span>Target Papers</span>
//         </h2>
//         <p style={{ textAlign: "center" }}>
//           සෑම සතියකම අලුත් පේපර්ස් මෙතනින් ලබාගන්න.
//         </p>

//         <div
//           className="papers-grid"
//           style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
//           {weeklyPapers.map((paper, index) => (
//             <div key={index} className="card-container paper-card">
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <span className="badge">
//                   <FaClock /> {paper.week}
//                 </span>
//                 <span style={{ fontSize: "12px" }}>{paper.date}</span>
//               </div>
//               <h3 style={{ marginTop: "15px" }}>
//                 <FaFilePdf style={{ color: "red" }} /> {paper.title}
//               </h3>
//               <p>{paper.description}</p>
//               <a
//                 href={paper.link}
//                 className="start-btn"
//                 style={{ width: "fit-content", marginTop: "15px" }}>
//                 Download PDF <FaCloudDownloadAlt />
//               </a>
//             </div>
//           ))}
//         </div>
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default PaperHub;

// import { useState } from "react";
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';
// import {
//   FaFilePdf,
//   FaBookOpen,
//   FaFlask,
//   FaSquareRootVariable,
//   FaDownload,
// } from "react-icons/fa6";

// const PaperHub = () => {
//   // Category එක තෝරන්න state එකක් පාවිච්චි කරමු
//   const [category, setCategory] = useState("Papers");

//   const resources = [
//     {
//       type: "Papers",
//       title: "Maths Week 04 Target Paper",
//       icon: <FaFilePdf color="red" />,
//     },
//     {
//       type: "Short Notes",
//       title: "Science - ජීවයේ ඒකකය Short Note",
//       icon: <FaBookOpen color="green" />,
//     },
//     {
//       type: "Tutes",
//       title: "English - Active/Passive Voice Tute",
//       icon: <FaFlask color="blue" />,
//     },
//     {
//       type: "Formulas",
//       title: "Mathematics - Geometry Formulas",
//       icon: <FaSquareRootVariable color="purple" />,
//     },
//   ];

//   return (
//     <div className="paper-hub-page">
//       {/* <Header /> */}
//       <main className="system-container" style={{ marginTop: "120px" }}>
//         <h2 style={{ textAlign: "center" }}>
//           Resource <span>Library</span>
//         </h2>

//         {/* Categories තෝරන තීරුව */}
//         <div
//           className="category-filter"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px",
//             margin: "30px 0",
//             flexWrap: "wrap",
//           }}>
//           {["Papers", "Short Notes", "Tutes", "Formulas"].map((cat) => (
//             <button
//               key={cat}
//               className={category === cat ? "start-btn" : "browse-btn"}
//               onClick={() => setCategory(cat)}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* තෝරාගත් category එකට අදාළ දේවල් පෙන්වීම */}
//         <div
//           className="resources-grid"
//           style={{ display: "grid", gap: "15px" }}>
//           {resources
//             .filter((item) => item.type === category)
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className="card-container"
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "15px",
//                   }}>
//                   <span style={{ fontSize: "24px" }}>{item.icon}</span>
//                   <h4>{item.title}</h4>
//                 </div>
//                 <button className="browse-btn">
//                   <FaDownload /> Download
//                 </button>
//               </div>
//             ))}
//         </div>
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default PaperHub;

import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
// import { paperHub11Data } from "../data/papers/paperHub11Data";

import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import {
  // FaBookBookmark,
  FaFilePdf,
  FaArrowDown,
  FaArrowLeft,
  FaFileLines,
  FaGraduationCap,
  // FaLock,
} from "react-icons/fa6";

const PaperHub = ({ subject }) => {
  // const { id } = useParams(); // URL එකෙන් විෂය ID එක ගනී (maths, science, english)
  // const navigate = useNavigate();
  // // 🧠 Tabs පාලනය කරන State (Default එක Tutes)
  // const [activeTab, setActiveTab] = useState("tutes");
  // // LocalStorage එකෙන් ළමයාගේ විස්තර පරීක්ෂා කිරීම
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  // const userSubjects = localStorage.getItem("user_subjects") || ""; // ex: "MES" or "M"
  // const [materials, setmaterials] = useState;
  // const [isLoading, setIsLoading] = useState;
  // useEffect(() => {
  //   // 1. ලොග් වෙලා නැත්නම් කෙලින්ම හෝම් පේජ් එකට හරවනවා
  //   if (!isLoggedIn) {
  //     navigate("/");
  //     return;
  //   }
  //   // 2. 🧠 URL URL Guard Protection: ළමයා හොරෙන් URL එක ගහලා අවසර නැති විෂයකට යන්න හැදුවොත් වළක්වයි
  //   const subLetter =
  //     id === "maths"
  //       ? "M"
  //       : id === "science"
  //         ? "S"
  //         : id === "english"
  //           ? "E"
  //           : "";
  //   if (!userSubjects.includes(subLetter)) {
  //     alert("You do not have access to this subject portal! 🔒");
  //     navigate("/dashboard");
  //   }
  // }, [id, isLoggedIn, userSubjects, navigate]);
  // // අදාළ විෂයට අදාළ පේපර් දත්ත වෙන් කර ගැනීම
  // const currentSubjectData = paperHub11Data[id];
  // // වැරදි විෂය ID එකක් ආවොත් බ්ලොක් වීම වැළැක්වීම
  // if (!currentSubjectData) {
  //   return (
  //     <div className="page-container">
  //       <h3>Subject Hub Not Found! ❌</h3>
  //       <Link to="/dashboard" className="start-btn">
  //         Back to Dashboard
  //       </Link>
  //     </div>
  //   );
  // }
  // return (
  //   <div className="paper-hub-wrapper page-container">
  //     <div className="system-container">
  //       {/* Back to Dashboard ලින්ක් එක */}
  //       <Link className="back-btn" to="/dashboard">
  //         <FaArrowLeft /> Back to Dashboard
  //       </Link>
  //       {/* 👑 Subject Header Title */}
  //       <div className="subject-vault-header">
  //         <h2>{currentSubjectData.title}</h2>
  //         <p>
  //           Grade 11 • All structural tutes, past papers and materials are
  //           verified.
  //         </p>
  //       </div>
  //       {/* 🎛️ TABS MENU (Tutes, Past Papers, Formulas මාරු වෙන බටන්ස්) */}
  //       <div className="paper-tabs-container">
  //         <button
  //           className={`tab-btn ${activeTab === "tutes" ? "active-paper-tab" : ""}`}
  //           onClick={() => setActiveTab("tutes")}
  //           style={{
  //             padding: "10px 20px",
  //             borderRadius: "10px",
  //             fontWeight: "bold",
  //             cursor: "pointer",
  //             background: activeTab === "tutes" ? "#26136d" : "white",
  //             color: activeTab === "tutes" ? "white" : "#555",
  //             border: "1px solid #ddd",
  //           }}>
  //           <FaFileLines /> Class Tutes
  //         </button>
  //         <button
  //           className={`tab-btn ${activeTab === "pastPapers" ? "active-paper-tab" : ""}`}
  //           onClick={() => setActiveTab("pastPapers")}
  //           style={{
  //             padding: "10px 20px",
  //             borderRadius: "10px",
  //             fontWeight: "bold",
  //             cursor: "pointer",
  //             background: activeTab === "pastPapers" ? "#26136d" : "white",
  //             color: activeTab === "pastPapers" ? "white" : "#555",
  //             border: "1px solid #ddd",
  //           }}>
  //           <FaFilePdf /> Past Papers
  //         </button>
  //         {/* සූත්‍ර බටන් එක පෙන්වන්නේ Maths සහ Science වලට විතරයි (English වලදී පේන්නේ නැත) */}
  //         {currentSubjectData.formulas.length > 0 && (
  //           <button
  //             className={`tab-btn ${activeTab === "formulas" ? "active-paper-tab" : ""}`}
  //             onClick={() => setActiveTab("formulas")}
  //             style={{
  //               padding: "10px 20px",
  //               borderRadius: "10px",
  //               fontWeight: "bold",
  //               cursor: "pointer",
  //               background: activeTab === "formulas" ? "#26136d" : "white",
  //               color: activeTab === "formulas" ? "white" : "#555",
  //               border: "1px solid #ddd",
  //             }}>
  //             <FaGraduationCap /> Formula Guides
  //           </button>
  //         )}
  //       </div>
  //       {/* 📄 CONTENT ZONE (තෝරාගත් Tab එකට අදාළ PDF ලැයිස්තුව ලස්සනට පෙන්වීම) */}
  //       <div className="papers-list-grid">
  //         {currentSubjectData[activeTab] &&
  //         currentSubjectData[activeTab].length > 0 ? (
  //           currentSubjectData[activeTab].map((paper) => (
  //             <div
  //               key={paper.id}
  //               className="card-container paper-download-row"
  //               style={{
  //                 background: "white",
  //                 padding: "18px 25px",
  //                 borderRadius: "15px",
  //                 display: "flex",
  //                 justifyContent: "space-between",
  //                 alignItems: "center",
  //                 boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
  //                 border: "1px solid #edf2f9",
  //               }}>
  //               <div
  //                 style={{
  //                   display: "flex",
  //                   alignItems: "center",
  //                   gap: "15px",
  //                 }}>
  //                 <div
  //                   style={{
  //                     width: "40px",
  //                     height: "40px",
  //                     background: "#fff0f0",
  //                     color: "#e74c3c",
  //                     borderRadius: "10px",
  //                     display: "flex",
  //                     justifyContent: "center",
  //                     alignItems: "center",
  //                     fontSize: "1.2rem",
  //                   }}>
  //                   <FaFilePdf />
  //                 </div>
  //                 <h4
  //                   style={{
  //                     color: "#26136d",
  //                     margin: 0,
  //                     fontSize: "0.98rem",
  //                     fontWeight: "700",
  //                   }}>
  //                   {paper.title}
  //                 </h4>
  //               </div>
  //               {/* Google Drive Link Download Button */}
  //               <a
  //                 href={paper.link}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="browse-btn">
  //                 Download PDF
  //                 <FaArrowDown className="download-icon" />
  //               </a>
  //             </div>
  //           ))
  //         ) : (
  //           <p>No documents uploaded in this category yet.</p>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  // 👑 🆕 [LIVE CLOUD MATERIALS STATE]: පරණ Hardcoded ලිස්ට් එක වෙනුවට හිස් Array එකක් ගත්තා
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 🕒 ලෝඩින් ස්ටේට් එක

  // 🔐 1. බ්‍රවුසර් එකේ මතකයෙන් (localStorage) දැනට ලොග් වෙලා ඉන්න ළමයාගේ විස්තර කියවීම
  const loggedInUser = JSON.parse(localStorage.getItem("studentUser")) || {};
  const studentGrade = loggedInUser.grade || "11"; // ළමයාගේ ශ්‍රේණිය (10/11) [INDEX 51]

  const [activeTab, setActiveTab] = useState("tutes");

  const { id } = useParams();
  const currentSubject = (id || "maths").toLowerCase();

  // ============================================================
  // 📥 👑 🆕 [THE EXCLUSIVE STUDENT FETCH ENGINE]: සජීවීව Cloud එකෙන් දත්ත ඇද ගන්නා පාලම
  useEffect(() => {
    const fetchStudentMaterials = async () => {
      setTimeout(() => setIsLoading(true), 0);
      try {
        // ☁️ 'academic_materials' Collection එකෙන් ළමයාගේ ශ්‍රේණියට සහ මේ පන්තියේ විෂයට (subject Props එකට) අදාළ ඒවා පමණක් සොයයි [INDEX 51]
        const q = query(
          collection(db, "academic_materials"),
          where("grade", "==", studentGrade), // 💡 11 වසරේ ඒවා විතරක් පෙරයි
          // where("subject", "==", subject || "english"), // 💡 මේ පන්තියේ විෂය විතරක් පෙරයි (Maths/Science/English)
          where("subject", "==", currentSubject),
        );

        const querySnapshot = await getDocs(q);
        const materialsList = [];

        querySnapshot.forEach((doc) => {
          materialsList.push({ id: doc.id, ...doc.data() });
        });

        setMaterials(materialsList); // 🚀 සැබෑ Cloud දත්ත ටික මතකයට දැම්මා!
      } catch (err) {
        console.error("Student Fetch Cloud Error:", err);
      }
      setTimeout(() => setIsLoading(false), 0);
    };

    fetchStudentMaterials();
  }, [studentGrade, currentSubject]); // 💡 විෂය හෝ ශ්‍රේණිය මාරු වුවහොත් පමණක් නැවත ක්‍රියාත්මක වේ
  // ============================================================

  // 👑 🆕 [THE CLOUD CATEGORY MAPPER]: ළමයා ඔබන Tab එක, Cloud එකේ තියෙන නමට ඔටෝම හරවන පාලම
  const getCloudCategoryName = () => {
    if (activeTab === "tutes") return "class-tutes";
    if (activeTab === "pastPapers") return "past-papers";
    return "formulas";
  };

  const cloudCategory = getCloudCategoryName();

  // 👑 🆕 [THE ACTIVE FILTER]: දැනට තෝරාගෙන ඇති Tab එකට අදාළව Cloud එකෙන් ආපු දත්ත පමණක් වෙන් කර ගනී
  const filteredMaterials = materials.filter(
    (item) => item.category === cloudCategory,
  );

  return (
    <div className="paper-hub-wrapper page-container">
      <div className="system-container">
        {/* Back to Dashboard ලින්ක් එක */}
        <Link className="back-btn" to="/dashboard">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        {/* 👑 Subject Header Title */}
        <div className="subject-vault-header">
          <h2>
            {subject
              ? subject.toUpperCase() + " PAPER HUB"
              : "ACADEMIC PAPER HUB"}
          </h2>
          <p style={{ margin: "5px 0 0", color: "#666", fontSize: "0.88rem" }}>
            Grade {studentGrade} • All structural tutes, past papers and
            materials are dynamically fetched from Live Cloud [INDEX 51].
          </p>
        </div>

        {/* 🎛 TABS MENU (Tutes, Past Papers, Formulas මාරු වෙන බටන්ස්) */}
        <div
          className="paper-tabs-container"
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "25px",
            marginTop: "20px",
          }}>
          <button
            className={`tab-btn ${activeTab === "tutes" ? "active-paper-tab" : ""}`}
            onClick={() => setActiveTab("tutes")}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              background: activeTab === "tutes" ? "#26136d" : "white",
              color: activeTab === "tutes" ? "white" : "#555",
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaFileLines /> Class Tutes
          </button>

          <button
            className={`tab-btn ${activeTab === "pastPapers" ? "active-paper-tab" : ""}`}
            onClick={() => setActiveTab("pastPapers")}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              background: activeTab === "pastPapers" ? "#26136d" : "white",
              color: activeTab === "pastPapers" ? "white" : "#555",
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaFilePdf /> Past Papers
          </button>

          {/* 👑 Formula Guides බටන් එක (Maths සහ Science වලදී සැමවිටම පෙන්වයි) */}
          {subject !== "english" && (
            <button
              className={`tab-btn ${activeTab === "formulas" ? "active-paper-tab" : ""}`}
              onClick={() => setActiveTab("formulas")}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                background: activeTab === "formulas" ? "#26136d" : "white",
                color: activeTab === "formulas" ? "white" : "#555",
                border: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
              <FaGraduationCap /> Formula Guides
            </button>
          )}
        </div>

        {/* 📄 CONTENT ZONE (සජීවීව Cloud එකෙන් පෙරී එන ලැයිස්තුව) */}
        <div
          className="papers-list-grid"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* 🕒 A. දත්ත Cloud එකෙන් ඇදලා එනකන් පෙන්වන ලස්සන Loading තීරුව */}
          {isLoading ? (
            <div
              style={{
                textAlign: "center",
                color: "#26136d",
                fontWeight: "bold",
                padding: "40px 0",
              }}>
              🔄 Fetching Verified Materials from Cloud...
            </div>
          ) : /* 📄 B. දත්ත ලෝඩ් වී ඉවර වුණු පසු පෙන්වන සැබෑ ලිස්ට් එක */
          filteredMaterials.length > 0 ? (
            filteredMaterials.map((paper) => (
              <div
                key={paper.id}
                className="card-container paper-download-row"
                style={{
                  background: "white",
                  padding: "18px 25px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  border: "1px solid #edf2f9",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#fff0f0",
                      color: "#e74c3c",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.2rem",
                    }}>
                    <FaFilePdf />
                  </div>
                  <h4
                    style={{
                      color: "#26136d",
                      margin: 0,
                      fontSize: "0.98rem",
                      fontWeight: "700",
                    }}>
                    {paper.title} {/* 👑 Cloud එකෙන් එන නිල නම */}
                  </h4>
                </div>

                {/* 🚀 🔐 Google Drive Link Download Button */}
                <a
                  href={paper.driveUrl} // 👑 FIXED: ඇඩ්මින් එකෙන් දාපු සැබෑ Drive URL එක ලින්ක් කළා
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browse-btn"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#26136d",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "0.88rem",
                  }}>
                  Download PDF
                  <FaArrowDown className="download-icon" />
                </a>
              </div>
            ))
          ) : (
            /* 📭 C. කිසිම දත්තයක් නැති විට පෙන්වන පණිවිඩය */
            <div
              style={{
                textAlign: "center",
                color: "#aaa",
                padding: "40px 0",
                background: "#f8faff",
                borderRadius: "15px",
                border: "1px solid #eef2ff",
              }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.9rem" }}>
                No documents uploaded in this category yet.
              </p>
              <small>
                The admin panel has not added any tutorials to this section yet.
                [INDEX 51].
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperHub;
