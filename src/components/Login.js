import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [reg, setReg] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const loginHandle = (event) => {
    event.preventDefault();

    let loginUser = event.target.loginUser.value;
    setName(loginUser);
    let loginPassword = event.target.password.value;
    let users = JSON.parse(localStorage.getItem("users"));
    // console.log(users);
    let authenticatedUser =
      users &&
      users.find(
        (user) => user.username === loginUser && user.password === loginPassword
      );

    console.log(authenticatedUser);
    if (authenticatedUser) {
      navigate("/dashboard", { state: { loginUser } });
    } else {
      alert("Invalid username or password");
    }
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    var username = e.target.username.value;
    var password = e.target.pass.value;

    // get data from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //check duplicate data
    let existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert("User already exists. please create a new one");
    } else {
      if (!existingUser) {
        users.push({ username: username, password: password });
        //update username and password

        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration updated successfully");
        e.target.username.value = "";
        e.target.pass.value = "";
      } else {
        alert("please enter a valid password");
      }
    }
  };
  const handleCheckboxChange = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <div className="body">
        <Link to="/"></Link>
        <div className={reg ? "container right-panel-active" : "container"}>
          <div className="form-container register-container">
            <form id="register-form" onSubmit={handleRegistration}>
              <h1>Register</h1>
              <div className="social-container">
                <a href="#">
                  <img src="facebook.png" />
                </a>
                <a href="#">
                  <img src="google-plus.png" />
                </a>
                <a href="#">
                  <img src="linkedin.png" />
                </a>
              </div>
              <span>or use your email for registration</span>

              <input
                type="text"
                placeholder="Username"
                id="username"
                required
                name="username"
              />
              {show ? (
                <input
                  type="text"
                  name="pass"
                  placeholder="Password"
                  id="pwd1"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              ) : (
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  id="pwd2"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              )}
              <div className="showPass">
                <input
                  type="checkbox"
                  name="showPassword"
                  id="passType1"
                  onChange={handleCheckboxChange}
                />
                <label for="showPassword">Show Password</label>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form id="signIn-form" onSubmit={loginHandle}>
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#">
                  <img src="facebook.png" />
                </a>
                <a href="#">
                  <img src="google-plus.png" />
                </a>
                <a href="#">
                  <img src="linkedin.png" />
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="text"
                placeholder="Username"
                id="users"
                required
                name="loginUser"
              />
              {show ? (
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  id="pwd"
                  title="please enter correct password"
                  required
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  title="please enter correct password"
                  id="pwd"
                  required
                />
              )}
              <div className="showPass">
                <input
                  type="checkbox"
                  name="showPassword"
                  id="passType2"
                  onChange={handleCheckboxChange}
                />
                <label for="showPassword">Show Password</label>
              </div>
              <a href="#">Forgot your password?</a>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="overlay-button"
                  id="signIn"
                  onClick={() => {
                    setReg(false);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="overlay-button"
                  id="signUp"
                  onClick={() => {
                    setReg(true);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
