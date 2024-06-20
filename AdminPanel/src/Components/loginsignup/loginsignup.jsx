import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,12}$/;
    return re.test(password);
  };

  const handleSubmit = () => {
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (action === "Sign Up" && (!name || name.length < 2)) {
      setError("Please enter a name with at least 2 characters.");
      return;
    }
    if (!password || !validatePassword(password)) {
      setError("Password must be 6-12 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      return;
    }

    // Reset error if validation passes
    setError("");

    // Perform login/signup logic here

    // On success, navigate to the home page
    navigate('/home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleAction = () => {
    setAction(action === "Login" ? "Sign Up" : "Login");
    setError("");
  };

  return (
    <div className="container-wrapper">
      <div className="containers">
        <div className="header">
          <div className="text">{action}</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="/assets/email.jpeg" height={35} width={35} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email"
              size="40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {action === "Sign Up" && (
            <div className="input">
              <img src="/assets/person.jpeg" height={35} width={35} alt="Person Icon" />
              <input
                type="text"
                size="40"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="input">
            <img src="/assets/password.png" height={32} width={35} alt="Password Icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              size="40"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <img 
              src={passwordVisible ? "/assets/eyesopen.png" : "/assets/eyesclosed.png"} 
              height={20} 
              width={17} 
              alt="Toggle Password Visibility" 
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            /> */}
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}

        <div className="submit-container">
          <div className="submit-button" onClick={handleSubmit}>{action}</div>
        </div>
        <div className="toggle-container">
          {action === "Login" ? (
            <p>Don't have an account? <span onClick={toggleAction} className="toggle-action">Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={toggleAction} className="toggle-action">Login</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
