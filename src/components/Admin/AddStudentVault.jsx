import { useState } from "react";
import {
  FaUserPlus,
  FaKey,
  FaMobileScreen,
  FaIdCard,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

const AddStudentVault = ({ selectedGrade, subject }) => {
  // Form එකේ දත්ත තබා ගන්නා State
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    pin: "",
    parentMobile: "",
    maths: subject === "maths", // ලොග් වී ඉන්න සර්ගේ විෂය ඔටෝ ටික් වේ
    science: subject === "science",
    english: subject === "english",
  });

  const [generatedID, setGeneratedID] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 🧠 [ID GENERATION LOGIC]: බටන් එක එබූ විට ID එක ඔටෝ හැදීමේ පද්ධතිය
  const handleRegister = (e) => {
    e.preventDefault();

    // 1. විෂයන් අනුව Code එක හැදීම (m/e/s)
    let subCode = "";
    if (formData.maths) subCode += "m";
    if (formData.english) subCode += "e";
    if (formData.science) subCode += "s";

    if (!subCode) {
      alert("කරුණාකර අවම වශයෙන් එක විෂයක්වත් තෝරන්න!");
      return;
    }

    // 2. නමේ හිස්තැන් අයින් කර කැපිටල් කිරීම (Trim spaces)
    const cleanName = formData.fullName.replace(/\s+/g, "").toUpperCase();
    const cleanPin = formData.pin.trim();

    // 3. අවසන් ස්මාර්ට් ID එක ගොඩනැඟීම
    const finalID = `EDU-${subCode.toUpperCase()}-${selectedGrade}-${cleanName}-${cleanPin}`;

    setGeneratedID(finalID);
    setCopied(false);

    // 🚀 [NEXT STEP NOTICE]: හෙට අපි මේ දත්ත ටික Firebase Cloud එකට යවන කේතය මෙතනට ලියනවා.
    console.log("Saving to Cloud:", {
      finalID,
      ...formData,
      grade: selectedGrade,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="vault-container"
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      }}>
      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#1a0a54", margin: 0 }}>
          <FaUserPlus /> Add New Student (Grade {selectedGrade})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          පෝරමයේ විස්තර බලාගෙන ශිෂ්‍යයා පද්ධතියට ඇතුළත් කර ID එක සාදා ගන්න.
        </p>
      </div>

      <form
        onSubmit={handleRegister}
        className="styled-form"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}>
        {/* Left Form Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div className="input-group">
            <label
              style={{
                fontWeight: "600",
                fontSize: "0.85rem",
                color: "#1a0a54",
                display: "block",
                marginBottom: "5px",
              }}>
              Student's Full Name (කැපිටල් අකුරෙන්)
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="ex: LAKSHAN SANDEEPA"
              required
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                textTransform: "uppercase",
              }}
            />
          </div>

          <div className="input-group">
            <label
              style={{
                fontWeight: "600",
                fontSize: "0.85rem",
                color: "#1a0a54",
                display: "block",
                marginBottom: "5px",
              }}>
              <FaKey /> Create Password (ළමයා සඳහා මුරපදයක්)
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create secret password"
              required
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div className="input-group">
            <label
              style={{
                fontWeight: "600",
                fontSize: "0.85rem",
                color: "#1a0a54",
                display: "block",
                marginBottom: "5px",
              }}>
              Create 4-Digit Secret PIN (අංක 4)
            </label>
            <input
              type="text"
              name="pin"
              maxLength="4"
              placeholder="ex: 0102"
              required
              value={formData.pin}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          {/* </div> */}

          {/* Right Form Column */}
          {/* <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}> */}
          <div className="input-group">
            <label
              style={{
                fontWeight: "600",
                fontSize: "0.85rem",
                color: "#1a0a54",
                display: "block",
                marginBottom: "5px",
              }}>
              <FaMobileScreen /> Parent's Mobile Number (දෙමාපිය අංකය)
            </label>
            <input
              type="text"
              name="parentMobile"
              placeholder="ex: 0787030317"
              required
              value={formData.parentMobile}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div className="input-group">
            <label
              style={{
                fontWeight: "600",
                fontSize: "0.85rem",
                color: "#1a0a54",
                display: "block",
                marginBottom: "5px",
              }}>
              Select Enrolled Subjects (විෂයන්)
            </label>
            <div
              style={{
                display: "flex",
                gap: "20px",
                background: "#f8faff",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #eef2ff",
                marginTop: "5px",
              }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}>
                <input
                  type="checkbox"
                  name="maths"
                  checked={formData.maths}
                  onChange={handleChange}
                />{" "}
                Maths
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}>
                <input
                  type="checkbox"
                  name="science"
                  checked={formData.science}
                  onChange={handleChange}
                />{" "}
                Science
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}>
                <input
                  type="checkbox"
                  name="english"
                  checked={formData.english}
                  onChange={handleChange}
                />{" "}
                English
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="start-btn"
            style={{
              width: "100%",
              padding: "12px",
              background: "#1a0a54",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "24px",
            }}>
            Register & Generate Student ID
          </button>
        </div>
      </form>

      {/* ID එක සාර්ථකව හැදුනට පස්සේ පේන කොටස */}
      {generatedID && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f4f7ff",
            borderRadius: "12px",
            border: "1px dashed #4b6bfb",
            textAlign: "center",
          }}>
          <span
            style={{
              fontSize: "0.8rem",
              color: "#555",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}>
            <FaIdCard /> GENERATED STUDENT ID FOR BATCH:
          </span>
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: "800",
              color: "#1a0a54",
              margin: "10px 0",
              letterSpacing: "0.5px",
            }}>
            {generatedID}
          </div>
          <button
            onClick={copyToClipboard}
            style={{
              padding: "8px 24px",
              background: "#eef2ff",
              border: "1px solid #4b6bfb",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              color: "#4b6bfb",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}>
            {copied ? (
              <>
                <FaCheck /> ID Copied!
              </>
            ) : (
              <>
                <FaCopy /> Copy ID
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStudentVault;
