import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaScaleBalanced,
  FaShieldHalved,
  FaFileContract,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";

const Terms = () => {
  const navigate = useNavigate();
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleAccept = () => {
    setHasAgreed(true);
    alert("ඔබ සේවා කොන්දේසි සාර්ථකව පිළිගන්නා ලදී! 🟢");
    navigate("/"); // හෝම් පේජ් එකට පන්නනවා
  };

  return (
    <div
      className="legal-wrapper"
      style={{
        padding: "50px 20px",
        background: "#f8faff",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        className="legal-container"
        style={{
          maxWidth: "750px",
          background: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
          border: "1px solid #eef2ff",
        }}>
        {/* Header Icon */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#1a0a54",
              color: "white",
              borderRadius: "50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              marginBottom: "15px",
            }}>
            <FaFileContract />
          </div>
          <h2 style={{ color: "#1a0a54", margin: 0, fontWeight: "800" }}>
            Terms of Service (සේවා කොන්දේසි)
          </h2>
          <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "5px" }}>
            Last Updated: May 2026
          </p>
        </div>

        {/* Legal Text Area */}
        <div
          className="legal-content"
          style={{
            maxHeight: "350px",
            overflowY: "auto",
            padding: "20px",
            background: "#fcfcfd",
            borderRadius: "16px",
            border: "1px solid #eee",
            fontSize: "0.92rem",
            lineHeight: "1.6",
            color: "#333",
          }}>
          <h4 style={{ color: "#1a0a54", marginTop: 0 }}>
            <FaScaleBalanced /> 1. Intellectual Property Ownership
          </h4>
          <p>
            The entire source code, user interface designs, visual assets, and
            underlying software architecture of the <strong>educa.</strong>{" "}
            platform are the exclusive intellectual property of{" "}
            <strong>Lakshan (The Developer)</strong>. Users and faculties are
            granted a limited, non-transferable license to access the system.
            Any unauthorized copying, distribution, or reverse-engineering of
            this software is strictly prohibited by law.
          </p>

          <h4 style={{ color: "#1a0a54" }}>
            <FaShieldHalved /> 2. SaaS Subscription & Maintenance Agreement
          </h4>
          <p>
            This platform operates under a Fixed Monthly Subscription Service
            level agreement. Partnered teaching faculties are strictly bound to
            settle the agreed monthly maintenance tokens to ensure uninterrupted
            cloud hosting, database synchronization, and server operations.
            Failure to settle dues within the designated cycle may result in
            temporary administration panel deployment suspension.
          </p>

          <h4 style={{ color: "#1a0a54" }}>3. Permitted Academic Usage</h4>
          <p>
            The administrative portals, class logs, and score registries are
            explicitly reserved for authorized card-marker staff and teachers.
            Data entries must belong strictly to registered institutional
            students. Any misuse of system parameters, script injections, or
            brute-force logins will result in permanent programmatic IP
            restriction.
          </p>
        </div>

        {/* Interactive Confirmation and Decline Buttons */}
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid #eee",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#fce4e4",
              color: "#c0392b",
              border: "none",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
            }}>
            <FaCircleXmark /> Decline / Cancel
          </button>
          <button
            onClick={handleAccept}
            style={{
              background: "#1a0a54",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              boxShadow: "0 4px 12px rgba(26,10,84,0.2)",
            }}>
            <FaCircleCheck /> I Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
