// import { Link } from "react-router-dom";

// function NotFound() {
//   return (
//     <div style={{ textAlign: "center", padding: "170px 100px" }}>
//       <h1>404</h1>
//       <p style={{ marginBottom: "20px" }}>
//         Oops! The page you're looking for doesn't exist.
//       </p>
//       <Link
//         to="/"
//         style={{
//           color: "#ff3c3c",
//           fontWeight: "bold",
//           padding: "10px 20px",
//           letterSpacing: "1.2px",
//           border: "2px solid #e2b7a7",
//           borderRadius: "6px",
//         }}>
//         Go Back Home
//       </Link>
//     </div>
//   );
// }

// export default NotFound;

import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="notfound-wrapper page-container">
      <div className="notfound-content" data-aos="zoom-in">
        <div className="error-code">404</div>
        <FaTriangleExclamation className="error-icon" />
        <h2>Oops! Page Not Found</h2>
        <p>
          It looks like you've taken a wrong turn. <br />
          Don't worry, let's get you back to class!
        </p>
        <Link to="/" className="start-btn">
          <FaHome /> Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
