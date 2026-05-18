import { useState } from "react";
import { allApprovedStudents } from "../../data/approvedStudents";
import {
  FaMoneyCheckDollar,
  FaCirclePlus,
  FaUsers,
  FaCoins,
  FaMagnifyingGlass,
  //   FaWorkspacePremium,
  //   FaWhatsapp,
  FaCalendarDays,
} from "react-icons/fa6";

const PaymentsVault = ({ selectedGrade, subject }) => {
  const [paymentRecords, setPaymentRecords] = useState([
    {
      id: 1,
      studentId: "EDU-MES-11-LAKSHAN-0102",
      studentName: "Lakshan",
      month: "May",
      amount: 1500,
      maths_fees: "Paid",
      science_fees: "Pending",
      english_fees: "Paid",
      parentMobile: "",
    },
  ]);

  const [formData, setFormData] = useState({
    studentId: "",
    month: "May",
    amount: "1500",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [parentNumbers, setParentNumbers] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const totalPaidStudents = paymentRecords.length;
  const totalRevenue = paymentRecords.reduce(
    (sum, record) => sum + record.amount,
    0,
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleParentNumberChange = (studentId, value) => {
    setParentNumbers((prev) => ({ ...prev, [studentId]: value }));
  };

  const handleIdChange = (e) => {
    const value = e.target.value.toUpperCase();
    setFormData({ ...formData, studentId: value });

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const currentSubLetter =
      subject === "maths"
        ? "M"
        : subject === "science"
          ? "S"
          : subject === "english"
            ? "E"
            : "";

    const gradeFiltered = allApprovedStudents.filter((student) => {
      if (!student || !student.id) return false;
      const parts = student.id.split("-");
      const subCode = parts || "";
      const currentGrade = parts || "";
      return (
        currentGrade === selectedGrade && subCode.includes(currentSubLetter)
      );
    });

    const matched = gradeFiltered.filter((student) => {
      if (!student || !student.id) return false;
      const idParts = student.id.split("-");
      const namePart = idParts || "";
      const pinPart = idParts || "";
      const phonePart = student.parentMobile || "";

      return (
        student.id.includes(value) ||
        namePart.includes(value) ||
        pinPart.includes(value) ||
        phonePart.includes(value)
      );
    });

    setSuggestions(matched.map((student) => student.id));
  };

  const selectSuggestion = (id) => {
    setFormData({ ...formData, studentId: id });
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentId) {
      setError("කරුණාකර වලංගු ශිෂ්‍ය ID එකක් තෝරන්න! ❌");
      setSuccess("");
      return;
    }

    const idParts = formData.studentId.split("-");
    const extractedName = idParts || "Student";

    const newPayment = {
      id: Date.now(),
      studentId: formData.studentId,
      studentName: extractedName,
      month: formData.month,
      amount: parseInt(formData.amount),
      maths_fees: subject === "maths" ? "Paid" : "Pending",
      science_fees: subject === "science" ? "Paid" : "Pending",
      english_fees: subject === "english" ? "Paid" : "Pending",
    };

    setPaymentRecords([newPayment, ...paymentRecords]);
    setSuccess("ගාස්තු වාර්තාව සාර්ථකව සටහන් විය! 🟢");
    setError("");
    setFormData({ studentId: "", month: "May", amount: "1500" });

    setTimeout(() => setSuccess(""), 4000);
  };

  const getWhatsAppLink = (row) => {
    const rawMobile = parentNumbers[row.studentId] || "";
    let cleanMobile = rawMobile.trim().replace("+", "");

    if (cleanMobile.startsWith("0")) {
      cleanMobile = "94" + cleanMobile.substring(1);
    }

    if (cleanMobile === "") {
      cleanMobile = "94787030317";
    }
    const message =
      "Educa%20O/L%20Learning%20Platform%20-%20Payment%20Receipt%0A" +
      "---------------------------------------------%0A" +
      "Dear%20Parent,%20your%20child%20" +
      String(row.studentName) +
      "%20(ID:%20" +
      String(row.studentId) +
      ")%20" +
      "has%20successfully%20paid%20the%20fees%20for%20" +
      String(row.month) +
      ".%0A%0A" +
      "🧠%20Maths:%20" +
      (row.maths_fees === "Paid" ? "✓%20Paid" : "✗%20Pending") +
      "%0A" +
      "🧪%20Science:%20" +
      (row.science_fees === "Paid" ? "✓%20Paid" : "✗%20Pending") +
      "%0A" +
      "🔤%20English:%20" +
      (row.english_fees === "Paid" ? "✓%20Paid" : "✗%20Pending") +
      "%0A" +
      "---------------------------------------------%0A" +
      "Thank%20You!";

    return "https://wa.me" + cleanMobile + "?text=" + message;
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
          <FaMoneyCheckDollar /> Class Payments Vault ({subject?.toUpperCase()})
        </h3>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: "5px 0 0" }}>
          ශ්‍රේණි සහ මාස අනුව ශිෂ්‍ය පන්ති ගාස්තු (Fees) වාර්තා සටහන් කර
          දෙමාපියන්ට WhatsApp යවන්න.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "35px",
        }}>
        <div
          style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
            padding: "20px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #c7d2fe",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#4b6bfb",
              color: "white",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}>
            <FaUsers />
          </div>
          <div>
            <h4
              style={{
                margin: 0,
                color: "#1e1b4b",
                fontSize: "1.4rem",
                fontWeight: "800",
              }}>
              {totalPaidStudents}
            </h4>
            <p
              style={{
                margin: 0,
                color: "#4338ca",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}>
              Total Paid Students (ගෙවූ මුළු සිසුන් ගණන)
            </p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
            padding: "20px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #a7f3d0",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#10b981",
              color: "white",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}>
            <FaCoins />
          </div>
          <div>
            <h4
              style={{
                margin: 0,
                color: "#064e3b",
                fontSize: "1.4rem",
                fontWeight: "800",
              }}>
              Rs. {totalRevenue}/=
            </h4>
            <p
              style={{
                margin: 0,
                color: "#047857",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}>
              Total Collected Income (එකතු වූ මුළු මුදල)
            </p>
          </div>
        </div>
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
          gap: "30px",
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
            <FaCirclePlus /> Record Student Fee
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="input-group" style={{ position: "relative" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#1a0a54",
                  display: "block",
                  marginBottom: "5px",
                }}>
                Search Student ID
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}>
                <input
                  type="text"
                  placeholder="Type Name, PIN or Phone..."
                  required
                  value={formData.studentId}
                  onChange={handleIdChange}
                  style={{
                    width: "100%",
                    padding: "11px 35px 11px 12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <FaMagnifyingGlass
                  style={{ position: "absolute", right: "12px", color: "#aaa" }}
                />
              </div>

              {suggestions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    zIndex: 10,
                    maxHeight: "150px",
                    overflowY: "auto",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    marginTop: "5px",
                  }}>
                  {suggestions.map((id, idx) => (
                    <div
                      key={idx}
                      onClick={() => selectSuggestion(id)}
                      style={{
                        padding: "10px 12px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        fontSize: "0.88rem",
                        fontWeight: "bold",
                        color: "#1a0a54",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f4f7ff")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "white")
                      }>
                      {id}
                    </div>
                  ))}
                </div>
              )}
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
                Select Fee Month
              </label>
              <select
                name="month"
                value={formData.month}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m) => (
                  <option key={m} value={m}>
                    {m}
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
                Amount (LKR)
              </label>
              <input
                type="number"
                name="amount"
                required
                value={formData.amount}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                }}
              />
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
                marginTop: "5px",
              }}>
              Save & Mark Paid
            </button>
          </form>
        </div>

        <div style={{ overflowX: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              flexWrap: "wrap",
              gap: "10px",
            }}>
            <h4
              style={{
                margin: 0,
                color: "#1a0a54",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}>
              <FaCalendarDays style={{ color: "#4b6bfb" }} /> Recent Payments
              Entry Log (Grade {selectedGrade})
            </h4>
            <button
              onClick={() => {
                if (paymentRecords.length === 0) {
                  alert("ඩවුන්ලෝඩ් කිරීමට දත්ත කිසිවක් නොමැත! ❌");

                  return;
                }
                let csvContent = "data:text/csv;charset=utf-8,";
                csvContent +=
                  "Student ID,Student Name,Month,Amount (LKR),Maths Fees,Science Fees,English Fees\n";
                paymentRecords.forEach((row) => {
                  const line = `${row.studentId},${row.studentName},${row.month},${row.amount},${row.maths_fees},${row.science_fees},${row.english_fees}`;
                  csvContent += line + "\n";
                });
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute(
                  "download",
                  `Payments_Report_Grade_${selectedGrade}.csv`,
                );
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              style={{
                background: "#26136d",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 10px rgba(38,19,109,0.15)",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#4338ca")}
              onMouseLeave={(e) => (e.target.style.background = "#26136d")}>
              📥 Export Excel Report
            </button>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.88rem",
              textAlign: "left",
            }}>
            <thead>
              <tr style={{ background: "#1a0a54", color: "white" }}>
                <th style={{ padding: "12px" }}>Student ID & Name</th>
                <th style={{ padding: "12px" }}>Month</th>
                <th style={{ padding: "12px" }}>Parent Mobile Input</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentRecords.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color: "#1a0a54",
                      }}>
                      {row.studentId}
                    </span>
                    <small style={{ color: "#777", fontWeight: "600" }}>
                      Name: {row.studentName}
                    </small>
                  </td>
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {row.month} <br />
                    <small style={{ color: "green" }}>Rs.{row.amount}/=</small>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <input
                      type="text"
                      placeholder="Enter Parent Mobile..."
                      value={parentNumbers[row.studentId] || ""}
                      onChange={(e) =>
                        handleParentNumberChange(row.studentId, e.target.value)
                      }
                      style={{
                        width: "135px",
                        padding: "6px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "0.8rem",
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <a
                      href={getWhatsAppLink(row)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#2ecc71",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}>
                      {/* <FaWorkspacePremium /> */}
                      Share Receipt
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsVault;
