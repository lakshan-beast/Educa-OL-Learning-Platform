import { Link } from "react-router-dom";

// import React from "react";
// import { FaMedal, FaChartColumn } from "react-icons/fa6";
// import resultsImg from "../assets/results.webp"; // Image එක import කරගන්න

const Resources = () => {
  return (
    <section id="resources" className="resources-section">
      <h2>
        Explore Our Powerful <span>Learning Tools</span>
      </h2>
      <p>
        Explore our collection of smart learning tools desgiged to make your O/L
        preparation easy, fun, & effective.
      </p>
      <div className="resources-container">
        {/* Results Card */}
        <div className="resources-card" data-aos="fade-up" data-aos-delay="100">
          <span className="card-badge card-badge-new">
            <i className="fa-solid fa-bolt fa-shake"></i>new
          </span>

          <img
            src="./assets/questions.webp"
            loading="lazy"
            alt="Daily Questions"
          />
          <h3>
            <i className="fa-solid fa-calendar-check"></i> Challenge Yourself
          </h3>
          <p>
            Master one complex problem every day to sharpen your analytical
            skills.
          </p>

          <Link
            to="/daily-questions"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            Try Today's Quesation
          </Link>
        </div>
        <div className="resources-card" data-aos="fade-up" data-aos-delay="200">
          <span className="card-badge card-badge-popular">
            <i className="fa-solid fa-fire fa-bounce"></i>popular
          </span>
          <img src="./assets/quizs.webp" loading="lazy" alt="Daily Quiz" />
          <h3>
            <i className="fa-solid fa-circle-question"></i> Test Your Knowledge
          </h3>
          <p>
            Quick 5-minute quizzes to test your memory & speed for the O/L
            exmas.
          </p>
          {/* <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
            Start Quiz Now
          </a> */}
          <Link
            to="/daily-quizzes"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            Start Quiz Now
          </Link>
        </div>
        <div className="resources-card" data-aos="fade-up" data-aos-delay="300">
          <span className="card-badge card-badge-members">
            <i className="fas fa-crown"></i>Exclusive
          </span>
          <img
            src="./assets/resources.webp"
            loading="lazy"
            alt="Study Materials"
          />
          <h3>
            <i className="fa-solid fa-book-open"></i> Access Library
          </h3>
          <p>
            A curated library of premium Teaching Philosoply, papers, and model
            answers for core subjects.
          </p>
          {/* <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
            View Materials
          </a> */}
          <Link
            to="/paper-hub"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            View Materials
          </Link>
        </div>
        <div className="resources-card" data-aos="fade-up" data-aos-delay="400">
          <span className="card-badge card-badge-free">
            <i className="fa-solid fa-gift fa-bounce"></i>free
          </span>
          <img src="./assets/study.webp" loading="lazy" alt="Study Tools" />
          <h3>
            <i className="fa-solid fa-toolbox"></i> Study Tools
          </h3>
          <p>
            Boost your productivity with our Promodoro timer & interactive
            memory games.
          </p>
          {/* <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
            Open Tools
          </a> */}

          <Link
            to="/tools"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            Open Tools
          </Link>
        </div>
        <div className="resources-card" data-aos="fade-up" data-aos-delay="500">
          <span className="card-badge card-badge-verified">
            <i className="fas fa-circle-check"></i>Verified
          </span>
          <img
            src="./assets/comments.webp"
            loading="lazy"
            alt="Student Reviews"
          />
          <h3>
            <i className="fa-solid fa-comments"></i> Student Reviews
          </h3>
          <p>
            See what students say about classNamees & learning Professional
            Expertise.
          </p>
          <a href="reviews.html" className="btn" rel="noopener noreferrer">
            Read Reviews
          </a>
        </div>
        <div
          className="resources-card result-check"
          id="result-check"
          data-aos="fade-up"
          data-aos-delay="600">
          <span className="card-badge card-badge-official">
            <i className="fas fa-medal"></i> Official
          </span>
          <img src="./assets/results.webp" loading="lazy" alt="O/L Results" />
          <h3>
            <i className="fa-solid fa-chart-column"></i> Get O/L Results Check
          </h3>
          <p>Quick check the official O/L examination results.</p>
          <a
            href="https://www.doenets.lk/examresults"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            Check Your Results
          </a>
        </div>
        {/* </div> */}
        {/* </section> */}

        {/* <div className="resources-card" data-aos="fade-up" data-aos-delay="600">
          <span className="card-badge card-badge-official">
            <FaMedal /> Official
          </span>

          <img src={resultsImg} loading="lazy" alt="O/L Results" />

          <h3>
            <FaChartColumn /> Get O/L Results Check
          </h3>
          <p>Quick check the official O/L examination results.</p>

          <a
            href="https://www.doenets.lk/examresults"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            Check Your Results
          </a>
        </div> */}

        {/* තව කාඩ්ස් තියෙනවා නම් ඒවත් මේ වගේම පල්ලෙහයින් එකතු කරන්න පුළුවන් */}
      </div>
    </section>
  );
};

export default Resources;
