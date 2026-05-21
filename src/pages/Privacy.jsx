// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShieldHalved,
  FaUserLock,
  FaEyeSlash,
  FaCircleCheck,
  //   FaCircleXmark,
} from "react-icons/fa6";

const Privacy = () => {
  const navigate = useNavigate();

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
              background: "#2ecc71",
              color: "white",
              borderRadius: "50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              marginBottom: "15px",
            }}>
            <FaShieldHalved />
          </div>
          <h2 style={{ color: "#1a0a54", margin: 0, fontWeight: "800" }}>
            Privacy Policy (රහස්‍යතා ප්‍රකාශය)
          </h2>
          <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "5px" }}>
            Student & Parent Data Integrity Standard
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
            <FaUserLock /> 1. Student Identity Safeguarding
          </h4>
          <p>
            We are fully committed to protecting the dynamic privacy of minors.
            Student identities, test scores, and mobile tracking records
            compiled within this system are explicitly restricted from any
            third-party advertising or public data brokers. Data sets are
            securely maintained inside Google Firebase servers with robust
            algorithmic constraints.
          </p>

          <h4 style={{ color: "#1a0a54" }}>
            <FaEyeSlash /> 2. Dynamic Identity Masking (XXXX Logic)
          </h4>
          <p>
            To preserve student confidentiality on communal indices, the
            platform executes a native identity mask algorithm across all public
            interfaces. Student identification strings rendered on global logs
            are programmatically converted into an untraceable layout (e.g.,{" "}
            <code>EDU-MES-11-LAKXXXXX-0102</code>), ensuring complete localized
            obscurity.
          </p>

          <h4 style={{ color: "#1a0a54" }}>3. Data Application Scope</h4>
          <p>
            Administrative staff collect student metadata solely for direct
            parent communication triggers. Financial ledgers and weekly progress
            reports are rendered instantly to unique parental gateways via
            automated web string integrations linked directly with WhatsApp
            messaging protocols.
          </p>
        </div>

        {/* Confirmation Action Button */}
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid #eee",
            paddingTop: "25px",
            textAlign: "right",
          }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#2ecc71",
              color: "white",
              border: "none",
              padding: "12px 35px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              boxShadow: "0 4px 12px rgba(46,204,113,0.2)",
            }}>
            <FaCircleCheck /> Acknowledge Privacy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
