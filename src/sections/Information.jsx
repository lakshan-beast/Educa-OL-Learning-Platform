// import React from 'react';
import {
  FaBrain,
  FaFilePen,
  FaHeadset,
  FaChartLine,
  FaChalkboard,
  FaUserGraduate,
  FaFaceSmile,
} from "react-icons/fa6";

import { FaChalkboardTeacher } from "react-icons/fa";

const Information = () => {
  return (
    // <section className="information parts" id="information">
    <section className="parts" id="information">
      <h2>
        Why <span>Choose Us?</span>
      </h2>
      <p>
        Empowering the next generation of Sri Lankan Students with simplified
        learning & proven results.
      </p>

      <div className="about-container info-column" id="about">
        {/* <div className="information-conatiner"> */}
        {/* Left Content */}
        <div className="info-content info-left card" data-aos="fade-right">
          <p data-aos="fade-up">
            At Educa, we understand that every student learns differently. Our
            mission is to bridge the gap between complex theories and exam
            success by providing simplified, high-quality lessons tailored for
            O/L students.
          </p>

          <div className="about-info" data-aos="fade-up">
            <h4>
              <FaBrain /> Simplified Concept Mapping
            </h4>
            <p>
              Breaking down complex theories into easy-to-understand diagrams
              and Teaching Philosophy.
            </p>

            <h4>
              <FaFilePen /> Exam-Oriented Training
            </h4>
            <p>
              Focused sessions on Past Papers, Model Papers, and Time Management
              Strategies.
            </p>

            <h4>
              <FaHeadset /> 24/7 Academic Support
            </h4>
            <p>
              A dedicated community where students can clarify doubts at any
              time.
            </p>

            <h4>
              <FaChartLine /> Proven Track Record
            </h4>
            <p>
              Over 2500+ students have successfully transformed their grades
              through our guidance.
            </p>
          </div>
        </div>

        {/* Right Content - Stats Boxes */}
        <div className="info-content info-right" data-aos="fade-right">
          <div className="about-status">
            <div className="courses-box box" data-aos="fade-right">
              <FaChalkboard />
              <h3 data-aos="zoom-in">3+</h3>
              <p>Specialized Subjects</p>
            </div>
            <div className="teachers-box box" data-aos="fade-up">
              <FaChalkboardTeacher />
              <h3 data-aos="zoom-in">3+</h3>
              <p>Expert Educators</p>
            </div>
            <div className="students-box box" data-aos="fade-left">
              <FaUserGraduate />
              <h3 data-aos="zoom-in">2500+</h3>
              <p>Success Stories</p>
            </div>
            <div className="satisfaction-box box" data-aos="fade-down">
              <FaFaceSmile />
              <h3 data-aos="zoom-in">100%</h3>
              <p>Student Trust Rate</p>
            </div>
          </div>

          {/* Chart Area */}
          <div className="result-container" data-aos="fade-up">
            {/* මෙතන දැනට canvas එක තිබ්බට React වලදී අපිට Chart.js පාවිච්චි කරන්න වෙනවා */}
            <canvas id="olResultChart" width="400" height="250"></canvas>
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                marginTop: "10px",
              }}>
              * O/L Result Improvement Analysis
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Information;
