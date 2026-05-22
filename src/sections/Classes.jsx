import { Link } from "react-router-dom";
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
    },
    {
      id: "science",
      title: "O/L Science",
      subtitle: "Interactive Concept Mastery",
      description:
        "Dive deep into Science with visual explanations covering Physics, Chemistry & Biology.",
      grade: "06 - 11",
      medium: "English / Sinhala",
    },
    {
      id: "english",
      title: "O/L English",
      subtitle: "Confidence in Communication",
      description:
        "Focus on essay writing, literature analysis & fluency to ace your exam.",
      grade: "06 - 11",
      medium: "English / Sinhala",
    },
  ];

  return (
    <section className="parts" id="classes">
      <h2>
        our <span>classes</span>
      </h2>

      <div className="class-container">
        <div className="classes-grid">
          {classData.map((item, index) => (
            <div className="class-card " key={index} data-aos="fade-up">
              <div className="class-info">
                <div className="class-header">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>

                <p className="class-desc">{item.description}</p>

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

                <Link to="/classes-details" className="class-btns">
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
