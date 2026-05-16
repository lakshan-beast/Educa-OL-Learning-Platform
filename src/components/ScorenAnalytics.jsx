import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaCirclePlus,
  FaChartLine,
  FaTriangleExclamation,
  //   FaFileGraduation,
} from "react-icons/fa6";

// Chart.js අවශ්‍ය කොටස් පද්ධතියට හඳුන්වා දීම
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ScoreAnalytics = () => {
  // 1. විෂයන් 9යේ ලැයිස්තුව
  const subjectsList = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Sinhala",
    "Religion",
    "Group I (Agri/Commerce...)",
    "Group II (Music/Dance...)",
    "Group III (Health/ICT...)",
  ];

  // 2. States පාලනය
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [allRecords, setAllRecords] = useState([]);
  const [formData, setFormData] = useState({ year: "", score: "", errors: "" });

  // LocalStorage එකෙන් පරණ දත්ත තිබේ නම් ඒවා Load කරගැනීම
  useEffect(() => {
    const savedData = localStorage.getItem("ol_score_records");
    if (savedData) {
      setAllRecords(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. නව පේපර් දත්ත ඇතුළත් කිරීමේ Logic එක
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.score) < 0 || parseInt(formData.score) > 100) {
      alert("ලකුණු 0 ත් 100 ත් අතර විය යුතුය!");
      return;
    }

    const newRecord = {
      id: Date.now(),
      subject: selectedSubject,
      year: formData.year,
      score: parseInt(formData.score),
      errors: formData.errors,
    };

    const updatedRecords = [...allRecords, newRecord];
    setAllRecords(updatedRecords);
    localStorage.setItem("ol_score_records", JSON.stringify(updatedRecords));

    // Form එක හිස් කිරීම
    setFormData({ year: "", score: "", errors: "" });
  };

  // 4. දැනට තෝරාගෙන ඇති විෂයට (Subject) අදාළ දත්ත පමණක් Filter කර වෙන් කරගැනීම
  const filteredRecords = allRecords.filter(
    (r) => r.subject === selectedSubject,
  );

  // 5. Chart එකට අවශ්‍ය දත්ත සැකසීම (Line Graph Configurations)
  const chartData = {
    labels: filteredRecords.map((r) => `Year: ${r.year}`), // X-Axis (පල්ලෙහා ඉර)
    datasets: [
      {
        label: `${selectedSubject} Performance Trends`,
        data: filteredRecords.map((r) => r.score), // Y-Axis (උඩ ඉර - ලකුණු)
        borderColor: "#4b6bfb",
        backgroundColor: "rgba(75, 107, 251, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#ff4b2b",
        pointRadius: 6,
        tension: 0.3, // රේඛාව ලස්සනට වටකුරු (Smooth) කරන එක
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: { min: 0, max: 100, title: { display: true, text: "Marks (Score)" } },
    },
  };

  return (
    <div
      className="premium-analytics-box"
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          flexWrap: "wrap",
          gap: "15px",
        }}>
        <div>
          <h3
            style={{
              color: "#26136d",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
            <FaChartLine /> O/L Progress Analytics Tracker
          </h3>
          <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
            විෂයන් 9යේම පේපර් ලකුණු සහ දුර්වලතා එකම තැනකින් නිරීක්ෂණය කරන්න.
          </p>
        </div>

        {/* 🎛️ විෂය තෝරන Dropdown එක (පැහැදිලිව පේන්න) */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          style={{
            padding: "10px 20px",
            borderRadius: "12px",
            border: "2px solid #26136d",
            fontWeight: "bold",
            color: "#26136d",
            cursor: "pointer",
          }}>
          {subjectsList.map((sub, i) => (
            <option key={i} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: filteredRecords.length > 0 ? "1fr" : "1fr",
          gap: "30px",
        }}>
        {/* 📝 A. පේපර් දත්ත ඇතුළත් කරන FORM එක */}
        <div
          style={{
            background: "#f8faff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #eef2ff",
          }}>
          <h4 style={{ margin: "0 0 15px", color: "#26136d" }}>
            <FaCirclePlus /> Add New Paper Score ({selectedSubject})
          </h4>
          <form onSubmit={handleSubmit} className="styled-form">
            <div className="input-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Paper Year / Name
              </label>
              <input
                type="text"
                name="year"
                placeholder="ex: 2023 or Model 01"
                required
                value={formData.year}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div className="input-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Your Marks (0 - 100)
              </label>
              <input
                type="number"
                name="score"
                placeholder="ex: 78"
                required
                value={formData.score}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div className="input-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "5px",
                }}>
                <FaTriangleExclamation /> Weaknesses / Errors Identified
              </label>
              <textarea
                name="errors"
                rows="3"
                placeholder="ex: වැරදුණු කරුණු හෝ පාඩම් කොටස් මෙතන ලියන්න..."
                required
                value={formData.errors}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontFamily: "inherit",
                }}></textarea>
            </div>
            <button
              type="submit"
              className="start-btn"
              style={{
                width: "100%",
                padding: "12px",
                background: "#26136d",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}>
              Submit Analytics Data
            </button>
          </form>
        </div>

        {/* 📈 B. LINE GRAPH එක පේන කොටස */}
        {filteredRecords.length > 0 && (
          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "16px",
            }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        )}
      </div>

      {/* 📊 C. ඇතුළත් කළ දත්ත TABLE එකක් ලෙස පල්ලෙහායින් පෙන්වීම */}
      {filteredRecords.length > 0 && (
        <div style={{ marginTop: "30px", overflowX: "auto" }}>
          <h4 style={{ color: "#26136d", marginBottom: "15px" }}>
            {/* <FaFileGraduation />  */}
            History Log ({selectedSubject})
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}>
            <thead>
              <tr
                style={{
                  background: "#26136d",
                  color: "white",
                  textAlign: "left",
                }}>
                <th style={{ padding: "12px" }}>Paper Info</th>
                <th style={{ padding: "12px" }}>Score</th>
                <th style={{ padding: "12px" }}>
                  Identified Weaknesses / Mistakes
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((rec) => (
                <tr key={rec.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {rec.year}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      color:
                        rec.score >= 75
                          ? "green"
                          : rec.score >= 40
                            ? "orange"
                            : "red",
                      fontWeight: "bold",
                    }}>
                    {rec.score}%
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      color: "#555",
                      fontStyle: "italic",
                    }}>
                    {rec.errors}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScoreAnalytics;
