import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "170px 100px" }}>
      <h1>404</h1>
      <p style={{ marginBottom: "20px" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          color: "#ff3c3c",
          fontWeight: "bold",
          padding: "10px 20px",
          letterSpacing: "1.2px",
          border: "2px solid #8d6e63",
          borderRadius: "6px",
        }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
