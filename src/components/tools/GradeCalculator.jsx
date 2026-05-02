import { useState } from "react";

const GradeCalculator = () => {
  const [marks, setMarks] = useState(Array(9).fill(""));

  const handleMarkChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const calculateGrade = (m) => {
    if (m === "") return "-";
    const mark = parseInt(m);
    if (mark >= 75) return "A";
    if (mark >= 65) return "B";
    if (mark >= 55) return "C";
    if (mark >= 35) return "S";
    return "W";
  };

  const average =
    marks.filter((m) => m !== "").reduce((a, b) => a + parseInt(b), 0) /
    marks.filter((m) => m !== "").length;

  return (
    <div className="card-container" data-aos="fade-up">
      <h1>Grade Calculator</h1>

      <div className="grade-grid">
        {marks.map((mark, i) => (
          <div key={i} className="mark-input">
            <label htmlFor={`subject-${i}`} className="subject-name">
              Subject {i + 1}
            </label>
            <input
              type="number"
              placeholder={`Subject ${i + 1}`}
              value={mark}
              max={100}
              onChange={(e) => handleMarkChange(i, e.target.value)}
            />
            <span className={`grade-badge ${calculateGrade(mark)}`}>
              {calculateGrade(mark)}
            </span>
          </div>
        ))}
      </div>

      <div className="result-footer">
        <h3>Average: {isNaN(average) ? 0 : average.toFixed(2)}%</h3>
      </div>
    </div>
  );
};

export default GradeCalculator;
