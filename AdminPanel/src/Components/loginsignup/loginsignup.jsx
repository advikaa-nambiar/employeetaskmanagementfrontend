import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform login/signup logic here
    // On success, navigate to the home page
    navigate('/home');
  };

  return (
    <div className='containers'>
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="/assets/email.png" height={35} width={35} alt="Email Icon" />
          <input type="email" placeholder="Email" size="40" />
        </div>

        <div className="input">
          <img src="/assets/person.jpeg" height={35} width={35} alt="Person Icon" />
          <input type="text" size="40" placeholder="Name" />
        </div>

        <div className="input">
          <img src="/assets/password.png" height={32} width={35} alt="Password Icon" />
          <input type="password" size="40" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-pwd">Forgot Password? <a href="https://mail.google.com/mail/u/0/#inbox" color='black'>Click Here</a> </div>
      <div className="submit-container">
        <div className="signup" onClick={handleSubmit}>Sign Up</div>
        <div className="login" onClick={handleSubmit}>Login</div>
      </div>
      {/* <div className="submit-button-container"> */}
        {/* { <button id="submit" onClick={handleSubmit}>Submit</button> } */}
      {/* </div> */}
    </div>
  );
};

export default LoginSignup;
