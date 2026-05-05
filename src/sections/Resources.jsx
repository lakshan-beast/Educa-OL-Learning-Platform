// import { Link } from "react-router-dom";

// const Resources = () => {
//   return (
//     <section id="resources" className="resources-section">
//       <h2>
//         Explore Our Powerful <span>Learning Tools</span>
//       </h2>
//       <p>
//         Explore our collection of smart learning tools desgiged to make your O/L
//         preparation easy, fun, & effective.
//       </p>
//       <div className="resources-container">
//         {/* Results Card */}
//         <div className="resources-card" data-aos="fade-up" data-aos-delay="100">
//           <span className="card-badge card-badge-new">
//             <i className="fa-solid fa-bolt fa-shake"></i>new
//           </span>

//           <img
//             src="./assets/questions.webp"
//             loading="lazy"
//             alt="Daily Questions"
//           />
//           <h3>
//             <i className="fa-solid fa-calendar-check"></i> Challenge Yourself
//           </h3>
//           <p>
//             Master one complex problem every day to sharpen your analytical
//             skills.
//           </p>

//           <Link
//             to="/daily-questions"
//             className="btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             Try Today's Quesation
//           </Link>
//         </div>
//         <div className="resources-card" data-aos="fade-up" data-aos-delay="200">
//           <span className="card-badge card-badge-popular">
//             <i className="fa-solid fa-fire fa-bounce"></i>popular
//           </span>
//           <img src="./assets/quizs.webp" loading="lazy" alt="Daily Quiz" />
//           <h3>
//             <i className="fa-solid fa-circle-question"></i> Test Your Knowledge
//           </h3>
//           <p>
//             Quick 5-minute quizzes to test your memory & speed for the O/L
//             exmas.
//           </p>

//           <Link
//             to="/daily-quizzes"
//             className="btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             Start Quiz Now
//           </Link>
//         </div>
//         <div className="resources-card" data-aos="fade-up" data-aos-delay="300">
//           <span className="card-badge card-badge-members">
//             <i className="fas fa-crown"></i>Exclusive
//           </span>
//           <img
//             src="./assets/resources.webp"
//             loading="lazy"
//             alt="Study Materials"
//           />
//           <h3>
//             <i className="fa-solid fa-book-open"></i> Access Library
//           </h3>
//           <p>
//             A curated library of premium Teaching Philosoply, papers, and model
//             answers for core subjects.
//           </p>

//           <Link
//             to="/paper-hub"
//             className="btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             View Materials
//           </Link>
//         </div>
//         <div className="resources-card" data-aos="fade-up" data-aos-delay="400">
//           <span className="card-badge card-badge-free">
//             <i className="fa-solid fa-gift fa-bounce"></i>free
//           </span>
//           <img src="./assets/study.webp" loading="lazy" alt="Study Tools" />
//           <h3>
//             <i className="fa-solid fa-toolbox"></i> Study Tools
//           </h3>
//           <p>
//             Boost your productivity with our Promodoro timer & interactive
//             memory games.
//           </p>

//           <Link
//             to="/tools"
//             className="btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             Open Tools
//           </Link>
//         </div>
//         <div className="resources-card" data-aos="fade-up" data-aos-delay="500">
//           <span className="card-badge card-badge-verified">
//             <i className="fas fa-circle-check"></i>Verified
//           </span>
//           <img
//             src="./assets/comments.webp"
//             loading="lazy"
//             alt="Student Reviews"
//           />
//           <h3>
//             <i className="fa-solid fa-comments"></i> Student Reviews
//           </h3>
//           <p>
//             See what students say about classNamees & learning Professional
//             Expertise.
//           </p>
//           <a href="reviews.html" className="btn" rel="noopener noreferrer">
//             Read Reviews
//           </a>
//         </div>
//         <div
//           className="resources-card result-check"
//           id="result-check"
//           data-aos="fade-up"
//           data-aos-delay="600">
//           <span className="card-badge card-badge-official">
//             <i className="fas fa-medal"></i> Official
//           </span>
//           <img src="./assets/results.webp" loading="lazy" alt="O/L Results" />
//           <h3>
//             <i className="fa-solid fa-chart-column"></i> Get O/L Results Check
//           </h3>
//           <p>Quick check the official O/L examination results.</p>
//           <a
//             href="https://www.doenets.lk/examresults"
//             className="btn"
//             target="_blank"
//             rel="noopener noreferrer">
//             Check Your Results
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resources;

