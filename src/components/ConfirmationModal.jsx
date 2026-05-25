import {
  FaCircleCheck,
  FaCircleXmark,
  FaCircleExclamation,
} from "react-icons/fa6";

const ConfirmationModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  type = "warning",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(26, 10, 84, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
      }}>
      <div
        className="modal-card"
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "420px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          animation: "scaleUp 0.3s ease",
        }}>
        {/* Type Icon Dynamic Styling */}
        <div
          style={{
            fontSize: "3rem",
            color: type === "danger" ? "#e74c3c" : "#f39c12",
            marginBottom: "15px",
          }}>
          <FaCircleExclamation />
        </div>

        <h3 style={{ margin: "0 0 10px", color: "#1a0a54", fontWeight: "800" }}>
          {title}
        </h3>
        <p
          style={{
            margin: "0 0 25px",
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}>
          {message}
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button
            onClick={onCancel}
            style={{
              background: "#f4f6f9",
              color: "#555",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}>
            <FaCircleXmark /> No, Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              background: type === "danger" ? "#e74c3c" : "#1a0a54",
              color: "white",
              border: "none",
              padding: "10px 22px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}>
            <FaCircleCheck /> Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
