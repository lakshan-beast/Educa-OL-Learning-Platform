// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // දැනට ලොගින් වුණාම ඩෑෂ්බෝඩ් එකට යවනවා
//     navigate("/dashboard");
//   };

//   return (
//     <div className="login-wrapper">
//       <div
//         className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
//         id="container">
//         {/* Sign Up Form */}
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button type="button">Register</button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div className="form-container sign-in-container">
//           <form onSubmit={handleLogin}>
//             <h1>Sign in</h1>
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
//             <button type="submit">Login</button>
//           </form>
//         </div>

//         {/* Overlay Section */}
//         <div className="overlays-container">
//           <div className="overlays">
//             <div className="overlays-panel overlays-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button
//                 className="ghost"
//                 onClick={() => setIsRightPanelActive(false)}>
//                 Login
//               </button>
//             </div>
//             <div className="overlays-panel overlays-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start your journey with us</p>
//               <button
//                 className="ghost"
//                 onClick={() => setIsRightPanelActive(true)}>
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from "react";
// import { FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/dashboard"); // Login වුණාම dashboard යනවා
//   };

//   return (
//     <div className="login-page-wrapper">
//       <div className={`login-container ${isSignup ? "active" : ""}`}>
//         {/* Sign In Form */}
//         <div className="form-box login">
//           <form onSubmit={handleLogin}>
//             <h1>Sign In</h1>
//             <div className="input-group">
//               <FaEnvelope />
//               <input type="email" placeholder="Email Address" required />
//             </div>
//             <div className="input-group">
//               <FaLock />
//               <input type="password" placeholder="Password" required />
//             </div>
//             <a href="#" className="forgot-pass">
//               Forgot Password?
//             </a>
//             <button type="submit" className="start-btn">
//               Login <FaArrowRight />
//             </button>
//             <p className="mobile-toggle">
//               Don't have an account?{" "}
//               <span onClick={() => setIsSignup(true)}>Register</span>
//             </p>
//           </form>
//         </div>

//         {/* Sign Up Form */}
//         <div className="form-box register">
//           <form action="#">
//             <h1>Create Account</h1>
//             <div className="input-group">
//               <FaUser />
//               <input type="text" placeholder="Full Name" required />
//             </div>
//             <div className="input-group">
//               <FaEnvelope />
//               <input type="email" placeholder="Email Address" required />
//             </div>
//             <div className="input-group">
//               <FaLock />
//               <input type="password" placeholder="Password" required />
//             </div>
//             <button type="submit" className="start-btn">
//               Register
//             </button>
//             <p className="mobile-toggle">
//               Already have an account?{" "}
//               <span onClick={() => setIsSignup(false)}>Login</span>
//             </p>
//           </form>
//         </div>

//         {/* Sliding Overlay Panels */}
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button className="browse-btn" onClick={() => setIsSignup(false)}>
//                 Sign In
//               </button>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1>Hello, Student!</h1>
//               <p>
//                 Enter your personal details and start your journey with Educa
//               </p>
//               <button className="browse-btn" onClick={() => setIsSignup(true)}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <div className="new-login-wrapper">
//       <div className="login-side-panel">
//         <div className="panel-content">
//           <h1>{isLogin ? "Welcome Back!" : "Join Educa Today"}</h1>
//           <p>
//             {isLogin
//               ? "Keep track of your progress and ace your exams."
//               : "Start your journey to success with the best tutors."}
//           </p>
//           {/* <img src="https://iconscout.com" alt="Educa Learning" /> */}
//         </div>
//       </div>

//       <div className="login-form-panel">
//         <div className="form-container">
//           <div className="form-header">
//             <h2>{isLogin ? "Login to Account" : "Create New Account"}</h2>
//             <p>
//               {isLogin
//                 ? "Enter your details to stay connected."
//                 : "Fill in the details to get started."}
//             </p>
//           </div>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               navigate("/dashboard");
//             }}>
//             {!isLogin && (
//               <div className="input-field">
//                 <FaUser />
//                 <input type="text" placeholder="Your Full Name" required />
//               </div>
//             )}
//             <div className="input-field">
//               <FaEnvelope />
//               <input type="email" placeholder="Email Address" required />
//             </div>
//             <div className="input-field">
//               <FaLock />
//               <input type="password" placeholder="Password" required />
//             </div>