// import React from 'react';
import { Link } from "react-router-dom";
import {
  FaCircleCheck,
  FaMedal,
  FaComments,
  FaChartColumn,
  FaToolbox,
  FaRocket,
} from "react-icons/fa6";

import { FaCircleQuestion, FaPenToSquare, FaFilePdf } from "react-icons/fa6";

import PaperImg from "../assets/resources.webp";
import Tools from "../assets/study.webp";
import Comments from "../assets/comments.webp";
import Results from "../assets/results.webp";
import Quizes from "../assets/quizs.webp";
import Quetions from "../assets/questions.webp";

const Resources = () => {
  return (
    <section className="resources-section parts" id="resources">
      <h2>
        Explore Our Powerful <span>Learning Tools</span>
      </h2>
      <p>
        Explore our collection of smart learning tools desgiged to make your O/L
        preparation easy, fun, & effective.
      </p>
      <div className="resources-container resources-grid">
        {/* 1. Smart Tools Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="400">
          <span className="card-badge card-badge-new">
            <FaRocket /> New Tools
          </span>
          <img src={Tools} loading="lazy" alt="Study Tools" />
          <h3>
            <FaToolbox /> Smart Study Tools
          </h3>
          <p>
            Boost your productivity with our specialized O/L study calculators
            and timers.
          </p>
          <Link to="/tools" className="browse-btn">
            Open Tools
          </Link>
        </div>

        {/* 2. Student Reviews Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="500">
          <span className="card-badge card-badge-verified">
            <FaCircleCheck /> Verified
          </span>
          <img src={Comments} loading="lazy" alt="Student Reviews" />
          <h3>
            <FaComments /> Student Voices
          </h3>
          <p>
            See what students say about classes & their learning experience with
            us.
          </p>
          <Link to="/reviews" className="browse-btn">
            Read Reviews
          </Link>
        </div>

        {/* 3. Official Results Card */}
        <div
          className="resources-card result-check"
          id="result-check"
          data-aos="fade-up"
          data-aos-delay="600">
          <span className="card-badge card-badge-official">
            <FaMedal /> Official
          </span>
          <img src={Results} loading="lazy" alt="O/L Results" />
          <h3>
            <FaChartColumn /> O/L Result Portal
          </h3>
          <p>
            Quickly access the official Department of Examinations portal to
            check your results.
          </p>
          <a
            href="https://www.doenets.lk/examresults"
            className="browse-btn"
            target="_blank"
            rel="noopener noreferrer">
            Check Your Results
          </a>
        </div>

        {/* 4. Daily Questions Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="700">
          <span className="card-badge card-badge-daily">
            <FaCircleCheck /> Everyday
          </span>
          <img src={Quetions} loading="lazy" alt="Daily Questions" />
          <h3>
            <FaCircleQuestion /> Daily Mission
          </h3>
          <p>
            Challenge yourself with 5 new questions every day to keep your brain
            sharp.
          </p>
          <Link to="/daily-questions" className="browse-btn">
            Start Today
          </Link>
        </div>

        {/* 5. Interactive Quizzes Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="800">
          <span className="card-badge card-badge-hot">
            <FaMedal /> Most Popular
          </span>
          <img src={Quizes} loading="lazy" alt="Interactive Quizzes" />
          <h3>
            <FaPenToSquare /> Skill Test Quizzes
          </h3>
          <p>
            Test your knowledge with timed quizzes covering all O/L core units.
          </p>
          <Link to="/quizzes" className="browse-btn">
            Take a Quiz
          </Link>
        </div>

        {/* 6. Paper Hub Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="900">
          <span className="card-badge card-badge-new">
            <FaRocket /> New Papers
          </span>
          <img src={PaperImg} loading="lazy" alt="Past Papers" />
          <h3>
            <FaFilePdf /> Academic Paper Hub
          </h3>
          <p>
            Access a massive collection of Past Papers, Target Papers, and Short
            Notes.
          </p>
          <Link to="/paper-hub" className="browse-btn">
            View Materials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
