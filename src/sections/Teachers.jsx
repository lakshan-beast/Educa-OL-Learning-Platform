import { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa6";

import tutor from "../assets/tutor.jpg";

const Teachers = () => {
  const teacherData = [
    {
      name: "Sir 01",
      subject: "Mathematics Teacher",
      img: tutor,
      background: "B.Sc. (Physical Science) / Trained Mathematics Educator.",
      expertise:
        "15+ Years of experience in producing 'A' passes for O/L Mathematics.",
      approach:
        "Step-by-step simplification of complex theories with logic-based shortcuts.",
      philosophy:
        "Mastering the fundamentals to turn math-phobia into math-mastery through daily practice.",
      phone: "+9471XXXXXXX",
    },
    {
      name: "Sir 02",
      subject: "Science Teacher",
      img: tutor,
      background: "B.Sc. in Biological Science",
      expertise: "10+ Years of proven success in O/L Science.",
      approach:
        "Visualization of theories with real-world practical applications.",
      philosophy:
        "Specializes in simplifying Physics & Chemistry through interactive memory techniques.",
      phone: "+94787030317",
    },
    {
      name: "Sir 03",
      subject: "English Teacher",
      img: tutor,
      background: "B.A. in English Language & Literature / Trained Educator.",
      expertise:
        "Expert in O/L English Syllabus & Spoken Fluency for 10+ Years.",
      approach:
        "Interactive language immersion focused on exam writing & fluency.",
      philosophy:
        "Helps students master O/L English paper structure and creative essay writing.",
      phone: "+94787030317",
    },
  ];
  return (
    <section className="parts teachers-section" id="teachers">
      <h2>
        Our <span>Teachers</span>
      </h2>

      <div className="teachers-container teachers-grid">
        {teacherData.map((teacher, index) => (
          <div
            className="teacher-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className="teacher-image-column">
              <img src={teacher.img} alt={teacher.name} />

              <div className="teacher-socials">
                <a href="#">
                  <FaFacebook className="facebook-icon icon" />
                </a>
                <a href="#">
                  <FaWhatsapp className="whatsapp-icon icon" />
                </a>
                <a href={`tel:${teacher.phone}`}>
                  <FaPhone className="call-icon icon" />
                </a>
              </div>
            </div>

            <div className="teacher-info-column">
              <div className="info-content">
                <span className="subject-tag">{teacher.subject}</span>
                <h3>{teacher.name}</h3>

                <div className="detail-list">
                  <div className="detail-header">
                    <p>
                      <b>Academic:</b> {teacher.background}
                    </p>
                    <p>
                      <b>Experience:</b> {teacher.expertise}
                    </p>
                  </div>
                  <p className="philosophy-box">{teacher.philosophy}</p>
                </div>

                {/* <div className="teacher-socials">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaWhatsapp />
                  </a>
                  <a href={`tel:${teacher.phone}`}>
                    <FaPhone />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
