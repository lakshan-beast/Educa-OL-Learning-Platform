import { useState, useEffect, useCallback } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";

import {
  FaFolderPlus,
  FaFilePdf,
  FaArrowDown,
  FaTrashCan,
  FaFileLines,
  FaGraduationCap,
  FaCircleExclamation,
} from "react-icons/fa6";

import ConfirmationModal from "../ConfirmationModal";

const uniqueMaterialId = "Paper-" + Date.now().toString().slice(-8);

const PaperHubUploadVault = ({ selectedGrade, subject }) => {
  const currentSubject = subject || "maths";

  const [formData, setFormData] = useState({
    grade: selectedGrade || "11",
    category: "class-tutes",
    materialTitle: "",
    driveUrl: "",
  });

  // 👑 🆕 [LOCAL GRADE STATE]: 6 සිට 11 දක්වා ටියුට්ස් අප්ලෝඩ් පාලනයට වෙනම ස්ටේට් එකක් ගත්තා
  const [localGrade, setLocalGrade] = useState("11");

  const [uploadedMaterials, setUploadedMaterials] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);
  const [selectedMaterialTitle, setSelectedMaterialTitle] = useState("");

  // 👑 🔐 [THE PERFORMANCE BOOST]: useCallback එක දමා Cascading Renders 100%ක්ම නැවැත්තුවා
  const fetchCloudMaterials = useCallback(async () => {
    setTimeout(() => setIsLoading(true), 0);

    try {
      const q = query(
        collection(db, "academic_materials"),
        where("grade", "==", selectedGrade || "11"),
        where("subject", "==", currentSubject),
      );

      const querySnapshot = await getDocs(q);
      const materialsList = [];

      querySnapshot.forEach((doc) => {
        materialsList.push({ id: doc.id, ...doc.data() });
      });

      setUploadedMaterials(materialsList);
    } catch (err) {
      console.error("Fetch Error:", err);
    }

    setTimeout(() => setIsLoading(false), 0);
  }, [selectedGrade, currentSubject]); // 💡 මේ දත්ත දෙක මාරු වුණොත් විතරක් ක්‍රියාත්මක වේ

  // කාඩ් මාකර් ශ්‍රේණිය මාරු කරද්දී ඔටෝම අලුත් දත්ත ලෝඩ් වේ
  useEffect(() => {
    fetchCloudMaterials();
  }, [fetchCloudMaterials]);
  // ============================================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 👑 3. [FIXED OR LOGIC]: OR (||) කෑල්ල නිවැරදිව දැම්මා
    if (
      formData.materialTitle.trim() === "" ||
      formData.driveUrl.trim() === ""
    ) {
      setError("Please enter all details correctly! ⚠️");
      setSuccess("");
      setIsSubmitting(false);
      return;
    }

    const materialCloudData = {
      id: uniqueMaterialId,
      grade: formData.grade,
      category: formData.category,
      title: formData.materialTitle,
      driveUrl: formData.driveUrl.trim(),
      subject: currentSubject,
      createdAt: new Date().toISOString(),
    };

    try {
      // 🚀 [THE MAGIC]: 'academic_materials' Collection එකට දත්ත ලියයි (Collection එක ඉබේම සෑදේ!)
      await addDoc(collection(db, "academic_materials"), materialCloudData);

      // ලස්සන කොළ පාට Success Notification එකක් පෙන්වයි
      setSuccess(
        `"${formData.materialTitle}" The tutorial was successfully uploaded to Google Cloud! 🟢`,
      );
      setError("");

      // 🔄 දත්ත සේව් වුණු ගමන් වගුව ඔටෝම ලයිව් රීෆ්‍රෙෂ් (Fetch) වේ!
      fetchCloudMaterials();

      // Local List එකටත් දත්ත එකතු කිරීම
      setUploadedMaterials((prevMaterials) => [
        materialCloudData,
        ...prevMaterials,
      ]);

      // 💾 [FORM RESET]: ටයිප් කරපු විස්තර ඔක්කොම ක්ලියර් කරයි (Grade & Category ඉතුරු කරමින්)
      setFormData((prev) => ({
        ...prev,
        materialTitle: "",
        driveUrl: "",
      }));
    } catch (err) {
      console.error("Firebase Storage Error:", err);
      setError(
        "An error occurred while updating data to the Cloud Database! ❌",
      );
      setSuccess("");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  };

  const handleDeleteClick = (id, title) => {
    setSelectedMaterialId(id);
    setSelectedMaterialTitle(title);
    setIsModalOpen(true);
  };

  // 🚀 👑 🆕 [THE REAL CLOUD DELETE LOGIC]: "Yes" එබූ විට සැබෑ ලෙසම Google Cloud එකෙන් දත්තය මකා දමයි!
  const confirmDeleteMaterial = async () => {
    setIsModalOpen(false);
    setIsLoading(true);

    try {
      // ☁️ Firebase Firestore එකෙන් අදාළ Document එක සදහටම ඩිලීට් කරයි!
      // await deleteDoc(doc(db, "academic_materials", selectedMaterialId));
      const q = query(
        collection(db, "academic_materials"),
        where("id", "==", selectedMaterialId),
      );
      const querySnapshot = await getDocs(q);

      // 2. 🗑️ ඒ සොයාගත් Document එක Google Cloud එක ඇතුළෙන්ම සදහටම ඩිලීට් කර දමයි
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "academic_materials", document.id));
      });

      setSuccess(
        `"${selectedMaterialTitle}" The tutorial was successfully removed from Google Cloud! 🔴`,
      );
      setError(""); // ලයිව් ලිස්ට් එක නැවත අප්ඩේට් කරයි
      fetchCloudMaterials();
    } catch (err) {
      console.error("Delete Error:", err);

      setError(
        "A technical error occurred while deleting the data from the cloud! ❌",
      );

      setSuccess("");
    }

    setIsLoading(false);
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 4000);
  };

  return (
    <div
      className="vault-container"
      style={{ background: "white", padding: "30px", borderRadius: "20px" }}>
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            color: "#1a0a54",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <FaFolderPlus /> Paper Hub Upload Vault ({subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          Upload the required Tutes, Past Papers and Formulas for Paper Hub
          according to grades (6-11) here.
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
            marginBottom: "20px",
            fontSize: "0.88rem",
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
            marginBottom: "20px",
            fontSize: "0.88rem",
            fontWeight: "bold",
          }}>
          ✓ {success}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "50px",
        }}>
        <div
          style={{
            background: "#f8faff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #eef2ff",
            height: "fit-content",
          }}>
          <h4
            style={{
              margin: "0 0 15px",
              color: "#1a0a54",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
            <FaFolderPlus /> Upload New Material
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {/* 👑 🆕 [6-11 GRADE SELECTOR]: ටියුට් අප්ලෝඩ් එකටත් 6-11 ඩ්‍රොප්ඩවුන් එක දැම්මා */}
            <div className="input-group">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Select School Grade
              </label>
              <select
                value={localGrade}
                onChange={(e) => setLocalGrade(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                {["6", "7", "8", "9", "10", "11"].map((g) => (
                  <option key={g} value={g}>
                    Grade {g}
                  </option>
                ))}
              </select>
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
                Material Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                <option value="classTutes">📄 Class Tutes</option>
                <option value="pastPapers">📕 Past Papers</option>
                <option value="formulas">🎓 Formula Guides</option>
              </select>
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
                Material Title
              </label>
              <input
                type="text"
                name="materialTitle"
                placeholder="ex: Lesson Core Theory Tute"
                required
                value={formData.materialTitle}
                onChange={handleInputChange}
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
                Google Drive URL Link
              </label>
              <input
                type="url"
                name="driveUrl"
                placeholder="https://google.com/file/d/..."
                required
                value={formData.driveUrl}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  color: "#4b6bfb",
                  fontWeight: "bold",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
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
                marginTop: "5px",
              }}>
              🚀 Upload Academic Material
            </button>
          </form>
        </div>

        <div style={{ overflowX: "auto" }}>
          {/* 👑 Inventory Header එකත් localGrade එක අනුව වෙනස් වේ */}
          <h4 style={{ margin: "0 0 15px", color: "#1a0a54" }}>
            📁 Active Materials Inventory (Grade {localGrade})
          </h4>

          {isLoading ? (
            <div
              style={{
                textAlign: "center",
                color: "#4b6bfb",
                fontWeight: "bold",
                padding: "40px 0",
                fontSize: "0.9rem",
              }}>
              {" "}
              🔄 Loading Materials from Cloud...{" "}
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.88rem",
                textAlign: "left",
              }}>
              <thead>
                <tr style={{ background: "#1a0a54", color: "white" }}>
                  <th style={{ padding: "12px" }}>Material Info & Type</th>
                  <th style={{ padding: "12px" }}>Download Link</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploadedMaterials.length > 0 ? (
                  uploadedMaterials.map((row) => (
                    <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "12px" }}>
                        <span
                          style={{
                            fontWeight: "bold",
                            display: "block",
                            color: "#1a0a54",
                          }}>
                          {row.title}
                        </span>
                        <small
                          style={{
                            color: "#777",
                            fontWeight: "bold",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            marginTop: "4px",
                          }}>
                          {row.category === "classTutes" ? (
                            <FaFileLines />
                          ) : row.category === "pastPapers" ? (
                            <FaFilePdf />
                          ) : (
                            <FaGraduationCap />
                          )}{" "}
                          {row.category?.toUpperCase()}
                        </small>
                      </td>
                      <td style={{ padding: "12px" }}>
                        <a
                          href={row.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#4b6bfb",
                            textDecoration: "none",
                            fontWeight: "bold",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                          }}>
                          View PDF{" "}
                          <FaArrowDown style={{ fontSize: "0.8rem" }} />
                        </a>
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          style={{
                            background: "#fce4e4",
                            color: "#c0392b",
                            border: "none",
                            padding: "8px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            display: "inline-flex",
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
                          <FaTrashCan />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      style={{
                        textAlign: "center",
                        padding: "30px",
                        color: "#777",
                        fontWeight: "bold",
                      }}>
                      <FaCircleExclamation /> No materials uploaded for Grade{" "}
                      {localGrade} yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Are You Sure? Remove Material."
        message={`Do you want to completely remove your selected tutorial "${selectedMaterialTitle}" from the student portal?`}
        type="danger"
        onConfirm={confirmDeleteMaterial}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default PaperHubUploadVault;
