import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // දැනට ලොගින් වුණාම ඩෑෂ්බෝඩ් එකට යවනවා
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
        id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Register</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlays-container">
          <div className="overlays">
            <div className="overlays-panel overlays-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(false)}>
                Login
              </button>
            </div>
            <div className="overlays-panel overlays-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(true)}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
