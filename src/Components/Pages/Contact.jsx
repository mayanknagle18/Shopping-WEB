import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [errorEmailId, setErrorEmailId] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const formHandler = (e) => {
    e.preventDefault();
    if(firstName.length<4 && lastName.length<4 && emailId.length<5 && phoneNumber.length<10 && message.length<10){
      alert("please enter correct characters");
    }
    else{
      alert("all good");
    }
  };

  let name, value;
  const firstNameUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});

    let firstName = event.target.value;
    if(firstName.length<4){
      setErrorFirstName(true);
    }
    else{
      setErrorFirstName(false);
    }
    setFirstName(firstName);
  };

  const lastNameUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});

    let lastName = event.target.value;
    if(lastName.length<4){
      setErrorLastName(true);
    }
    else{
      setErrorLastName(false);
    }
    setLastName(lastName);
  };

  const emailIdUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});

    let email = event.target.value;
    if(email.indexOf("@")<4){
      setErrorEmailId(true);
    }
    else{
      setErrorEmailId(false);
    }
    setEmailId(email);
  };

  const phoneNumberUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});

    let phoneNumber = event.target.value;
    if(phoneNumber.length<10){
      setErrorPhoneNumber(true);
    }
    else{
      setErrorPhoneNumber(false);
    }
    setPhoneNumber(phoneNumber);
  };

  const messageUser = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});

    let message = event.target.value;
    if(message.length<10){
      setErrorMessage(true);
    }
    else{
      setErrorMessage(false);
    }
    setMessage(message);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email, phone, message} = userData;

    const response = await fetch("https://new-project-c031a-default-rtdb.firebaseio.com/contactusdata.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName, lastName, email, phone, message
      }),
    });
    if(response){
      alert("Data Submitted!");
    }
    else{
      alert("Please Fill The Form!");
    }
  };

  return (
    <div>
      <div className="heading-text">
        <h1>Contact Us</h1>
        <h5>Any question or remarks? Just write us a message!</h5>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="left-section">
              <h3>Contact Information</h3>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              <div>
                <span>
                  <i className="bi bi-telephone-fill"></i>
                  <br />
                  <p>+91 8889207722</p>
                </span>

                <span>
                  <i className="bi bi-envelope-fill"></i>
                  <br />
                  <p>web_blog01@gmail.com</p>
                </span>

                <span>
                  <i className="bi bi-geo-alt-fill"></i>
                  <br />
                  <p>5/10, Scheme No. 54, Vijay Nagar, Indore</p>
                </span>
              </div>

              <div className="mt-3">
                <a className="navbar-brand text-light" href="#">
                  <span className="bi bi-instagram m-2"></span>
                  <span className="bi bi-linkedin m-2"></span>
                  <span className="bi bi-facebook m-2"></span>
                  <span className="bi bi-twitter m-2"></span>
                </a>
                 <div className="circle-1">
                 </div>
              </div>

            </div>

          </div>

          <div className="col">
            <form className="row g-3 m-2" method="POST" onSubmit={formHandler}>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={userData.firstName}
                  onChange={firstNameUser}
                />
                {errorFirstName ? <p style={{color: "red"}}>Invalid User First Name!</p> : "" }
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={userData.lastName}
                  onChange={lastNameUser}
                />
              {errorLastName ? <p style={{color: "red"}}>Invalid User Last Name!</p> : "" }
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter Email Id"
                  name="email"
                  value={userData.email}
                  onChange={emailIdUser}
                />
              {errorEmailId ? <p style={{color: "red"}}>Invalid User Email Id!</p> : "" }
              </div>
              <div className="col-md-6">
                <label for="inputPhoneNumber4" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber4"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={userData.phone}
                  onChange={phoneNumberUser}
                />
              {errorPhoneNumber ? <p style={{color: "red"}}>Invalid User Phone Number!</p> : "" }       
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  <h6>Message</h6>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={userData.message}
                  onChange={messageUser}
                ></textarea>
              {errorMessage ? <p style={{color: "red"}}>Invalid User Message!</p> : "" }
              </div>
                <hr />

                <div className="mb-2" style={{textAlign: "right"}}>
                    <button type="button" className="button1" onClick={submitHandler}>Send Message</button>
                </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
