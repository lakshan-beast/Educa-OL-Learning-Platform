import { Link } from "react-router-dom";

import {
  FaCircleCheck,
  FaMedal,
  FaComments,
  FaChartColumn,
  FaToolbox,
  FaRocket,
  FaCircleQuestion,
  FaPenToSquare,
  FaUserShield,
} from "react-icons/fa6";

import Tools from "../assets/study.webp";
import Comments from "../assets/comments.webp";
import Results from "../assets/results.webp";
import Quizes from "../assets/quizs.webp";
import Quetions from "../assets/questions.webp";
import Parent from "../assets/parent.webp";

const Resources = () => {
  return (
    <section className="parts" id="resources">
      <h2>
        Explore Our Powerful <span>Learning Tools</span>
      </h2>
      <p>
        Explore our collection of smart learning tools desgiged to make your O/L
        preparation easy, fun, & effective.
      </p>

      <div className="resources-grid">
        <div
          className="resources-card card-style"
          data-aos="fade-up"
          data-aos-delay="100">
          <span className="card-badge card-badge-verified">
            <FaCircleCheck /> Parents Only
          </span>
          <img src={Parent} loading="lazy" alt="Parent Portal" />
          <h3>
            <FaUserShield /> Perant Portal
          </h3>
          <p>
            View your child's attendance, fees reports, and special public
            announcements here.
          </p>
          {/* රහස් පේජ් එකට යන ලින්ක් එක */}
          <Link to="/parent-portal" className="browse-btn">
            View Details
          </Link>
        </div>

        {/* 3. Official Results Card */}
        <div
          className="resources-card card-style result-check"
          id="result-check"
          data-aos="fade-up"
          data-aos-delay="120">
          <span className="card-badge card-badge-official">
            <FaMedal className="icon" /> Official
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

        {/* 2. Student Reviews Card */}
        <div
          className="resources-card card-style"
          data-aos="fade-up"
          data-aos-delay="140">
          <span className="card-badge card-badge-verified">
            <FaCircleCheck className="icon" /> Verified
          </span>
          <img src={Comments} loading="lazy" alt="Student Reviews" />
          <h3>
            <FaComments /> Student Voices
          </h3>
          <p>
            See what students say about classes & their learning experience with
            us.
          </p>
          {/* <Link to="/reviews" className="browse-btn">
            Read Reviews
          </Link> */}
          <button disabled="disabled" className="browse-btn">
            Developing Mode
          </button>
        </div>

        {/* 1. Smart Tools Card */}
        <div
          className="resources-card card-style"
          data-aos="fade-up"
          data-aos-delay="160">
          <span className="card-badge card-badge-new">
            <FaRocket className="icon" /> New Tools
          </span>
          <img src={Tools} loading="lazy" alt="Study Tools" />
          <h3>
            <FaToolbox /> Smart Study Tools
          </h3>
          <p>
            Boost your productivity with our specialized O/L study calculators
            and timers.
          </p>
          {/* <Link to="/tools" className="browse-btn">
            Open Tools
          </Link> */}
          <button disabled="disabled" className="browse-btn">
            Developing Mode
          </button>
        </div>

        {/* 4. Daily Questions Card */}
        <div
          className="resources-card card-style"
          data-aos="fade-up"
          data-aos-delay="180">
          <span className="card-badge card-badge-daily">
            <FaCircleCheck className="icon" /> Everyday
          </span>
          <img src={Quetions} loading="lazy" alt="Daily Questions" />
          <h3>
            <FaCircleQuestion /> Daily Mission
          </h3>
          <p>
            Challenge yourself with 5 new questions every day to keep your brain
            sharp.
          </p>
          {/* <Link to="/daily-questions" className="browse-btn">          
            Start Today
          </Link> */}
          <button disabled="disabled" className="browse-btn">
            Developing Mode
          </button>
        </div>

        {/* 5. Interactive Quizzes Card */}
        <div
          className="resources-card card-style"
          data-aos="fade-up"
          data-aos-delay="200">
          <span className="card-badge card-badge-hot">
            <FaMedal className="icon" /> Most Popular
          </span>
          <img src={Quizes} loading="lazy" alt="Interactive Quizzes" />
          <h3>
            <FaPenToSquare /> Skill Test Quizzes
          </h3>
          <p>
            Test your knowledge with timed quizzes covering all O/L core units.
          </p>
          {/* <Link to="/quizzes" className="browse-btn">
            Take a Quiz
          </Link> */}
          <button disabled="disabled" className="browse-btn">
            Developing Mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
