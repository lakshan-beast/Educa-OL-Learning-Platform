import { useState } from "react";
import { db } from "../../firebaseConfig"; // 👑 අපේ මධ්‍යම Firebase පාලම ගත්තා
import { collection, addDoc } from "firebase/firestore"; // ☁️ දත්ත ඇතුළත් කරන Cloud Tools ගත්තා
import {
  FaUserPlus,
  FaKey,
  FaMobileScreen,
  FaIdCard,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

const AddStudentVault = ({ selectedGrade, subject }) => {
  // 3rd code
  const [generatedID, setGeneratedID] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(""); // 👑 🆕 ලස්සන රතු Alert එකට ස්ටේට් එක
  const [success, setSuccess] = useState(""); // 👑 🆕 ලස්සන කොළ Alert එකට ස්ටේට් එක

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

  // 1. Input Fields වල දත්ත වෙනස් වන ලොජික් එක
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 2. ID එක Clipboard එකට කොපි කරගන්නා ලොජික් එක (දැන් තියෙන්නේ එකයි!)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 3. 🧠 ☁️ ළමයාගේ ID එක හදලා කෙලින්ම Firebase Cloud යවන ප්‍රධාන ලොජික් එක
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Clicked Success! form submiting...");

    let subCode = "";
    if (formData.maths) subCode += "M";
    if (formData.english) subCode += "E";
    if (formData.science) subCode += "S";

    if (!subCode) {
      setError("කරුණාකර අවම වශයෙන් එක විෂයක්වත් තෝරන්න! ⚠️");
      setSuccess("");
      return;
    }

    if (
      !formData.fullName ||
      !formData.password ||
      !formData.pin ||
      !formData.parentMobile
    ) {
      setError("කරුණාකර සියලුම විස්තර නිවැරදිව පුරවන්න! ⚠️");
      setSuccess("");
      return;
    }

    const cleanName = formData.fullName.replace(/\s+/g, "").toUpperCase();
    const cleanPin = formData.pin.trim();
    const finalID = `EDU-${subCode}-${selectedGrade}-${cleanName}-${cleanPin}`;

    // Cloud එකට යන පිරිසිදු දත්ත ව්‍යුහය
    const studentCloudData = {
      id: finalID,
      fullName: formData.fullName,
      password: formData.password,
      pin: cleanPin,
      parentMobile: formData.parentMobile,
      maths: formData.maths,
      science: formData.science,
      english: formData.english,
      grade: selectedGrade,
      status: "Approved",
      createdAt: new Date().toISOString(),
    };

    try {
      // 🚀 Firebase 'students' Collection එකට දත්ත ලියයි
      await addDoc(collection(db, "students"), studentCloudData);

      setGeneratedID(finalID);
      setCopied(false);

      // ලස්සන කොළ පාට Notification Card එක සක්‍රීය කරයි
      setSuccess(
        `ශිෂ්‍යයා සාර්ථකව Google Cloud Database එකට ඇතුළත් කරන ලදී! 🟢 ID: ${finalID}`,
      );
      setError("");

      setFormData({
        fullName: "",
        password: "",
        pin: "",
        parentMobile: "",
        maths: subject === "maths",
        science: subject === "science",
        english: subject === "english",
      });
    } catch (err) {
      console.error("Firebase Error:", err);
      setError("Cloud Database එකට දත්ත සේව් කිරීමේදී දෝෂයක් සිදු විය! ❌");
      setSuccess("");
    }

    // තත්පර 5කින් පණිවිඩ තීරු නිවී යයි
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
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
          Check the details on the form, enter the student into the system and
          create an ID.
        </p>
      </div>

      {error && (
        <div
          style={{
            background: "#fdedec",
            borderLeft: "5px solid #e74c3c",
            color: "#c0392b",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "15px",
            fontSize: "0.85rem",
            fontWeight: "bold",
          }}>
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div
          style={{
            background: "#e8f8f5",
            borderLeft: "5px solid #2ecc71",
            color: "#27ae60",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "15px",
            fontSize: "0.85rem",
            fontWeight: "bold",
          }}>
          ✓ {success}
        </div>
      )}

      <form
        onSubmit={handleRegisterSubmit}
        // onSubmit={handleFormSubmitTrigger}
        className="styled-form"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
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
              placeholder="ex: 1234"
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
        </div>

        {/* Right Form Column */}
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
              <FaMobileScreen /> Parent's Mobile Number (දෙමාපිය අංකය)
            </label>
            <input
              type="text"
              name="parentMobile"
              placeholder="ex: 07X-XXX XXXX"
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
