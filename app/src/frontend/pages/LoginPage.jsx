import "../LoginPage/login-style.css";
// after adding the import and reloading, the entire component does not load, only works on first load

import React, { useEffect, useState, useRef} from "react";
import OAuth from "../../backend/OAuth";
import { Helmet } from "react-helmet";
import { GoogleOAuthProvider } from "@react-oauth/google";

function LoginPage() {
  const form = useRef();
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [triggerLogin, setTriggerLogin] = useState(false);

  const handleLoginClick = () => {
    setLogin(true);
    setRegister(false);
  };

  const handleRegisterClick = () => {
    setRegister(true);
    setLogin(false);
  };

  const googleLogin = () => {
    // call OAuth login function
    setTriggerLogin(true);
  }

  const Login = (e) => {
    if (name === "" && email === "" && message === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!'
      });
    }
    else {
      Swal.fire({
        title: 'Are you sure you want to submit?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Yes, Submit",
        cancelButtonText: "No"
      }).then((result) => {
        Swal.fire("Submitted!", "Your message has been sent to the customer service team.", "success")
    })
    }
      
    e.preventDefault();

    const url = "http://localhost:8000/login.php";

    let formData = new FormData();
    formData.append('user_name', name);
    formData.append('user_email', email);
    formData.append('user_message', password);

    axios.post(url, formData)
    .then((response) => alert(response.data))
    .catch(error => alert(error.message))
  };

  return (
    <GoogleOAuthProvider clientId="721278939294-754epiosjucfqahjktvlnt89f7j8o42b.apps.googleusercontent.com">
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
          </Helmet>
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
                <form ref={form} onSubmit={Login}>
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
                        name = "username"
                        onChange = {(e) => setName(e.target.value)}
                        placeholder="Username"
                        required
                      />
                      <i className="fa-solid fa-user icon"></i>
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        className="input-field"
                        name = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <i className="fa-solid fa-unlock icon"></i>
                    </div>
                    <div className="input-box submit">
                      <button className={login? "loginBtn-clicked" : "loginBtn-notClicked"
                      } onClick={handleLoginClick}>
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
                        name = "email"
                        onChange = {(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                      />
                      <i className="fa-solid fa-envelope icon"></i>
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        className="input-field"
                        name = "username"
                        onChange = {(e) => setName(e.target.value)}
                        placeholder="Username"
                        required
                      />
                      <i className="fa-solid fa-user icon"></i>
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        className="input-field"
                        name = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <i className="fa-solid fa-unlock icon"></i>
                    </div>
                    <div className="input-box submit">
                      <button className={register? "registerBtn-clicked": "registerbtn-notClicked"}
                        onClick={handleRegisterClick}>
                        <span>Sign Up</span>
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </button>
                    </div>
                  </div>
                  <div className="social-login">
                    <i className="fa-brands fa-google" onClick={googleLogin}></i>
                    <OAuth triggerLogin={triggerLogin} />
                  </div>
                </div>
                </form>
              </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
