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

import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="modern-login-screen">
      <div className="glass-card" data-aos="zoom-in">
        <div className="login-header">
          <div className="logo-circle">E</div>
          <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
          <p>
            {isLogin
              ? "Login to access your Educa dashboard"
              : "Join the smartest O/L community"}
          </p>
        </div>

        <form
          className="modern-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}>
          {!isLogin && (
            <div className="modern-input">
              <FaUser />
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className="modern-input">
            <FaEnvelope />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="modern-input">
            <FaLock />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-main-btn">
            {isLogin ? "Sign In" : "Register Now"} <FaArrowRight />
          </button>
        </form>

        <div className="form-footer">
          <p>
            {isLogin ? "New to Educa?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Create an account" : " Login here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