//             {isLogin && (
//               <a href="#" className="forgot-link">
//                 Forgot Password?
//               </a>
//             )}

//             <button type="submit" className="login-submit-btn">
//               {isLogin ? "Login Now" : "Register Now"} <FaArrowRight />
//             </button>
//           </form>

//           <div className="toggle-footer">
//             <p>
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button onClick={() => setIsLogin(!isLogin)}>
//                 {isLogin ? "Create Account" : "Login Here"}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <div className="modern-login-screen">
//       <div className="glass-card" data-aos="zoom-in">
//         <div className="login-header">
//           <div className="logo-circle">E</div>
//           <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
//           <p>
//             {isLogin
//               ? "Login to access your Educa dashboard"
//               : "Join the smartest O/L community"}
//           </p>
//         </div>

//         <form
//           className="modern-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             navigate("/dashboard");
//           }}>
//           {!isLogin && (
//             <div className="modern-input">
//               <FaUser />
//               <input type="text" placeholder="Full Name" required />
//             </div>
//           )}
//           <div className="modern-input">
//             <FaEnvelope />
//             <input type="email" placeholder="Email Address" required />
//           </div>
//           <div className="modern-input">
//             <FaLock />
//             <input type="password" placeholder="Password" required />
//           </div>

//           <button type="submit" className="login-main-btn">
//             {isLogin ? "Sign In" : "Register Now"} <FaArrowRight />
//           </button>
//         </form>

//         <div className="form-footer">
//           <p>
//             {isLogin ? "New to Educa?" : "Already have an account?"}
//             <span onClick={() => setIsLogin(!isLogin)}>
//               {isLogin ? " Create an account" : " Login here"}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { approvedStudents } from "../data/studentsList"; // Approved ලැයිස්තුව ගත්තා

// const Login = () => {
//   const [studentId, setStudentId] = useState("");
//   const [pin, setPin] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const cleanId = studentId.trim().toUpperCase();

//     // 1. ID එක ඔයා Approved කරපු ලැයිස්තුවේ තියෙනවාද බලනවා
//     if (approvedStudents.includes(cleanId)) {
//       // 2. ID එක ඇතුළේ තියෙන PIN එකයි ළමයා ගහපු PIN එකයි සමානද බලනවා (Last 4 characters check)
//       if (cleanId.endsWith(pin.trim())) {
//         // 3. ළමයාගේ විස්තර LocalStorage එකේ සේව් කරලා Dashboard එකට යවනවා
//         localStorage.setItem("user_id", cleanId);
//         localStorage.setItem("isLoggedIn", "true");
//         navigate("/dashboard");
//         window.location.reload();
//       } else {
//         setError("Incorrect 4-Digit PIN! ❌");
//       }
//     } else {
//       setError(
//         "Your ID is Not Approved or Invalid! Please contact the class card marker. ❌",
//       );
//     }
//   };

//   return (
//     <div
//       className="card-container login-card"
//       style={{ maxWidth: "400px", margin: "40px auto", padding: "30px" }}>
//       <h2>Student Login Portal 🔒</h2>
//       <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "20px" }}>
//         Enter your approved student ID and PIN to enter the dashboard.
//       </p>

//       <form onSubmit={handleLogin} className="styled-form">
//         <div className="input-group">
//           <label>Approved Student ID</label>
//           <input
//             type="text"
//             placeholder="ex: EDU-MES-11-LAKSHAN-0305"
//             required
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             style={{ textTransform: "uppercase" }}
//           />
//         </div>
//         <div className="input-group">
//           <label>4-Digit PIN</label>
//           <input
//             type="password"
//             maxLength="4"
//             placeholder="ex: 0305"
//             required
//             value={pin}
//             onChange={(e) =>
//               e.target.value.length <= 4 && setPin(e.target.value)
//             }
//           />
//         </div>

