import "../LoginPage/login-style.css";
// after adding the import and reloading, the entire component does not load, only works on first load
import "../LoginPage/login"

import { Helmet } from "react-helmet";

function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>GameNonStop | Login & Register</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* cannot load */}
        {/* <script type="module" src="../LoginPage/login.js"></script> */}
      </Helmet>
      <body>
        <div className="form-container">
          <div className="col col-1">
            <div className="image-layer">
              <img
                src="../../../images/login-images/guy-playing-pc.png"
                className="form-image-main pcguy"
              />
              <img
                src="./../../images/login-images/login-controller.png"
                className="form-image controller"
              />
              <img
                src="./../../images/login-images/PSsymbol.png"
                className="form-image symbol"
              />
            </div>
            <p className="featured-words">
              You Are Few Minutes A Way To Get Your Favourite Games on{" "}
              <span>GameNonStop</span>
            </p>
          </div>
          <div className="col col-2">
            <div className="btn-box">
              <button className="btn btn-1" id="login">
                Sign In
              </button>
              <button className="btn btn-2" id="register">
                Sign Up
              </button>
            </div>
            {/* --Login Form-- */}
            <div className="login-form">
              <div className="form-title">
                <span className="title">Sign In</span>
              </div>
              <div className="form-inputs">
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    required
                  />
                  <i className="fa-solid fa-user icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    required
                  />
                  <i className="fa-solid fa-unlock icon"></i>
                </div>
                <div className="input-box submit">
                  <button className="input-submit">
                    <span>Sign In</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </div>
              </div>
              <div className="social-login">
                <i className="fa-brands fa-google"></i>
              </div>
            </div>
            {/* --Register Form-- */}
            <div className="register-form">
              <div className="form-title">
                <span className="title">Sign Up</span>
              </div>
              <div className="form-inputs">
                <div className="input-box">
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    required
                  />
                  <i className="fa-solid fa-envelope icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    required
                  />
                  <i className="fa-solid fa-user icon"></i>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    required
                  />
                  <i className="fa-solid fa-unlock icon"></i>
                </div>
                <div className="input-box submit">
                  <button className="input-submit">
                    <span>Sign Up</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </div>
              </div>
              <div className="social-login">
                <i className="fa-brands fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default LoginPage;
