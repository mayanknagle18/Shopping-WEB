import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import image from "../../Images/google.jpg";
import { useUserAuth } from "../Context/UserAuthContext";
import { Alert } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [checkboxValue, setCheckboxValue] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await logIn(email, password);
      navigate("/dashboard");
    }
    catch(err){
      setError(err.message);
    }
  };

  const signUpHandler = () => {
    navigate("/signup");
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

  const googleSignInHandler = async (e) => {
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/dashboard");
    }
    catch(err){
      setError(err.message);
    }
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

  
  return (
    <div>
      <div className="container d-flex justify-content-center w-100">
          <div className="text-center">
            <div className="text-center">
              <h2 className="text-primary mt-2">Login Form</h2>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
                <form className="form" onSubmit={submitHandler}>
                  <label>Email</label>
                  <br />
                  <input type="text" placeholder="Enter Your Email" className="input-field" onChange={emailHandler}/>
                  {emailError ? <p style={{color: "red"}}>Email Id is Invalid!</p> : ""}
                  <br />
                  <label>Password</label>
                  <br />
                  <input type="password" placeholder="Enter Your Password" className="input-field" onChange={passwordHandler}/>
                  {passwordError ? <p style={{color: "red"}}>Password is Invalid!</p> : ""}
                  <br />
                  <input type="checkbox" className="checkbox" onChange={checkboxHandler}/>
                  <span className="span">Remember Me*</span>
                  <br />
                  <button type="submit" id="btnsubmit" className="btn btn-primary rounded p-2 w-50" disabled={!checkboxValue}>Login</button>
                  <hr />
                  <button type="submit" className="btn btn-primary rounded p-2 w-100" onClick={googleSignInHandler}><img src={image} width="25px" className="mx-2"/> Signup With Google</button>
                  <p className="newregisteration">New to Shopping WEB</p>
                  <button type="submit" className="btn btn-primary rounded p-2 w-50" onClick={signUpHandler}>Signup</button>
                </form>
          </div>
        </div>
    </div>
  );
};
export default Login;
