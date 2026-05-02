// import React, { useState } from 'react';
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Quizzes = () => {
//   return (
//     <div className="quizzes-page">
//       {/* <Header /> */}
//       <main className="system-container" style={{ marginTop: "100px" }}>
//         <h2 style={{ textAlign: "center" }}>
//           Educa <span>Quiz Center</span>
//         </h2>
//         <p style={{ textAlign: "center" }}>
//           ඔබේ දැනුම පරීක්ෂා කරගන්න විෂය තෝරාගන්න.
//         </p>

//         <div className="quiz-categories-grid">
//           {/* මෙතනදී අපි පසුව Maths, Science, English කාඩ්ස් දාමු */}
//           <div className="card-container">
//             <h3>Mathematics Quiz</h3>
//             <p>10 Questions | 20 Minutes</p>
//             <button className="start-btn">Start Now</button>
//           </div>
//         </div>
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Quizzes;
import { useState, useEffect } from "react";

const Quizzes = () => {
  // පරීක්ෂණ ප්‍රශ්නාවලිය (Sample Quiz Data)
  const quizData = [
    {
      question: "2x + 10 = 20 නම්, x හි අගය කුමක්ද?",
      options: ["5", "10", "15", "20"],
      answer: "5",
    },
    {
      question: "ප්‍රභාසංස්ලේෂණය සඳහා අවශ්‍ය නොවන සාධකය කුමක්ද?",
      options: ["සූර්යාලෝකය", "හරිතප්‍රද", "කාබන්ඩයොක්සයිඩ්", "නයිට්‍රජන්"],
      answer: "නයිට්‍රජන්",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(30); // තත්පර 30ක කාලයක්

  // Timer Logic
  //   useEffect(() => {
  //     if (timer > 0 && !showScore) {
  //       const interval = setInterval(() => setTimer(timer - 1), 1000);
  //       return () => clearInterval(interval);
  //     } else if (timer === 0) {
  //       setShowScore(true);
  //     }
  //   }, [timer, showScore]);

  useEffect(() => {
    // Timer එක 0 ට වඩා වැඩි නම් විතරක් තත්පරයෙන් තත්පරය අඩු කරන්න
    if (timer > 0 && !showScore) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // පරණ interval එක අයින් කරන්න (Clean up)
    }

    // Timer එක 0 වුණාම විතරක් Score එක පෙන්වන්න
    if (timer === 0 && !showScore) {
      setShowScore(true);
    }
  }, [timer, showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quizzes-page">
      {/* <Header /> */}
      <main className="system-container" style={{ marginTop: "120px" }}>
        <div className="card-container quiz-box">
          {showScore ? (
            <div className="score-section" style={{ textAlign: "center" }}>
              <h2>Quiz Finished! 🏆</h2>
              <p>
                ඔබේ ලකුණු සංඛ්‍යාව: {score} / {quizData.length}
              </p>
              <button
                className="start-btn"
                onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div
                className="quiz-header"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  ප්‍රශ්නය {currentQuestion + 1}/{quizData.length}
                </span>
                <span style={{ color: timer < 10 ? "red" : "inherit" }}>
                  කාලය: {timer}s
                </span>
              </div>

              <div className="question-section" style={{ marginTop: "20px" }}>
                <h3>{quizData[currentQuestion].question}</h3>
              </div>

              <div
                className="options-section"
                style={{ marginTop: "20px", display: "grid", gap: "10px" }}>
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="browse-btn"
                    onClick={() => handleAnswerClick(option)}
                    style={{ textAlign: "left", padding: "10px" }}>
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Quizzes;
