import React from "react";
import validate from "./authenticate";
import UserRegister from "./Registeruser";
import "./SignUp.css";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const RegisterSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UserRegister(
    submitForm,
    validate
  );


  const signup = async (event) => {
    try {
      const obj = JSON.stringify({
        username:values.username,
        email: values.email,
        password: values.password,
      });

      const res = await fetch(`${BASE_URL}/user/register`, {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: obj,
      });
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-Content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="register-title">
          Sign Up
        </h1>
        <div className="register-inputs">
            <label className="register-label">Username</label>
            <input
              className="register-input"
              type="Username"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="register-inputs">
            <label className="register-label">Email</label>
            <input
              className="register-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="register-inputs">
            <label className="register-label">Password</label>
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="btn" type="submit" onClick={signup}>
            Sign up
          </button>
          <span className="register-input-login">
            Already have an Account? <Link to="/login" className="register-login-btn">LOGIN HERE </Link>
          </span>
      </form>
      </div>
  );
};

export default RegisterSignup;
