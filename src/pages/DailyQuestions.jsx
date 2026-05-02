import { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const DailyQuestions = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  // දැනට සාම්පල ප්‍රශ්න කිහිපයක්
  const questions = {
    Maths: {
      q: "2x + 5 = 15 නම් x හි අගය කීයද?",
      options: ["5", "10", "2", "15"],
      ans: "5",
    },
    Science: {
      q: "ජලයේ රසායනික සූත්‍රය කුමක්ද?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      ans: "H2O",
    },
  };

  return (
    <div className="daily-questions-page">
      {/* <Header /> */}
      <main className="system-container" style={{ marginTop: "100px" }}>
        <h2 style={{ textAlign: "center" }}>
          Daily <span>Mission Questions</span>
        </h2>

        {!selectedSubject ? (
          <div className="subject-selector card-container">
            <button
              onClick={() => setSelectedSubject("Maths")}
              className="start-btn">
              Mathematics
            </button>
            <button
              onClick={() => setSelectedSubject("Science")}
              className="start-btn">
              Science
            </button>
          </div>
        ) : (
          <div className="card-container">
            <h3>{selectedSubject} Question</h3>
            <p>{questions[selectedSubject].q}</p>
            {/* උත්තර ටික මෙතනට map කරමු */}
            <button
              onClick={() => setSelectedSubject(null)}
              className="browse-btn">
              Back
            </button>
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DailyQuestions;
