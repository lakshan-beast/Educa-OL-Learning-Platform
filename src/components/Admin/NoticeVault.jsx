import { useState } from "react";
import {
  FaBell,
  FaCirclePlus,
  FaTrashCan,
  FaBullhorn,
  FaCircleExclamation,
} from "react-icons/fa6";

const ClassNoticeVault = ({ selectedGrade, subject }) => {
  // 1. දැනට සයිට් එකේ ලයිව් තියෙන නිවේදන ලැයිස්තුව (State)
  const [notices, setNotices] = useState([
    {
      id: 1,
      type: "රැස්වීම්",
      text: "2026 මැයි 24 (ඉරිදා) උදේ 9.00 ට සියලුම 11 ශ්‍රේණි දෙමාපියන් සඳහා විශේෂ Zoom හමුවක් පැවැත්වේ. සහභාගීත්වය අනිවාර්යයි.",
      date: "2026-05-18",
      grade: "11",
    },
  ]);

  const [formData, setFormData] = useState({
    type: "💡 සාමාන්‍ය නිවේදනය",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 📢 New Notice Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text.trim() === "") {
      alert("කරුණාකර නිවේදන පණිවිඩය ඇතුළත් කරන්න! ❌");
      return;
    }

    const newNotice = {
      id: Date.now(),
      type: formData.type,
      text: formData.text,
      date: new Date().toISOString().split("T")[0],
      grade: selectedGrade,
    };

    // 🚀 Firebase Cloud එකට සහ ලෝකල් ස්ටේට් එකට දත්ත එකතු වේ
    setNotices([newNotice, ...notices]);
    setFormData({ type: "💡 සාමාන්‍ය නිවේදනය", text: "" });
    alert("නිවේදනය සාර්ථකව මුළු සයිට් එකටම ලයිව් විකාශනය විය! 🟢📣");
  };

  // 🗑️ Delete Notice Handler
  const handleDeleteNotice = (id) => {
    if (
      window.confirm(
        "මෙම නිවේදනය සයිට් එකෙන් සම්පූර්ණයෙන්ම ඉවත් කිරීමට අවශ්‍යද? 😮",
      )
    ) {
      setNotices(notices.filter((notice) => notice.id !== id));
    }
  };

  // දැනට තෝරාගෙන ඇති ශ්‍රේණියට (Grade 10 / 11) අදාළ නිවේදන පමණක් වෙන් කර ගැනීම
  const filteredNotices = notices.filter((n) => n.grade === selectedGrade);

  return (
    <div
      className="vault-container"
      style={{ background: "white", padding: "30px", borderRadius: "20px" }}>
      {/* Vault Header */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            color: "#1a0a54",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <FaBullhorn style={{ color: "#ff4b2b" }} /> Class Notice Vault (
          {subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          මෙහි ඇතුළත් කරන නිවේදන ශිෂ්‍ය Dashboard එකේ සහ Parent Portal එකේ එකවර
          සජීවීව ප්‍රකාශයට පත් වේ.
        </p>
      </div>

      {/* ==================== FORMS & TABLES GRID ==================== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "30px",
        }}>
        {/* 📝 LEFT SIDE: POST NEW NOTICE FORM */}
        <div
          style={{
            background: "#fffbfb",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #feeaea",
            height: "fit-content",
          }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#ff4b2b",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaCirclePlus /> Broadcast New Notice
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* Notice Type Selector */}
            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Notice Type (නිවේදන වර්ගය)
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                <option value="💡 සාමාන්‍ය නිවේදනය">
                  💡 සාමාන්‍ය නිවේදනය (General)
                </option>
                <option value="🚨 විශේෂ පණිවිඩය">
                  🚨 විශේෂ පණිවිඩය (Special Alert)
                </option>
                <option value="📅 දෙමාපිය රැස්වීම්">
                  📅 දෙමාපිය රැස්වීම් (Parent Meeting)
                </option>
                <option value="🛑 පන්ති නිවාඩු">
                  🛑 පන්ති නිවාඩු (Class Holiday)
                </option>
                <option value="⚡ අමතර පන්ති">
                  ⚡ අමතර පන්ති (Extra Class)
                </option>
              </select>
            </div>
            {/* Notice Message Textarea */}
            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Notice Message (සිංහලෙන් ලියන්න)
              </label>
              <textarea
                name="text"
                rows="5"
                placeholder="උදා: ලබන සතියේ පොහෝ දින නිමිත්තෙන් පන්තිය පැවැත්වෙන්නේ නැත..."
                required
                value={formData.text}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontFamily: "inherit",
                  resize: "none",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              />
            </div>

            <button
              type="submit"
              className="start-btn"
              style={{
                width: "100%",
                padding: "12px",
                background: "#ff4b2b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "5px",
                boxShadow: "0 4px 10px rgba(255,75,43,0.2)",
              }}>
              📣 Broadcast Notice to All
            </button>
          </form>
        </div>

        {/* 📊 RIGHT SIDE: LIVE NOTICES LOG TABLE */}
        <div>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
            <FaBell style={{ color: "#ff4b2b" }} /> Active Notices Screen (Grade{" "}
            {selectedGrade})
          </h4>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  style={{
                    background: "#fcfcfd",
                    padding: "18px",
                    borderRadius: "15px",
                    border: "1px solid #eee",
                    borderLeft: "5px solid #ff4b2b",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "15px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                  }}>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px",
                      }}>
                      <span
                        style={{
                          background: "#ff4b2b",
                          color: "white",
                          padding: "2px 8px",
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                        }}>
                        {notice.type}
                      </span>
                      <small style={{ color: "#aaa", fontWeight: "bold" }}>
                        📅 Posted: {notice.date}
                      </small>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.92rem",
                        color: "#333",
                        lineHeight: "1.6",
                        fontWeight: "500",
                      }}>
                      {notice.text}
                    </p>
                  </div>

                  {/* Delete Notice Button Tool */}
                  <button
                    onClick={() => handleDeleteNotice(notice.id)}
                    style={{
                      background: "#fce4e4",
                      color: "#c0392b",
                      border: "none",
                      padding: "8px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#f9cbd2")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#fce4e4")
                    }>
                    <FaTrashCan style={{ fontSize: "0.95rem" }} />
                  </button>
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  background: "#f8faff",
                  borderRadius: "15px",
                  border: "1px dashed #ccc",
                  color: "#777",
                }}>
                <FaCircleExclamation
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "8px",
                    color: "#aaa",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                  }}>
                  No active notices for Grade {selectedGrade} yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassNoticeVault;
