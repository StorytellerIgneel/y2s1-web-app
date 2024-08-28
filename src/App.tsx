import React, { useState } from 'react';
import './login-style.css'; // Ensure this file has your existing CSS

const LoginRegister = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleRegisterClick = () => {
    setIsLoginActive(false);
  };

  return (
    <div className="form-container">
      <div className="col col-1" style={{
        borderRadius: isLoginActive ? '0 10% 30% 0' : '0 30% 10% 0',
      }}>
        <div className="image-layer">
          <img src="./src/assets/images/guy-playing-pc.png" className="form-image-main pcguy" alt="Guy playing PC" />
          <img src="./src/assets/images/login-controller.png" className="form-image controller" alt="Controller" />
          <img src="./src/assets/images/PSsymbol.png" className="form-image symbol" alt="PS Symbol" />
        </div>
        <p className="featured-words">
          You Are Few Minutes Away To Get Your Favourite Games on <span>GameNonStop</span>
        </p>
      </div>
      <div className="col col-2">
        <div className="btn-box">
          <button
            className="btn btn-1"
            id="login"
            onClick={handleLoginClick}
            style={{
              backgroundColor: isLoginActive ? '#ff3131' : 'rgba(255,255,255,0.2)',
            }}
          >
            Sign In
          </button>
          <button
            className="btn btn-2"
            id="register"
            onClick={handleRegisterClick}
            style={{
              backgroundColor: !isLoginActive ? '#ff3131' : 'rgba(255,255,255,0.2)',
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        <div
          className="login-form"
          style={{
            left: isLoginActive ? '10%' : '150%',
            opacity: isLoginActive ? 1 : 0,
          }}
        >
          <div className="form-title">
            <span className="title">Sign In</span>
          </div>
          <div className="form-inputs">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username" required />
              <i className="fa-solid fa-user icon"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" required />
              <i className="fa-solid fa-unlock icon"></i>
            </div>
            <div className="input-box submit">
              <input type="submit" className="input-submit" value="Sign In" />
            </div>
          </div>
          <div className="social-login">
            <i className="fa-brands fa-google"></i>
          </div>
        </div>

        {/* Register Form */}
        <div
          className="register-form"
          style={{
            left: isLoginActive ? '-50%' : '60%',
            opacity: isLoginActive ? 0 : 1,
          }}
        >
          <div className="form-title">
            <span className="title">Sign Up</span>
          </div>
          <div className="form-inputs">
            <div className="input-box">
              <input type="email" className="input-field" placeholder="Email" required />
              <i className="fa-solid fa-envelope icon"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username" required />
              <i className="fa-solid fa-user icon"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" required />
              <i className="fa-solid fa-unlock icon"></i>
            </div>
            <div className="input-box submit">
              <input type="submit" className="input-submit" value="Sign Up" />
            </div>
          </div>
          <div className="social-login">
            <i className="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
