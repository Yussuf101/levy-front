import React, { useState } from "react";
import "./SignUp.css";
import RegisterCard from "./RegisterCard";
import RegisterSuccess from "./RegisterSuccess";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return(
    <>
    <div className="register-Container">
        <div className="form-content-left">
        </div>
        {!isSubmitted ? (
          <RegisterCard submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
        </div>
    </>
  );
};
export default Signup;
