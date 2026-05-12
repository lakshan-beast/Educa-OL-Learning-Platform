// import { Link } from "react-router-dom";

// // import React from 'react';
// import { FaChalkboardUser } from "react-icons/fa6";
// // import mathsImg from "../assets/maths-class.jpg"; // එකම image එක නිසා එකක් import කළා

// const Classes = () => {
//   // පන්ති වල විස්තර ටික මෙන්න මේ වගේ Array එකක ලස්සනට තියාගන්න පුළුවන්
//   const classData = [
//     {
//       title: "O/L Mathematics",
//       subtitle: "Master Logic & Numbers",
//       description:
//         "We simplify complex theories into easy-to-solve steps. From basic arithmetic to advanced geometry, we ensure every student masters the logic.",
//       grade: "06 - 11",
//       medium: "Sinhala",
//       // image: mathsImg,
//     },
//     {
//       title: "O/L Science",
//       subtitle: "Interactive Concept Mastery",
//       description:
//         "Dive deep into the world of Science with visual explanations & practical applications. We cover Physics, Chemistry & Biology.",
//       grade: "06 - 11",
//       medium: "English / Sinhala",
//       // image: mathsImg,
//     },
//     {
//       title: "O/L English",
//       subtitle: "Confidence in Communication",
//       description:
//         "Beyond just grammar, we focus on essay writing, literature analysis, & spoken fluency. Prepare for your O/L English exam.",
//       grade: "06 - 11",
//       medium: "English / Sinhala",
//       // image: mathsImg,
//     },
//   ];

//   return (
//     <section className="classes parts" id="classes">
//       <h2>
//         our <span>classes</span>
//       </h2>

//       <div className="classes-container">
//         <div className="classes-content">
//           {/* Array එක map කරලා හැම පන්තියකටම card එකක් හදනවා */}
//           {classData.map((item, index) => (
//             <div className="classes-card" key={index} data-aos="fade-up">
//               <div className="classes-column">
//                 {/* <img src={item.image} loading="lazy" alt={item.title} /> */}
//               </div>
//               <div className="classes-info">
//                 <h3>{item.title}</h3>
//                 <h4>{item.subtitle}</h4>
//                 <p>{item.description}</p>
//                 <p>
//                   Grade : <span>{item.grade}</span>
//                 </p>
//                 <p>
//                   Medium : <span>{item.medium}</span>
//                 </p>
//                 <span className="position">
//                   <FaChalkboardUser /> Physicals only
//                 </span>
//                 <a href="#" className="class-btn">
//                   View Class Details
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="more-btn" data-aos="fade-up">
//           <Link
//             to="/classes-details"
//             className="fullclass-btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             View Full Timetable & Details
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Classes;

// import React from 'react';
import { Link } from "react-router-dom";
// import { FaChalkboardUser, FaCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Classes = () => {
  const classData = [
    {
      id: "maths",
      title: "O/L Mathematics",
      subtitle: "Master Logic & Numbers",
      description:
        "Simplify complex theories into easy steps. We ensure every student masters the logic.",
      grade: "06 - 11",
      medium: "Sinhala",
      // time: "Sat: 8.00 AM", // ටයිම් ටේබල් එක මෙතනට දැම්මා
      // image: "/assets/maths-class.webp",
    },
    {
      id: "science",
      title: "O/L Science",
      subtitle: "Interactive Concept Mastery",
      description:
        "Dive deep into Science with visual explanations covering Physics, Chemistry & Biology.",
      grade: "06 - 11",
      medium: "English / Sinhala",
      // time: "Sun: 1.30 PM",
      // image: "/assets/science-class.webp",
    },
    {
      id: "english",
      title: "O/L English",
      subtitle: "Confidence in Communication",
      description:
        "Focus on essay writing, literature analysis & fluency to ace your exam.",
      grade: "06 - 11",
      medium: "English / Sinhala",
      // time: "Tue: 3.30 PM",
      // image: "/assets/english-class.webp",
    },
  ];

  return (
    // <section className="classes-section parts" id="classes">
    <section className="parts" id="classes">
      <h2>
        our <span>classes</span>
      </h2>

      <div className="class-container">
        <div className="classes-grid">
          {classData.map((item, index) => (
            <div className="class-card " key={index} data-aos="fade-up">
              {/* <div className="classes-column">
                <img src={item.image} loading="lazy" alt={item.title} />
              </div> */}
              <div className="class-info">
                <div className="class-header">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>

                <p className="class-desc">{item.description}</p>

                <div className="quick-schedule">
                  {/* <span>
                    <FaCalendarDays /> {item.time.split(":")[0]}
                  </span> */}
                  {/* <span>
                    <FaClock /> {item.time.split(" ")[1]}{" "}
                    {item.time.split(" ")[2]}
                  </span> */}
                </div>

                <div className="class-meta">
                  <div className="meta-item">
                    <span className="label">Grade : </span>
                    <span className="value">{item.grade}</span>
                  </div>
                  <div className="meta-item">
                    <span className="label">Medium : </span>
                    <span className="value">{item.medium}</span>
                  </div>
                </div>

                {/* <p>
                  Grade : <span>{item.grade}</span>
                </p>
                <p>
                  Medium : <span>{item.medium}</span>
                </p>

                <span className="position">
                  <FaChalkboardUser /> Physicals only
                </span> */}

                <Link to={`/class-details/${item.id}`} className="class-btns">
                  View Class Details <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="more-btn" data-aos="fade-up">
          <Link to="/classes-details" className="fullclass-btn">
            View Full Timetable & Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Classes;