//         {error && (
//           <p style={{ color: "red", fontSize: "0.85rem", marginTop: "5px" }}>
//             {error}
//           </p>
//         )}

//         <button
//           type="submit"
//           className="start-btn"
//           style={{ width: "100%", marginTop: "15px" }}>
//           Access Dashboard
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// src/pages/Login.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 👑 අර අපි හදපු මධ්‍යම ෆයිල් එකෙන් ඔක්කොම එකතු කරපු ලැයිස්තුව විතරක් import කරගත්තා
import { allApprovedStudents } from "../data/approvedStudents";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  // const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const cleanId = studentId.trim().toUpperCase();
  //   // const cleanPIn = pin.trim();

  //   // 🔍 දැන් මෙතනින් මුළු ලැයිස්තුවම එකපාර පරීක්ෂා කරනවා
  //   if (allApprovedStudents.includes(cleanId)) {
  //     if (cleanId.endsWith(pin.trim())) {
  //       localStorage.setItem("user_id", cleanId);
  //       localStorage.setItem("isLoggedIn", "true");

  //       // ID එකෙන් 'MES' වගේ Subject Code එක වෙන් කරගෙන LocalStorage එකට දැමීම
  //       const idParts = cleanId.split("-");
  //       const subjectCode = idParts[1]; // 2වෙනි කෑල්ල (MES / M / ME)
  //       localStorage.setItem("user_subjects", subjectCode);

  //       navigate("/dashboard");
  //       window.location.reload();
  //     } else {
  //       setError("Incorrect 4-Digit PIN! ❌");
  //     }
  //   } else {
  //     setError("Your ID is Not Approved or Invalid! ❌");
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    const cleanId = studentId.trim().toUpperCase();
    const cleanPassword = password.trim(); // 🆕 Password එක ගත්තා

    // 🔍 1. මධ්‍යම ලැයිස්තුවෙන් මේ ශිෂ්‍ය ID එක තියෙන Object එක සොයාගන්නවා
    const studentFound = allApprovedStudents.find(
      (student) => student.id === cleanId,
    );

    if (studentFound) {
      // 🔍 2. ID එක හමු වුණොත්, ඒ Object එක ඇතුළේ තියෙන රහස් Password එක සමානද බලනවා
      if (studentFound.password === cleanPassword) {
        localStorage.setItem("user_id", cleanId);
        localStorage.setItem("isLoggedIn", "true");

        // ID එකෙන් Subject Code එක (MES) වෙන් කර ගැනීම
        const idParts = cleanId.split("-");
        const subjectCode = idParts[1];
        localStorage.setItem("user_subjects", subjectCode);

        navigate("/dashboard");
        window.location.reload();
      } else {
        setError("Incorrect Password! ❌");
      }
    } else {
      setError("Your ID is Not Approved or Invalid! ❌");
    }
  };

  return (
    // ... ඔයාගේ Login UI Form එක ...
    <div
      className="card-container login-card"
      style={{ maxWidth: "400px", margin: "40px auto", padding: "30px" }}>
      <h2>Student Login Portal </h2>
      <p style={{ fontSize: "0.85rem", marginBottom: "20px" }}>
        Enter your approved student ID and PIN to enter the dashboard.
      </p>

      <form onSubmit={handleLogin} className="styled-form">
        <div className="input-group">
          <label>Approved Student ID</label>
          <input
            type="text"
            placeholder="ex: EDU-MES-11-LAKSHAN-0305"
            required
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={{ textTransform: "uppercase" }}
          />
        </div>
        <div className="input-group">
          <label>4-Digit PIN</label>
          <input
            type="password"
            // maxLength="4"
            placeholder="ex: 0305"
            required
            value={password}
            onChange={(e) =>
              e.target.value.length <= setPassword(e.target.value)
            }
          />
        </div>

        {error && (
          <p style={{ color: "red", fontSize: "0.85rem", marginTop: "5px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className="login-btn"
          style={{ width: "100%", marginTop: "15px" }}>
          Access Dashboard
        </button>
      </form>
    </div>
  );
};

export default Login;
