// import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa6";
import scienceTeacher from "../assets/science-teacher.webp";
import englishTeacher from "../assets/english-teacher.jpg";

const Teachers = () => {
  const teacherData = [
    {
      name: "Sir 02",
      subject: "Science Teacher",
      img: scienceTeacher,
      background: "B.Sc. in Biology Science",
      expertise: "10+ Years of Proven success in O/L Science.",
      approach:
        "Visualization of theories with real-world practical application.",
      philosophy:
        "Specializes in simplifying Physics & Chemistry through interactive memory techniques.",
      phone: "+94787030317",
    },
    {
      name: "Sir 03",
      subject: "English Teacher",
      img: englishTeacher,
      background: "B.A. in English Language & Literature / Trained Educator.",
      expertise:
        "Expert in O/L English Syllabus & Spoken Fluency for 10+ Years.",
      approach:
        "Interactive language immersion focused on exam writing & fluency.",
      philosophy:
        "Help Students master O/L English paper structure and creative essay writing.",
      phone: "+94787030317",
    },
  ];

  return (
    <section className="teachers" id="teachers">
      <h2>
        Our <span>Teachers</span>
      </h2>
      <div className="teachers-container">
        {teacherData.map((teacher, index) => (
          <div className="teacher-card" key={index} data-aos="fade-up">
            <div className="teacher-card__img-box">
              <img src={teacher.img} loading="lazy" alt={teacher.name} />
            </div>

            <div className="card-column teacher-info">
              <h3>
                {teacher.name} - <span>{teacher.subject}</span>
              </h3>
              <div className="teacher-details">
                <p>
                  Academic Background : <span>{teacher.background}</span>
                </p>
                <p>
                  Professional Expertise : <span>{teacher.expertise}</span>
                </p>
                <p>
                  Learning Approach : <span>{teacher.approach}</span>
                </p>
                <p className="philosophy">
                  Teaching Philosophy : <span>{teacher.philosophy}</span>
                </p>
              </div>

              <div className="teacher-card__socials">
                <a href="#" title="Follow Page">
                  <FaFacebook />
                </a>
                <a href="#" title="Follow Page">
                  <FaInstagram />
                </a>
                <a href="#" title="Follow Page">
                  <FaWhatsapp />
                </a>
                <a href={`tel:${teacher.phone}`} title="call">
                  <FaPhone />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
