import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";

const RegisterSuccess = () => {
  
  return (
    <div className="register-success-content">
      <h1>Sign Up Successfull</h1>
      <div>
      <Button
          className="register-input-btn login-btn"
          type="submit"
          onClick={<Link to='/LevyCalculator'></Link>}
        >
          Go to the Levy Calculator
        </Button>
        </div>
      {/* <div classname="success-title-container">
      </div>
      <div className="success-img"></div> */}
    </div>
  );
};

export default RegisterSuccess;
