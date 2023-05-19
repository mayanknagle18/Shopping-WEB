import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await signUp(email, password);
      navigate("/login");
    }
    catch(err){
      setError(err.message);
    }
  };

  const backHandler = () => {
    navigate("/login");
  }; 

  const emailHandler = (e) => {
    let email = e.target.value;
    if(email.indexOf("@")<4){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }
    setEmail(email);
  };

  const passwordHandler = (e) => {
    let password = e.target.value;
    if(password.length<5){
      setPasswordError(true);
    }
    else{
      setPasswordError(false);
    }
    setPassword(password);
  };

  const checkboxHandler = (e) => {
    let check = e.target.checked;
    setCheckboxValue(check);
    if(check){
      checkboxValue=true;
    }
    else{
     checkboxValue=false;
    }
  };


  return (
    <div className="container d-flex justify-content-center w-100">
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-primary mt-2">Signup Form</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <form className="form" onSubmit={submitHandler}>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input-field"
            onChange={emailHandler}
          />
          {emailError ? <p style={{color: "red"}}>Email Id is Invalid!</p> : ""}
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            onChange={passwordHandler}
          />
          {passwordError ? <p style={{color: "red"}}>Password is Invalid!</p> : ""}
          <br />
          <input type="checkbox" className="checkbox" onChange={checkboxHandler}/>
          <span className="span">I agree all statements in</span>
          <br />
          <a href="#" className="termsofservice">
            Terms of service
          </a>
          <hr />
          <button
            type="submit"
            className="btn btn-primary rounded p-2 w-50 mx-2 btn-foldregister"
            disabled={!checkboxValue}
          >
            Register
          </button>
          <button
            type="submit"
            className="btn btn-primary rounded p-2 w-35 btn-foldback"
            onClick={backHandler}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
