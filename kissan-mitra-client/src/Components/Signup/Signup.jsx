import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [FormData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email: '',
    password: ''
  })
  const handlechange = (e)=>{
    setFormData( {...FormData , [e.target.name]:[e.target.value]})
  }

  const handlepassword = (e)=>{

  }

  const handleSubmit = ()=>{
    axios.post("http://localhost:5000/api/register",FormData)
  .then((res)=>{
    console.log(res.data);
  })}
  return (
    <div className="Signuppage-container">
      <div className="signuppage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
      </div>
      <div className="signupPage-gridright">
        <div className="signupInsidecontent">
          <div className="signupFormHeader-signuppage">
            <div>Register</div>
            <span>
              or <a href="#">create an account</a>
            </span>
          </div>
          <div className="inputBoxes-signupPage">
            <input
              className="input-signuppage"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handlechange}
            />
            <input
              className="input-signuppage"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handlechange}
            />
            <input
              className="input-signuppage grid-expand-signupPage"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handlechange}
            />
            <input
              className="input-signuppage"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />

            <input
              type="password"
              className="input-signuppage"
              placeholder="Confirm Password"
              onChange={handlepassword}
            />
          </div>
          <div className="signupformbottom-signuppage">
            <div className="checkboxsignuppage">
              <input type="checkbox" name="remember" id="remembersignupPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="remembersignupPage">
                I agree to the terms and condition
              </label>
            </div>
            <button onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;