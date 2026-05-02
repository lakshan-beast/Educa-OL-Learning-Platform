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

import { useState } from "react";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import {
  FaFilePdf,
  FaBookOpen,
  FaFlask,
  FaSquareRootVariable,
  FaDownload,
} from "react-icons/fa6";

const PaperHub = () => {
  // Category එක තෝරන්න state එකක් පාවිච්චි කරමු
  const [category, setCategory] = useState("Papers");

  const resources = [
    {
      type: "Papers",
      title: "Maths Week 04 Target Paper",
      icon: <FaFilePdf color="red" />,
    },
    {
      type: "Short Notes",
      title: "Science - ජීවයේ ඒකකය Short Note",
      icon: <FaBookOpen color="green" />,
    },
    {
      type: "Tutes",
      title: "English - Active/Passive Voice Tute",
      icon: <FaFlask color="blue" />,
    },
    {
      type: "Formulas",
      title: "Mathematics - Geometry Formulas",
      icon: <FaSquareRootVariable color="purple" />,
    },
  ];

  return (
    <div className="paper-hub-page">
      {/* <Header /> */}
      <main className="system-container" style={{ marginTop: "120px" }}>
        <h2 style={{ textAlign: "center" }}>
          Resource <span>Library</span>
        </h2>

        {/* Categories තෝරන තීරුව */}
        <div
          className="category-filter"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "30px 0",
            flexWrap: "wrap",
          }}>
          {["Papers", "Short Notes", "Tutes", "Formulas"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "start-btn" : "browse-btn"}
              onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* තෝරාගත් category එකට අදාළ දේවල් පෙන්වීම */}
        <div
          className="resources-grid"
          style={{ display: "grid", gap: "15px" }}>
          {resources
            .filter((item) => item.type === category)
            .map((item, index) => (
              <div
                key={index}
                className="card-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}>
                  <span style={{ fontSize: "24px" }}>{item.icon}</span>
                  <h4>{item.title}</h4>
                </div>
                <button className="browse-btn">
                  <FaDownload /> Download
                </button>
              </div>
            ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default PaperHub;
