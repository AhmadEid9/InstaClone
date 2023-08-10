import React, { useState } from "react";
import Input from "../../base/forms/input/input";

import "./style.css"
import axios from "axios";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSignIn = async () => {
      const response  = await axios.post("http://127.0.0.1:8000/api", { email, password }).catch((e) => console.log(e));

      const name = response.data.name;
      const username = response.data.username;
      const useremail = response.data.email;
      const image = response.data.image;
      const token = response.data.token;

      localStorage.setItem('user_name', name);
      localStorage.setItem('user_name', username);
      localStorage.setItem('user_name', useremail);
      localStorage.setItem('user_name', image);
      localStorage.setItem('user_name', token);


    };
  
    return (
      <div className="signin-form">
        <h1>Sign In</h1>
        <Input
          id="email"
          label="Email:"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          id="password"
          label="Password:"
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    );
  };
  
  export default Signin;
  